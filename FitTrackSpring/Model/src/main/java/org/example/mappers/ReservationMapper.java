package org.example.mappers;


import org.example.dto.ReservationDTO;
import org.example.entities.Reservation;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper
public interface ReservationMapper {

    ReservationMapper INSTANCE = Mappers.getMapper(ReservationMapper.class);

    Reservation reservationDTOtoReservation(ReservationDTO reservationDTO);

    ReservationDTO reservationToReservationDTO(Reservation reservation);
}
