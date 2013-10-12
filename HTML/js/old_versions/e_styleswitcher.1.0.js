/*
 * ************************************************************* *
 * Name       : eStyleSwitcher                                   *
 * Date       : January 2012                                     *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * http://themeforest.net/item/elite-a-powerfull-responsive-admin-theme/2997200
 * ************************************************************* *
 */
  
;(function($, window, document, undefined){
    $.fn.eStyleSwitcher = function(options) { 
	
		options = $.extend({}, $.fn.eStyleSwitcher.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj  = $(this);
				
				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
				
				/**	
				* Append a loading image/overlay to the body.
				**/	
				$('body').append('<div id="e-styleswitcher-overlay"><div><img src="images/loaders/type3/dark/24.gif" alt=""/><span>Changing style...</span></div></div>');
									
				/**	
				* Function for re-use.
				**/	
				function switchCss(style){
					
					/**	
					* Add the new stylesheet to the DOM.
					**/
					$(options.target).attr('href', options.dir+''+style+'.css');		
				}

				/**	
				* Run the localstorage if there is a key present and we can use localstorage.
				**/
				if(options.storeStyle === true && localStorage && localStorage.getItem('e_style') != null){
					switchCss(localStorage.getItem('e_style'));
				}
				
				if(obj.is('select')){
					obj.change(function(e){

						/**	
						* Get the new stylesheet.
						**/	
						var theme = $(this).val();
						
						/**	
						* Show a indicator image.
						**/		
						$('#e-styleswitcher-overlay').fadeTo(100,1.0,function(){
							
							/**	
							* Run the callback function.
							**/	
							if(typeof options.onSwitch == 'function'){
								options.onSwitch.call(this);
							}
							
							/**	
							* Switch css function.
							**/	
							switchCss(theme);
							
							/**	
							* Save the value.
							**/
							if(options.storeStyle === true && localStorage	){
								localStorage.setItem('e_style', theme);
							}
						});
						
						/**	
						* Fadeout.
						**/
						$('#e-styleswitcher-overlay').delay(1000).fadeOut();	
					});
				}else{
					
					/**	
					* Run with a simple click.
					**/
					obj.on(clickEvent, 'a', function(e){
						
						/**	
						* Get the new stylesheet.
						**/	
						var theme = $(this).data('styleswitcher-color');
						
						/**	
						* Show a indicator image.
						**/		
						$('#e-styleswitcher-overlay').fadeTo(100,1.0,function(){
							
							/**	
							* Run the callback function.
							**/	
							if(typeof options.onSwitch == 'function'){
								options.onSwitch.call(this);
							}
							
							/**	
							* Switch css function.
							**/	
							switchCss(theme);
							
							/**	
							* Save the value.
							**/
							if(options.storeStyle === true && localStorage	){
								localStorage.setItem('e_style', theme);
							}
						});
						
						/**	
						* Fadeout.
						**/
						$('#e-styleswitcher-overlay').delay(100).fadeOut();
						
						e.preventDefault();
					});
				}
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eStyleSwitcher.options = {
			target: '#themesheet',
			dir: 'css/theme/',
			storeStyle: true,
			onSwitch: function(){ }	
		};
		
})(jQuery, window, document);
