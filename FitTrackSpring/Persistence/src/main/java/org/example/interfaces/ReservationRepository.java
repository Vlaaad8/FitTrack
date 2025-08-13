package org.example.interfaces;

import org.example.Reservation;

import java.util.List;

public interface ReservationRepository extends Repository<Reservation>{

    List<Reservation> findAllByUser(int id);
}
