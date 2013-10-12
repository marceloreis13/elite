/*
 * ************************************************************* *
 * Name       : eTextareaLimiter                                 *
 * Date       : February 2011                                    *
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
    $.fn.eTextareaLimiter = function(options) { 
	
		options = $.extend({}, $.fn.eTextareaLimiter.options, options); 
	 
			return this.each(function() {   
									
				/**
				* Variables.
				**/
				var obj = $(this);
				
				/**
				* Check if the object is an textarea.
				**/
				if(obj.is('textarea')){
					
					/**
					* Check if maxlength attribute is present.
					**/					
					if(obj.attr('maxlength')){
						var maxlength = obj.attr('maxlength');
					}else{
						var maxlength = options.maximum;
					}			
								
					/**
					* Ignore certain keys.
					**/
					var ignore = [8,9,13,33,34,35,36,37,38,39,40,46];
					
					/**
					* Active upon keypress.
					**/
					obj.on('keypress', function(e){
						
						/**
						* Getting the data of the object.
						**/						
						var code = $.data(this, 'keycode');
						
						/**
						* Check if maxlength has a value.
						**/	
						if(maxlength && maxlength > 0){
							
							/**
							* Continue with this keystroke if maxlength
							* not reached or one of the ignored keys were pressed.
							**/					 
							return ($(this).val().length < maxlength || $.inArray(code, ignore) !== -1);
						}
					}).on('keydown', function(e){
						$.data(this, 'keycode', e.keyCode || e.which);
					});

					/**
					* Create a random number for the id.
					**/	
					var rand = Math.floor(Math.random()*1001);
					
					/**
					* Insert a placeholder for the maximum.
					**/	
					$('<span class="e-textarealimiter-maximum" id="e-tl-id'+rand+'"></span>').insertAfter(obj);
					
					/**
					* Show and update the number.
					**/				
					obj.bind('keyup click blur focus change paste keypress keydown tap',function(){	
								
						/**
						* Get the total charaters in the textarea,
						* and update them if it changes.
						**/												
						var valLength = $(this).val().length;
						var count     = parseInt(maxlength - valLength);
						
						/**
						* Display the max number.
						**/								
						$('#e-tl-id'+rand).text(count);	
						
						/**
						* Prevent a form being send if the maximum length is exceeded.
						**/						
						if(options.savety === true){
							
							/**
							* Check if the number is correct, otherwise disable the submit button.
							**/					
							if(count < 0){						
								obj.parents('form').find('[type="submit"]').attr("disabled", "true");
							}else{
								obj.parents('form').find('[type="submit"]').removeAttr("disabled");
							}
						}						
					}).change();					
				}
			});
		};
						
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eTextareaLimiter.options = {
			maximum: 10000,			
			savety: true		
		};
		
})(jQuery, window, document);
