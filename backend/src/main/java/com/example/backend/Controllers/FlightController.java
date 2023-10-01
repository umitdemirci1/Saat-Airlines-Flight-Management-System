package com.example.backend.Controllers;

import com.example.backend.Entities.Flight;
import com.example.backend.Requests.FlightCreateRequest;
import com.example.backend.Services.FlightService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/flights")
public class FlightController {

    private FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping
    public List<Flight> getAllFlights(){
        return flightService.getAllFlights();
    }

    @PostMapping
    public Flight createFlight(@RequestBody FlightCreateRequest newFlightRequest){
        return flightService.saveFlight(newFlightRequest);
    }
}
