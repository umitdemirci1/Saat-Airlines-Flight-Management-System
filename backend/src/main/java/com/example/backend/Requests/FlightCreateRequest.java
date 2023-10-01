package com.example.backend.Requests;

import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class FlightCreateRequest {
    String flightNumber;
    UUID routeId;
    Double price;
    Date departureTime;
    Date arrivalTime;
    Integer capacity;
    String notification;
}
