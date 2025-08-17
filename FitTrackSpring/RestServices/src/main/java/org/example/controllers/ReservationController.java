package org.example.controllers;


import org.example.dto.ReservationDTO;
import org.example.entities.Reservation;
import org.example.mappers.ReservationMapper;
import org.example.service.ServiceApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/FitTrack/reservations")
public class ReservationController {

    private final ServiceApplication service;

    public ReservationController(ServiceApplication service) {
        this.service = service;
    }

    @GetMapping("{id}")
    public List<ReservationDTO> getUserReservations(@PathVariable int id) {

        return service.getUserReservations(id).stream().map(ReservationMapper.INSTANCE::reservationToReservationDTO).toList();
    }

    @PostMapping()
    public ReservationDTO addReservation(@RequestBody Reservation reservation) {
        return ReservationMapper.INSTANCE.reservationToReservationDTO(service.saveReservation(reservation));
    }

    @GetMapping()
    public int getTrainerBookingCount(@RequestParam String trainerName) {
        return service.getTrainerBookingCount(trainerName);
    }
}
