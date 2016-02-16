package com.roona;
// Generated Jan 26, 2016 12:17:00 AM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Complexity.
 * @see com.roona.Complexity
 * @author Hibernate Tools
 */
@Stateless
public class ComplexityHome {

	private static final Log log = LogFactory.getLog(ComplexityHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Complexity transientInstance) {
		log.debug("persisting Complexity instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Complexity persistentInstance) {
		log.debug("removing Complexity instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Complexity merge(Complexity detachedInstance) {
		log.debug("merging Complexity instance");
		try {
			Complexity result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Complexity findById(int id) {
		log.debug("getting Complexity instance with id: " + id);
		try {
			Complexity instance = entityManager.find(Complexity.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
