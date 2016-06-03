package com.roona.test;

import org.testng.annotations.Test;

<<<<<<< HEAD
import com.roona.dao.Application;
import com.roona.dao.Complexity;
import com.roona.dao.Role;
import com.roona.dao.Team;
=======
import com.roona.bo.Application;
import com.roona.bo.Complexity;
import com.roona.bo.Role;
import com.roona.bo.Team;
>>>>>>> a2578f52a57d25dace98ff4e95ffd3cc4562a129
import com.roona.dao.ApplicationHome;
import com.roona.dao.ComplexityHome;
import com.roona.dao.RoleHome;
import com.roona.dao.TeamHome;
import com.roona.util.AppConstants;

public class TestApplication {

	

	@Test(enabled = true)
	public void TestAddApplication() {

		ApplicationHome aHome = new ApplicationHome();

		Application application = new Application();
		application.setName("Photoshop");
		aHome.persist(application);

	}

	@Test(enabled = false)
	public void TestAddRole() {

		RoleHome rHome = new RoleHome();
         Role role = new Role(); 
     role.setRoleName(AppConstants.ROLE_ADMIN);
	 rHome.persist(role);
		  role = new Role(); 
         role.setRoleName(AppConstants.ROLE_DEVELOPER);
		 rHome.persist(role);
		  role = new Role(); 
         role.setRoleName(AppConstants.ROLE_USER);
		 rHome.persist(role);

	}

	@Test(enabled = false)
	public void TestAddComplexity() {

		ComplexityHome cHome = new ComplexityHome();
		Complexity complexity = new Complexity();
      
		  complexity.setComplexity(AppConstants.COMPLEXITY_SIMPLE);
		  cHome.persist(complexity);
		  complexity = new Complexity();
         complexity.setComplexity(AppConstants.COMPLEXITY_MEDIUM);
         cHome.persist(complexity);
         complexity = new Complexity();
         complexity.setComplexity(AppConstants.COMPLEXITY_COMPLEX);
         cHome.persist(complexity);
		 
	}

	@Test(enabled = false)
	public void TestAddTeam() {

		TeamHome tHome = new TeamHome();
		Team team = new Team();
		  team.setTeamName(AppConstants.TEAM_DEV);
		tHome.persist(team);
		  team = new Team();
		  team.setTeamName(AppConstants.TEAM_PILOT);
		  tHome.persist(team);
		  team = new Team();
		  team.setTeamName(AppConstants.TEAM_QA);
		tHome.persist(team);
		 
}
}