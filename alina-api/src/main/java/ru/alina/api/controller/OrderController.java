package ru.alina.api.controller;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.alina.api.dto.OrderUpdate;
import ru.alina.api.entity.Order;
import ru.alina.api.service.OrderService;

import java.util.List;

@Controller
@RequestMapping("order")
@CrossOrigin
public class OrderController {

    private final OrderService orderService;
    @Autowired
    public OrderController(OrderService orderService){
        this.orderService = orderService;
    }

    @GetMapping
    public ResponseEntity<List<Order>> getAllElement() {
        try {
            return ResponseEntity.ok(orderService.getAllShop());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getElement(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(orderService.getShopById(id));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity<Order> createElement(@RequestBody Order order) {
        try {
            return ResponseEntity.ok(orderService.createShop(order));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateElement(@PathVariable Long id, @RequestBody OrderUpdate element) {
        try {
            return ResponseEntity.ok(orderService.updateShop(id, element));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteElement(@PathVariable Long id) {
        try {
            orderService.deleteShop(id);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }


}
