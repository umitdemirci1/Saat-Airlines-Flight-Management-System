package com.example.backend.Controllers;

import com.example.backend.Entities.Route;
import com.example.backend.Requests.RouteCreateRequest;
import com.example.backend.Services.RouteService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/routes")
public class RouteController {

    private RouteService routeService;

    public RouteController(RouteService routeService) {
        this.routeService = routeService;
    }

    @GetMapping
    public List<Route> getAllRoutes(){
        return routeService.getAllRoutes();
    }

    @PostMapping
    public Route saveRoute(@RequestBody RouteCreateRequest newRouteRequest){
        return routeService.saveRoute(newRouteRequest);
    }
}
