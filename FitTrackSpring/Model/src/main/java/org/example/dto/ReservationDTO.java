package org.example.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.example.entities.Status;
import org.example.entities.Training;
import org.example.entities.User;

import java.util.Date;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class ReservationDTO {
    private int id;
    private User user;
    private Training training;
    private Date date;
    private Status status;

}
