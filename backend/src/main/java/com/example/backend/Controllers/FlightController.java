package com.example.backend.Controllers;

import com.example.backend.Entities.Flight;
import com.example.backend.Requests.FlightCreateRequest;
import com.example.backend.Responses.FlightResponse;
import com.example.backend.Services.FlightService;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.UUID;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/flights")
public class FlightController {

    private FlightService flightService;

    public FlightController(FlightService flightService) {
        this.flightService = flightService;
    }

    @GetMapping()
    public List<FlightResponse> getAllFlights(){
        return flightService.getAllFlights();
    }

    @GetMapping(value = "/{flightId}")
    public FlightResponse getOneFlight(@PathVariable UUID flightId) {
        return flightService.getOneFlight(flightId);
    }

    @PostMapping
    public Flight createFlight(@RequestBody FlightCreateRequest newFlightRequest){
        return flightService.saveFlight(newFlightRequest);
    }
}
