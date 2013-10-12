/*
 * ************************************************************* *
 * Name       : eSelect                                          *
 * Date       : December 2011                                    *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 2.0                                              *
 * Updated    : 01/03/2013                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function($, window, document, undefined){
	
	//"use strict"; // jshint ;_;
	
	var pluginName = 'eSelect';
	
	function Plugin(element, options){
		
		/**
		* Variables.
		**/			
		this.obj = $(element);
		this.o   = $.extend({}, $.fn[pluginName].defaults, options);
		
		this.init();
	};

	Plugin.prototype = {
	
		/**	
		* Important settings like touch support. 
		* 
		* @param:
		**/	
		_settings: function(){
			
            var self = this;
			
			/**
			* Check for touch support and set right click events.
			**/
			if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
				clickEvent = 'click tap';	
			}else{
				clickEvent = 'click';	
			}

		},
								
		/**	
		* Code that we run at the start. 
		* 
		* @param:
		**/	
		init: function(){
		
			var self = this;
			
			/**	
			* Build the container(s).
			**/	
			self._build();
			
		},

		/**
		* Build the select container.
		*
		* @param:
		**/
		_build: function(){
			
			var self = this;
			
			/**	
			* Destroy any previous build containers in order to update the options.
			**/	
			if(self.obj.parent('.e-select').length){
				self.obj.parent('.e-select').find('.e-select-inner, .e-select-options').remove();
				self.obj.unwrap();	
			}else if(self.obj.parent('.e-select-multiple').length){
				self.obj.parent('.e-select-multiple').find('.e-select-multiple-inner, .e-select-multiple-handle').remove();
				self.obj.unwrap();		
			}
			
			/**	
			* Build the container(s).
			**/	
			if(self.obj.attr('multiple') || self.obj.attr('size')){

				/**	
				* Set a height.
				**/	
				if(self.obj.attr('size')){
					var height = self.obj.attr('size');
					var size = height * 30;
					var setHeight = 'style="height:'+size+'px;"';
					var sizeClass = 'e-select-size';
				}else{
					var setHeight = '';
					var sizeClass = '';
				}
				
				/**	
				* Wrap all target select element, append the options.
				**/	
				self.obj
				.not(self.o.exclude)
				.hide()
				.wrap('<div class="e-select-multiple '+sizeClass+'" '+setHeight+'/>')
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
				.each(function(i){
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
					.parents('.e-select-multiple')
					.children('.e-select-multiple-inner')
					.children('ul')
					.append('<li class="'+selectClass+' '+copyClass+'" data-select-id="'+i+'">'+text+'</li>');
					
					/**	
					* Add an select id to every option
					**/	
					$(this).attr('data-select-id', i);	
					
				});	
				
			}else{

				/**	
				* Wrap all target select element, append the options.
				**/	
				self.obj
				.not(self.o.exclude)
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
				.each(function(i){
					var copyClass = $(this).attr('class');
					var text      = $(this).text();
					
					/**	
					* Get the right option to display at default.
					**/	
					if($(this).is(':selected')){
						$(this).parents('.e-select').children('.e-select-inner').children('.e-select-selected').text(text);
					}
					/**	
					* Get and set all options.
					**/	
					$(this).parents('.e-select').children('.e-select-options').children('ul').append('<li class="'+copyClass+'" data-select-id="'+i+'">'+text+'</li>');
					
					/**	
					* Add an select id to every option
					**/	
					$(this).attr('data-select-id', i);	
				});
	
			}
			
			/**	
			* Run jQuery UI.
			**/	
			self._dragHandle();
			
			/**	
			* Run click events.
			**/	
			self._clickEvents()
		},
		
		/**
		* Click events.
		*
		* @param:
		**/
		_clickEvents: function(){

			var self = this;
			
			self._settings();
			
			/**	
			* Show or hide the options on click. (regular select)
			**/	
			self.obj.parents('.e-select').on(clickEvent,'.e-select-inner',function(){
				var optBox = $(this).next('.e-select-options');
				if(optBox.is(':hidden')){
					$('.e-select-options').slideUp(self.o.speed);
					optBox.slideDown(self.o.speed);
				}else{
					optBox.slideToggle(self.o.speed);
				}
			});
			
			/**	
			* On click get and set the new default value,
			* and set the selected attr to the right option.
			* Lets get the train going(where chaining).
			* (regular select)
			**/	
			self.obj.parents('.e-select').on(clickEvent,'li', function(e){
				var id = $(this).attr('data-select-id');
				$(this).parents('.e-select')
				.children('.e-select-inner').children('.e-select-selected').text($(this).text())//set default value
				.parents('.e-select').find('select').children().removeAttr('selected')// remove the selected attribute
				.parent().children('option[data-select-id="'+id+'"]').attr('selected', 'selected')// find choosen value and set selected attribute
				.parents('.e-select').children('.e-select-options').slideUp(self.o.speed);//hide the options dropdown
				
				/**	
				* Run the callback function.
				**/	
				if(typeof self.o.onSelect == 'function'){
					self.o.onSelect.call(this);
				}					
			});

			/**	
			* Select/un-select values. (multiple select)
			**/	
			self.obj.parent('.e-select-multiple').on(clickEvent,'li', function(){
				var id = $(this).attr('data-select-id');
				
				if($(this).parents('.e-select-size').length){
					$(this).parent().find('.e-select-multiple-highlite').removeClass('e-select-multiple-highlite');
					$(this)
					.addClass('e-select-multiple-highlite')
					.parents('.e-select-size')
					.find('select')
					.children()
					.removeAttr('selected')
					.parent()
					.find('option[data-select-id="'+id+'"]')
					.attr('selected', 'selected');
				}else{
					
					if($(this).hasClass('e-select-multiple-highlite')){
						$(this)
						.removeClass('e-select-multiple-highlite')
						.parents('.e-select-multiple')
						.find('option[data-select-id="'+id+'"]')
						.removeAttr('selected');
					}else{
						$(this)
						.addClass('e-select-multiple-highlite')
						.parents('.e-select-multiple')
						.find('option[data-select-id="'+id+'"]')
						.attr('selected', 'selected');
					}
				}
				
				/**	
				* Run the callback function.
				**/	
				if(typeof self.o.onSelect == 'function'){
					self.o.onSelect.call(this);
				}					
			});

			/**	
			* Hide all options if clicked outside a select area. (regular select)
			**/	
			$(document).on(clickEvent, this, function(e){
				if(!$(e.target).is('.e-select *')){
					$('.e-select-options').slideUp(self.o.speed);
				}
			});
		},
		
		/**
		* Drag handle.
		*
		* @param:
		**/
		_dragHandle: function(){
			
			var self = this;
			
			/**	
			* Setting variables. (multiple select)
			**/	
			var selectMulti = self.obj.parent('.e-select-multiple');
			var boxOuter    = selectMulti.outerHeight();
			var boxInner    = selectMulti.children('.e-select-multiple-inner');
			var multiHandle = selectMulti.children('.e-select-multiple-handle').children();				
			var innerHeight = boxInner.outerHeight() +5;
			var barHeight   = boxOuter / (innerHeight/boxOuter);
			
			/**	
			* The scrollbar replacement. (multiple select)
			**/	
			multiHandle.height(barHeight);
			multiHandle.draggable({
				axis: 'y',
				containment: self.obj.parent(),    
				drag: function() {
					var scrBar = multiHandle.position().top;  
					boxInner.css({top: -(scrBar*(innerHeight/boxOuter))});
				}
			});
		},

		/**
		* Update select forms.
		*
		* @param:
		**/
		update: function(){

			var self = this;
			
			/**	
			* Build the container(s).
			**/	
			self._build();
		
		},
		
		/**
		* Destroy.
		*
		* @param:
		**/
		destroy: function(){
			var self = this;
			self.widget.off('click',self._clickEvents());
			self.obj.removeData(pluginName);		
		}
	};

	$.fn[pluginName] = function(option) {
  		return this.each(function() {
			var $this   = $(this);
            var data    = $this.data(pluginName);
            var options = typeof option == 'object' && option;
			if (!data){ 
			  $this.data(pluginName, (data = new Plugin(this, options)))
			}
			if (typeof option == 'string'){
				 data[option]();
			}
		});
	};
	
	/**
	* Default settings(dont change).
	* You can globally override these options
	* by using $.fn.pluginName.key = 'value';
	**/
	$.fn[pluginName].defaults = {
		exclude: '',
		speed: 200,
		onSelect: function(){ }		
	};


})(jQuery, window, document);