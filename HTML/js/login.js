/*
 * ************************************************************* *
 * Name       : Login                                            *
 * Date       : April 2011                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency : see below                                        *
 * Lib        : 1.7+                                             *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */ 
 
$(document).ready(function($){ 

    /*
	 * This file is used for all login pages, 
	 * this js file includes plugin and custom code,
	 * we have done it this way to keep it all clean,
	 * easy to see what a login page is using
	 * and let the login pages run faster.
	 */

	/**
	 * Name        : eStyleSwitcher 
	 * Description : Styleswitcher plugin
	 * File Name   : e_styleswitcher.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/		
	
	$('#choose-styling').eStyleSwitcher({
		target: '#themesheet',
		dir: 'css/theme/',
		storeStyle: false,
		onSwitch: function(){ }
	})
	
	/**
	 * Name        : eCheckbox
	 * Description : Checkbox replacement and mass toggle solution
	 * File Name   : e_checkbox.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
										
	$('input[type="checkbox"]').eCheckbox();
	
	/**
	 * Name        : eMenu
	 * Description : Drop down menu
	 * File Name   : e_menu.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/	
	
	$("ul#login-lang").eMenu({
		effect: 'slide',
		speed: 200,
		target: 'div.e-menu-sub',
		typeEvent: 'hover',
		activeClass: 'e-menu-active',
		flip:[0]
	});

	/**
	 * Name        : eTabs
	 * Description : Simple plugin to create tabs
	 * File Name   : e_tabs.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	

	$("div#login-content-inner, div#login-inner").eTabs({
		storeTab: true,
		responsive: false,
		callback: function(){ }		
	});
	  
	/**
	 * Name        : eShowPassword
	 * Description : A show password plugin
	 * File Name   : e_showpassword.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$('#field2').eShowPassword({
		trigger: '#show-password',
		exclude: '',
		onSwitch: function(){ }	
	});			
		   
	/**
	 * Name        : eContactForm
	 * Description : Easy contact form with AJAX and validation
	 * File Name   : e_contactform.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$("form#login-form").eContactForm({
		labelError: 'This field is required!',
		labelSuccess: 'Your message has been send successfully!',
		labelFail: 'The form has not been send, please try it again!',
		keydown: true,
		useAjax: false		
	});
	  
	/**
	 * Name        : Tipsy	
	 * Description : Used for a the tooltips.
	 * File Name   : jquery.tipsy.js
	 * Plugin Url  : http://onehackoranother.com/projects/jquery/tipsy/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/
	
	$('.tip-s').tipsy({
		delayIn: 0,      // delay before showing tooltip (ms)
		delayOut: 0,     // delay before hiding tooltip (ms)
		fade: false,     // fade tooltips in/out?
		fallback: '',    // fallback text to use when no tooltip text
		gravity: 's',    // gravity
		html: false,     // is tooltip content HTML?
		live: false,     // use live event support?
		offset: 0,       // pixel offset of tooltip from element
		opacity: 1.0,    // opacity of tooltip
		title: 'title',  // attribute/callback containing tooltip text
		trigger: 'hover' // how tooltip is triggered - hover | focus | manual
	});
	
	// used for the tooltip demo page(misc.html
	$('.tip-nw').tipsy({ gravity: 'nw', opacity: 1.0 }); // nw | n | ne | w | e | sw | s | se
	$('.tip-n').tipsy({ gravity: 'n', opacity: 1.0  }); // nw | n | ne | w | e | sw | s | se
	$('.tip-ne').tipsy({ gravity: 'ne', opacity: 1.0  }); // nw | n | ne | w | e | sw | s | se
	$('.tip-w').tipsy({ gravity: 'w', opacity: 1.0  }); // nw | n | ne | w | e | sw | s | se
	$('.tip-e').tipsy({ gravity: 'e', opacity: 1.0 }); // nw | n | ne | w | e | sw | s | se
	$('.tip-sw').tipsy({ gravity: 'sw', opacity: 1.0  }); // nw | n | ne | w | e | sw | s | se
	$('.tip-se').tipsy({ gravity: 'se', opacity: 1.0  }); // nw | n | ne | w | e | sw | s | se			


    // ********************************
    // CUSTOM CODE
	// ********************************
	
	/**
	 * Name        : Dialogs
	 * Description : Basic dialogs messages
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Mark	 
	**/

	// remove dialog
	$(".dialog, .dialog-big, .dialog-inline, .dialog-big-inline,").click(function() {
		$(this).fadeTo(200, 0.0,function(){
			$(this).slideUp(400)
		});	
		return false;		
	});	
	
	/**
	 * Name        : Styleswitcher
	 * Description : Style, layout and responsive switcher
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : 
	 * Developer   : Mark	 
	**/
	 
	// hide the styleswitcher after a delay
	$('#e-styleswitcher').delay(200).animate({left: '-130px'},200);
	// make the styleswitcher draggable
	$('#e-styleswitcher').draggable({
		axis: "y" , 
		handle: '.e-styleswitcher-arrow'
	});
	// show/hide the styleswitcher with a click
	$('.e-styleswitcher-arrow').click(function(){
		if($('.ss-open').length){
			$('#e-styleswitcher').delay(500).animate({left: '-130px'},200).removeClass('ss-open');
		}else{
			$('#e-styleswitcher').delay(500).animate({left: '0px'},200).addClass('ss-open');
		}
	});
	// choose between different layout sizes
	$('#set-layout-size').change(function(){
		$('body').removeClass('layout_fluid layout_768 layout_960 layout_1024 layout_1200 layout_1600').addClass($(this).val());		
	});
	// choose between a responsive or fixed width
	$('#set-layout-responsive').change(function(){
		$('body').removeClass('layout_responsive').addClass($(this).val());
	});
	// redirect to the theem url
	$('#get-theme').change(function(){
		if($(this).val() == 'yes'){
			window.location = "http://themeforest.net/user/CreativeMilk"
		}
	});
	
	/**
	 * Name        : Cross browser placeholder support
	 * Description : Cross browser placeholder support
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : modernizr.js
	 * Developer   : Mark	 
	**/
	 
	if(!Modernizr.input.placeholder){
	
		$('[placeholder]').focus(function() {
		  var input = $(this);
		  if (input.val() == input.attr('placeholder')) {
			input.val('');
			input.removeClass('placeholder');
		  }
		}).blur(function() {
		  var input = $(this);
		  if (input.val() == '' || input.val() == input.attr('placeholder')) {
			input.addClass('placeholder');
			input.val(input.attr('placeholder'));
		  }
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
		  $(this).find('[placeholder]').each(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
			  input.val('');
			}
		  })
		});
	
	}

});

