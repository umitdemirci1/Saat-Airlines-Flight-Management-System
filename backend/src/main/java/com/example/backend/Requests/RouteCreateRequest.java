package com.example.backend.Requests;

import lombok.Data;

@Data
public class RouteCreateRequest {

    Long departureAirportId;
    Long arrivalAirportId;
    double distanceInMiles;
}
