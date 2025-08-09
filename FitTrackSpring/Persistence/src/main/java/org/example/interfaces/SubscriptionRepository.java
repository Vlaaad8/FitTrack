package org.example.interfaces;

import org.example.Subscription;
import org.example.User;

import java.util.Optional;

public interface SubscriptionRepository extends Repository<Subscription> {
    Optional<Subscription> findCurrentSubscription(int id);
}
