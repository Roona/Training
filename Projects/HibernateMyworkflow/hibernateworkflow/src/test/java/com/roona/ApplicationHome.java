package com.roona;
// Generated Jan 23, 2016 11:26:56 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Application.
 * @see com.roona.Application
 * @author Hibernate Tools
 */
@Stateless
public class ApplicationHome {

	private static final Log log = LogFactory.getLog(ApplicationHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Application transientInstance) {
		log.debug("persisting Application instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Application persistentInstance) {
		log.debug("removing Application instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Application merge(Application detachedInstance) {
		log.debug("merging Application instance");
		try {
			Application result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Application findById(int id) {
		log.debug("getting Application instance with id: " + id);
		try {
			Application instance = entityManager.find(Application.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
