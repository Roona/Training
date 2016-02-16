package com.roona;
// Generated Jan 23, 2016 11:26:56 PM by Hibernate Tools 4.3.1.Final

import javax.ejb.Stateless;
import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;

/**
 * Home object for domain model class Applicationstatus.
 * @see com.roona.Applicationstatus
 * @author Hibernate Tools
 */
@Stateless
public class ApplicationstatusHome {

	private static final Log log = LogFactory.getLog(ApplicationstatusHome.class);

	@PersistenceContext
	private EntityManager entityManager;

	public void persist(Applicationstatus transientInstance) {
		log.debug("persisting Applicationstatus instance");
		try {
			entityManager.persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void remove(Applicationstatus persistentInstance) {
		log.debug("removing Applicationstatus instance");
		try {
			entityManager.remove(persistentInstance);
			log.debug("remove successful");
		} catch (RuntimeException re) {
			log.error("remove failed", re);
			throw re;
		}
	}

	public Applicationstatus merge(Applicationstatus detachedInstance) {
		log.debug("merging Applicationstatus instance");
		try {
			Applicationstatus result = entityManager.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Applicationstatus findById(int id) {
		log.debug("getting Applicationstatus instance with id: " + id);
		try {
			Applicationstatus instance = entityManager.find(Applicationstatus.class, id);
			log.debug("get successful");
			return instance;
		} catch (RuntimeException re) {
			log.error("get failed", re);
			throw re;
		}
	}
}
