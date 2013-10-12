/*
 * ************************************************************* *
 * Name       : plugins                                          *
 * Date       : March 2011                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency : see below                                        *
 * Lib        : see plugin                                       *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
   
$(document).ready(function($){
	
    /**
	 * Custom made plugins.
	**/
	
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
	 * Name        : Power Widgets 
	 * Description : Plugin for the widgets
	 * File Name   : e_widgets.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	 
	$('#content').powerWidgets({				
		grid: 'section',
		widgets: '.powerwidget',
		localStorage: true,
		deleteSettingsKey: '#deletesettingskey-options',
		settingsKeyLabel: 'Reset settings?',
		deletePositionKey: '#deletepositionkey-options',
		positionKeyLabel: 'Reset position?',
		sortable: true,
		buttonsHidden: false,
		toggleButton: true,
		toggleClass: 'min-10 plix-10 | plus-10 plix-10',
		toggleSpeed: 200,
		onToggle: function(){},
		deleteButton: false,
		deleteClass: 'trashcan-10',
		deleteSpeed: 200,
		onDelete: function(){},
		editButton: false,
		editPlaceholder: '.powerwidget-editbox',
		editClass: 'pencil-10 | delete-10',
		editSpeed: 200,
		onEdit: function(){},
		fullscreenButton: false,
		fullscreenClass: 'fullscreen-10 | normalscreen-10',	
		fullscreenDiff: 3,		
		onFullscreen: function(){},
		customButton: false,
		customClass: 'folder-10 | next-10',
		customStart: function(){ alert('Hello you, this is a custom button...') },
		customEnd: function(){ alert('bye, till next time...') },
		buttonOrder: '%refresh% %delete% %custom% %edit% %fullscreen% %toggle%',
		opacity: 1.0,
		dragHandle: '> header',
		placeholderClass: 'powerwidget-placeholder',
		indicator: true,
		indicatorTime: 600,
		ajax: true,
		timestampPlaceholder:'.powerwidget-timestamp',
		timestampFormat: 'Last update: %m%/%d%/%y% %h%:%i%:%s%',
		refreshButton: true,
		refreshButtonClass: 'refresh-10 plix-10',
		labelError:'Sorry but there was a error:',
		labelUpdated: 'Last Update:',
		labelRefresh: 'Refresh',
		labelDelete: 'Delete widget:',
		afterLoad: function(){},
		rtl: false	
	}); 	 

	/**
	 * Name        : Power Widgets Panel 
	 * Description : Widgets panel
	 * File Name   : e_widgetspanel.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$('#powerwidgetspanel').powerWidgetsPanel({
		target: '#content',
		widgets: '.powerwidget',
		localStorage: true,
		trigger: '#powerwidget-panel-switch',
		triggerClass:'plus-10 | min-10',
		effectPanel: 'slide',
		speedPanel: 200,
		effectWidget: 'slide',
		speedWidget: 200,
		onToggle: function(){}
	});
	
	/**
	 * Name        : eSelect
	 * Description : Select styling
	 * File Name   : e_select.1.0.min.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$('select').eSelect({
		exclude: '#valueA, #valueB, #set-layout-size, #set-layout-responsive, #choose-styling, #get-theme',
		speed: 200,
		after: function(){ }
	});
	
	/**
	 * Name        : eFile
	 * Description : File input  styling
	 * File Name   : e_file.1.0.min.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/
		
	$('input[type="file"]').eFile({
		label: 'upload',
		exclude: '',
		onUpload: function(){ }	
	});

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
	
	/* all */										
	$('input[type="checkbox"]').eCheckbox();
	
	/**
	 * Name        : eRadio
	 * Description : Radio button replacement solution
	 * File Name   : e_radio.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/		
	
	$('input[type="radio"]').eRadio();

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
	
	/* demo 1 */
	$("#demo-tabs-1").eTabs({
		storeTab: true,
		responsive: true,
		onSwitch: function(){ }		
	});
	/* demo 2 */
	$("#demo-tabs-2").eTabs({
		selected: 3,
		storeTab: true,
		responsive: true,
		onSwitch: function(){ }	
	});
	/* demo 3 */
	$("#demo-tabs-3").eTabs({
		storeTab: true,
		responsive: false,
		onSwitch: function(){ }		
	});
	/* demo 4 */
	$("#demo-tabs-4").eTabs({
		storeTab: true,
		responsive: false,
		onSwitch: function(){ }	
	});			
	/* used in the documentation */		
	$("#doc-tabs").eTabs({
		storeTab: true,
		responsive: true,
		onSwitch: function(){ }	
	});
	/* e-block */
	$("#e-block-etabs1, #e-block-etabs2").eTabs({
		storeTab: true,
		responsive: false,
		onSwitch: function(){ }	
	});
	/* used in the modal demo */		
	$("#dialog-5").eTabs({
		storeTab: true,
		responsive: false,
		onSwitch: function(){ }	
	});

	/**
	 * Name        : eMainMenu
	 * Description : Main drop down menu
	 * File Name   : e_mainmenu.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/	
	 	 	
	$('nav#main-menu').eMainMenu({
		activeClass: 'sub-page-active',
		closeClass: 'min-10',
		openClass: 'plus-10',
		speed: 400
	}); 
	
	/**
	 * Name        : eTour
	 * Description : Plugin for a tour
	 * File Name   : e_tour.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
    // coming soon 
		 
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
	 
	/* Located in the header */ 	 
	$("ul#header-menu").eMenu({
		effect: 'fade',
		speed: 100,
		target: '.e-menu-sub',
		typeEvent: 'hover',
		activeClass: 'e-menu-active',
		flip:[0,1,2]
	});
	/* Located in the header of the page(next to the breadcrumbs) */ 
	$("ul#page-actions").eMenu({
		effect: 'slide',
		speed: 200,
		target: '.e-menu-sub',
		typeEvent: 'hover',
		activeClass: 'e-menu-active',
		flip:[0]
	});		
	/* Demo 1 */
	$("ul#demo-menu-1").eMenu({
		effect: 'slide',
		speed: 200,
		target: '.e-menu-sub',
		typeEvent: 'click',
		activeClass: 'e-menu-active',
		flip:[]
	});
	/* Demo 2 */
	$("ul#demo-menu-2").eMenu({
		effect: 'fade',
		speed: 200,
		target: '.e-menu-sub',
		typeEvent: 'hover',
		activeClass: 'e-menu-active',
		flip:[0,1,2,3]
	});
	/* Table example 2 */
	$("ul.table-splitmenu").eMenu({
		effect: 'fade',
		speed: 200,
		target: '.e-menu-sub',
		typeEvent: 'hover',
		activeClass: 'e-menu-active',
		flip:[0]
	});
	
	/**
	 * Name        : eCcrollbar
	 * Description : Scrollbar plugin
	 * File Name   : e_scrollbar.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	

	$('.input-scroll-box').eScrollbar();

	/**
	 * Name        : eCountdown
	 * Description : Countdown plugin
	 * File Name   : e_countdown.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	/* Basic */
	$('#countdown-1').eCountdown({
		targetDate: '07/31/2014 5:01 AM',
		displayFormat: '%D% Days, %H% Hours, %M% Minutes, %S% Seconds.',
		liveTime: true,
		showZero: true,
		callback:function(){}
    });
	
	/* Custom order */
	$('#countdown-2').eCountdown({
		targetDate: '10/31/2012 5:01 AM',
		displayFormat: '%H% Hours, %M% Minutes, %S% Seconds (%D% Days)',
		liveTime: true,
		showZero: true,
		callback:function(){}
    });
	
	/* Table examples */
	$('#project-cndw-1').eCountdown({
		targetDate: '01/31/2013 5:01 AM',
		displayFormat: '%D% Days, %H% Hours, %M% Minutes, %S% Seconds.',
		liveTime: true,
		showZero: true,
		callback:function(){}
    });
	$('#project-cndw-2').eCountdown({
		targetDate: '10/31/2012 1:23 AM',
		displayFormat: '%D% Days, %H% Hours, %M% Minutes',
		liveTime: true,
		showZero: true,
		callback:function(){}
    });	
	$('#project-cndw-3').eCountdown({
		targetDate: '12/22/2012 9:08 AM',
		displayFormat: '%D% Days, %H% Hours, %M% Minutes',
		liveTime: true,
		showZero: true,
		callback:function(){}
    });
	$('#project-cndw-4').eCountdown({
		targetDate: '02/11/2013 10:55 PM',
		displayFormat: '%D% Days, %H% Hours, %M% Minutes',
		liveTime: true,
		showZero: true,
		callback:function(){}
    });
	$('#project-cndw-5').eCountdown({
		targetDate: '12/31/2012 9:09 PM',
		displayFormat: '%H% Hours, %M% Minutes, %S% Seconds.',
		liveTime: true,
		showZero: true,
		callback:function(){}
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
		
	$('#form-validation').eContactForm({
		labelError: 'This field is required!',
		labelSuccess: 'Your message has been send successfully!',
		labelFail: 'The form has not been send, please try it again!',
		keydown: true,
		useAjax: true,
		before: function(){ },
		after: function(){ }		
	});

	/**
	 * Name        : eTextareaLimiter
	 * Description : Textarea limiter solution
	 * File Name   : e_textarealimiter.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/		
	
	$("#textarea-limiter").eTextareaLimiter({
		maximum: 250,			
		savety: true	
	});
	
	/**
	 * Name        : eNotify
	 * Description : Notification plugin
	 * File Name   : e_notify.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	/* Sticky */
	$('a#open-growl-1').click(function(e){
		 $.e_notify.growl({
			 title: 'Sticky growl',
			 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel arcu est. Suspendisse laoreet nisl nec magna feugiat.',
			 image: 'images/growl-1.jpg',
			 position: 'right-top',
			 delay: 0,
			 time: 2500,
			 speed: 400,
			 effect: 'fade',
			 sticky: true,
			 closable: true,
			 maxOpen:3,
			 className:'',
			 onShow: function(){},
			 onHide: function(){}
		});	
		e.preventDefault();	
	});
	/* Auto hide */
	$('a#open-growl-2').click(function(e){
		 $.e_notify.growl({
			 title: 'Sticky with auto hide',
			 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel arcu est. Suspendisse laoreet nisl.',
			 image: 'images/growl-2.jpg',
			 position: 'right-bottom',
			 delay: 0,
			 time: 5000,
			 speed: 500,
			 effect: 'slidein',
			 sticky: false,
			 closable: false,
			 maxOpen:3,
			 className:'',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});
	/* Only text */
	$('a#open-growl-3').click(function(e){
		 $.e_notify.growl({
			 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel arcu est. Suspendisse laoreet nisl.',
			 position: 'left-top',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slidein',
			 sticky: true,
			 closable: true,
			 maxOpen:3,
			 className:'',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});	
	/* Max 6 open */
	$('a#open-growl-4').click(function(e){
		 $.e_notify.growl({
			 title: 'Sticky with max 6 open',
			 position: 'left-bottom',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slidein',
			 sticky: true,
			 closable: true,
			 maxOpen:6,
			 className:'',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});	
	/* Custom class*/
	$('a#open-growl-5').click(function(e){
		 $.e_notify.growl({
			 title: 'Growl with custom class',
			 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel arcu est. Suspendisse laoreet nisl nec magna feugiat.',
			 image: 'images/growl-2.jpg',
			 position: 'right-top',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slidein',
			 sticky: true,
			 closable: true,
			 maxOpen:3,
			 className:'growl-white',
			 onShow: function(){},
			 onHide: function(){}
		});	
		e.preventDefault();	
	});
	/* Callbacks */
	$('a#open-growl-6').click(function(e){
		 $.e_notify.growl({
			 title: 'Sticky with callbacks',
			 text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vel arcu est. Suspendisse laoreet nisl.',
			 position: 'left-bottom',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slidein',
			 sticky: true,
			 closable: true,
			 maxOpen:3,
			 className:'',
			 onShow: function(){alert('Callback on show...')},
			 onHide: function(){alert('Callback on hide...')}
		});
		e.preventDefault();	
	});	
	/* Remove all */
	$('a#open-growl-7').click(function(e){
		 $.e_notify.clear({
			 type: 'growl',
			 beforeClear: function(){alert('You can use a callback before removing...')},
			 afterClear: function(){alert('You can use a callback after removing...')}
		});
		e.preventDefault();	
	});	

    /* LOADER */
	
    /* Basic */
	$('a#open-loader-1').click(function(e){
		$.e_notify.loader({
			 image: 'images/loaders/type2/light/32.gif',
			 position: 'center',
			 imageSize: '32 | 32',
			 delay: 0,
			 time: 1200,
			 speed: 100,
			 opacity: 0.5,
			 onShow: function(){},
			 onHide: function(){}
		});	
		e.preventDefault();	
	});	
	/* No opacity $ other position */		
	$('a#open-loader-2').click(function(e){
		$.e_notify.loader({
			 image: 'images/loaders/type4/light/56.gif',
			 position: 'right-bottom',
			 imageSize: '56 | 19',
			 delay: 0,
			 time: 2000,
			 speed: 200,
			 opacity: 0.0,
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();		
	});	
    /* Callbacks */
	$('a#open-loader-3').click(function(e){
		$.e_notify.loader({
			 image: 'images/loaders/type2/light/32.gif',
			 position: 'center',
			 delay: 0,
			 time: 2000,
			 speed: 200,
			 opacity: 0.5,
			 onShow: function(){alert('Callback on show...')},
			 onHide: function(){alert('Callback on hide...')}
		});
		e.preventDefault();		
	});	

	/* NOTIFICATION */

	/* Top */
	$('a#open-notification-1').click(function(e){
		 $.e_notify.notification({
			 text: 'This notification message, has the custom class called "notification-warning".',
			 position: 'top',
			 target: '',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slide',
			 sticky: true,
			 closable: true,
			 className:'notification-warning',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});	
	/* Bottom */
	$('a#open-notification-2').click(function(e){
		 $.e_notify.notification({
			 text: 'This notification message, has the custom class called "notification-info".',
			 position: 'bottom',
			 target: ' ',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slide',
			 sticky: true,
			 closable: true,
			 className:'notification-info',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});			
	/* Target */
	$('a#open-notification-3').click(function(e){
		 $.e_notify.notification({
			 text: '<img src="images/icons/dialogs/plus-16.png" alt=""/> Yes you can add a notification to a target!',
			 position: 'top',
			 target: '#widget2 > div',
			 delay: 0,
			 time: 2500,
			 speed: 500,
			 effect: 'slide',
			 sticky: true,
			 closable: true,
			 className:'notification-success-widget',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});	
	/* Auto hide */
	$('a#open-notification-4').click(function(e){
		 $.e_notify.notification({
			 text: 'This notification message, has the custom class called "notification-error". This message will hide after 5000 ms.',
			 position: 'top',
			 target: '',
			 delay: 0,
			 time: 5000,
			 speed: 500,
			 effect: 'slide',
			 sticky: false,
			 closable: true,
			 className:'notification-error',
			 onShow: function(){},
			 onHide: function(){}
		});
		e.preventDefault();	
	});	
	/* Callbacks */
	$('a#open-notification-5').click(function(e){
		 $.e_notify.notification({
			 text: 'This notification message, has the custom class called "notification-error". This mesaage will hide after 5000 ms.',
			 position: 'top',
			 target: '',
			 delay: 0,
			 time: 2000,
			 speed: 500,
			 effect: 'slide',
			 sticky: false,
			 closable: true,
			 className:'notification-error',
			 onShow: function(){alert('Callback on show...')},
			 onHide: function(){alert('Callback on hide...')}
		});
		e.preventDefault();	
	});	
	/* Remove all */
	$('a#open-notification-6').click(function(e){
		 $.e_notify.clear({
			 type: 'notification',
			 beforeClear: function(){alert('You can use a callback before removing...')},
			 afterClear: function(){alert('You can use a callback after removing...')}
		});
		e.preventDefault();	
	});	
     
	/**
	 * Name        : eLiveSearch
	 * Description : Live search plugin, no need of a DB
	 * File Name   : e_livesearch.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	/* Main search */
	$('form#mainsearch').eLiveSearch({
		file: 'ajax/mainsearch-results.php',
		target: 'aside',
		maxResults: 3,
		order: 'random',
		live: true,
		minChar: 3,
		liveDelay: 1000,
		effect: 'slide',
		speed: 400,
		closeClass: 'close-search',
		param1: '',
		param2: '',
		param3: '',
		param4: '',
		param5: '',
		param6: '',
		param7: '',
		param8: '',
		param9: '',
		param10: '',
		afterLoad: function(){ }
	});
	
	/* Advanced search */
	$('form#search').eLiveSearch({
		file: 'ajax/search-results.php',
		target: '#advanced-search-results',
		maxResults: 5,
		order: 'random',
		live: false,
		minChar: 3,
		liveDelay: 1000,
		effect: 'slide',
		speed: 400,
		closeClass: '',
		param1: '#search-searchin',
		param2: '#search-show',
		param3: '#search-order',
		param4: '',
		param5: '',
		param6: '',
		param7: '',
		param8: '',
		param9: '',
		param10: '',
		afterLoad: function(){ }
	});

	/**
	 * Name        : eGallery
	 * Description : Simple gallery with filters
	 * File Name   : e_gallery.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$('#e-gallery').eGallery({
		draggable: true,
		clearTrash: true,
		opacityFilter: 0.3,
		activeClass: 'active',
		labelButton: 'Empty',
		labelTrash: 'Dragg to delete'	
	});	
		 
	/**
	 * Name        : eProgressbar
	 * Description : Progress Bar solution
	 * File Name   : e_progressbar.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/

	/* Basic */
	$("#progressbar-demo-1").eProgressbar({
		animate: false,
		easing: '',
		loop: true,
		delay: 400,
		showTotal: true,
		speed: 2000,
		after: function(){}	
	});	
	/* Animated */
	$("#progressbar-demo-2").eProgressbar({
		animate: true,
		easing: '',
		loop: true,
		delay: 400,
		showTotal: true,
		speed: 2000,
		after: function(){}	
	});	
	/* Animated loop 3*/
	$("#progressbar-demo-3").eProgressbar({
		animate: true,
		easing: '',
		loop: true,
		delay: 400,
		showTotal: true,
		speed: 2000,
		after: function(){}	
	});	
	/* Small size */
	$("#progressbar-demo-4").eProgressbar({
		animate: false,
		easing: '',
		loop: true,
		delay: 400,
		showTotal: true,
		speed: 2000,
		after: function(){}	
	});
	/* Big size */
	$("#progressbar-demo-6").eProgressbar({
		animate: false,
		easing: '',
		loop: true,
		delay: 400,
		showTotal: true,
		speed: 2000,
		after: function(){}	
	});
	
    /* Table example 2 */
	$("#tableexample2").eProgressbar({
		animate: true,
		easing: '',
		loop: true,
		delay: 400,
		showTotal: false,
		speed: 2000,
		after: function(){}	
	});	
		
	/**
	 * Name        : eResponsiveTable
	 * Description : Simple responsive table solution
	 * File Name   : e_responsivetable.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$('#basic-table, #tableexample1, #tableexample2, #tableexample3').eResponsiveTable({
		className: 'rt-'
	});
	
	/**
	 * Name        : eClone
	 * Description : Cloning tool
	 * File Name   : e_clone.1.0.min.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$(".clone-range").eClone({
		target: '.g_1',
		trigger: '.clone-trigger',
		excludeClass: 'not-clone',
		effect: 'slide',
		speed: 200,
		before: function(){ },
		after: function(){ }
	});
	
	/**
	 * Name        : eInputExpand
	 * Description : Input to textarea popup box
	 * File Name   : e_inputexpand.1.0.min.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	

	$('#inputexpand').eInputExpand({
		width: 320,
		height: 220,
		labelSubmit: 'Insert',
		labelCancel: 'Cancel',
		opacity: 0.5,
		escKey: true,
		before: function(){ },
		after: function(){ }
	});
	
	/**
	 * Name        : eChainedInputs 
	 * Description : Plugin for chaining of inputs
	 * File Name   : e_chainedinputs.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$('form#form-validation, form#form').eChainedInputs({
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
		
	$('#passwordfield').eShowPassword({
		trigger: '#show-password',
		exclude: '',
		onSwitch: function(){ }	
	});	
	
	/**
	 * Name        : eOsKeyboard
	 * Description : A on screen keyboard solution
	 * File Name   : e_oskeyboard.js
	 * Plugin Url  :  
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
		
	$('#onscreen-keyboard').eOsKeyboard({
		title:'OS Keyboard',
		trigger: 'icon',
		draggable: true,
		posY: 20,
		posX: 0,
		zIndex: 1000
	});
		
    // ********************************
    // THIRD PARTY PLUGINS 
	// ********************************

	/**
	 * Name        : jQuery UI dialog
	 * Description : jQuery UI dialog boxes
	 * File Name   : jquery-ui-1.8.18.min.js
	 * Plugin Url  : http://jqueryui.com/demos/dialog/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/	
	
	/* Main page dialog */
	$("#main-page-dialog").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 500,
		resizable: false,
		modal: true,
		resizable: false,
		buttons:{
			Ok: function() {
				$(this).dialog('close');
				}
		}
	});
	$('#open-main-dialog').click(function() {
		$('#main-page-dialog').dialog('open');
		return false;
	});
    /* Basic dialog */
	$("#dialog-1").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 340,
		resizable: false
	});
	$('#open-dialog-1').click(function() {
		$('#dialog-1').dialog('open');
		return false;
	});
    /* Modal dialog */
	$("#dialog-2").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 340,
		modal: true,
		resizable: false,
		buttons:{
			Ok: function() {
				$(this).dialog('close');
				}
		}
	});
	$('#open-dialog-2').click(function() {
		$('#dialog-2').dialog('open');
		return false;
	});			
    /* Modal confirmation */
	$("#dialog-3").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 340,
		modal: true,
		resizable: false,
		buttons: {
			"Delete all items":function(){
				$(this).dialog("close");
			},
			Cancel: function() {
				$(this).dialog("close");
			}
		}
	});
	$('#open-dialog-3').click(function() {
		$('#dialog-3').dialog('open');
		return false;
	});	
    /* Modal with a form */
	$("#dialog-4").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 380,
		modal: true,
		resizable: false
	});
	$('#open-dialog-4').click(function() {
		$('#dialog-4').dialog('open');
		return false;
	});	
    /* Modal with etabs */
	$("#dialog-5").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 380,
		modal: true,
		resizable: false
	});
	$('#open-dialog-5').click(function() {
		$('#dialog-5').dialog('open');
		return false;
	});	
    /* Modal used in the clean table */
	$("#add-user").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 380,
		modal: true,
		resizable: false
	});
	$('#open-add-user').click(function() {
		$('#add-user').dialog('open');
		return false;
	});	
    /* Modal used in the table example 1 */
	$("#add-image").dialog({
		autoOpen: false,//remove this and the click to aut open
		bgiframe: true,
		width: 380,
		modal: true,
		resizable: false
	});
	$('.open-add-image').click(function() {
		$('#add-image').dialog('open');
		return false;
	});	
	
	/**
	 * Name        : Colorbox
	 * Description : jQuery lightbox
	 * File Name   : jquery.colorbox.min.js
	 * Plugin Url  : http://www.jacklmoore.com/colorbox
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
	$(".group1").colorbox({rel:'group1'});
	$(".group2").colorbox({rel:'group2'});
	$(".group3").colorbox({rel:'group3'});

	/**
	 * Name        : DataTable
	 * Description : jQuery data table
	 * File Name   : jquery.dataTables.min.js
	 * Plugin Url  : http://datatables.net/index
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
    $('#datatable-1').dataTable( {
		"bJQueryUI": true
		//"sPaginationType": "full_numbers"
	});

	/**
	 * Name        : Elrte
	 * Description : WYSIWYG
	 * File Name   : elrte.min.js
	 * Plugin Url  : http://elrte.org/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	
    if($('#wysiwyg').length){
		$('#wysiwyg').elrte({
			cssClass : 'el-rte',
			// lang     : 'en',
			toolbar  : 'complete',
			height   : 250
			//cssfiles: 'css/theme/darkblue.css'		
		});
	}
	
	/**
	 * Name        : jWYSIWYGHTML5
	 * Description : HTML5 wysiwyg editor
	 * File Name   : wysihtml5-0.3.0.js
	 * Plugin Url  : https://github.com/xing/wysihtml5
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	if($('#wysihtml5-textarea').length){
		var editor = new wysihtml5.Editor("wysihtml5-textarea", {
			toolbar:      "toolbar",
			stylesheets:  "css/wysiwyghtml5.css",
			parserRules:  wysihtml5ParserRules
		});	
	}
			
	/**
	 * Name        : jQueryUI Accordion
	 * Description : Accordion
	 * File Name   : jquery-ui-1.8.18.min.js
	 * Plugin Url  : http://jqueryui.com/demos/accordion/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/		
	
	/* Default */
	$("#accordion").accordion({
		autoHeight: false,
		navigation: true
	});
	/* Fill space */
	$("#accordion-fillspace").accordion({
		fillSpace: true
	});
	/* Fill space */
	$("#accordion-collapsible").accordion({
		collapsible: true
	});
	/* Sortable */
	$("#accordion-sortable").accordion({
		header: "> div > h3"
	}).sortable({
		axis: "y",
		handle: "h3",
		stop: function() {
			stop = true;
		}
	});
		
	/**
	 * Name        : jQueryUI Sortable
	 * Description : Sortable items
	 * File Name   : jquery-ui-1.8.18.min.js
	 * Plugin Url  : http://jqueryui.com/demos/accordion/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark 
	**/	
	 
	$("ul.sortable-list").sortable({
		items: 'li',
		connectWith: 'ul.sortable-list',
		placeholder: 'list-highlight',
		cursor: 'move',
		revert: true, 
		opacity: 1.0,
		delay: 200,
		handle: '.handle',
		zIndex: 10000,
		forcePlaceholderSize: true,
		forceHelperSize: true
	});	

	/**
	 * Name        : jQuery UI sliders	
	 * Description : jQuery UI sliders.
	 * File Name   : jquery-ui-1.8.18.min.js
	 * Plugin Url  : http://jqueryui.com/demos/slider/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	 
    /* Basic */
	$("#basic-ui-slider").slider();
	/* Range maximum*/
	$("#slider-range-max").slider({
			range: "max",
			min: 1,
			max: 10,
			value: 2,
			slide: function(event, ui){
				$("#amount").val(ui.value);
			}
		});
	$("#amount").val($("#slider-range-max").slider("value"));
	/* Range */	
	$("#slider-range").slider({
			range: true,
			min: 0,
			max: 500,
			values: [ 75, 300 ],
			slide: function( event, ui ) {
				$("#amount1").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
			}
		});
	$("#amount1").val("$" + $("#slider-range").slider("values", 0) +" - $" + $("#slider-range").slider("values", 1));
	/* Range minium*/	
	$("#slider-range-min").slider({
			range: "min",
			value: 37,
			min: 1,
			max: 700,
			slide: function( event, ui ) {
				$("#amount2").val("$" + ui.value );
			}
		});
	$("#amount2").val("$" + $("#slider-range-min").slider("value"));
	/* Vertical */
	$("#slider-vertical").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
			slide: function( event, ui ) {
				$("#amount10").val( ui.value );
			}
		});
	$("#amount10").val($("#slider-vertical").slider("value"));
	/* Vertical range */
	$("#slider-range-vertical").slider({
			orientation: "vertical",
			range: true,
			values: [ 17, 67 ],
			slide: function( event, ui ) {
				$("#amount11").val("$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ]);
			}
		});
	$("#amount11").val("$" + $("#slider-range-vertical").slider("values", 0) +" - $" + $("#slider-range-vertical").slider("values", 1));			
	/* Multiple Vertical */	
	$("#slider-vertical-1").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 60,
			slide: function( event, ui ) {
				$("#amount12").val( ui.value );
			}
		});
	$("#amount12").val($("#slider-vertical-1").slider("value"));
	$("#slider-vertical-2").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 80,
			slide: function( event, ui ) {
				$("#amount13").val( ui.value );
			}
		});
	$("#amount13").val($("#slider-vertical-2").slider("value"));
	$("#slider-vertical-3").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 30,
			slide: function( event, ui ) {
				$("#amount14").val( ui.value );
			}
		});
	$("#amount14").val($("#slider-vertical-3").slider("value"));
	$("#slider-vertical-4").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 80,
			slide: function( event, ui ) {
				$("#amount15").val( ui.value );
			}
		});
	$("#amount15").val($("#slider-vertical-4").slider("value"));	
	$("#slider-vertical-5").slider({
			orientation: "vertical",
			range: "min",
			min: 0,
			max: 100,
			value: 50,
			slide: function( event, ui ) {
				$("#amount16").val( ui.value );
			}
		});
	$("#amount16").val($("#slider-vertical-5").slider("value"));	
		
	/**
	 * Name        : jQuery UI tabs	
	 * Description : jQuery UI tabs.
	 * File Name   : jquery-ui-1.8.18.min.js
	 * Plugin Url  : http://jqueryui.com/demos/tabs/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	 
	/* Default */ 	
	$("#tabs-default").tabs();
	/* Ajax */ 
	$("#tabs-ajax").tabs({
		ajaxOptions: {
			error: function(xhr, status, index, anchor) {
				$(anchor.hash).html("Couldn't load this tab. We'll try to fix this as soon as possible. If this wouldn't be a demo." );
			},
				success: function(xhr, status, index, anchor) {
				$(anchor.hash).html("Loaded" );
			}
		}
	});
	/* Collapsible */ 	
	$("#tabs-collapsible").tabs({
		collapsible: true
	});
	/* Sortable */ 	
	$("#tabs-sortable").tabs().find(".ui-tabs-nav").sortable({axis: "x"});
	/* Mouseover */ 	
	$("#tabs-mouseover").tabs({
		event: "mouseover"
	});

	/**
	 * Name        : jQueryUI autocomplete
	 * Description : jQuery ui autocomplete input
	 * File Name   : jquery-ui-1.8.18.min.js
	 * Plugin Url  : http://jqueryui.com/demos/autocomplete/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/	
	
	var availableTags = [
		"ActionScript",
		"AppleScript",
		"Asp",
		"BASIC",
		"C",
		"C++",
		"Clojure",
		"COBOL",
		"ColdFusion",
		"Erlang",
		"Fortran",
		"Groovy",
		"Haskell",
		"Java",
		"JavaScript",
		"Lisp",
		"Perl",
		"PHP",
		"Python",
		"Ruby",
		"Scala",
		"Scheme"
	];
	$("#autocomplete").autocomplete({
		source: availableTags
	});
		
	/**
	 * Name        : jQueryTreeView
	 * Description : TreeView list
	 * File Name   : treeview.js
	 * Plugin Url  : http://bassistance.de/jquery-plugins/jquery-plugin-treeview/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/		
		
	$("#browser").treeview({
		control:"#sidetreecontrol"
	});
		
	/**
	 * Name        : selectToUISlider	
	 * Description : Hooks a range slider to a select element.
	 * File Name   : selectToUISlider.js
	 * Plugin Url  : http://www.filamentgroup.com/lab/update_jquery_ui_slider_from_a_select_element_now_with_aria_support/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	

	if($('#select-to-ui-slider').length){
		$('#select-to-ui-slider select').selectToUISlider({
			labels: 12
		});
	}
	
	/**
	 * Name        : elFinder	
	 * Description : jQuery file manager.
	 * File Name   : elfinder.min.js
	 * Plugin Url  : http://elrte.org/elfinder
	 * Version     : 1.0	
	 * Updated     :
	 * Dependency  : see elfinder doc(s) or files
	 * Developer   : Mark
	**/	
	 
	var f = $('#fileexplore').elfinder({
		url : 'php/connector.php',
		lang : 'en',
		resizable: false,
		uiOptions : {
			toolbar : [
				['back', 'forward'],
				// ['reload'],
				// ['home', 'up'],
				['mkdir', 'mkfile', 'upload'],
				['open', 'download', 'getfile'],
				['info'],
				['quicklook'],
				['copy', 'cut', 'paste'],
				['rm'],
				['duplicate', 'rename', 'edit'],
				['extract', 'archive'],
				['search'],
				['view'],
				['help']
			]
		},			
		contextmenu : {
			// navbarfolder menu
			navbar : ['open', '|', 'copy', 'cut', 'paste', 'duplicate', '|', 'rm', '|', 'info'],
		
			// current directory menu
			cwd    : ['reload', 'back', '|', 'upload', 'mkdir', 'mkfile', 'paste', '|', 'info'],
		
			// current directory file menu
			files  : [
				'getfile', '|','open', 'quicklook', '|', 'download', '|', 'copy', 'cut', 'paste', 'duplicate', '|',
				'rm', '|', 'edit', 'rename','|', 'archive', 'extract', '|', 'info'
			]
		}	
	}).elfinder('instance');	
	
	/**
	 * Name        : ContextMenu	
	 * Description : jQuery context (right click) menu.
	 * File Name   : jquery.contextMenu.js
	 * Plugin Url  : http://medialize.github.com/jQuery-contextMenu/demo.html
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	 
	$.contextMenu({
		selector: '#context-menu', 
        callback: function(key, options) {
            var m = "clicked: " + key;
            window.console && console.log(m) || alert(m); 
        },
        items: {
            "edit": {"name": "Edit", "icon": "edit"},
            "cut": {"name": "Cut", "icon": "cut"},
            "sep1": "---------",
            "quit": {"name": "Quit", "icon": "quit"},
            "sep2": "---------",
            "fold1": {
                "name": "Sub group", 
                "items": {
                    "fold1-key1": {"name": "Foo bar"},
                    "fold2": {
                        "name": "Sub group 2", 
                        "items": {
                            "fold2-key1": {"name": "alpha"},
                            "fold2-key2": {"name": "bravo"},
                            "fold2-key3": {"name": "charlie"}
                        }
                    },
                    "fold1-key3": {"name": "delta"}
                }
            },
            "fold1a": {
                "name": "Other group", 
                "items": {
                    "fold1a-key1": {"name": "echo"},
                    "fold1a-key2": {"name": "foxtrot"},
                    "fold1a-key3": {"name": "golf"}
                }
            }
        }
	});
		
	/**
	 * Name        : FullCalendar	
	 * Description : jQuery calendar with some cool options.
	 * File Name   : fullcalendar.js
	 * Plugin Url  : http://arshaw.com/fullcalendar/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/	
	 
	/* initialize the external events */
	$('.external-events-box .external-event').each(function() {
		// create an Event Object (http://arshaw.com/fullcalendar/docs/event_data/Event_Object/)
		// it doesn't need to have a start or end
		var eventObject = {
			title: $.trim($(this).text()) // use the element's text as the event title
		};
		// store the Event Object in the DOM element so we can get to it later
		$(this).data('eventObject', eventObject);
		
		// make the event draggable using jQuery UI
		$(this).draggable({
			zIndex: 999,
			revert: true,      // will cause the event to go back to its
			revertDuration: 0  //  original position after the drag
		});
	});
	
	var date = new Date();
	var d = date.getDate();
	var m = date.getMonth();
	var y = date.getFullYear();
	
	$('#calendar').fullCalendar({
		editable: true,
		theme: true,
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		events: [
			{
				title: 'All Day Event',
				start: new Date(y, m, 1),
				color: '#e58d25',
				backgroundColor: '#e58d25',
				borderColor: '#e58d25',
				textColor: '#fff'
			},
			{
				title: 'Long Event',
				start: new Date(y, m, d-5),
				end: new Date(y, m, d-2)
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d-3, 16, 0),
				allDay: false
			},
			{
				id: 999,
				title: 'Repeating Event',
				start: new Date(y, m, d+4, 16, 0),
				allDay: false
			},
			{
				title: 'Meeting',
				start: new Date(y, m, d, 10, 30),
				allDay: false,
				backgroundColor: '#e63e3e',
				borderColor: '#e63e3e',
				textColor: '#fff'
			},
			{
				title: 'Lunch',
				start: new Date(y, m, d, 12, 0),
				end: new Date(y, m, d, 14, 0),
				allDay: false
			},
			{
				title: 'Birthday Party',
				start: new Date(y, m, d+1, 19, 0),
				end: new Date(y, m, d+1, 22, 30),
				allDay: false,
				backgroundColor: '#6acc2e',
				borderColor: '#6acc2e'
			},
			{
				title: 'Click for Google',
				start: new Date(y, m, 28),
				end: new Date(y, m, 29),
				url: 'http://google.com/'
			}
		],
		droppable: true, // this allows things to be dropped onto the calendar !!!
		drop: function(date, allDay) { // this function is called when something is dropped
			
			// retrieve the dropped element's stored Event Object
			var originalEventObject = $(this).data('eventObject');
			
			// we need to copy it, so that multiple events don't have a reference to the same object
			var copiedEventObject = $.extend({}, originalEventObject);
			
			// assign it the date that was reported
			copiedEventObject.start = date;
			copiedEventObject.allDay = allDay;
			
			// render the event on the calendar
			// the last `true` argument determines if the event "sticks" (http://arshaw.com/fullcalendar/docs/event_rendering/renderEvent/)
			$('#calendar').fullCalendar('renderEvent', copiedEventObject, true);
			
			// is the "remove after drop" checkbox checked?
			if ($(this).parents('.external-events-box').find('.drop-remove').is(':checked')) {
				// if so, remove the element from the "Draggable Events" list
				$(this).remove();
			}
				
		}
	});
	
	/**
	 * Name        : jQuery UI date picker	
	 * Description : jQuery date picker widget. 
	 * File Name   : jquery-ui-1.8.16.min
	 * Plugin Url  : http://jqueryui.com/demos/datepicker/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/	
	
	/* Default */
	$("#datepicker-default").datepicker();
	/* Icon trigger */
	$("#datepicker-icon").datepicker({
		showOn: "button",
		buttonImage: "images/datepicker.png",
		buttonImageOnly: true
	});
	/* Display inline */
	$("#datepicker-inline").datepicker();
	/* Display inline */
	$("#datepicker-alt").datepicker({
		altField: "#alternate",
		altFormat: "DD, d MM, yy"
	});	
	
	
	/**
	 * Name        : jQuery UI spinner	
	 * Description : A input spinner.
	 * File Name   : jquery.ui.spinner.js
	 * Plugin Url  : https://github.com/btburnett3/jquery.ui.spinner
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Mark
	**/
		
	/* Default */
	$("#spinner1").spinner();
	/* Decimal */	
	$("#spinner2").spinner({
		step: 0.01,
		numberFormat: "n"
	});
	/* Time */
	$("#spinner3").spinner({
		min: 0, 
		max: 10
	});	
	
	/**
	 * Name        : AutoGrow Textarea	
	 * Description : A textarea which grows vertically as it becomes full. 
	 * File Name   : autogrow-textarea.js
	 * Plugin Url  : http://onehackoranother.com/projects/jquery/jquery-grab-bag/autogrow-textarea.html
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/
	
	$('.autogrow-textarea').autogrow();
	
	/**
	 * Name        : Textarea Resizer	
	 * Description : A textarea which can be resized. 
	 * File Name   : textarearesizer.min.js
	 * Plugin Url  : http://www.itsavesyou.com/TextArea_Resizer_example.htm
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/
		
	$('textarea.resizable-textarea:not(.processed)').TextAreaResizer();

	/**
	 * Name        : Masked inputs	
	 * Description : Mask form inputs 
	 * File Name   : jquery.maskedinput-1.3.min.js
	 * Plugin Url  : http://digitalbush.com/projects/masked-input-plugin/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Richard
	**/
	
	if($('#mask_date, #mask_phone, #mask_extphone, #mask_tin, #mask_ssn, #mask_product, #mask_eyescript').length){
		$.mask.definitions['~']='[+-]';
		$('input#mask_date').mask('99/99/9999');
		$('input#mask_phone').mask('(999) 999-9999');
		$('input#mask_extphone').mask("(999) 999-9999? x99999");
		$("input#mask_tin").mask("99-9999999");
		$("input#mask_ssn").mask("999-99-9999");
		$("input#mask_product").mask("a*-999-a999",{placeholder:" ",completed:function(){alert("You typed the following: "+this.val());}});
		$("input#mask_eyescript").mask("~9.99 ~9.99 999");
	}
	  
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
	 
    // main tooltip(most used theme tooltip)
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

	/**
	 * Name        : Audiojs
	 * Description : HTML5 audio player.
	 * File Name   : audiojs.js
	 * Plugin Url  : http://kolber.github.com/audiojs/
	 * Version     : 1.0	
	 * Updated     : --/--/---
	 * Dependency  :
	 * Developer   : Brandon
	**/
	
	if($('.audiojsZ').length){
		audiojs.events.ready(function() {																  
			var audios = document.getElementsByTagName('audio');
			var a1 = audiojs.create(audios[0], {
			  css: false,
			  createPlayer: {
				markup: false,
				playPauseClass: 'play-pauseZ',
				scrubberClass: 'scrubberZ',
				progressClass: 'progressZ',
				loaderClass: 'loadedZ',
				timeClass: 'timeZ',
				durationClass: 'durationZ',
				playedClass: 'playedZ',
				errorMessageClass: 'error-messageZ',
				playingClass: 'playingZ',
				loadingClass: 'loadingZ',
				errorClass: 'errorZ'
			  }
			});							  
		});
	}
});
