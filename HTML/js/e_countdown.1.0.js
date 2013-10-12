/*
 * ************************************************************* *
 * Name       : eCountdown                                       *
 * Date       : December 2011                                    *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Brandon                                          *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
	
;(function($, window, document, undefined){
    $.fn.eCountdown = function(options) { 
	
		options = $.extend({}, $.fn.eCountdown.options, options); 

			return this.each(function() {  
									
				var obj          = $(this);
				var countStepper = -1;
				var cdId         = Math.floor(Math.random()*1111);
				
				if(obj.length){
					obj.append('<span id="e-countdown-'+cdId+'"></span>');
				}
				
				function calcage(secs, num1, num2) {
					s = ((Math.floor(secs/num1))%num2).toString();
					if (options.showZero && s.length < 2){
						if(s < 0){	
							var num =  "00";
						}else{
							var num =  "0" + s;
						}
					}else{
						if(s < 0){	
							var num =  "0";
						}else{
							var num =  s;
						}						
					}
					return "<b>" + num + "</b>";
				}
								
				function countBack(secs) {
					if (secs < 0) {
						if(typeof options.after == 'function'){
							options.after.call(this);
						}
						var endTime = true;	
					}else{
						var endTime = false;	
					}

					displayStr = options.displayFormat.replace(/%D%/g, calcage(secs,86400,100000));
					displayStr = displayStr.replace(/%H%/g, calcage(secs,3600,24));
					displayStr = displayStr.replace(/%M%/g, calcage(secs,60,60));
					displayStr = displayStr.replace(/%S%/g, calcage(secs,1,60));
					
					$('#e-countdown-'+cdId).html(displayStr);
	  
					if (options.liveTime && endTime === false){
						setTimeout(function(){countBack(secs+countStepper)}, timeOutPeriod);
					}
					return;
				}				
				
				countStepper      = Math.ceil(countStepper);
			  
				var timeOutPeriod = (Math.abs(countStepper)-1)*1000 + 990;
				
				var dateFuture    = new Date(options.targetDate);

				var dateCurrent   = new Date();

				if(countStepper > 0){
					ddiff = new Date(dateCurrent-dateFuture);
				}else{
					ddiff = new Date(dateFuture-dateCurrent);
				}

				gsecs = Math.floor(ddiff.valueOf()/1000);

				countBack(gsecs);
					
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eCountdown.options = {
			targetDate: '',
			displayFormat: '%D% Days, %H% Hours, %M% Minutes, %S% Seconds.',
			liveTime: true,
			showZero: true,
			after:function(){}	
		};
		
})(jQuery, window, document);
