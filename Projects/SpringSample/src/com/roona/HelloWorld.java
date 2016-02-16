package com.roona;

public class HelloWorld implements HelloWorldMain {
	String message;
	
	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

	public void display()
	{
		System.out.println("Sample Program"+getMessage());
	}

}
