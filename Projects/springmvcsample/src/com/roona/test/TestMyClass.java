package com.roona.test;

import org.testng.annotations.Test;

public class TestMyClass {
	@Test(enabled=true)
	public void test1()
	{
	MyClass myclass= new MyClass();
	MyClass.userCount++;
	
	//myclass.age = 1002;
	
	//myclass.setName("roona");
	myclass.setAge(1100);
		System.out.println(myclass);
		
		MyClass myclass1= new MyClass();
		MyClass.userCount++;
		myclass1.setName("vijay");
		myclass1.setAge(12);
		System.out.println(myclass1);
		
		
	}

}
