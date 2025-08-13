package org.example.controllers;


import org.example.Reservation;
import org.example.interfaces.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack")
public class ReservationController {

    @Autowired
    private ReservationRepository reservationRepository;

    @GetMapping("reservations/{id}")
    public List<Reservation> getUserReservations(@PathVariable int id) {
        return reservationRepository.findAllByUser(id);
    }

    @PostMapping("reservations")
    public Reservation addReservation(@RequestBody Reservation reservation) {
        return reservationRepository.save(reservation).orElse(null);
    }
}
