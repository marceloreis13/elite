/*
 * ************************************************************* *
 * Name       : eProgressbar                                     *
 * Date       : Jan 2011                                         *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7.1+(1.7 has a bug)                     *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
 
;(function($, window, document, undefined){
    $.fn.eProgressbar = function(options) { 
	
	options = $.extend({}, $.fn.eProgressbar.options, options); 

			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj = $(this);
				
				/**
				* Find al items and loop it.
				**/
				obj.find('.e-progressbar').each(function(i){
					
					/**
				    * Getting the data attributes.
					**/
					var barValue = $(this).data('progressbar-value');
					var barColor = $(this).data('progressbar-color');
					
					if(options.showTotal === true){
						var total = '<span>'+barValue+'%</span>';
					}else{
						var total = '';
					}
					
					/**
					* Append a colored bar.
					**/
					$(this).append('<span style="background-color:'+barColor+'">'+total+'</span>');
					
					/**
					* Loop all progressbars or not.
					**/					
					if(options.loop === true){
						var loop = options.delay*i;
					}else{
						var loop = options.delay;
					}		
								
					/**
					* Set the value of the bar, animate or set it to fixed.
					**/
					if(options.animate === true){
						$(this).children('span').delay(loop).animate({width: barValue+'%'},options.speed ,options.easing,function(){
							if(options.after){
						    	options.after.call(this);
							}
						});
					}else{
						$(this).children('span').css({width: barValue+'%'});
						if(options.after){
						   options.after.call(this);
						}						
					}
				});	
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eProgressbar.options = {
			animate: true,
			easing: '',
			loop: true,
			delay: 400,
			showTotal: true,
			speed: 2000,
			after: function(){}
		};
				
})(jQuery, window, document);