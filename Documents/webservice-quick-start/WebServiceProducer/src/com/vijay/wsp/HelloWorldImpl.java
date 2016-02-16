package com.vijay.wsp;

import javax.jws.WebService;

@WebService(endpointInterface="com.vijay.wsp.HelloWorld")  
public class HelloWorldImpl implements HelloWorld{  
	  
	 public String helloWorld(String name) {  
	  return "Hello world from "+name;  
	 }  
	  
	}  
