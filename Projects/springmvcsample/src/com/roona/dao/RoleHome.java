<<<<<<< HEAD
package com.roona.dao;
// Generated Feb 27, 2016 12:24:19 AM by Hibernate Tools 4.3.1.Final

import static org.hibernate.criterion.Example.create;

import java.util.List;

import org.hibernate.Transaction;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**
 * Home object for domain model class Role.
 * @see com.roona.dao.Role
 * @author Hibernate Tools
 */
@Repository
public class RoleHome {

	private static final Log log = LogFactory.getLog(RoleHome.class);
@Autowired
	private  SessionFactory sessionFactory;

	

	public void persist(Role transientInstance) {
		log.debug("persisting Role instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(Role instance) {
		log.debug("attaching dirty Role instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Role instance) {
		log.debug("attaching clean Role instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Role persistentInstance) {
		log.debug("deleting Role instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Role merge(Role detachedInstance) {
		log.debug("merging Role instance");
		try {
			Role result = (Role) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Role findById(java.lang.Integer id) {
		log.debug("getting Role instance with id: " + id);
		try {
			Role instance = (Role) sessionFactory.getCurrentSession().get("com.roona.dao.Role", id);
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

	public List<Role> findByExample(Role instance) {
		log.debug("finding Role instance by example");
		Transaction transaction=null;
		try {

			Session session= sessionFactory.getCurrentSession();
			transaction = session.beginTransaction();
			List<Role> results = (List<Role>) session.createCriteria("com.roona.dao.Role")
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
=======
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

import com.roona.bo.Role;
import com.roona.util.HibernateAnnotationUtil;

/**
 * Home object for domain model class Role.
 * @see com.roona.dao.Role
 * @author Hibernate Tools
 */
public class RoleHome {

	private static final Log log = LogFactory.getLog(RoleHome.class);
	private final SessionFactory sessionFactory = HibernateAnnotationUtil.getSessionFactory();


	public void persist(Role transientInstance) {
		log.debug("persisting Role instance");
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

	public void attachDirty(Role instance) {
		log.debug("attaching dirty Role instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(Role instance) {
		log.debug("attaching clean Role instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(Role persistentInstance) {
		log.debug("deleting Role instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public Role merge(Role detachedInstance) {
		log.debug("merging Role instance");
		try {
			Role result = (Role) sessionFactory.getCurrentSession().merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public Role findById(java.lang.Integer id) {
		log.debug("getting Role instance with id: " + id);
		try {
			Role instance = (Role) sessionFactory.getCurrentSession().get("com.roona.dao.Role", id);
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

	public List<Role> findByExample(Role instance) {
		log.debug("finding Role instance by example");
		try {
			List<Role> results = (List<Role>) sessionFactory.getCurrentSession().createCriteria("com.roona.dao.Role")
					.add(create(instance)).list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
>>>>>>> a2578f52a57d25dace98ff4e95ffd3cc4562a129
