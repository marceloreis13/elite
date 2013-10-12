/*
 * ************************************************************* *
 * Name       : eLiveSearch                                      *
 * Date       : September 2011                                   *
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
    $.fn.eLiveSearch = function(options) { 
	
		options = $.extend({}, $.fn.eLiveSearch.options, options); 

			return this.each(function() {  
			
				/**
				* Variables.
				**/
				var obj    = $(this);
				var input  = obj.find('[type=text]:first');
				var send   = obj.find('[type=submit]');
				var timer  = null;
				var target = $(options.target);
				
				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**	
				* Prepend a wrapper in the target element.
				**/	
				if(target.length){
					target.prepend('<div class="elivesearch"/>');
					var placeHolder = target.children('div.elivesearch');
				}
			
				/**	
				* Set the type of effect.
				**/	
				if(options.effect == 'slide'){
					var effectIn  = 'slideDown';
					var effectOut = 'slideUp';
				}else{
					var effectIn  = 'fadeIn';
					var effectOut = 'fadeOut';
				}	
							
				/**	
				* AJAX(set and return data and animations).
				**/	
				function ajaxSearch(value){
					
					/**	
					* Alow users to use the form action attr instead 
					* of the file option.
					**/					
					if(options.file.length > 1){
						var file = options.file;
					}else{
						if(obj.prop('action').length){
							var file = obj.attr('action');
						}else{
							alert('There is no search template(file) defined!');
							var file = '';
						}
					}
					
					/**	
					* Get and set the extra parameters.
					**/
					
					var optParam = [options.param1,
								    options.param2,
								    options.param3,
								    options.param4,
								    options.param5,
								    options.param6,
								    options.param7,
								    options.param8,
								    options.param9,
								    options.param10];
									
					var param = new Array();				
					for (i=0; i<10; i++){
						if(optParam[i].length > 1){
							if(obj.find(optParam[i]).is('[type=text]')){
								param[i] = obj.find(optParam[i]).val();	
							}else{
								param[i] = obj.find(optParam[i]).find(':selected').val();	
							}
						}else{
							param[i] = '';
						}
					}
					
					/**	
					* Setting and getting the data.
					**/	
					$.post(file,{value:value, 
								 param1:param[0],
								 param2:param[1],
								 param3:param[2],
								 param4:param[3],
								 param5:param[4],
								 param6:param[5],
								 param7:param[6],
								 param8:param[7],
								 param9:param[8],
								 param10:param[9],
								 order:options.order, 
								 limit:options.maxResults},function(data){
						
						/**	
						* Cleaning oud data and showing the new.
						**/	
						if(placeHolder.is(':visible')){
							placeHolder[effectOut](options.speed,function(){
								$(this)
								.children()
								.remove()
								.end()
								.prepend(data)[effectIn](options.speed);
							});
						}else{
							placeHolder
							.children()
							.remove()
							.end()
							.prepend(data)[effectIn](options.speed);							
						}
						
				    }).error(function(){
						alert('There has been an error, please check your settings!');
					}).success(function(){
						/**	
						* Run the callback function.
						**/	
						if(typeof options.afterLoad == 'function'){
							options.afterLoad.call(this);
						}						
					});
				};

				/**	
				* If the option live is set to true, use the keyup
				* event to run the search.
				**/	
				if(options.live === true){	
						
					/**	
					* Run th ecode with a keyup event.
					**/	
					input.keyup(function(){
						
						/**	
						* Set the value and value length.
						**/	
						var val     = $.trim($(this).val());
						var numChar = val.length;
							
						/**	
						* Check for minimal characters.
						**/	
						if(numChar >= options.minChar){
	
							/**	
							* This code is wrapped in a settimeout function, this to 
							* prevent repeating of the animations, if a user is typing a lot.
							**/		
							clearTimeout(timer); 
							timer = setTimeout(function(){
								
								/**	
								* The AJAX function.
								**/	
								ajaxSearch(val);
	
							}, options.liveDelay);		
						}else{
							
							/**	
							*  Check for minimal characters, if not present hide the dropdown.
							**/							
							placeHolder[effectOut](options.speed)
						}
					});				
				}else{
					
					/**	
					* Run the code with a keyup event.
					**/	
					obj.submit(function(){
						
						/**	
						* Set the value and value length.
						**/	
						var val = $.trim($(this).find('[type=text]').val());	
						var numChar = val.length;
						
						/**	
						* Check for minimal characters.
						**/	
						if(numChar >= options.minChar){
							
							/**	
							* The AJAX function.
							**/
							ajaxSearch(val);
						}
					})
				}

				/**	
				* Disable the submit button(if present).
				**/	
				obj.submit(function(){
					return false;
				});	
				
				/**
				* Hide results box if clicked on the close button.
				**/	
				if(options.closeClass){
					$('body').on(clickEvent, '.'+options.closeClass,function(){
						$(this).parents('div.elivesearch')[effectOut](options.speed);	
					});
				}
			});
		};
				
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eLiveSearch.options = {
			file: '',
			target: '',
			maxResults: 5,
			order: 'random',
			live: true,
			minChar: 3,
			liveDelay: 1000,
			effect: 'slide',
			speed: 400,
			closeClass: '',
			param1: '',
			param2: '',
			param3: '',
			param4: '',
			param5: '',
			param6: '',
			param7: '',
			param8: '',
			param9: '',
			param10: '',
			afterLoad: function(){ }
		};
		
})(jQuery, window, document);
