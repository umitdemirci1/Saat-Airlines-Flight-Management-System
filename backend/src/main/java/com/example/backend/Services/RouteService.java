package com.example.backend.Services;

import com.example.backend.Entities.Airport;
import com.example.backend.Entities.Route;
import com.example.backend.Repositories.AirportRepository;
import com.example.backend.Repositories.RouteRepository;
import com.example.backend.Requests.RouteCreateRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
public class RouteService {
    private final RouteRepository routeRepository;
    private AirportService airportService;

    public RouteService(RouteRepository routeRepository, AirportService airportService) {
        this.routeRepository = routeRepository;
        this.airportService = airportService;
    }

    public List<Route> getAllRoutes() {
        return routeRepository.findAll();
    }

    public Route saveRoute(RouteCreateRequest newRouteRequest) {
        Airport arrivalAirport = airportService.getAirportById(newRouteRequest.getArrivalAirportId());
        Airport departureAirport = airportService.getAirportById(newRouteRequest.getDepartureAirportId());

        if(arrivalAirport == null || departureAirport == null) {
            System.out.println("Error occured: One Airport is missing!");
            return null;
        }

        Route routeToSave = new Route();
        routeToSave.setArrivalAirport(arrivalAirport);
        routeToSave.setDepartureAirport(departureAirport);
        routeToSave.setDistanceInMiles(newRouteRequest.getDistanceInMiles());
        return routeRepository.save(routeToSave);
    }

    public Route getRouteById(UUID routeId) {
        return routeRepository.findById(routeId).orElse(null);
    }
}
