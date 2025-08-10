package org.example.implementations;

import org.example.HibernateUtils;
import org.example.Training;
import org.example.interfaces.TrainingRepository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class TrainingRepositoryImpl implements TrainingRepository {
    @Override
    public List<Training> findAll() {
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Training").list();
        }
    }

    @Override
    public Optional<Training> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Training> save(Training entity) {
        return Optional.empty();
    }

    @Override
    public Optional<Training> delete(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<Training> update(Training entity) {
        Transaction transaction=null;
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            transaction=session.beginTransaction();
            session.merge(entity);
            transaction.commit();
            return Optional.of(entity);
        }
        catch(HibernateException e) {
            if(transaction!=null){
                transaction.rollback();
            }
            throw new RuntimeException(e);
        }
    }

    @Override
    public List<Training> findAllIndexed(int page) {
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            return session.createQuery("from Training order by capacity desc ").setFirstResult((page) * 5).setMaxResults(5).list();
        }
    }
}
