package ru.alina.api.repo;

import org.springframework.data.repository.CrudRepository;
import ru.alina.api.entity.Order;

import java.util.List;

public interface OrderRepo extends CrudRepository<Order, Long> {

    List<Order> findAll();

}
