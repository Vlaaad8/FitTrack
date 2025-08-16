package org.example.repository;

import org.example.Subscription;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.Optional;

@Repository
public interface SubscriptionRepository extends JpaRepository<Subscription, Integer> {

    @Query("from Subscription where endDate>=:currentDate and startDate<=:currentDate and user.id=:id")
    Optional<Subscription> findCurrentSubscription(@Param("id") int id, @Param("currentDate") LocalDate currentDate);
}
