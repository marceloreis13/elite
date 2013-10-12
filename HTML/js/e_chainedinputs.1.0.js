/*
 * ************************************************************* *
 * Name       : eChainedInputs                                   *
 * Date       : March 2012                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.6+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
 
;(function($, window, document, undefined){
    $.fn.eChainedInputs = function(options) { 
	
		options = $.extend({}, $.fn.eChainedInputs.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj = $(this);
				
				/**
				* Find the data attribute.
				**/
				obj.on('keyup','[data-chained-group]',function(){
					var changTo   = $(this).data('chained-group');
					var maxLength = $(this).attr('maxlength');
					var val       = $(this).val().length;
					var count     = $('[data-chained-group="'+changTo+'"]').length - 1;
					var index     = $(this).index('[data-chained-group="'+changTo+'"]');
					
					/**
					* Hop to the next one.
					**/
					if(val == maxLength){
						if(index == count){	
							
							  /**	
							  * Run the callback function.
							  **/	
							  if(typeof options.callback == 'function'){
								  options.callback.call(this);
							  } 
							
						}else{
							$('[data-chained-group="'+changTo+'"]').eq(index + 1).focus();
						}
					}
				});
				
				/**
				* Reset cursor back to the end(if the input has a value) .
				**/
                obj.on('focus','[data-chained-group]',function(){				 
					if(this.createTextRange){  
						//IE  
					    var FieldRange = this.createTextRange();  
					    FieldRange.moveStart('character', this.value.length);  
					    FieldRange.collapse();  
					    FieldRange.select();  
					}else{ 
						// All other					
					    // Double the length because Opera is inconsistent 
					    // about whether a carriage return is one character or two.
						var len =  $(this).val().length * 2;
						this.setSelectionRange(len, len);
	  				}
			    });

			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eChainedInputs.options = {
			callback: function(){}	
		};
		
})(jQuery, window, document);
