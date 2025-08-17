package org.example.repository;

import org.example.Training;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TrainingRepository extends JpaRepository<Training, Integer> {
    @Query("SELECT DISTINCT t.trainer from Training t")
    List<String> getTrainerNames();

    @Query("SELECT SUM(t.capacity) from Training t where t.trainer=:trainer")
    int getTrainerTotalCapacity(@Param("trainer") String trainer);
}
