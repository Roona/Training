package com.roona.hibernateworkflow;

import java.util.List;
import java.util.Date;
import java.util.Iterator;
import org.hibernate.HibernateException;
import org.hibernate.Session;
import org.hibernate.Transaction;
import org.hibernate.SessionFactory;
import org.hibernate.cfg.Configuration;


import com.roona.hibernateworkflow.Users;

public class ManageUsers {
	private static SessionFactory factory;
	
	public ManageUsers()
	{
		
		try {
			factory = new Configuration().configure().buildSessionFactory();
		} catch (Throwable ex) {
			System.err.println("Failed to create sessionFactory object." + ex);
			throw new ExceptionInInitializerError(ex);
		}
		
	}

	public static void main(String[] args) {
		
		ManageUsers MW = new ManageUsers();
		/* Add few employee records in database */
		Integer uID1 = MW.addUser("Zara", 331, "zara", 331);
		Integer uID2 = MW.addUser("Daisy", 221, "Das", 5000);
		Integer uID3 = MW.addUser("John", 441, "Paul", 10000);

		System.out.println(uID1);
		System.out.println(uID2);
		System.out.println(uID3);
		 MW.listUsers();
		/* Update employee's records */
		MW.updateUser(uID1, 234);
		/* Delete an employee from the database */
		MW.deleteUser(uID2);
		/* List down new list of the employees */
		MW.listUsers();
	}

	/* Method to CREATE an employee in the database */
	public Integer addUser(String uname, int pno, String aowner, int aono) {
		Session session = factory.openSession();
		Transaction tx = null;
		Integer uid = null;
		try {
			tx = session.beginTransaction();
			Users user = new Users(uname, pno, aowner, aono);
			uid = (Integer) session.save(user);
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
		return uid;
	}

	/* Method to READ all the employees */
	public void listUsers() {
		Session session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();

			List<Users> users = session.createQuery("FROM Users").list();
			for (Iterator iterator = users.iterator(); iterator.hasNext();) {
				Users user = (Users) iterator.next();
				System.out.print("First Name: " + user.getUsername());
				// System.out.print(" Last Name: " + user.getLastName());
				// System.out.println(" Salary: " + user.getSalary());
			}
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}

	/* Method to UPDATE salary for an employee */
	public void updateUser(Integer userid, int phoneno) {
		Session session = factory.openSession();
		Transaction tx = null;
		try {
			tx = session.beginTransaction();
			Users user = (Users) session.get(Users.class, userid);
			user.setPhoneno(phoneno);
			session.update(user);
			tx.commit();
		} catch (HibernateException e) {
			if (tx != null)
				tx.rollback();
			e.printStackTrace();
		} finally {
			session.close();
		}
	}

public void deleteUser(Integer userid) {
	Session session = factory.openSession();
	Transaction tx = null;
	try {
		tx = session.beginTransaction();
		Users user = (Users) session.get(Users.class, userid);
		session.delete(user);
		tx.commit();
	} catch (HibernateException e) {
		if (tx != null)
			tx.rollback();
		e.printStackTrace();
	} finally {
		session.close();
	}
}
}

	
