package com.roona;

import org.hibernate.SessionFactory;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.hibernate.service.ServiceRegistry;

public class TestHibernate {
	private static SessionFactory factory;
	private static ServiceRegistry serviceRegistry;

	public static void main(String[] args) {
		Configuration configuration = new Configuration();
		configuration.configure();
		configuration.addAnnotatedClass(Application.class);
		serviceRegistry = new StandardServiceRegistryBuilder().applySettings(
				configuration.getProperties()).build();
		
		factory = configuration.buildSessionFactory(serviceRegistry);
		TestHibernate testApplication = new TestHibernate();
		//testApplication.persist(3, "JavaCodeGeeks", "q","s");
		
		}
		
	}

