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
 * Home object for domain model class ApplicationRequest.
 * @see com.roona.dao.ApplicationRequest
 * @author Hibernate Tools
 */
@Repository
public class ApplicationRequestHome {

	private static final Log log = LogFactory.getLog(ApplicationRequestHome.class);
@Autowired
	private  SessionFactory sessionFactory ;

	

	public void persist(ApplicationRequest transientInstance) {
		log.debug("persisting ApplicationRequest instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(ApplicationRequest instance) {
		log.debug("attaching dirty ApplicationRequest instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(ApplicationRequest instance) {
		log.debug("attaching clean ApplicationRequest instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(ApplicationRequest persistentInstance) {
		log.debug("deleting ApplicationRequest instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public ApplicationRequest merge(ApplicationRequest detachedInstance) {
		log.debug("merging ApplicationRequest instance");
		try {
			ApplicationRequest result = (ApplicationRequest) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public ApplicationRequest findById(java.lang.Integer id) {
		log.debug("getting ApplicationRequest instance with id: " + id);
		try {
			ApplicationRequest instance = (ApplicationRequest) sessionFactory.getCurrentSession()
					.get("com.roona.dao.ApplicationRequest", id);
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

	public List<ApplicationRequest> findByExample(ApplicationRequest instance) {
		log.debug("finding ApplicationRequest instance by example");
		Transaction transaction=null;
		try {

			Session session= sessionFactory.getCurrentSession();
			transaction=session.beginTransaction();
			List<ApplicationRequest> results = (List<ApplicationRequest>) session
					.createCriteria("com.roona.dao.ApplicationRequest").add(create(instance)).list();
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
