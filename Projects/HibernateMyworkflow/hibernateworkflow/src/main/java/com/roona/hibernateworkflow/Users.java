package com.roona.hibernateworkflow;

public class Users {
	private int userid;
	private String username;
	private int phoneno;
	private String applicationowner;
	private int aocontactno;

	public Users() {
	}
	
	
	
	public Users(int userid,String uname, int pno, String aowner,int aono) {
		
		this.userid = userid;
		this.username = uname;
		this.phoneno = pno;
		this.applicationowner = aowner;
		this.aocontactno=aono;
	}

	public Users(String uname, int pno, String aowner,int aono) {
		this.username = uname;
		this.phoneno = pno;
		this.applicationowner = aowner;
		this.aocontactno=aono;
	}
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