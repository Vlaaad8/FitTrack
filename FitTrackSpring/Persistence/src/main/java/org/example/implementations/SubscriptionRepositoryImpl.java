package org.example.implementations;

import org.example.HibernateUtils;
import org.example.Subscription;
import org.example.User;
import org.example.interfaces.SubscriptionRepository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public class SubscriptionRepositoryImpl implements SubscriptionRepository {
    @Override
    public List<Subscription> findAll() {
        return List.of();
    }

    @Override
    public Optional<Subscription> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Subscription> save(Subscription entity) {
        return Optional.empty();
    }

    @Override
    public Optional<Subscription> delete(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Subscription> update(Subscription entity) {
        return Optional.empty();
    }

    @Override
    public Optional<Subscription> findCurrentSubscription(int id) {
        try(Session session= HibernateUtils.getSessionFactory().openSession()){
            Subscription subscription = session.createQuery("from Subscription where user.id=:id and endDate>=:currentDate and startDate<=:currentDate",Subscription.class).setParameter("id",id).setParameter("currentDate", LocalDate.now()).uniqueResult();
            return Optional.ofNullable(subscription);
        }
        catch(HibernateException e){
            throw new HibernateException(e);
        }
    }
}
