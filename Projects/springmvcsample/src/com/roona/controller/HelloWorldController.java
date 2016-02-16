package com.roona.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.roona.bo.Application;
import com.roona.dao.ApplicationHome;
@Controller 
public class HelloWorldController {
	
	
	 @Autowired
	    private ApplicationHome applicationHome; 
	
	
	@RequestMapping("/hello")  
    public ModelAndView helloWorld() {  
        String message = "HELLO SPRING MVC HOW R U";  
        return new ModelAndView("hellopage", "message", message);  
    }  
	
	@RequestMapping("/roona")  
    public ModelAndView sample() {  
        String message = "sample method";  
       // return new ModelAndView("hellopage", "message", message); 
        

		Application application = new Application();
		application.setName("Photoshop123");
		applicationHome.persist(application);
        
        ModelAndView mv  = new ModelAndView("hellopage");
        
        //mv.setViewName("hellopage");
        
        mv.addObject("message", message);
        
        mv.addObject("info", "my info");
        
        return mv;
        
    } 
}
