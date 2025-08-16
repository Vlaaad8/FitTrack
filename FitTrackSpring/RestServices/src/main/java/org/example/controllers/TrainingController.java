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

    @GetMapping("trainings")
    public List<Training> getTrainings() {
        return trainingRepository.findAll();
    }

    @PutMapping("trainings/{id}")
    public Training updateTraining(@PathVariable int id, @RequestBody Training training) {
        if (training.getId() == id) {
            return trainingRepository.update(training).orElse(null);
        }
        return null;
    }

    @GetMapping("trainings/pages")
    public int getTrainingPages() {
        return trainingRepository.numberOfPages();
    }
}
