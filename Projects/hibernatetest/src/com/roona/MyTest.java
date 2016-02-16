package com.roona;

public class MyTest {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
ApplicationHome applicationhome = new ApplicationHome();

Applicationstatus applicationstatus = null;

Application transientInstance = new Application();
transientInstance.setVersion("application 1");
transientInstance.setLicensed("true");

applicationhome.persist(transientInstance);






}

}
