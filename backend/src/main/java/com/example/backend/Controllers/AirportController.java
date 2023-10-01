package com.example.backend.Controllers;

import com.example.backend.Entities.Airport;
import com.example.backend.Services.AirportService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/airports")
public class AirportController {
    private AirportService airportService;

    public AirportController(AirportService airportService) {
        this.airportService = airportService;
    }

    @PostMapping
    public Airport saveAirport(@RequestBody Airport newAirport) {
        return airportService.saveAirport(newAirport);
    }
}
