package com.example.backend.Services;

import com.example.backend.Entities.Airport;
import com.example.backend.Repositories.AirportRepository;
import com.example.backend.Repositories.FlightRepository;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;
import java.util.UUID;

@Service
public class AirportService {

    AirportRepository airportRepository;


    public AirportService(AirportRepository airportRepository) {
        this.airportRepository = airportRepository;
    }

    public Airport saveAirport(Airport newAirport) {
        return airportRepository.save(newAirport);
    }

    public Airport getAirportById(Long id) {
        return airportRepository.findById(id).orElse(null);
    }
}
