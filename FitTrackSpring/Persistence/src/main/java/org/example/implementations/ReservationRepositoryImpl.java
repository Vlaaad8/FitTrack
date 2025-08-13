package org.example.implementations;

import org.example.HibernateUtils;
import org.example.Reservation;
import org.example.interfaces.ReservationRepository;
import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ReservationRepositoryImpl implements ReservationRepository {

    @Override
    public List<Reservation> findAll() {
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Reservation",Reservation.class).list();
        }
    }

    @Override
    public Optional<Reservation> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Reservation> save(Reservation entity) {
        Transaction transaction = null;
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.persist(entity);
            transaction.commit();
            return Optional.of(entity);
        }
        catch(Exception e) {
            if(transaction != null) {
                transaction.rollback();
            }
            throw new RuntimeException(e);
        }
    }

    @Override
    public Optional<Reservation> delete(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Reservation> update(Reservation entity) {
        return Optional.empty();
    }

    @Override
    public List<Reservation> findAllByUser(int id) {
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Reservation r where r.user.id = :id", Reservation.class).setParameter("id", id).list();
        }
    }
}
