package com.example.backend.Entities;

import jakarta.persistence.*;
import lombok.Data;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.UUID;

@Entity
@Table(name = "flights")
@Data
public class Flight {
    public enum FlightStatus {
        SCHEDULED,
        DEPARTED,
        ARRIVED,
        CANCELLED,
        DELAYED
    }

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @Column(nullable = false)
    private String flightNumber;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "route_id", nullable = false)
    private Route route;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = false)
    private Date departureTime;

    @Column(nullable = false)
    private Date arrivalTime;

    @Column(nullable = false)
    private Integer capacity;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private FlightStatus flightStatus = FlightStatus.SCHEDULED;

    @Column(nullable = false)
    private Date createdAt = new Date();

    private Date updatedAt = null;

    @Column(nullable = false)
    private Boolean isRemoved = false;

    @Column(columnDefinition = "text")
    private String notification;
}
