package com.roona.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.roona.service.LoginService;

@Controller
public class LoginController {
	@Autowired
	LoginService loginService;
	@RequestMapping("/login" )
	
	public ModelAndView doLogin()
	{
		loginService.validateLogin(username, password);
		ModelAndView mv= new ModelAndView("homepage");
		return mv;
	}

}
