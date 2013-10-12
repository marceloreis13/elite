/*
 * ************************************************************* *
 * Name       : eScrollbar                                       *
 * Date       : December 2011                                    *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency : jQuery UI                                        *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
  
;(function($, window, document, undefined){
    $.fn.eScrollbar = function(options) { 
	
		options = $.extend({}, $.fn.eScrollbar.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj      = $(this);

				/**	
				* Wrap the object.
				**/
				obj
				.addClass('e-scrollbar-inner')
				.wrap('<div class="e-scrollbar"/>')
				.parent()
				.append('<div class="e-scrollbar-handle"><span></span></div>');

				/**	
				* Bind the code, as we need it when we resize.
				**/
				obj.bind('runCode',function(){			
					/**	
					* Setting variables.
					**/
					var box         = obj.parent('.e-scrollbar');
					var boxOuter    = box.outerHeight();
					var boxInner    = box.children('div.e-scrollbar-inner');
					var barHandle   = box.children('div.e-scrollbar-handle').children();				
					var innerHeight = boxInner.outerHeight() + 15;// calculate extra padding
					var barHeight   = boxOuter / (innerHeight/boxOuter);
					
					/**	
					* The scrollbar replacement.
					**/
					barHandle.height(barHeight);
					barHandle.draggable({
						axis: 'y',
						containment: obj.parent(),    
						drag: function() {
							var scrBar = barHandle.position().top;  						
							boxInner.css({top: -(scrBar*(innerHeight/boxOuter))});
						}
					});
				}).trigger('runCode');
				
				/**	
				* Run the code on resize and reset the positon back to the top
				**/				
				$(window).resize(function() {
					obj
					.trigger('runCode')
					.css({top: 0})
					.next('div.e-scrollbar-handle')
					.children()
					.css({top: 0})	
				});
			});
		}
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eScrollbar.options = { };
		
})(jQuery, window, document);
