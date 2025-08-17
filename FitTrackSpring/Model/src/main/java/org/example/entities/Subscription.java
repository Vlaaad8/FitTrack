package org.example.entities;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;

@Entity
@Getter
@Setter
@Table(name="subcriptions")
@NoArgsConstructor
public class Subscription {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(nullable = false)
    private LocalDate startDate;
    @Column(nullable = false)
    private LocalDate endDate;
    @Column(nullable = false)
    private Type type;
    @ManyToOne
    private User user;


    public Subscription(Type type, User user) {
        this.type = type;
        this.user = user;
        this.startDate = LocalDate.now();
        this.endDate = LocalDate.now().plusDays(30);
    }
    public Subscription(LocalDate startDate, LocalDate endDate, Type type, User user) {
        this.startDate = startDate;
        this.endDate = endDate;
        this.type = type;
        this.user = user;
    }
}
