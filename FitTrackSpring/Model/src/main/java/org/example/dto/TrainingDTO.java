package org.example.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class TrainingDTO {

    private int id;
    private String title;
    private String hour;
    private String trainer;
    private String location;
    private int capacity;
}
