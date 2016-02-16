package com.vijay.wsp;

import javax.jws.WebMethod;
import javax.jws.WebService;

@WebService 
public interface HelloWorld {

	@WebMethod
	public String helloWorld(String name);

}
