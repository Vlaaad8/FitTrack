package org.example.dto;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.example.entities.Type;
import org.example.entities.User;

import java.time.LocalDate;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class SubscriptionDTO {
    private int id;
    private LocalDate startDate;
    private LocalDate endDate;
    private String type;
    private User user;
}
