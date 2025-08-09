package org.example;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalTime;

@Entity
@Table(name="trainings")
@Getter
@Setter
@NoArgsConstructor

public class Training {
    @Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private String title;
    @Column(nullable = false)
    private LocalTime hour;
    @Column(nullable = false)
    private String trainer;
    @Column(nullable = false)
    private String location;
    @Column(nullable = false)
    private int capacity;

    public Training(String title, LocalTime hour, String trainer, String location, int capacity) {
        this.title = title;
        this.hour = hour;
        this.trainer = trainer;
        this.location = location;
        this.capacity = capacity;
    }

}
