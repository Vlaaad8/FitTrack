package org.example;


import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@Entity
@Table(name="reservations")
@Getter
@Setter
@NoArgsConstructor
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToOne
    private User user;
    @ManyToOne
    private Training training;
    @Column
    private Date date;
    @Column
    private Status status;


    public Reservation(User user, Training training, Date date, Status status) {
        this.user = user;
        this.training = training;
        this.date = date;
        this.status = status;
    }
}
