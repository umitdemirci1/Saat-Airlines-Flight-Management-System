package com.example.backend.Services;

import com.example.backend.Entities.Flight;
import com.example.backend.Entities.Route;
import com.example.backend.Repositories.FlightRepository;
import com.example.backend.Requests.FlightCreateRequest;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class FlightService {
    FlightRepository flightRepository;
    RouteService routeService;

    public FlightService(FlightRepository flightRepository, RouteService routeService) {
        this.flightRepository = flightRepository;
        this.routeService = routeService;
    }

    public List<Flight> getAllFlights() {
        return flightRepository.findAll();
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
