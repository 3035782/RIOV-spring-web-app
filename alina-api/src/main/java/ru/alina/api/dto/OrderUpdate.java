package ru.alina.api.dto;

import lombok.Data;

@Data
public class OrderUpdate {

    private Double price;
    private boolean isDelivered;
    private Long deliverId;

}
