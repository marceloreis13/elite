/*
 * ************************************************************* *
 * Name       : eMenu                                            *
 * Date       : June 2011                                        *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.1                                              *
 * Updated    : 19/10/2012                                       *
 * Developer  : Richard                                          *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
 
;(function($, window, document, undefined){
    $.fn.eMenu = function(options) { 
	
		options = $.extend({}, $.fn.eMenu.options, options); 
	 
			return this.each(function() {  
					
				/**
				* Variables.
				**/
				var obj  = $(this);
				var list = obj.children('li');
				var elem = list.children('a');

					/**
					* Check for touch support and set right click events.
					**/
					if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
						var clickEvent = 'click tap';
						var useTap = true;
					}else{
						var clickEvent = 'click';
						var useTap = false;	
					}
					
					/** 
				    * Submenu left or right.
					* Adding a bridge, to keep the menu alive.
					**/
					list.each(function(index){
						
						/**
						* Get the right width for the bridge.
						**/	
						if($(this).parent().hasClass('e-menu')){
							var bridgeWidth	= $(this).children('a').outerWidth();
						}else{
							var bridgeWidth	= $(this).children('a').outerWidth() - 1;
						}
						
						/**
						* Prepend the bridge.
						**/	
						$(this).children('div:last-child').prepend('<span class="e-menu-brigde" style="width:'+bridgeWidth+'px"></span>');
						
						/**
						* Flip the menu if needed.
						**/														
					 	if((jQuery.inArray(index, options.flip)) != '-1'){
							$(this).children('div').addClass('e-menu-reverze');
						}
					});
					
					/**
					* Set type event, you can choose form click or hover event. 
					* This event will trigger the e-menu.
					**/
					if(options.typeEvent == 'click' || useTap){
						
						 /** 
						 * Remove other active menu's and active 
						 * classes(click outside menu). This will
						 * allow a user to cancel the menu(s) without
						 * clicking on the menu button.
						 **/
						 $(document).on(clickEvent, this, function(e){
							 if (!$(e.target).is($(' *', obj))){
							 	elem.parent().children('div:last-child').slideUp(options.speed);
								obj.find('.'+options.activeClass).removeClass(options.activeClass);	
						 	 }
						 });
						 
						 /** 
						 * Show the menu upon click.
						 **/ 
						 elem.on(clickEvent, this,function(){
							 
						 	/** 
							* Effect fade, or else animated toggle.
							**/
							if(options.effect == 'fade'){
								
								/**
								* Check if menu is hidden or not.
								**/								
								if($(this).parent().find('div').is(':hidden')){

									/**
									* Hide all open menus if a user clicks on a new button
									* this will prevent multiple open menu's.
									**/
									obj.children('li').children('div').fadeOut(options.speed);
																	
									$(this).parent().find('div').stop(true, true).fadeIn(options.speed);
								}else{
									$(this).parent().find('div').stop(true, true).fadeOut(options.speed);	
								}
							}else{
								
								/**
								* Hide all open menus.
								**/
								obj.children('li').not($(this).parent()).children('div').hide();	
															
								/**	
								* Animate menu(toggle height).
								**/
								$(this).parent().find('div').stop(true, true).animate({height: 'toggle'},options.speed);								
							}
							
							/**
							* Adding and removing the active class, this is the 
							* class that will tell which menu is open.
							**/
							if($(this).hasClass(options.activeClass)){
								$(this).removeClass(options.activeClass);
							}else{
								obj.find('.'+options.activeClass).removeClass(options.activeClass);	
								$(this).addClass(options.activeClass);	
							}															
						});
					}else{
						
						/**
						* Using mouseenter to show the dropdown menu.
						* Adding a active class.
						**/							 
						elem.on('mouseenter',this,function(){	
							$(this).addClass(options.activeClass);	
								 
							/** 
							* Effect fade, or else animated toggle.
							**/
							if(options.effect == 'fade'){
								$(this).parent().children('div:last-child').stop(true, true).fadeIn(options.speed);
							}else{
								$(this).parent().children('div:last-child').stop(true, true).slideDown(options.speed);
							}
						});	
						
						/**
						* Using mouseleave to hide the dropdown menu.
						* Removing the active class.
						**/												
						elem.parent('li').on('mouseleave', this, function(){	
							$(this).children().removeClass(options.activeClass);
							if(options.effect == 'fade'){
								$(this).children('div:last-child').stop(true, true).fadeOut(options.speed);
							}else{
								$(this).children('div:last-child').stop(true, true).slideUp(options.speed);
							}
						});

					}
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eMenu.options = {
			effect: 'slide',
			speed: 200,
			typeEvent: 'click',
			activeClass: 'e-menu-active',
			flip: []		
		};
		
})(jQuery, window, document);
