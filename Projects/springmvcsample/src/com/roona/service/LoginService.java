/**
 * 
 */
package com.roona.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.roona.dao.Login;
import com.roona.dao.LoginHome;
import com.roona.dao.User;
import com.roona.dao.UserHome;

/**
 * @author Roona
 * @date :Feb 26, 2016
 * @Version: 1
 * @project: Test
 */
@Service
public class LoginService {
	@Autowired
	UserHome userHome ;
	
	@Autowired
	LoginHome loginHome;
public boolean validateLogin(String username , String password)
{
	Login login = new Login();
	login.setUsername(username);
	login.setPassword(password);
List<Login> loginlist = loginHome.findByExample(login);
if(loginlist.size()==1)
{
	//login.getUsers();
	return true;
}

	/*User user = new User();
	
	List<User> results= userHome.findByExample(user);*/
	
	return false;
	
}
}
