package com.roona.hibernate;

public class UserBO {
	private int userid;  
	private String username;  
	private int phoneno;  
	private String applicationowner;
	private int aocontactno;
	public int getUserid() {
		return userid;
	}
	public void setUserid(int userid) {
		this.userid = userid;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getPhoneno() {
		return phoneno;
	}
	public void setPhoneno(int phoneno) {
		this.phoneno = phoneno;
	}
	public String getApplicationowner() {
		return applicationowner;
	}
	public void setApplicationowner(String applicationowner) {
		this.applicationowner = applicationowner;
	}
	public int getAocontactno() {
		return aocontactno;
	}
	public void setAocontactno(int aocontactno) {
		this.aocontactno = aocontactno;
	}

}
