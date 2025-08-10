package org.example.controllers;

import jdk.jfr.Unsigned;
import org.example.Training;
import org.example.interfaces.TrainingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:4200")
@RequestMapping("/FitTrack")
public class TrainingController {

    @Autowired
    private TrainingRepository trainingRepository;

    @GetMapping("trainings/{page}")
    public List<Training> getTrainings(@PathVariable int page) {
        return trainingRepository.findAllIndexed(page);
    }

    @PutMapping("trainings/{id}")
    public Training updateTraining(@PathVariable int id, @RequestBody Training training) {
        if (training.getId() == id) {
            return trainingRepository.update(training).orElse(null);
        }
        return null;
    }
}
