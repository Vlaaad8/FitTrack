package org.example.implementations;

import org.example.CryptUtils;
import org.example.HibernateUtils;
import org.example.User;
import org.example.interfaces.UserRepository;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.mindrot.jbcrypt.BCrypt;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;


@Repository
public class UserRepositoryImpl implements UserRepository {
    @Override
    public Optional<User> login(String username, String password) {
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            User user= session.createQuery("from User where username=:user",User.class).setParameter("user",username).uniqueResult();
            if(user!=null && BCrypt.checkpw(password,user.getPassword())){
                return Optional.of(user);
            }
            return Optional.empty();
        }
        catch(HibernateException e) {
            throw new HibernateException(e);
        }
    }

    @Override
    public List<User> findAll() {
        return List.of();
    }

    @Override
    public Optional<User> getById(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<User> save(User entity) {
        System.out.println(entity);
        Transaction transaction = null;
        String hashPassword= CryptUtils.hashPassword(entity.getPassword());
        entity.setPassword(hashPassword);
        try(Session session= HibernateUtils.getSessionFactory().openSession()) {
            transaction = session.beginTransaction();
            session.persist(entity);
            transaction.commit();
            return Optional.of(entity);
        }
        catch(HibernateException e) {
            if(transaction != null) {
                transaction.rollback();
            }
            throw new HibernateException(e);
        }
    }

    @Override
    public Optional<User> delete(int id) {
        return Optional.empty();
    }

    @Override
    public Optional<User> update(User entity) {
        return Optional.empty();
    }
}
