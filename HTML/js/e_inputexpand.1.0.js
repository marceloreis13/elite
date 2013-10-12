/*
 * ************************************************************* *
 * Name       : eInputExpand                                     *
 * Date       : July 2011                                        *
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
    $.fn.eInputExpand = function(options) { 
	
	 options = $.extend({}, $.fn.eInputExpand.options, options); 
	 
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
				* On click show the box.
				**/
				obj.on(clickEvent, this, function(e){
					var input = $(this);
					
					/**	
					* Run the callback function.
					**/	
					if(typeof options.before == 'function'){
						options.before.call(this);
					}

					/**
					* Remove the focus from the input.
					**/
					$('input').blur();
					
					/**
					* Set a couple of dimensions valuus.
					**/
					var h  = options.height; 
					var w  = options.width;
					var h2 = h / 2;
					var w2 = w / 2;
					var ht = h - 61;
					
					if($('#e-inputexpand').length < 1){
						/**
						* Append the box to the body.
						**/
						$('body').append('<div id="e-inputexpand" style="height:'+h+'px;width:'+w+'px;margin:-'+h2+'px 0 0 -'+w2+'px">'+
											 '<div id="e-inputexpand-content">'+
												'<textarea id="e-inputexpand-textarea" name="" style="height:'+ht+'px"></textarea>'+
											'</div>'+
											'<footer>'+
												'<a href="javascript:void(0);" id="e-inputexpand-submit">'+options.labelSubmit+'</a>'+
												'<a href="javascript:void(0);" id="e-inputexpand-cancel">'+options.labelCancel+'</a>'+
											'</footer>'+
										 '</div>'+
										 '<div id="e-inputexpand-overlay"></div>');					
						
						/**
						* Lets show the box and overlay.
						**/
						$('div#e-inputexpand-overlay').fadeTo(options.speed, options.opacity, function(){
							$('textarea#e-inputexpand-textarea').html(input.val());
							$('div#e-inputexpand').fadeIn(options.speed);		
						});
						
						/**
						* Add a target class to the input.
						**/
						input.addClass('e-inputexpand-source');
					}
					e.preventDefault();
				});
			

				/**
				* On click cancel/insert.
				**/
				$('body').on(clickEvent,'div#e-inputexpand a',function(e){
											
					/**
					* Run if insert is clicked.
					**/
					if($(e.target).is('a#e-inputexpand-submit')){
						/**
						* Get the value form the textarea.
						**/
						var getContent = $('textarea#e-inputexpand-textarea').val();
	
						/**
						* Add the content of the textarea to the target
						**/
						$('input.e-inputexpand-source').val(getContent);	
					}
					
					/**
					* Add a focus to the input and remove the target class.
					**/
					$('input.e-inputexpand-source').blur().removeClass('e-inputexpand-source');
					
					/**
					* Hide and remove the overlay and box.
					**/
					$('div#e-inputexpand-overlay, div#e-inputexpand').fadeOut(options.speed,function(){
						$(this).remove();
					});

					/**	
					* Run the callback function.
					**/	
					if(typeof options.after == 'function'){
						options.after.call(this);
					}
							
					e.preventDefault();
				});
				
				
				/**	
				* Cancel with the ESC key.
				**/	
				if(options.escKey === true){
					$(document).keypress(function(e){				
						if(e.keyCode == 27){
							/**
							* Hide and remove the overlay and box.
							**/
							$('div#e-inputexpand-overlay, div#e-inputexpand').fadeOut(options.speed,function(){
								$(this).remove();
							});			 
							/**	
							* Run the callback function.
							**/	
							if(typeof options.after == 'function'){
								options.after.call(this);
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
		$.fn.eInputExpand.options = {
			width: 320,
			height: 220,
			labelSubmit: 'Insert',
			labelCancel: 'Cancel',
			opacity: 0.5,
			escKey: true,
			before: function(){ },
			after: function(){ }
		};
		
})(jQuery, window, document);