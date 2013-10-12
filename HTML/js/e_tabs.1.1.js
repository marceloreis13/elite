/*
 * ************************************************************* *
 * Name       : eTabs                                            *
 * Date       : March 2011                                       *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.2                                              *
 * Updated    : 05/03/2013                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function($, window, document, undefined){
    $.fn.eTabs = function(options) { 
	
		options = $.extend({}, $.fn.eTabs.options, options); 
	 
			return this.each(function() {  
				
				/**
				* Variables.
				**/
				var obj              = $(this);
				var contentDiv       = obj.find('div.etabs-content');
				var contentDivFirst  = obj.find('div.etabs-content:first');
				var unOrderdList     = obj.find('ul.etabs:first');
				var listItem         = unOrderdList.children('li');
				var tabAnchor        = listItem.children('a');
				var activeClass      = 'etabs-active';
				var listItemFirst    = unOrderdList.children('li:first');
				var objId            = obj.attr('id');
				var widthLi          = 0;

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
				
				/**
				* Check for localStorage support.
				**/
				var storage = !!function() {
				  var result,
					  uid = +new Date;
				  try {
					localStorage.setItem(uid, uid);
					result = localStorage.getItem(uid) == uid;
					localStorage.removeItem(uid);
					return result;
				  } catch(e) {}
				}() && localStorage;
				
				/**
				* Make sure that the selector is an ID.
				**/
				if(!objId){
					alert('The tab plugin can only be used with a ID selector, please change this!');	
				}
	
				/**	
				* Run the onSwitch function.
				**/	
				if(typeof options.onSwtart == 'function'){
					options.onStart.call(this);
				} 
							
				/**
				* Hide all content divs and add a clearfix class.
				**/
				contentDiv.hide().addClass('clearfix');
				
				/**
				* Get the right tab function.
				**/					
				function setActiveTab(tab){
					var selTab = tab -1;
                    var i = 0;
					listItem.each(function(){
						if(i == selTab){
							$(this).addClass(activeClass);
						}else{
							$(this).removeClass(activeClass);
						}
						i++;
					});					
				}
				
				/**
				* Get the right tab content function.
				**/				
				function setActiveContent(box){
					var selTab = box -1;
					var i      = 0;
					contentDiv.each(function(){
						if(i == selTab){
							$(this).show();
						}
						i++;	
					});						
				}
				
				/**
				* Savety check.
				**/
				if(storage && options.storeTab === true){
					var storedTab = localStorage.getItem('e_tabs_'+location.pathname+'_'+objId);			
				}else{
					var storedTab = 1;
				}	

				/**
				* Check if the first tab should be open, if so set the active 
				* class and show the first tab content. Otherwise pick the 
				* selected option, and show the tab. 
				**/
				if((options.selected == 1) && (storedTab == 1)){
					
					/**
					* Add active class to first list item/tab.
					**/
					listItemFirst.addClass(activeClass).show();
					
					/**
					* Show first tab content.
					**/
				    contentDivFirst.show();
				}else{
					/**
					* Check if local storage is true..
					**/	
					if(storage && options.storeTab == true && storedTab != null){
						
						/**
						* Set the right tab.
						**/					
						setActiveTab(storedTab);
						
						/**
						* Get the right tab content.
						**/
						setActiveContent(storedTab);						
					}else{
						
						/**
						* Set the right tab.
						**/					
						setActiveTab(options.selected);
						
						/**
						* Get the right tab content.
						**/
						setActiveContent(options.selected);
					}
				}	
				
				/**
				* Get and load all tabs that have AJAX content.
				**/
				tabAnchor.each(function(){
					var file   = $(this).data('tab-source');
					var source = $(this).attr("href");	

					if(file && !$.trim($(source).html()).length){
						$(source).load(file, function(response, status, xhr) {
							if(status == "error"){
								$(source).html(xhr.status + " " + xhr.statusText);
							}
					   });
					}					
				});
				
				/**						
				* On click open the right tab content, and add 
				* the active class.
				**/
				listItem.on(clickEvent, 'a',function(e){
					var source = $(this).attr("href");
					
					/**
			        * Remove all active classes and set active class 
					* on the activelist item.
					**/
					tabAnchor.parent('li').removeClass(activeClass+' etabs-open-active');
					$(this).parent('li').addClass(activeClass+' etabs-open-active')

					/**
					* Hide all tab content except the selected tab.
					**/
					contentDiv.not(source).hide();
					
					/**
					* Switch to the active tab and run onSwitch(if present).
					**/
					if($(source).is(':hidden')){
						$(source).fadeIn(1, function(){		
							/**	
							* Run the onSwitch function.
							**/	
							if(typeof options.onSwitch == 'function'){
								options.onSwitch.call(this);
							} 
						});
					}
						
					/**
					* Save tab to local storage.
					**/
					if(storage && options.storeTab === true){
						obj.find('li').each(function(i){
							if($(this).hasClass(activeClass)){
								localStorage.setItem('e_tabs_'+location.pathname+'_'+objId, i+1); 
							}
						});
					}
					
					e.preventDefault();  
				});

				/**
				* Allow the tabs to be responsive.
				**/	
				if(options.responsive === true){
					
					/**
					* Measure all children.
					**/	
					listItem.each(function(){
						 widthLi += $(this).width();
					});

					/**
					* Build a function for easy access.
					**/	
					function responsiveMode(){	

						/**
						* Add a open class to the active class.
						**/	
						unOrderdList.children('.'+activeClass).addClass('etabs-open-active');
						
						/**
						* Check if its already wrapped.
						**/											
						var wrapped = obj.children('div.etabs-to-select').length;
						
						/**
						* Wrap or unwrap tabs.
						**/	
						if(widthLi >= (unOrderdList.outerWidth() - 10)){
							if(wrapped == 0){
								unOrderdList
								.wrap('<div class="etabs-to-select"/>')
								.after('<div class="etabs-arrow-left"><span></span></div><div class="etabs-arrow-right"><span></span></div>');								
							}
							listItem.hide().css({width: (unOrderdList.outerWidth() - 10)})
							unOrderdList.children('.'+activeClass).show();
						}else{
							if(wrapped){
                                listItem.removeAttr('style').show();
								unOrderdList.unwrap();
								$('.etabs-arrow-left, .etabs-arrow-right ').remove();
								obj.find('.etabs-open-active').removeClass('etabs-open-active');
							}
						}					
					}

					/**
					* Previous tab button.
					**/	
					obj.on(clickEvent, '.etabs-arrow-left', function(e){
						var openClass = unOrderdList.children('li.etabs-open-active');
						if(openClass.prev('li').length){
							unOrderdList
							.children('li.etabs-open-active')
							.hide()
							.removeClass('etabs-open-active')
							.prev('li')
							.show()
							.addClass('etabs-open-active');	
						}
					});

					/**
					* Next tab button.
					**/	
					obj.on(clickEvent, '.etabs-arrow-right', function(e){
						var openClass = unOrderdList.children('li.etabs-open-active');
						if(openClass.next('li').length){
							unOrderdList
							.children('li.etabs-open-active')
							.hide()
							.removeClass('etabs-open-active')
							.next('li')
							.show()
							.addClass('etabs-open-active');	
						}	
					});
					/**
					* Run the code.
					**/							
					responsiveMode();
					
					/**
					* Run when the window resizes.
					**/	
					$(window).bind('resize','ready',function(){
						
						/**
						* Run the code.
						**/							
						responsiveMode();
					});	
				}
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eTabs.options = {
			selected: 1,
			storeTab: true,
			responsive: false,
			onSwitch: function(){ },
			onSwitch: function(){ }			
		};
		
})(jQuery, window, document);
