package com.roona.dao;
// Generated Feb 27, 2016 12:24:19 AM by Hibernate Tools 4.3.1.Final

import static org.hibernate.criterion.Example.create;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Home object for domain model class Login.
 * @see com.roona.dao.Login
 * @author Hibernate Tools
 */
@Repository
public class LoginHome {

	private static final Log log = LogFactory.getLog(LoginHome.class);
@Autowired
	private  SessionFactory sessionFactory ;

	

	public void persist(Login transientInstance) {
		log.debug("persisting Login instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Login instance) {
		log.debug("attaching dirty Login instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Login instance) {
		log.debug("attaching clean Login instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Login persistentInstance) {
		log.debug("deleting Login instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Login merge(Login detachedInstance) {
		log.debug("merging Login instance");
		try {
			Login result = (Login) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Login findById(java.lang.Integer id) {
		log.debug("getting Login instance with id: " + id);
		try {
			Login instance = (Login) sessionFactory.getCurrentSession().get("com.roona.dao.Login", id);
			if (instance == null) {
				log.debug("get successful, no instance found");
			} else {
				log.debug("get successful, instance found");
			}
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}

	public List<Login> findByExample(Login instance) {
		log.debug("finding Login instance by example");
		Transaction transaction=null;
		try {
			Session session= sessionFactory.getCurrentSession();
			transaction=session.beginTransaction();
			List<Login> results = (List<Login>) session.createCriteria("com.roona.dao.Login")
					.add(create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			transaction.commit();
			return results;
		} catch (RuntimeException re) {
			transaction.rollback();
			log.error("find by example failed", re);
			throw re;
		}
	}
}
