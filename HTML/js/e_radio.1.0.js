/*
 * ************************************************************* *
 * Name       : eRadio                                           *
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
    $.fn.eRadio = function(options) { 
	
		options = $.extend({}, $.fn.eRadio.options, options); 
	 
			return this.each(function() {  

				/**
				* Variables.
				**/
				var obj      = $(this);

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**
				* Check if its a radio type.	
				**/								
				if(obj.is('[type=radio]')){
										
					/**
					* Wrap all radio inputs and labels in a div.
					* Check for left and right labels and non labels.
					**/
					if(obj.next('label').length){
						obj.hide().next('label').andSelf().wrapAll('<div class="e-radio"/>');
					}else if(obj.prev('label').length){
						obj.hide().prev('label').andSelf().wrapAll('<div class="e-radio labelleft"/>');
					}else{
						obj.hide().wrap('<div class="e-radio"/>');
					}
					
					/**
					* Add the replacement image.
					**/
					$('<div class="e-radio-img"></div>').insertBefore(obj);
					
					/**
					* Keep the disabled disabled.
					**/
					if(obj.is(':disabled')){
						obj.parent('div').addClass('e-radio-disabled');	
					}
					
					/**
					* Check for any checked elements and apply active class.
					**/
					if(obj.is(':checked')){
						obj.parent('div').removeClass('e-radio-normal').addClass('e-radio-active');
					}else{
						obj.parent('div').removeClass('e-radio-active').addClass('e-radio-normal');
					}						
					
					/**
					* Click and change the images and values.
					**/
					obj.parent('div.e-radio').not('div.e-radio-disabled').on(clickEvent, this, function(){
						
						/**
						* Reset all.
						**/						
						var objByName = $(this).children('input').attr('name');
						$('input[name='+objByName+']').removeAttr('checked').parent().removeClass('e-radio-active').addClass('e-radio-normal');	
						
						/**
						* Set the checked attribute.
						**/		
						$(this).children('input').attr('checked', 'checked').parent().addClass('e-radio-active').trigger('updateAll');	

					});
				}
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eRadio.options = { };
		
})(jQuery, window, document);
