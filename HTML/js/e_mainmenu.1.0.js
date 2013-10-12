/*
 * ************************************************************* *
 * Name       : eMainMenu                                        *
 * Date       : May 2011                                         *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Richard                                          *
 * Dependency : jQuery UI core                                   *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function($, window, document, undefined){
    $.fn.eMainMenu = function(options) { 
	
		options = $.extend({}, $.fn.eMainMenu.options, options); 
	 
			return this.each(function() {  
						
				/**
				* Variables.
				**/
				var obj          = $(this);
				var objHref      = obj.children().children();

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**
				* Show/hide menu with a click event.
				**/
				objHref.on(clickEvent,'a',function(){
											
					/* Check if the href attribute is valid, if not use the animation */
					if(($(this).attr('href').lastIndexOf('#') >= 0) || ($(this).attr('href').indexOf('javascript') >= 0)){
						var list  = $(this).parent('li');
						var lists = $(this).parents('li');
						/**
						* Adding/removing active class & arrow class.
						**/
						if(!lists.children('ul').is(':hidden')){
							list.removeClass(options.activeClass).children('a').find('.'+ options.closeClass).removeClass(options.closeClass).addClass(options.openClass);
						}else{
							list.addClass(options.activeClass).children('a').find('.'+ options.openClass).removeClass(options.openClass).addClass(options.closeClass);
						}
						/**
						* The animation of the menu.
						**/
						list.children('ul').animate({height: 'toggle'},options.speed);
					}
				});
		   });		
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eMainMenu.options = {
			activeClass: 'sub-page-active',
			closeClass: 'min-10',
			openClass: 'plus-10',
			speed: 400	
		};
		
})(jQuery, window, document);
