/*
 * ************************************************************* *
 * Name       : eCheckbox                                        *
 * Date       : May 2011                                         *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function($, window, document, undefined){
    $.fn.eCheckbox = function(options) { 
	
		options = $.extend({}, $.fn.eCheckbox.options, options); 
	 
			return this.each(function() {  

				/**
				* Variables.
				**/
				var obj         = $(this);
				var normalClass = 'e-checkbox-normal';
				var activeClass = 'e-checkbox-active';

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**
				* Check if its a checbox type.	
				**/								
				if(obj.is('[type=checkbox]')){			
				
					/**
					* Wrap all checkbox and labels in a div.
					* Check for left and right labels and non labels.
					**/
					if(obj.next('label').length){
						obj.hide().next('label').andSelf().wrapAll('<div class="e-checkbox"/>');
					}else if(obj.prev('label').length){
						obj.hide().prev('label').andSelf().wrapAll('<div class="e-checkbox labelleft"/>');
					}else{
						obj.hide().wrap('<div class="e-checkbox"/>');
					}
					
					/**
					* Add the replacement image.
					**/											
					$('<div class="e-checkbox-img"></div>').insertBefore(obj);	

					/**
					* Keep the disabled disabled.
					**/
					if(obj.is(':disabled')){
						obj.parent('div').addClass('e-checkbox-disabled');	
					}
					
					/**
					* Check for any checked elements and apply active class.
					**/
					if(obj.is(':checked')){
						obj.parent('div').removeClass(normalClass).addClass(activeClass);	
					}else{
						obj.parent('div').removeClass(activeClass).addClass(normalClass);
					}						
				
					/**
					* Click and change the images and values.
					**/
					obj.parent('div.e-checkbox').not('div.e-checkbox-disabled').on(clickEvent, $(this), function(){
						
						if($(this).find('[type=checkbox]').hasClass(options.triggerClass)){
							/**
							* Trigger(mass select).
							**/
							if($(this).find('[type=checkbox]').is(':checked')){	
								$(this)
								.parents('.'+options.sectionClass)
								.find('div.e-checkbox')
								.not('div.e-checkbox-disabled')
								.removeClass(activeClass)
								.addClass(normalClass)
								.find('input')
								.removeAttr('checked');
							}else{
								$(this)
								.parents('.'+options.sectionClass)
								.find('div.e-checkbox')
								.not('div.e-checkbox-disabled')
								.removeClass(normalClass)
								.addClass(activeClass)
								.find('input')
								.attr('checked','checked');	
							}
							
							/**	
							* Run the callback function.
							**/	
							if(typeof options.toggleCallback == 'function'){
								options.toggleCallback.call(this);
							}
						}else{
							/**
							* Regular.
							**/
							if($(this).find('[type=checkbox]').is(':checked')){
								$(this).removeClass(activeClass).addClass(normalClass).find('input').removeAttr('checked');	
							}else{
								$(this).removeClass(normalClass).addClass(activeClass).find('input').attr('checked', 'checked');								
							}
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
		$.fn.eCheckbox.options = {
			sectionClass: 'e-checkbox-section',
			triggerClass: 'e-checkbox-trigger',
			toggleCallback: function(){}			
		};
		
})(jQuery, window, document);
