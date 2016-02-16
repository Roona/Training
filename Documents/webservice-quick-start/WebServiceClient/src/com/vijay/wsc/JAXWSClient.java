package com.vijay.wsc;

import com.vijay.wsp.HelloWorld;
import com.vijay.wsp.HelloWorldImplService;

public class JAXWSClient {  
	  
    /** 
     * @author vijay
     */  
    public static void main(String[] args) {  
          
        HelloWorldImplService helloWorldService = new HelloWorldImplService();  
        HelloWorld helloWorld = helloWorldService.getHelloWorldImplPort();  
        System.out.println(helloWorld.helloWorld("vijay"));  
    }  
}  

