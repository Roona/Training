<<<<<<< HEAD
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
 * Home object for domain model class ApplicationRequestDetails.
 * @see com.roona.dao.ApplicationRequestDetails
 * @author Hibernate Tools
 */
@Repository
public class ApplicationRequestDetailsHome {

	private static final Log log = LogFactory.getLog(ApplicationRequestDetailsHome.class);
@Autowired
	private  SessionFactory sessionFactory ;

	
	public void persist(ApplicationRequestDetails transientInstance) {
		log.debug("persisting ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(ApplicationRequestDetails instance) {
		log.debug("attaching dirty ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(ApplicationRequestDetails instance) {
		log.debug("attaching clean ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(ApplicationRequestDetails persistentInstance) {
		log.debug("deleting ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public ApplicationRequestDetails merge(ApplicationRequestDetails detachedInstance) {
		log.debug("merging ApplicationRequestDetails instance");
		try {
			ApplicationRequestDetails result = (ApplicationRequestDetails) sessionFactory.getCurrentSession()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public ApplicationRequestDetails findById(java.lang.Integer id) {
		log.debug("getting ApplicationRequestDetails instance with id: " + id);
		try {
			ApplicationRequestDetails instance = (ApplicationRequestDetails) sessionFactory.getCurrentSession()
					.get("com.roona.dao.ApplicationRequestDetails", id);
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

	public List<ApplicationRequestDetails> findByExample(ApplicationRequestDetails instance) {
		log.debug("finding ApplicationRequestDetails instance by example");
		Transaction  transaction= null;
		try {

			Session session= sessionFactory.getCurrentSession();
			transaction=session.beginTransaction();
			List<ApplicationRequestDetails> results = (List<ApplicationRequestDetails>) session.createCriteria("com.roona.dao.ApplicationRequestDetails").add(create(instance))
					.list();
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

import javax.naming.InitialContext;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.LockMode;
import org.hibernate.SessionFactory;

import com.roona.bo.ApplicationRequestDetails;

/**
 * Home object for domain model class ApplicationRequestDetails.
 * @see com.roona.dao.ApplicationRequestDetails
 * @author Hibernate Tools
 */
public class ApplicationRequestDetailsHome {

	private static final Log log = LogFactory.getLog(ApplicationRequestDetailsHome.class);

	private final SessionFactory sessionFactory = getSessionFactory();

	protected SessionFactory getSessionFactory() {
		try {
			return (SessionFactory) new InitialContext().lookup("SessionFactory");
		} catch (Exception e) {
			log.error("Could not locate SessionFactory in JNDI", e);
			throw new IllegalStateException("Could not locate SessionFactory in JNDI");
		}
	}

	public void persist(ApplicationRequestDetails transientInstance) {
		log.debug("persisting ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().persist(transientInstance);
			log.debug("persist successful");
		} catch (RuntimeException re) {
			log.error("persist failed", re);
			throw re;
		}
	}

	public void attachDirty(ApplicationRequestDetails instance) {
		log.debug("attaching dirty ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().saveOrUpdate(instance);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void attachClean(ApplicationRequestDetails instance) {
		log.debug("attaching clean ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().lock(instance, LockMode.NONE);
			log.debug("attach successful");
		} catch (RuntimeException re) {
			log.error("attach failed", re);
			throw re;
		}
	}

	public void delete(ApplicationRequestDetails persistentInstance) {
		log.debug("deleting ApplicationRequestDetails instance");
		try {
			sessionFactory.getCurrentSession().delete(persistentInstance);
			log.debug("delete successful");
		} catch (RuntimeException re) {
			log.error("delete failed", re);
			throw re;
		}
	}

	public ApplicationRequestDetails merge(ApplicationRequestDetails detachedInstance) {
		log.debug("merging ApplicationRequestDetails instance");
		try {
			ApplicationRequestDetails result = (ApplicationRequestDetails) sessionFactory.getCurrentSession()
					.merge(detachedInstance);
			log.debug("merge successful");
			return result;
		} catch (RuntimeException re) {
			log.error("merge failed", re);
			throw re;
		}
	}

	public ApplicationRequestDetails findById(java.lang.Integer id) {
		log.debug("getting ApplicationRequestDetails instance with id: " + id);
		try {
			ApplicationRequestDetails instance = (ApplicationRequestDetails) sessionFactory.getCurrentSession()
					.get("com.roona.dao.ApplicationRequestDetails", id);
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

	public List<ApplicationRequestDetails> findByExample(ApplicationRequestDetails instance) {
		log.debug("finding ApplicationRequestDetails instance by example");
		try {
			List<ApplicationRequestDetails> results = (List<ApplicationRequestDetails>) sessionFactory
					.getCurrentSession().createCriteria("com.roona.dao.ApplicationRequestDetails").add(create(instance))
					.list();
			log.debug("find by example successful, result size: " + results.size());
			return results;
		} catch (RuntimeException re) {
			log.error("find by example failed", re);
			throw re;
		}
	}
}
>>>>>>> a2578f52a57d25dace98ff4e95ffd3cc4562a129
