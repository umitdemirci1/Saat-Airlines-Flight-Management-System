package com.example.backend.Services;

import com.example.backend.Entities.Flight;
import com.example.backend.Entities.Route;
import com.example.backend.Repositories.FlightRepository;
import com.example.backend.Requests.FlightCreateRequest;
import com.example.backend.Responses.FlightResponse;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Service
public class FlightService {
    FlightRepository flightRepository;
    RouteService routeService;

    public FlightService(FlightRepository flightRepository, RouteService routeService) {
        this.flightRepository = flightRepository;
        this.routeService = routeService;
    }

    public List<FlightResponse> getAllFlights() {
        List<Flight> list;
        list = flightRepository.findAll();
        return list.stream().map(f -> new FlightResponse(f)).collect(Collectors.toList());
    }

    public FlightResponse getOneFlight(UUID flightId) {
        Flight flight;
        flight = flightRepository.findById(flightId).orElse(null);
        return new FlightResponse(flight);
    }

    public Flight saveFlight(FlightCreateRequest newFlightRequest) {
        Route route = routeService.getRouteById(newFlightRequest.getRouteId());

        if(route == null){
            System.out.println("Error: Route is missing!");
            return null;
        }

        Flight flightToSave = new Flight();
        flightToSave.setFlightNumber(newFlightRequest.getFlightNumber());
        flightToSave.setDepartureTime(newFlightRequest.getDepartureTime());
        flightToSave.setArrivalTime(newFlightRequest.getArrivalTime());
        flightToSave.setCapacity(newFlightRequest.getCapacity());
        flightToSave.setPrice(newFlightRequest.getPrice());
        flightToSave.setRoute(route);
        return flightRepository.save(flightToSave);
    }
}
