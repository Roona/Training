package com.roona.util;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.AnnotationConfiguration;

import com.roona.bo.Application;
import com.roona.bo.Role;

public class HibernateUtil {
	private static final Log log = LogFactory.getLog(HibernateUtil.class);

	private static  SessionFactory sessionFactory = null;
	
	public static SessionFactory getSessionFactory() {
		
		if(sessionFactory != null){
			
			return sessionFactory;
		}
		
		 try{
			 sessionFactory = new AnnotationConfiguration().
	                   configure().
	                   //addPackage("com.xyz") //add package if used.
	                  // addAnnotatedClass(Role.class).
	                   buildSessionFactory();
			 
			 return sessionFactory;
	      }catch (Throwable ex) { 
	         System.err.println("Failed to create sessionFactory object." + ex);
	         throw new ExceptionInInitializerError(ex); 
	      }
	}
	
	
	
	
	
	
}
