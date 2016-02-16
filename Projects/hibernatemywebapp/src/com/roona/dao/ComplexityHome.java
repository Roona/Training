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

import com.roona.bo.Complexity;
import com.roona.util.HibernateAnnotationUtil;

/**
 * Home object for domain model class Complexity.
 * @see com.roona.dao.Complexity
 * @author Hibernate Tools
 */
public class ComplexityHome {
	private static final Log log = LogFactory.getLog(ApplicationHome.class);

	private final SessionFactory sessionFactory = HibernateAnnotationUtil.getSessionFactory();


	
	

	public void persist(Complexity transientInstance) {
		log.debug("persisting Complexity instance");
		Transaction  transaction = null;
		try {
			Session session = sessionFactory.getCurrentSession();
			 transaction = session.beginTransaction();
			session.persist(transientInstance);
			transaction.commit();
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Complexity instance) {
		log.debug("attaching dirty Complexity instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Complexity instance) {
		log.debug("attaching clean Complexity instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Complexity persistentInstance) {
		log.debug("deleting Complexity instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Complexity merge(Complexity detachedInstance) {
		log.debug("merging Complexity instance");
		try {
			Complexity result = (Complexity) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Complexity findById(java.lang.Integer id) {
		log.debug("getting Complexity instance with id: " + id);
		try {
			Complexity instance = (Complexity) sessionFactory.getCurrentSession().get("com.roona.dao.Complexity", id);
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

	public List<Complexity> findByExample(Complexity instance) {
		log.debug("finding Complexity instance by example");
		try {
			List<Complexity> results = (List<Complexity>) sessionFactory.getCurrentSession()
					.createCriteria("com.roona.dao.Complexity").add(create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
