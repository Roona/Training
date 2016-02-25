<head>
<%@include file="headerinc.jsp" %>
</head>

<div class="navbar navbar-inverse navbar-twitch" role="navigation">
	<div class="container">
		<div class="navbar-header">
			<a class="navbar-brand" href="#">
				<span class="small-nav"> <span class="logo"> <B> </span> </span>
				<span class="full-nav"> < Bootsnipp > </span>
			</a>
		</div>
		<div class="">
			<ul class="nav navbar-nav">
				<li class="active">
					<a href="#">
						<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Home"> 
							<span class="glyphicon glyphicon-home"></span> 
						</span>
						<span class="full-nav"> Home </span>
					</a>
				</li>
				<li>
					<a href="#about-us">
						<span class="small-nav" data-toggle="tooltip" data-placement="right" title="About Us"> 
							<span class="fa fa-users"></span> 
						</span>
						<span class="full-nav"> About Us </span>
					</a>
				</li>
				<li>
					<a href="#contact-us">
						<span class="small-nav" data-toggle="tooltip" data-placement="right" title="Contact Us"> 
							<span class="glyphicon glyphicon-comment"></span> 
						</span>
						<span class="full-nav"> Contact Us </span>
					</a>
				</li>
			</ul>
		</div><!--/.nav-collapse -->
	</div>
</div>
<button type="button" class="btn btn-default btn-xs navbar-twitch-toggle">
	<span class="glyphicon glyphicon-chevron-right nav-open"></span>		
	<span class="glyphicon glyphicon-chevron-left nav-close"></span>
</button>

<div class="container">
	<div class="row">
		<h2>Bootstrap Navigation meets Twitch Navigation</h2>
        <p>This is just a quick and dirty example I made to show off to a friend. Don't forget to change the theme using the dropdown above.</p>
	</div>
    <div class="row">
        <h2>Navbar Styles</h2>
        <p>Just to show off how easy it is to theme!</p>
        <button type="button" class="btn btn-inverse nav-style-toggle disabled" data-type="inverse"> Inverse</button>
        <button type="button" class="btn btn-default nav-style-toggle" data-type="default"> Default</button>
        <button type="button" class="btn btn-purple nav-style-toggle" data-type="purple"> Purple</button>
    </div>
</div>