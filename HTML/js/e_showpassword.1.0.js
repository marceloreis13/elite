/*
 * ************************************************************* *
 * Name       : eShowPassword                                    *
 * Date       : April 2011                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.3+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
  
;(function($, window, document, undefined){
    $.fn.eShowPassword = function(options) { 
	
		options = $.extend({}, $.fn.eShowPassword.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj = $(this);

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**	
				* Check for the right type and wrap the password input(s).
				**/
				if(obj.is('[type=password]')){
					obj.not(options.exclude).wrap('<div class="e-showpassword"/>').before('<input type="text" class="e-showpassword-text"/>')
				}
				
				/**	
				* Switch between the type's.
				**/
				$('body').on(clickEvent, options.trigger,function(e){
					var typeText = obj.prev();
					if(typeText.is(':hidden')){
                		typeText.show().val(obj.val());
					}else{
						typeText.hide();
						obj.val(typeText.val());
					}

					/**	
					* Run the callback function.
					**/	
					if(typeof options.onSwitch == 'function'){
						options.onSwitch.call(this);
					}
					
					e.preventDefault();
				});
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eShowPassword.options = {
			trigger: '',
			exclude: '',
			onSwitch: function(){ }	
		};
		
})(jQuery, window, document);
