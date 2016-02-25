


<% String  contextPath = "http://localhost:8080/springmvcsample/";%>


<!-- The jQuery library is a prerequisite for all jqSuite products -->
    <script type="text/ecmascript" src="<%=contextPath %>js/jquery-1.11.0.min.js"></script> 
    <!-- We support more than 40 localizations -->
    <script type="text/ecmascript" src="<%=contextPath %>js/i18n/grid.locale-en.js"></script>
    <!-- This is the Javascript file of jqGrid -->   
    <script type="text/ecmascript" src="<%=contextPath %>js/jquery.jqGrid.min.js"></script>
    <!-- This is the localization file of the grid controlling messages, labels, etc.
    <!-- A link to a jQuery UI ThemeRoller theme, more than 22 built-in and many more custom -->
	<link rel="stylesheet" href="<%=contextPath %>bootstrap-3.3.6/css/bootstrap.min.css"> 
    <!-- The link to the CSS that the grid needs -->
    <link rel="stylesheet" type="text/css" media="screen" href="<%=contextPath %>css/ui.jqgrid-bootstrap.css" />
	<script>
		$.jgrid.defaults.width = 780;
		$.jgrid.defaults.styleUI = 'Bootstrap';
	</script>
	<script src="<%=contextPath %>bootstrap-3.3.6/js/bootstrap.min.js"></script>
    <meta charset="utf-8" />
    <title>jqGrid Loading Data - JSON</title>