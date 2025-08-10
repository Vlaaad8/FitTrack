package org.example.interfaces;

import org.example.Training;

import java.util.List;

public interface TrainingRepository extends Repository<Training> {
    public List<Training> findAllIndexed(int page);
}
