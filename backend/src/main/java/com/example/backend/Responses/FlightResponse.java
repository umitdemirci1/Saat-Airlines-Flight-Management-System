package com.example.backend.Responses;

import com.example.backend.Entities.Flight;
import lombok.Data;

import java.util.Date;
import java.util.UUID;

@Data
public class FlightResponse {
    UUID id;
    String flightNumber;
    String departureAirport;
    String arrivalAirport;
    Date departureTime;
    Date arrivalTime;
    Enum flightStatus;
    Double distanceInMiles;
    Double price;
    Integer capacity;
    Date createdAt;
    Date updatedAt;
    Boolean isRemoved;
    String notification;

    public FlightResponse(Flight entity) {
        this.id = entity.getId();
        this.flightNumber = entity.getFlightNumber();
        this.departureAirport = entity.getRoute().getDepartureAirport().getAirportName();
        this.arrivalAirport = entity.getRoute().getArrivalAirport().getAirportName();
        this.departureTime = entity.getDepartureTime();
        this.arrivalTime = entity.getArrivalTime();
        this.flightStatus = entity.getFlightStatus();
        this.distanceInMiles = entity.getRoute().getDistanceInMiles();
        this.price = entity.getPrice();
        this.capacity = entity.getCapacity();
        this.createdAt = entity.getCreatedAt();
        this.updatedAt = entity.getUpdatedAt();
        this.isRemoved = entity.getIsRemoved();
        this.notification = entity.getNotification();
    }
}
