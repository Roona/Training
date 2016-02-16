package com.roona;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

public class EmployerTest {

	public static void main(String[] args)
	{
		ApplicationContext context= new ClassPathXmlApplicationContext("Beans.xml");
		Employer employer= (Employer) context.getBean("employer");
		if(employer != null){
		
		System.out.println(employer.getEmployerName());
		
		employer.setEmployerName("efg");
		System.out.println(employer.getEmployerName());
		
		 employer= (Employer) context.getBean("employer");
		
		
		System.out.println(employer.getEmployerName());
		
		EmployerAdd employerAdd = employer.getEmployerAdd();
		if(employerAdd!= null){
		employerAdd.display();
		} else{
		System.out.println(" error");
		}
		} else{
			System.out.println(" error in bean initialization");
		}
	}

}
