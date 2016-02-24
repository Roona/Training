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

import com.roona.bo.Team;
import com.roona.util.HibernateAnnotationUtil;

/**
 * Home object for domain model class Team.
 * @see com.roona.dao.Team
 * @author Hibernate Tools
 */
public class TeamHome {

	private static final Log log = LogFactory.getLog(ApplicationHome.class);

	private final SessionFactory sessionFactory = HibernateAnnotationUtil.getSessionFactory();


	public void persist(Team transientInstance) {
		log.debug("persisting Application instance");
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

	public void attachDirty(Team instance) {
		log.debug("attaching dirty Team instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Team instance) {
		log.debug("attaching clean Team instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Team persistentInstance) {
		log.debug("deleting Team instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Team merge(Team detachedInstance) {
		log.debug("merging Team instance");
		try {
			Team result = (Team) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Team findById(java.lang.Integer id) {
		log.debug("getting Team instance with id: " + id);
		try {
			Team instance = (Team) sessionFactory.getCurrentSession().get("com.roona.dao.Team", id);
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

	public List<Team> findByExample(Team instance) {
		log.debug("finding Team instance by example");
		try {
			List<Team> results = (List<Team>) sessionFactory.getCurrentSession().createCriteria("com.roona.dao.Team")
					.add(create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
