package ru.alina.api.controller;

import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import ru.alina.api.entity.Deliver;
import ru.alina.api.service.DeliverService;

import java.util.List;

@Controller
@RequestMapping("deliver")
@CrossOrigin
public class DeliverController {

    private final DeliverService deliverService;
    @Autowired
    public DeliverController(DeliverService deliverService){
        this.deliverService = deliverService;
    }

    @GetMapping
    public ResponseEntity<List<Deliver>> getAllElement() {
        try {
            return ResponseEntity.ok(deliverService.getAllElements());
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Deliver> getElement(@PathVariable Long id) {
        try {
            return ResponseEntity.ok(deliverService.getElementById(id));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PostMapping
    public ResponseEntity<Deliver> createElement(@RequestBody Deliver order) {
        try {
            return ResponseEntity.ok(deliverService.createElement(order));
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @PutMapping("/{id}")
    public ResponseEntity<Deliver> updateElement(@PathVariable Long id, @RequestBody Deliver order) {
        try {
            return ResponseEntity.ok(deliverService.updateElement(id, order));
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteElement(@PathVariable Long id) {
        try {
            deliverService.deleteElement(id);
            return ResponseEntity.ok().build();
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build();
        } catch (Exception e) {
            return ResponseEntity.badRequest().build();
        }
    }


}
