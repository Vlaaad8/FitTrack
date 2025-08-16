package org.example.controllers;

import org.example.Subscription;
import org.example.interfaces.SubscriptionRepository;
import org.example.service.ServiceApplication;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.security.Provider;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack")
public class SubscriptionController {

    private final ServiceApplication service;

    public SubscriptionController(ServiceApplication service) {
        this.service = service;
    }

    @GetMapping("/{id}/subscription")
    Subscription getActiveSubscription(@PathVariable int id) {
        return service.getUserSubscription(id);
    }

}
