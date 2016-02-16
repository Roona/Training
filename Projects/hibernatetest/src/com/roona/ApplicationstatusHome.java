package com.roona;
// Generated Jan 25, 2016 11:19:41 PM by Hibernate Tools 4.3.1.Final

import java.util.List;
import javax.naming.InitialContext;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.SessionFactory;
import static org.hibernate.criterion.Example.create;

/**
 * Home object for domain model class Applicationstatus.
 * @see com.roona.Applicationstatus
 * @author Hibernate Tools
 */
public class ApplicationstatusHome {

	private static final Log log = LogFactory.getLog(ApplicationstatusHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(Applicationstatus transientInstance) {
		log.debug("persisting Applicationstatus instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Applicationstatus instance) {
		log.debug("attaching dirty Applicationstatus instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Applicationstatus instance) {
		log.debug("attaching clean Applicationstatus instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Applicationstatus persistentInstance) {
		log.debug("deleting Applicationstatus instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Applicationstatus merge(Applicationstatus detachedInstance) {
		log.debug("merging Applicationstatus instance");
		try {
			Applicationstatus result = (Applicationstatus) sessionFactory.getCurrentSession().merge(detachedInstance);
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
			Applicationstatus instance = (Applicationstatus) sessionFactory.getCurrentSession()
					.get("com.roona.Applicationstatus", id);
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

	public List<Applicationstatus> findByExample(Applicationstatus instance) {
		log.debug("finding Applicationstatus instance by example");
		try {
			List<Applicationstatus> results = (List<Applicationstatus>) sessionFactory.getCurrentSession()
					.createCriteria("com.roona.Applicationstatus").add(create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
