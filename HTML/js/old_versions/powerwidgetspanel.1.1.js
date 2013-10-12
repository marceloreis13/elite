/*
 * ************************************************************* *
 * Name       : Power Widgets Panel                              *
 * Date       : May 2012                                         *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.1                                              *
 * Updated    : 08/27/2012                                       *
 * Developer  : Mark                                             *
 * Dependency : json2(ie7)                                       *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : http://codecanyon.net/item/power-widgets-manage-and-display-your-content/2901689
 * ************************************************************* *
 */ 

// modifyed version for elite theme
   
;(function($, window, document, undefined){
    $.fn.powerWidgetsPanel = function(options) { 
	   
		options = $.extend({}, $.fn.powerWidgetsPanel.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj            = $(this);
				var targetId       = $(options.target).attr('id');
				var o_target       = $(options.target);
				var o_trigger      = options.trigger;
				var o_widgetClass  = options.widgets;
				var o_localStorage = options.localStorage;
				var o_effectWidget = options.effectWidget;
				var o_speedWidget  = options.speedWidget;
				var o_triggerClass = options.triggerClass;
				var o_effectPanel  = options.effectPanel;
				var o_speedPanel   = options.speedPanel;
				var indicatorClass = 'powerwidgets-panel-active'

				//*****************************************************************//
				///////////////////////////// GET KEYS //////////////////////////////
				//*****************************************************************//
					
					if(localStorage && o_localStorage){  
						var keySettings    = 'powerwidgets_settings_'+location.pathname+'_'+targetId;
						var getKeySettings = localStorage.getItem(keySettings);
					}
					
				//*****************************************************************//
				/////////////////////////////// INIT ////////////////////////////////
				//*****************************************************************//

					/**
					* Force users to use an id(it's needed for the local storage).
					**/
				    if(!targetId.length){
						alert('You are using a class instead of an ID, Please change this!')	
					}
					
					/**
					* Check for touch support and set right click events.
					**/
					if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
						var clickEvent = 'click tap';	
					}else{
						var clickEvent = 'click';	
					}
												
				//*****************************************************************//
				/////////////////////// SET SETTINGS PANEL //////////////////////////
				//*****************************************************************//						
		   
					/**	
					* Run if data is present.
					**/
					if(localStorage && o_localStorage && getKeySettings){

						/**	
						* Parse the localStorage key back into JSON.
						**/
						var json = JSON.parse(getKeySettings);
						
						/**	
						* Loop the data and hide/show the widgets and set the inputs in
						* panel to checked(if hidden) and add an indicator class to the div.
						* Loop all labels and update the widget titles.
						**/			
						for(var key in json.widget){
	
							var widId = obj.find('[data-widget-id="'+json.widget[key].id+'"]');
	
							/**	
							* Set the right state of the checkbox and parent indicator class.
							**/
							if(json.widget[key].hidden == 1){
								widId.addClass(indicatorClass).find('[type=checkbox]').removeAttr('checked');
							}else{
								widId.find('[type=checkbox]').attr('checked', 'checked');				
							}
    
						}
					}
					
				//*****************************************************************//
				//////////////////// CONNECT LABELS TO INPUTS ///////////////////////
				//*****************************************************************//	
				
					/**	
					* Loop all inputs.
					**/
					obj.find('input').each(function(){
						var id  = 'pwlabels-'+Math.floor(Math.random()*999);
						
						if($(this).attr('id')){
							var newId = $(this).attr('id');	
						}else{
								newId = id;
						}
						if($(this).prev('label')){
							$(this).attr('id', newId).prev('label').attr('for', newId);
						}
						if($(this).next('label')){
							$(this).attr('id', newId).next('label').attr('for', newId);
						}							
					});

				//*****************************************************************//
				//////////////////////// HIDE/SHOW WIDGETS //////////////////////////
				//*****************************************************************//	

				/**	
				* On click edit widgets.
				**/
				obj.find('[data-widget-id]').on(clickEvent,'.e-checkbox', function(e){
					
                    var parents = $(this).parents('[data-widget-id]');
					var panelId = $('#'+parents.data('widget-id'));				
					
					/**	
					* Adding/removing an indicator class.
					**/
					if(parents.hasClass(indicatorClass)){
						parents.removeClass(indicatorClass);
					}else{
						parents.addClass(indicatorClass);
					}

					/**	
					* Setting the effect.
					**/
					if(panelId.is(':hidden')){
						if(o_effectWidget == 'fade'){
							var effect = 'fadeIn';	
						}else{
							    effect = 'slideDown';	
						}									
					}else{
						if(o_effectWidget == 'fade'){
							var effect = 'fadeOut';	
						}else{
							    effect = 'slideUp';	
						}										
					}
					
					/**	
					* Show or hide the widget.
					**/
					panelId[effect](o_speedWidget, function(){
						saveSettingsWidget();					
					});	
					
					/**	
					* Run the callback function.
					**/	
					if(typeof options.onToggle == 'function'){
						options.onToggle.call(this);
					}
					
					return false;
		
				});
				
				//*****************************************************************//
				////////////////////////// SHOW/HIDE PANEL //////////////////////////
				//*****************************************************************//			
				
				/**	
				* Show/hide the management panel.
				**/
				$('body').on(clickEvent, o_trigger, function(e){
					
					/**	
					* Split the triggerclass into open and a closed class.
					**/
					var tClass = o_triggerClass.split('|');
					
					/**	
					* Check and set the classes.
					**/
					if(obj.is(':hidden')){
						$(this).children().addClass(tClass[1]).removeClass(tClass[0]);
					}else{
						$(this).children().addClass(tClass[0]).removeClass(tClass[1]);						
					}
					
					/**	
					* Setting the effect.
					**/
					if(obj.is(':hidden')){
						if(o_effectPanel == 'fade'){
							var effect = 'fadeIn';	
						}else{
							    effect = 'slideDown';	
						}									
					}else{
						if(o_effectPanel == 'fade'){
							var effect = 'fadeOut';	
						}else{
							    effect = 'slideUp';	
						}										
					}
					
					/**	
					* Show or hide the panel.
					**/
					obj[effect](o_speedPanel);	
										
					e.preventDefault();
				});
					
				//*****************************************************************//
				/////////////////// SAVE SETTINGS WIDGET FUNCTION ///////////////////
				//*****************************************************************//		
					
					/**	
					* Function to save the stettings of the widgets.
					**/
					function saveSettingsWidget(){	
						if(localStorage && o_localStorage){ 
							var storeSettings = [];
							
							o_target.find(o_widgetClass).each(function(){
								var storeSettingsStr          = {};
								storeSettingsStr['id']        = $(this).attr('id');
								storeSettingsStr['style']     = $(this).attr('data-widget-attstyle');
								storeSettingsStr['title']     = $(this).children('header').children('h2').text();
								storeSettingsStr['hidden']    = ($(this).is(':hidden') ? 1 : 0);
								storeSettingsStr['collapsed'] = ($(this).hasClass('powerwidget-collapsed') ? 1 : 0);
								storeSettings.push(storeSettingsStr);
							});	
								
							var storeSettingsObj = JSON.stringify( {'widget':storeSettings} );
		
							/* Place it in the storage(only if needed) */
							if(getKeySettings != storeSettingsObj){
								localStorage.setItem(keySettings, storeSettingsObj); 
							}
						}
					}
			});
		}
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.powerWidgetsPanel.options = {
			target: '',
			widgets: '.powerwidget',
			localStorage: true,
			trigger: '',
			triggerClass:'plus-10 | min-10',
			effectPanel: 'slide',
			speedPanel: 200,
			effectWidget: 'slide',
			speedWidget: 200,
			onToggle: function(){}
		};
		
})(jQuery, window, document);
