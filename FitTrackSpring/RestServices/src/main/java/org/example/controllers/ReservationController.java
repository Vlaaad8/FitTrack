package org.example.controllers;


import org.example.Reservation;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack/reservations")
public class ReservationController {

   private final ServiceApplication service;

   public ReservationController(ServiceApplication service) {
       this.service = service;
   }

    @GetMapping("{id}")
    public List<Reservation> getUserReservations(@PathVariable int id) {
            return service.getUserReservations(id);
    }

    @PostMapping()
    public Reservation addReservation(@RequestBody Reservation reservation) {
        return service.saveReservation(reservation);
    }
}
