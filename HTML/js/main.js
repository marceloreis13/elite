/*
 * ************************************************************* *
 * Name       : custom                                           *
 * Date       : March 2011                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.1                                              *
 * Updated    : 19/10/2012                                       *
 * Developer  : Mark                                             *
 * Dependency : see below                                        *
 * Lib        : 1.7+                                             *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */ 
 
$(document).ready(function($){ 

	/**
	* Check for localStorage support.
	**/
	var storage = !!function() {
	  var result,
		  uid = +new Date;
	  try {
		localStorage.setItem(uid, uid);
		result = localStorage.getItem(uid) == uid;
		localStorage.removeItem(uid);
		return result;
	  } catch(e) {}
	}() && localStorage;

	/**
	 * Name        : Zebra styling(tables)
	 * Description : Add a class to every odd row of a table.
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Richard	 
	 */
	 
	$('.basic-table, .clean-table').children('tbody').children('tr:odd').addClass('odd');

	/**
	 * Name        : Toggle Sidebar
	 * Description : Switch the main menu between full or icon.
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Mark	 
	 */

    if(storage){ 	 
		/* Check if the key excited, if so get the value */
		if(localStorage.getItem('stateMenu')){
			var stateMenu = localStorage.getItem('stateMenu');
		}else{
			var stateMenu = 0;	
		}
	}else{
		var stateMenu = 0;	
	}
	
	/* Check the state of the menu in the localstorage and run it */
	if(stateMenu == 1){
		/* Switch the icon */	
		$('#toggle-sidebar').children().addClass('arrow-right-10').removeClass('arrow-left-10');
		/* Add a class to the body */
		$('body').addClass('mainmenu-to-icon');
	}	
	/* Switch sidebar*/		
	$('#toggle-sidebar').click(function(e){		
		if($(this).children('span').hasClass('arrow-left-10')){
			if(storage){ 
				/* Store state menu(hide) */
				localStorage.setItem('stateMenu', 1);
			}
			/* Switch the icon */	
			$(this).children('span').addClass('arrow-right-10').removeClass('arrow-left-10');
			/* Add a special class to the body */
			$('body').addClass('mainmenu-to-icon');
			/* Hide the open search */
			$('aside .elivesearch').hide();
		}else{
			if(storage){ 
				/* Store state menu(hide) */
				localStorage.setItem('stateMenu', 0);
			}
			/* Switch the icon */
			$(this).children('span').addClass('arrow-left-10').removeClass('arrow-right-10');
			/* Remove the class from the body and submenu */
			$('body').removeClass('mainmenu-to-icon');
		}
		$('#content-header .right > .preloader').fadeIn(400).delay(200).fadeOut(400);
		e.preventDefault();	
	});
    /* If switch to a mobile layout remove the mainmenu icon related classes (< 599px)*/
	$(window).resize(function(){
		if($(window).width() < 599){
			$('#toggle-sidebar').children('span').addClass('arrow-left-10').removeClass('arrow-right-10');
			$('.mainmenu-to-icon').removeClass('mainmenu-to-icon');
		}
	});

	/**
	 * Name        : Toggle Main Menu
	 * Description : Switch the main menu between hide or visible(mobile layout)
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Mark	 
	 */
    
	if(storage){ 
		/* Check if the key excited, if so get the value */
		if(localStorage.getItem('stateMenuMobile')){
			var stateMenuMobile = localStorage.getItem('stateMenuMobile');
		}else{
			var stateMenuMobile = 0;	
		}
	}else{
		var stateMenuMobile = 0;	
	}
	/* Check and run on start */	
	if(stateMenuMobile == 1){
		$('#toggle-mainmenu').children('span').addClass('arrow-down-10').removeClass('arrow-up-10');
		$('aside').addClass('mainmenu-hide');
	}	
	/* Run and set on click */	
	$('#toggle-mainmenu').click(function(e){
		if($(this).children('span').hasClass('arrow-down-10')){
			if(storage){ 
				/* Store state menu */
				localStorage.setItem('stateMenuMobile', 0);
			}
			/* Show the mainmenu  */	
			$(this).children('span').addClass('arrow-up-10').removeClass('arrow-down-10');
			$('aside').removeClass('mainmenu-hide');
		}else{
			if(storage){ 
				/* Store state menu */
				localStorage.setItem('stateMenuMobile', 1);
			}
			/* Hide the mainmenu  */	
			$(this).children('span').addClass('arrow-down-10').removeClass('arrow-up-10');
			$('aside').addClass('mainmenu-hide');
		}
		e.preventDefault();	
	});
	
	/**
	 * Name        : Grid Layout Options
	 * Description : Change the layout of the grid (rearrange the widgets)
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Mark	 
	**/
	
	var cmi = $('div#content-main-inner');
	 	 
	// set layout to rows
	$('a.changeto-rows').click(function(){
		cmi.find('section').addClass('g_one');
		cmi.find('div.clear').show();
	});
	// set layout to grid(default)
	$('a.changeto-grid').click(function(){
		cmi.find('section').removeClass('g_one');
		cmi.find('div.clear').show();
	});    
	// set active class and show loader
	$('div#widgets-controls .icon-group a').click(function(){
		if(!$(this).hasClass('selected')){
			$(this).parent('div').children('a').removeClass('selected')
			$(this).addClass('selected');
			$('#widgets-controls .preloader').fadeIn(400).delay(200).fadeOut(400);
		}
	});	
	
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
	 * Name        : Media
	 * Description : Code used for the media page
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Mark  
	**/
	 
    /* Delete the image. */
	$('.media-basic li .delete').click(function(e){
		$(this).parents('li').hide(1, function(){
			$(this).remove();
		});
		e.preventDefault();	
	});

	/**
	 * Name        : Toggle PRE Code
	 * Description : PRE code used for the code examples
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Richard	  
	**/

	$("span.toggle-min").click(function() {
		if($(this).next('pre').is(':hidden')){
			$(this).next('pre').show();
			$(this).removeClass('toggle-plus').addClass('toggle-min');		
		}else{
			$(this).next('pre').hide();
			$(this).removeClass('toggle-min').addClass('toggle-plus');	
		}		
	});	

	/**
	 * Name        : Scroll To Top
	 * Description : Animated scroll to the top (button)
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Richard	 
	**/
	
	// scroll to top button 	 
	$('div#scrolltotop').click(function() {
		$('html, body').animate({scrollTop:0}, 'slow');
		return false;
	});
	// hide/show button after 200px
	$(window).scroll(function () { 
		if( $(window).scrollTop() > 200 ) {
			$('div#scrolltotop').fadeIn(200);
		}else{
			$('div#scrolltotop').fadeOut(200);
		}
	});
	
	/**
	 * Name        : Contact
	 * Description : Contact boxes
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Mark	 
	**/

	$("a.contact-toggle").click(function() {
		$(this).parents('div.contact-box').children('div').slideToggle();
		if($(this).children().hasClass('plus-10')){
			$(this).children().addClass('min-10').removeClass('plus-10');
		}else{
			$(this).children().addClass('plus-10').removeClass('min-10');
		}
		return false;		
	});	
		
	/**
	 * Name        : Empty the local storage
	 * Description : Remove all saved settings
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  :
	 * Developer   : Richard	 
	**/
	 
	$('.empty-local-storage').click(function(){
		var cls = confirm("Clear all localStorage?");
		if(cls && localStorage){
			localStorage.clear();
			alert('Local storage has been cleared!');
		}
	});
	
	/**
	 * Name        : Appointment planner
	 * Description : Ads a visible class to planner and shows the value(s)
	 * Url         :
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : 
	 * Developer   : Mark	 
	**/
	 
	$('div.appointment-planner').on('click', '.e-radio:not(.e-radio-disabled)',function(){
		$(this).parents('div.appointment-planner').find('.ap-active-time').removeClass('ap-active-time');
		$(this).parent('div').addClass('ap-active-time');
		
		// this will copy the value and place it in the placeholders
		var dayTime = $(this).find('input').val().split('|')
		$('.ap-day-show').html(dayTime[1])
		$('.ap-time-show').html(dayTime[0])
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
	
	// Avoid `console` errors in browsers that lack a console.
	if (!(window.console && console.log)) {
		(function() {
			var noop = function() {};
			var methods = ['assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error', 'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log', 'markTimeline', 'profile', 'profileEnd', 'markTimeline', 'table', 'time', 'timeEnd', 'timeStamp', 'trace', 'warn'];
			var length = methods.length;
			var console = window.console = {};
			while (length--) {
				console[methods[length]] = noop;
			}
		}());
	}	
});

