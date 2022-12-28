package ru.alina.api.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    private String producer;
    private String consumer;
    private Double price;
    private boolean isDelivered;

    @ManyToOne
    @JoinColumn(name = "deliver_id")
    private Deliver deliver;

}
