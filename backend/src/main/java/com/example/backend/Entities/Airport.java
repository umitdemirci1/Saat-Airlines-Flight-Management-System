package com.example.backend.Entities;

import jakarta.persistence.*;
import lombok.Data;

import java.util.UUID;

@Data
@Entity
@Table(name = "airports")
public class Airport {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private Long id;

    @Column(nullable = false)
    private String airportCode;

    @Column(nullable = false)
    private String airportName;

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String country;
}
