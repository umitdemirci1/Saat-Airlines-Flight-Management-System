package com.example.backend.Repositories;

import com.example.backend.Entities.Airport;
import com.example.backend.Entities.Route;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;
import java.util.UUID;

public interface AirportRepository extends JpaRepository<Airport, Long> {

}
