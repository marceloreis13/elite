/*
 * ************************************************************* *
 * Name       : eClone                                           *
 * Date       : March 2011                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
  
;(function($, window, document, undefined){
    $.fn.eClone = function(options) { 
	
		options = $.extend({}, $.fn.eClone.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj     = $(this);
				var trigger = obj.find(options.trigger);

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**	
				* Set type effect.
				**/	
				if(options.effect == 'slide'){
					var effect = 'slideDown';
				}else{
					var effect = 'fadeIn';
				}
				
				/**
				* Main clone class.
				**/
				trigger.on(clickEvent, this, function(e){
					
					/**	
					* Run the callback function.
					**/	
					if(typeof options.before == 'function'){
						options.before.call(this);
					}
				
					/**	
					* Always get the last item.
					**/	
					var target = obj.find(options.target).not('.'+options.excludeClass).last();
					
					/**	
					* Set the target class to the right element.
					**/							
					target.addClass('clone-target');
					
					/**	
					* Lets clone the target.
					**/		
					obj.find('.clone-target').clone().insertAfter(target).hide().addClass('clone-new');
					
						/**	
						* Remove all target classes.
						**/		
						obj.find('.clone-target').removeClass('clone-target');
						
						/**	
						* Show the cloned target.
						**/	
						obj.find('.clone-new')[effect](options.speed,function(){
							
							/**	
							* Reset element(make sure the element is visible).
							**/	
							$(this).fadeTo(options.speed,1.0).removeClass('clone-new');	
							
							/**	
							* Run the callback function.
							**/	
							if(typeof options.after == 'function'){
								options.after.call(this);
							}
					});
				    e.preventDefault();
				});	
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eClone.options = {
			target: 'div',
			trigger: '.clone-trigger',
			excludeClass: 'not-clone',
			effect: 'slide',
			speed: 200,
			before: function(){ },
			after: function(){ }		
		};
		
})(jQuery, window, document);
