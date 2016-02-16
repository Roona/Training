package com.roona.dao;
// Generated Jan 27, 2016 11:26:46 PM by Hibernate Tools 4.3.1.Final

import static org.hibernate.criterion.Example.create;

import java.util.List;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;

import com.roona.bo.Application;
import com.roona.util.HibernateAnnotationUtil;

/**
 * Home object for domain model class Application.
 * @see com.roona.dao.Application
 * @author Hibernate Tools
 */
public class ApplicationHome {

	private static final Log log = LogFactory.getLog(ApplicationHome.class);

	private final SessionFactory sessionFactory = HibernateAnnotationUtil.getSessionFactory();

	

	public void persist(Application transientInstance) {
		log.debug("persisting Application instance");
		Transaction  transaction = null;
		try {
			Session session = sessionFactory.getCurrentSession();
			 transaction = session.beginTransaction();
			session.persist(transientInstance);
			transaction.commit();
			log.debug("persist successful");
		} catch (RuntimeException re) {
			
			transaction.rollback();
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Application instance) {
		log.debug("attaching dirty Application instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Application instance) {
		log.debug("attaching clean Application instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Application persistentInstance) {
		log.debug("deleting Application instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Application merge(Application detachedInstance) {
		log.debug("merging Application instance");
		try {
			Application result = (Application) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Application findById(java.lang.Integer id) {
		log.debug("getting Application instance with id: " + id);
		try {
			Application instance = (Application) sessionFactory.getCurrentSession().get("com.roona.dao.Application",
					id);
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

	public List<Application> findByExample(Application instance) {
		log.debug("finding Application instance by example");
		try {
			List<Application> results = (List<Application>) sessionFactory.getCurrentSession()
					.createCriteria("com.roona.dao.Application").add(create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
