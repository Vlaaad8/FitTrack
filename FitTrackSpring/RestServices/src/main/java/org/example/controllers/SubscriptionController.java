package org.example.controllers;

import org.example.Subscription;
import org.example.interfaces.SubscriptionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack")
public class SubscriptionController {
    @Autowired
    private SubscriptionRepository subscriptionRepository;

    @GetMapping("/{id}/subscription")
    Subscription getActiveSubscription(@PathVariable int id) {
        return subscriptionRepository.findCurrentSubscription(id).orElse(null);
    }
}
