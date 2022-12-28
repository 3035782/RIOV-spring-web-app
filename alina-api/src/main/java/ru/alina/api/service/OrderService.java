package ru.alina.api.service;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import ru.alina.api.dto.OrderUpdate;
import ru.alina.api.entity.Order;
import ru.alina.api.repo.DeliverRepo;
import ru.alina.api.repo.OrderRepo;

import java.util.List;
import java.util.Optional;

@Service
public class OrderService {

    private final OrderRepo orderRepo;
    private final DeliverRepo deliverRepo;

    @Autowired
    public OrderService(OrderRepo orderRepo, DeliverRepo deliverRepo) {
        this.orderRepo = orderRepo;
        this.deliverRepo = deliverRepo;
    }

    public Order createShop(Order order) {
        return orderRepo.save(order);
    }

    public Order getShopById(Long id) throws EntityNotFoundException {
        Optional<Order> orderOptional = orderRepo.findById(id);
        if (orderOptional.isEmpty()) throw new EntityNotFoundException();
        return orderOptional.get();
    }

    public List<Order> getAllShop() {
        return orderRepo.findAll();
    }

    public Order updateShop(Long id, OrderUpdate order) throws EntityNotFoundException {
        Optional<Order> optionalOrder = orderRepo.findById(id);
        if (optionalOrder.isEmpty()) throw new EntityNotFoundException();
        Order dbElement = optionalOrder.get();

        // updating fields
        if (order.getPrice() != null) dbElement.setPrice(order.getPrice());
        dbElement.setDelivered(order.isDelivered());
        if (order.getDeliverId() != null) dbElement.setDeliver(deliverRepo.findById(order.getDeliverId()).orElse(null));

        return orderRepo.save(dbElement);
    }

    public boolean deleteShop(Long id) {
        Optional<Order> optionalOrder = orderRepo.findById(id);
        if (optionalOrder.isEmpty()) throw new EntityNotFoundException();
        Order dbElement = optionalOrder.get();

        orderRepo.delete(dbElement);
        return true;
    }


}
