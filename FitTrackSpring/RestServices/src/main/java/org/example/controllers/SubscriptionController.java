package org.example.controllers;

import org.example.dto.SubscriptionDTO;
import org.example.mappers.SubscriptionMapper;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/FitTrack")
public class SubscriptionController {

    private final ServiceApplication service;

    public SubscriptionController(ServiceApplication service) {
        this.service = service;
    }

    @GetMapping("/{id}/subscription")
    SubscriptionDTO getActiveSubscription(@PathVariable int id) {

        return SubscriptionMapper.INSTANCE.subscriptionToSubscriptionDTO(service.getUserSubscription(id));
    }

}
