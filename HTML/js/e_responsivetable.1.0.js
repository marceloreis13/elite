/*
 * ************************************************************* *
 * Name       : eResponsiveTable                                 *
 * Date       : December 2011                                    *
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
    $.fn.eResponsiveTable = function(options) { 
	
		options = $.extend({}, $.fn.eResponsiveTable.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj = $(this);
				var tr =  obj.find('tr');
				
				/**
				* Loop all and add a class to every TH & TD elements.
				**/
				tr.each(function(){
					var i = 1;
					$(this).find('th, td').each(function(){
						$(this).addClass(options.className+''+i);
						i++;
					});
				});
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eResponsiveTable.options = {
			className: 'rt-'		
		};
		
})(jQuery, window, document);
