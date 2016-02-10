package com.roona.controller;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.View;
@Controller 
public class HelloWorldController {
	@RequestMapping("/hello")  
    public ModelAndView helloWorld() {  
        String message = "HELLO SPRING MVC HOW R U";  
        return new ModelAndView("hellopage", "message", message);  
    }  
	
	@RequestMapping("/roona")  
    public ModelAndView sample() {  
        String message = "sample method";  
       // return new ModelAndView("hellopage", "message", message);  
        
        ModelAndView mv  = new ModelAndView("hellopage");
        
        //mv.setViewName("hellopage");
        
        mv.addObject("message", message);
        
        mv.addObject("info", "my info");
        
        return mv;
        
    } 
}
