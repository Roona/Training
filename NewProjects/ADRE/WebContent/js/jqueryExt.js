
/**
 * @author 		:	Roona
 * @Date 		:	June, 8 , 2016
 * @FileName	:	jqueryExt.js
 * @Desc : This Js file contains common functions created by extending jquery
 */

var dialogVariables = {};


var getJqDialog = function(title,content,maxHeight,maxWidth) {


	var $dialog = jQuery('<div></div>').html(content).dialog({
		autoOpen: false,
		modal: true,
		width: "auto", 
		height: "auto",		
		title: title,
		open: function(event, ui) {
				if(maxHeight && !isNaN(maxHeight)){
		          jQuery(this).css({'max-height': maxHeight, 'overflow-y': 'auto'}); 
				}
				if(maxWidth && !isNaN(maxWidth)){
			          jQuery(this).css({'max-width': maxWidth, 'overflow-x': 'auto'}); 
					}
	        }
	});
	
	return $dialog;
};

var openJqDialog = function(element) {
	element.dialog('open');

}

var closeJqDialog = function(element) {
	if(jQuery(element).hasClass('ui-dialog-content')) {
		element.dialog('close');
	}
	element.remove();
}

/*
 * ["disabled", true ],["autoOpen", false],[width: "auto"],["width", 460 ], [height: "auto"],["height", 530]
 * ["buttons", { "Ok": function() { $(this).dialog("close"); } } ],
 * ["buttons", [ { text: "Ok", click: function() { $(this).dialog("close"); } }]],
 * ["closeOnEscape", false ],["closeText", 'hide'],["draggable", false],["dialogClass", "alert"],
 * ["hide", "slide"], ["hide", { effect: 'drop', direction: "down" }],["maxHeight", 400],["maxWidth", 600],
 * ["minHeight", 300], * [ "resizable", false],["show", "slide" ],
 * ["show", { effect: 'drop', direction: "up" }],
 * ["minWidth", 400],["modal", true],
 * ["position", "top" viewport: 'center', 'left', 'right', 'top', 'bottom'. ],
 * [ "stack", false ],[ "title", "Dialog Title"],["zIndex", 3999],
 * */
var setJqDialogOption = function(element,option,value) {
	
	element.dialog("option", option, value);
};

var displayProgress = function (heading) {
	
	 if( heading == null || heading == undefined || !heading || heading == ''){
		 heading = "Loading, please wait..." ;		 
	 } else {
		 heading = ""+heading+"" ;	
	 }
 	
    if(dialogVariables.progressDiag){
	closeJqDialog(dialogVariables.progressDiag);
	}
	dialogVariables.progressDiag =  getJqDialog(heading,"<table width=100%><tr><td align=center><img src='./images/rel_interstitial_loading.gif'/></td></tr></table>",150,360);  
	setJqDialogOption(dialogVariables.progressDiag,"width", 360);
	setJqDialogOption(dialogVariables.progressDiag,"height", 150);
	setJqDialogOption(dialogVariables.progressDiag,"stack", true);
	setJqDialogOption(dialogVariables.progressDiag,"modal", false);
	openJqDialog(dialogVariables.progressDiag);
}

var removeProgress = function () {
	 if(dialogVariables.progressDiag){
			closeJqDialog(dialogVariables.progressDiag);
	}
}

var displayProgress1 = function (heading) {
	displayProgress(heading);
}

var removeProgress1 = function () {
	removeProgress();
}

/*
 * 
 */
function displayMessagePanel(displayContent) {
	var heading = "Information";
    if(dialogVariables.messageDiag){
    	closeJqDialog(dialogVariables.messageDiag);
    	}
    	dialogVariables.messageDiag =  getJqDialog(heading,"<div style='text-align:left;font-size:100%;vertical-align:middle;'>"+displayContent+"</div>",300,360);  
    	setJqDialogOption(dialogVariables.messageDiag,"width", 400);
    	//setJqDialogOption(dialogVariables.messageDiag,"height", 130);
    	setJqDialogOption(dialogVariables.messageDiag,"stack", true);
    	setJqDialogOption(dialogVariables.messageDiag,"modal", true);
    	//setJqDialogOption(dialogVariables.messageDiag,"hide", { effect: 'drop', direction: "down" });
    	//setJqDialogOption(dialogVariables.messageDiag,"show", { effect: 'drop', direction: "up" });
    	//setJqDialogOption(dialogVariables.messageDiag,"dialogClass", "alert");
    	setJqDialogOption(dialogVariables.messageDiag,"buttons", { "Ok": function() { jQuery(this).dialog("close"); } });
    	openJqDialog(dialogVariables.messageDiag);
}

function displayMessagePanelWithHeading(heading,displayContent) {
    if(dialogVariables.messageDiag){
    	closeJqDialog(dialogVariables.messageDiag);
    }
	dialogVariables.messageDiag =  getJqDialog(heading,"<div style='text-align:left;font-size:80%;vertical-align:middle;'>"+displayContent+"</div>",300,360);  
	setJqDialogOption(dialogVariables.messageDiag,"width", "500");
	setJqDialogOption(dialogVariables.messageDiag,"height", "auto");
	setJqDialogOption(dialogVariables.messageDiag,"stack", true);
	setJqDialogOption(dialogVariables.messageDiag,"modal", true);
	//setJqDialogOption(dialogVariables.messageDiag,"hide", { effect: 'drop', direction: "down" });
	//setJqDialogOption(dialogVariables.messageDiag,"show", { effect: 'drop', direction: "up" });
	//setJqDialogOption(dialogVariables.messageDiag,"dialogClass", "alert");
	setJqDialogOption(dialogVariables.messageDiag,"buttons", { "Ok": function() { jQuery(this).dialog("close"); } });
	openJqDialog(dialogVariables.messageDiag);
}





jQuery.fn.ForceNumericOnly =
	function()
	{
	    return this.each(function()
	    {
	    	jQuery(this).keydown(function(e)
	        {
	            var key = e.charCode || e.keyCode || 0;
	            // allow backspace, tab, delete, arrows, numbers and keypad numbers ONLY
	            // home, end, period, and numpad decimal
	            return (
	                key == 8 || 
	                key == 9 ||
	                key == 46 ||
	                key == 110 ||
	                key == 190 ||
	                (key >= 35 && key <= 40) ||
	                (key >= 48 && key <= 57) ||
	                (key >= 96 && key <= 105));
	        });
	    });
	};

	jQuery(function(){
		   jQuery("input.filter").keypress(function(e){
		         var k=e.keyCode || e.which;
		         if(k==13){
		             e.preventDefault();
		         }
		     });
		 });
	
	
	/* Jquery Script for Dropdown menu */ 
	
	 $(document).ready(function() {
	        $( '.dropdown' ).hover(
	            function(){
	                $(this).children('.sub-menu').slideDown(10);
	            },
	            function(){
	                 $(this).children('.sub-menu').slideUp(200); 
	            }
	        );
	       
	    }); // end ready
