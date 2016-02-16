package com.roona;

import org.springframework.beans.factory.BeanFactory;
import org.springframework.beans.factory.xml.XmlBeanFactory;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.Resource;

public class MainApp {
   public static void main(String[] args) {
	   
	   
	   
	   Resource resource=new ClassPathResource("Beans.xml");  
	   BeanFactory factory=new XmlBeanFactory(resource);  
	   
	   
	   //factory.
	   
      ApplicationContext context = 
             new ClassPathXmlApplicationContext("Beans.xml");

      HelloWorld3 obj = (HelloWorld3) context.getBean("helloWorld3");

      
      System.out.println(obj.getMessage());
      
      /*
      OutputHelper helper =  (OutputHelper) context.getBean("OutputHelper");
      helper.write();
      */
	   
	   HelloWorldTest obj1 = (HelloWorldTest) context.getBean("HelloWorldTest");
	   obj1.getHelloWorldMain().display();
	  /* int i= 11; 
	   
	   HelloWorldMain hwm = null;   
	   if(i%2==0)
	   {
		   hwm = new HelloWorld();
	   }
	   else
	   {
    hwm = new HelloWorld2();
	   }
    hwm.display();*/
   
   }
}