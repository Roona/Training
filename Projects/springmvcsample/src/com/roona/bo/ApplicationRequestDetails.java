package com.roona.bo;
// Generated Jan 28, 2016 10:56:05 PM by Hibernate Tools 4.3.1.Final

import java.util.Date;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * ApplicationRequestDetails generated by hbm2java
 */
@Entity
@Table(name = "application_request_details", catalog = "mywebapp")
public class ApplicationRequestDetails implements java.io.Serializable {

	private Integer id;
	private ApplicationRequest applicationRequest;
	private Team team;
	private User user;
	private Date startdate;
	private Date enddate;
	private String status;
	private String comments;

	public ApplicationRequestDetails() {
	}

	public ApplicationRequestDetails(ApplicationRequest applicationRequest) {
		this.applicationRequest = applicationRequest;
	}

	public ApplicationRequestDetails(ApplicationRequest applicationRequest, Team team, User user, Date startdate,
			Date enddate, String status, String comments) {
		this.applicationRequest = applicationRequest;
		this.team = team;
		this.user = user;
		this.startdate = startdate;
		this.enddate = enddate;
		this.status = status;
		this.comments = comments;
	}

	@Id
	@GeneratedValue(strategy = IDENTITY)

	@Column(name = "id", unique = true, nullable = false)
	public Integer getId() {
		return this.id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "applicationrequestid", nullable = false)
	public ApplicationRequest getApplicationRequest() {
		return this.applicationRequest;
	}

	public void setApplicationRequest(ApplicationRequest applicationRequest) {
		this.applicationRequest = applicationRequest;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "teamid")
	public Team getTeam() {
		return this.team;
	}

	public void setTeam(Team team) {
		this.team = team;
	}

	@ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "assignedto")
	public User getUser() {
		return this.user;
	}

	public void setUser(User user) {
		this.user = user;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "startdate", length = 10)
	public Date getStartdate() {
		return this.startdate;
	}

	public void setStartdate(Date startdate) {
		this.startdate = startdate;
	}

	@Temporal(TemporalType.DATE)
	@Column(name = "enddate", length = 10)
	public Date getEnddate() {
		return this.enddate;
	}

	public void setEnddate(Date enddate) {
		this.enddate = enddate;
	}

	@Column(name = "status", length = 45)
	public String getStatus() {
		return this.status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	@Column(name = "comments", length = 200)
	public String getComments() {
		return this.comments;
	}

	public void setComments(String comments) {
		this.comments = comments;
	}

}
