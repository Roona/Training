package com.roona.test;

public class MyClass {
	
	
	static int userCount = 0;
	
	 private int age;
	 private String name;
	
	public int getAge() {
		return age;
	}
	public void setAge(int age)  {
		
		if(age >100 || age <1){
			throw new RuntimeException("Invalid Age ");
		}
		this.age = age;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	@Override
	public String toString() {
		// TODO Auto-generated method stub
		return userCount+" : " + getName()+":"+getAge();
	}
	

}
