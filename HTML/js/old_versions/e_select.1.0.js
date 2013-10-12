/*
 * ************************************************************* *
 * Name       : eSelect                                          *
 * Date       : December 2011                                    *
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
    $.fn.eSelect = function(options) { 
	
		options = $.extend({}, $.fn.eSelect.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj      = $(this);
				var highLite = 'e-select-multiple-highlite';

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
					
				/**	
				* Wrap all select fields, choose between multiple and 
				* regular select fields.
				**/	
                if(obj.attr('multiple')){
					
					/**	
					* Wrap all target select element, append the options.
					**/	
					obj
					.not(options.exclude)
					.hide()
					.wrap('<div class="e-select-multiple"/>')
					.after('<div class="e-select-multiple-inner">'+
							'<ul>'+
							'</ul>'+
							'</div>'+
							'<div class="e-select-multiple-handle">'+
							'<span></span>'+
							'</div>'	
					)
					.end()
					.children('option')
					.each(function(){
						var copyClass  = $(this).attr('class');
						var text       = $(this).text();
						
						/**	
						* Get the right option to display at default.
					    **/	
						if($(this).is(':selected')){
							var selectClass = 'e-select-multiple-highlite';
						}else{
							var selectClass = '';
						}
						
						/**	
						* Get and set all options.
						**/	
						$(this)
						.parents('div.e-select-multiple')
						.children('div.e-select-multiple-inner')
						.children('ul')
						.append('<li class="'+selectClass+' '+copyClass+'">'+text+'</li>');
					});	
				}else{

					/**	
					* Wrap all target select element, append the options.
					**/	
					obj
					.not(options.exclude)
					.hide()
					.wrap('<div class="e-select"/>')
					.after('<div class="e-select-inner">'+
					        '<div class="e-select-selected"></div><div class="e-select-trigger"><span></span></div>'+
							'</div>'+
							'<div class="e-select-options">'+
							'<ul>'+
							'</ul>'+
							'</div>'
					)
					.end()
					.children('option')
					.each(function(){
						var copyClass = $(this).attr('class');
						var text      = $(this).text();
						/**	
						* Get the right option to display at default.
						**/	
						if($(this).is(':selected')){
							$(this).parents('div.e-select').children('div.e-select-inner').children('div.e-select-selected').text(text);
						}
						/**	
						* Get and set all options.
						**/	
						$(this).parents('div.e-select').children('div.e-select-options').children('ul').append('<li class="'+copyClass+'">'+text+'</li>');
					});		
				}
				
				/**	
				* Hide all options if clicked outside a select area. (regular select)
				**/	
				$(document).on(clickEvent, this, function(e){
					if(!$(e.target).is('div.e-select *')){
						$('div.e-select-options').slideUp(options.speed);
					}
				});
				
				/**	
				* Show or hide the options on click. (regular select)
				**/	
				obj.parents('div.e-select').on(clickEvent,'div.e-select-inner',function(){
					var optBox = $(this).next('div.e-select-options');
					if(optBox.is(':hidden')){
						$('div.e-select-options').slideUp(options.speed);
						optBox.slideDown(options.speed);
					}else{
						optBox.slideToggle(options.speed);
					}
				});
								
				/**	
				* On click get and set the new default value,
				* and set the selected attr to the right option.
				* Lets get the train going(where chaining).
				* (regular select)
				**/	
				obj.parents('div.e-select').on(clickEvent,'li', function(){
					$(this).parents('div.e-select')
					       .children('div.e-select-inner').children('div.e-select-selected').text($(this).text())//set default value
					       .parents('div.e-select').find('select').children().removeAttr('selected')// remove the selected attribute
					       .parent().children('option:contains('+$(this).text()+')').attr('selected', 'selected')// find choosen value and set selected attribute
					       .parents('div.e-select').children('div.e-select-options').slideUp(options.speed);//hide the options dropdown
					
					/**	
					* Run the callback function.
					**/	
					if(typeof options.onSelect == 'function'){
						options.onSelect.call(this);
					}					
				});
				
				/**	
				* Setting variables. (multiple select)
				**/	
				var selectMulti = obj.parent('div.e-select-multiple');
				var boxOuter    = selectMulti.outerHeight();
				var boxInner    = selectMulti.children('div.e-select-multiple-inner');
				var multiHandle = selectMulti.children('div.e-select-multiple-handle').children();				
				var innerHeight = boxInner.outerHeight();
				var barHeight   = boxOuter / (innerHeight/boxOuter);
				
				/**	
				* The scrollbar replacement. (multiple select)
				**/	
				multiHandle.height(barHeight);
				multiHandle.draggable({
					axis: 'y',
					containment: obj.parent(),    
					drag: function() {
						var scrBar = multiHandle.position().top;  
						boxInner.css({top: -(scrBar*(innerHeight/boxOuter))});
					}
				});

				/**	
				* Select/un-select values. (multiple select)
				**/	
				selectMulti.on(clickEvent,'li', function(){
					if($(this).hasClass(highLite)){
						$(this)
						.removeClass(highLite)
						.parents('div.e-select-multiple')
						.find('option:contains('+$(this).text()+')')
						.removeAttr('selected');
					}else{
						$(this)
						.addClass(highLite)
						.parents('div.e-select-multiple')
						.find('option:contains('+$(this).text()+')')
						.attr('selected', 'selected');
					}
					
					/**	
					* Run the callback function.
					**/	
					if(typeof options.onSelect == 'function'){
						options.onSelect.call(this);
					}					
				});			
			});
		}
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eSelect.options = {
			exclude: '',
			speed: 200,
			onSelect: function(){ }	
		};
		
})(jQuery, window, document);
