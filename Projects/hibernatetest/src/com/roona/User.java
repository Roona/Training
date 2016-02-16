package com.roona;
// Generated Jan 25, 2016 11:19:41 PM by Hibernate Tools 4.3.1.Final

/**
 * User generated by hbm2java
 */
public class User implements java.io.Serializable {

	private Integer id;
	private Role role;
	private String firstname;
	private String lastname;
	private String contactno;
	private String email;

	public User() {
	}

	public User(Role role, String firstname, String lastname, String contactno, String email) {
		this.role = role;
		this.firstname = firstname;
		this.lastname = lastname;
		this.contactno = contactno;
		this.email = email;
	}

	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Role getRole() {
		return this.role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public String getFirstname() {
		return this.firstname;
	}

	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}

	public String getLastname() {
		return this.lastname;
	}

	public void setLastname(String lastname) {
		this.lastname = lastname;
	}

	public String getContactno() {
		return this.contactno;
	}

	public void setContactno(String contactno) {
		this.contactno = contactno;
	}

	public String getEmail() {
		return this.email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

}
