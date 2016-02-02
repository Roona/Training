package com.roona.hibernate;
import javax.jws.soap.SOAPBinding.Use;

import org.hibernate.Session;  
import org.hibernate.SessionFactory;  
import org.hibernate.Transaction;  
import org.hibernate.cfg.Configuration;  
  
public class user {  
	
	
public static void main(String[] args) {  
	
      
    //creating configuration object  
   // Configuration cfg=new Configuration();  
  //  cfg.configure("com\\roona\\hibernate\\hibernate.cfg.xml");//populates the data of the configuration file  
      
    //creating seession factory object  
   // SessionFactory factory= cfg.buildSessionFactory();
      
    //creating session object  
   // Session session=  factory.openSession();  
	
	 Session session = HibernateUtil.getSessionFactory().openSession();
      
    //creating transaction object  
    Transaction t=session.beginTransaction();  
   
    UserBO u1=new UserBO();  
   // u1.setUserid(115);  
    u1.setUsername("Roona");  
    u1.setPhoneno(7736);  
    u1.setApplicationowner("Vasim");  
    u1.setAocontactno(7737); 
      
    session.persist(u1);//persisting the object  
      
    t.commit();//transaction is commited  
    session.close();  
    
   // finalize();
    
    //upsert
      
    System.out.println("successfully saved");  
      
}  
}  
