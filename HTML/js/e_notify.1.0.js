/*
 * ************************************************************* *
 * Name       : eNotify                                          *
 * Date       : May 2011                                         *
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

    //*****************************************************************//
    /////////////////////////// PRIVATE METHODS /////////////////////////
	//*****************************************************************//	
	
	function init(){
		$(document).ready(function(){
			/**
			* Append all placeholders.
			**/		
			$('body').append('<ul class="e-growl-left-top"></ul>'+
							 '<ul class="e-growl-left-bottom"></ul>'+
							 '<ul class="e-growl-right-top"></ul>'+
							 '<ul class="e-growl-right-bottom"></ul>'+
							 '<div class="e-notification-top"></div>'+
							 '<div class="e-notification-bottom"></div>');		
		});
			
	}
	
	// Initialize		
	init();	
	
	//*****************************************************************//
 	////////////////////////// PUBLIC INTERFACE /////////////////////////
	//*****************************************************************//
	
	$.e_notify = {
		
		//*****************************************************************//
		////////////////////////////// GROWL ////////////////////////////////
		//*****************************************************************//
		
		growl: function(str){
			
			/**
			* Check for touch support and set right click events.
			**/
			if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
				var clickEvent = 'click tap';	
			}else{
				var clickEvent = 'click';	
			}	
		
			/**	
			* Run a callback function on show.
			**/	
			if(typeof str.onShow == 'function'){
				str.onShow.call(this);
			}
			
			/**
			* Generate a custom id.
			**/	
			var growlId = Math.floor(Math.random()*1111);
			
			/**
			* Build the growl.
			**/				
			var growl = '<li><div class="e-growl" id="e-growl-'+growlId+'">'+
							 '<span>x</span>'+
							 '<div class="e-growl-img"><img src="'+str.image+'" alt=""/></div>'+
							 '<div class="e-growl-content">'+
								 '<h5>'+str.title+'</h5>'+
								 '<p>'+str.text+'</p>'+
							 '</div>'+
						 '</div></li>';

			/**
			* Get and set position, and append/prepend the growl
			**/	
			switch(str.position){			
				case 'left-top':
					$('ul.e-growl-left-top').addClass('e-growl-wrapper').prepend(growl);
				break;
				case 'left-bottom':
					$('ul.e-growl-left-bottom').addClass('e-growl-wrapper').append(growl);
				break;			
				case 'right-top':
					$('ul.e-growl-right-top').addClass('e-growl-wrapper').prepend(growl);
				break;
				case 'right-bottom':
					$('ul.e-growl-right-bottom').addClass('e-growl-wrapper').append(growl);
				break;								
			}		
							
			/**
			* Set a random ID.
			**/	
			var singleGrowl = $('#e-growl-'+growlId);
			
			/**
			* Remove parts that are not used.
			**/	
			if(!str.closable === true){
				singleGrowl.find('span').remove();	
			}
			if(!str.image){
				singleGrowl.children('div').css({width: '100%'}).prev('.e-growl-img').remove();	
			}
			if(!str.title){
				singleGrowl.find('h5').remove();	
			}			
			if(!str.text){
				singleGrowl.find('p').remove();	
			}
			
			/**
			* Add a custom classname.
			**/				
			if(str.className){
				singleGrowl.addClass(str.className);	
			}else{
				singleGrowl.addClass('growl-default');
			}
									
			/**
			* Animate the li elment to the right height and show the growl.
			**/
			singleGrowl.parent('li').animate({height: (singleGrowl.height() +15)+'px'},str.speed,function(){
				/**
				* Check if the growl has a delay.
				**/
				if(str.delay > 0){
					var dly = str.delay;
				}else{
					    dly = 0;	
				}
				
			   /**
				* Run the growl effect(s).
				**/
				if(str.effect == 'fade'){
					singleGrowl.css({right: 0, left:0}).delay(dly).fadeIn(str.speed).trigger('autohide');
				}else if(str.effect == 'slidein'){
					singleGrowl.delay(dly).show(1, function(){
						/**
						* Set the right position.
						**/
						if(singleGrowl.parents('ul').is('ul.e-growl-left-top, ul.e-growl-left-bottom')){
							$(this).animate({left:0},str.speed,function(){
								$(this).trigger('autohide');
							});	
						}else{
							$(this).animate({right: 0},str.speed,function(){
								$(this).trigger('autohide');
							});	
						}
					});					
				}
				
				/**
				* Bind the auto hide part, this will run after the effects are run(above).
				**/
				$(this).bind('autohide',function(){
					if(str.sticky != true){
						$(this).children('div').delay(str.time).fadeOut(str.speed, function(){
							$(this).parent('li').slideUp(str.speed,function(){
								$(this).remove();
								
								/**	
								* Run a callback on hide.
								**/	
								if(typeof str.onHide == 'function'){
									str.onHide.call(this);
								}	
							});
						});
					}
				});
			});
			
			/**
			* Hide the growl with a click event, and run a callback.
			**/
			singleGrowl.on(clickEvent,'span',function(){
				$(this).parents('div').fadeTo(str.speed, 0.0, function(){
					$(this).parent('li').slideUp(str.speed,function(){
						$(this).remove();
					});
				});	
				
				/**	
				* Run a callback on hide.
				**/	
				if(typeof str.onHide == 'function'){
					str.onHide.call(this);
				}					
			});
			
			/**	
			* Check maxopen value(s), check position growls(top|bottom) and remove growls if needed.
			**/	
            var notThis = singleGrowl.parent();	
			if(singleGrowl.parents('ul').is('.e-growl-left-top, .e-growl-right-top')){	
				singleGrowl.parents('ul').children('li').each(function(i){
                    if(i >= str.maxOpen){
						$(this).not(notThis).fadeOut(str.speed, function(){
							$(this).remove();
							
							/**	
							* Run a callback on hide.
							**/	
							if(typeof str.onHide == 'function'){
								str.onHide.call(this);
							}	
						});
					}
				});
			}else{
				
				/**	
				* Create a mini reverse plugin.
				**/					
				jQuery.fn.reverse = [].reverse;
				/**	
				* And the reverse the each.
				**/				
				singleGrowl.parents('ul').children('li').reverse().each(function(i){
                    if(i >= str.maxOpen){
						$(this).not(notThis).fadeOut(str.speed, function(){
							$(this).remove();
							
							/**	
							* Run a callback on hide.
							**/	
							if(typeof str.onHide == 'function'){
								str.onHide.call(this);
								//str.onHide = false;
							}	
						});
					}
				});		
			}
	    },
		
		//*****************************************************************//
		/////////////////////////// NOTIFICATION ////////////////////////////
		//*****************************************************************//
					
		notification: function(str){

			/**
			* Check for touch support and set right click events.
			**/
			if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
				var clickEvent = 'click tap';	
			}else{
				var clickEvent = 'click';	
			}	
			
			/**	
			* Run a callback function on show.
			**/	
			if(typeof str.onShow == 'function'){
				str.onShow.call(this);
			}
			
			/**
			* Generate a custom id.
			**/	
			var notiId = Math.floor(Math.random()*1111);
			
			/**
			* Build the notification.
			**/	
            var noti = '<div id="e-notification-'+notiId+'" class="e-notification"><p>'+str.text+'</p><span>X</span></div>';
			
			/**
			* Get and set position, if there is an target use this instead of a position,
			* and append the notification.
			**/
			if(str.target.length > 1 ){
	            $(str.target).prepend(noti);
			}else{
				switch(str.position){			
					case 'top':
						$('div.e-notification-top').prepend(noti);
					break;
					case 'bottom':
						$('div.e-notification-bottom').prepend(noti);
					break;									
				}
			}
			
			/**
			* Set a random ID.
			**/	
			var singleNoti = $('#e-notification-'+notiId);
			
			/**
			* Remove parts that are not used.
			**/	
			if(!str.closable === true){
				singleNoti.find('span').remove();	
			}

			/**
			* Add a custom classname.
			**/				
			if(str.className){
				singleNoti.addClass(str.className);	
			}else{
				singleNoti.addClass('notification-default');
			}
		
			/**
			* Check if the growl has a delay.
			**/
			if(str.delay > 0){
				var dly = str.delay;
			}else{
				    dly = 0;
			}
			
			/**
			* Set the right effect.
			**/
			if(str.effect == 'fade'){			
				var effectIn  = 'fadeIn'
				var effectOut = 'fadeOut'
			}else if(str.effect == 'slide'){
				    effectIn  = 'slideDown'
				    effectOut = 'slideUp'
			}

			/**
			* Run the effects.
			* Check for open notifications and remove theme.
			*
			* THIS PART WILL BE UPDATED
			**/
			if(singleNoti.next('div.e-notification').length){
				/**	
				* Remove any old notifications.
				**/					
				singleNoti.next('div.e-notification')[effectOut](str.speed,function(){
					$(this).remove();
					
				    /**	
				    * Show the notification
				    **/		
					singleNoti.delay(dly)[effectIn](str.speed,function(){
						if(str.sticky != true){
							$(this).delay(str.time)[effectOut](str.speed, function(){
								$(this).remove();
									
								/**	
								* Run a callback on hide.
								**/	
								if(typeof str.onHide == 'function'){
									str.onHide.call(this);
								}	
							});
						}
					});
				});
			}else{
				singleNoti.delay(dly)[effectIn](str.speed,function(){
					if(str.sticky != true){
						$(this).delay(str.time)[effectOut](str.speed, function(){
							$(this).remove();
								
							/**	
							* Run a callback on hide.
							**/	
							if(typeof str.onHide == 'function'){
								str.onHide.call(this);
							}	
						});
					}
				});	
			}
			
			/**
			* Hide the notification with a click event, and run a callback.
			**/
			singleNoti.on(clickEvent,'span',function(){				
				$(this).parent('div')[effectOut](str.speed, 0.0, function(){
					$(this).remove();
				});	
				
				/**	
				* Run a callback on hide.
				**/	
				if(typeof str.onHide == 'function'){
					str.onHide.call(this);
					str.onHide = false;
				}					
			});
		},

		//*****************************************************************//
		///////////////////////////// LOADER ////////////////////////////////
		//*****************************************************************//
			
		loader: function(str){
			
			/**	
			* Run a function on show.
			**/	
			if(typeof str.onShow == 'function'){
				str.onShow();
			}
			
			/**
			* Append the loader.
			**/	
			$('body').append('<div id="e-loader"><div id="e-loader-overlay"></div><div id="e-loader-img"><img src="'+str.image+'" alt=""/></div></div>');		

			/**
			* Set opacity overlay.
			**/	
			$('#e-loader-overlay').css({opacity: str.opacity});
			
			/**
			* Set the position and add the growl to the placeholder.
			**/
			switch(str.position){
				case 'left-top':
					$('#e-loader-img').css({left:20, top:20});
				break;
				case 'left-bottom':
					$('#e-loader-img').css({left:20, bottom:20});
				break;
				case 'right-top':
					$('#e-loader-img').css({left:20, top:20});
				break;
				case 'right-bottom':
					$('#e-loader-img').css({right:20, bottom:20});
				break;
				case 'center':
				
					var imgSize = str.imageSize.split('|')
				    var getWidth  = imgSize[0] / 2;
					var getHeight = imgSize[1] / 2;
					
					$('#e-loader-img').css({left:'50%', top:'50%', marginLeft: '-'+(getWidth + 10)+'px', marginTop: '-'+(getHeight + 10)+'px'});
				break;													
			}
			
			/**
			* Check and set delay.
			**/	
			if(str.delay > 0){	
				var delay = str.delay;
			}else{
			    var delay = 0	
			}
			
			/**	
			* Show and hide the loader.
			**/	
			$('#e-loader').delay(delay).fadeIn(str.speed).delay(str.time).fadeOut(str.speed, function(){
				$(this).remove();
				
				/**	
				* Run a function on hide.
				**/	
				if(typeof str.onHide == 'function'){
					str.onHide.call(this);
				}					
			});

		},
		
		//*****************************************************************//
		/////////////////////////// COUNTDOWN ///////////////////////////////
		//*****************************************************************//
		
		countdown: function(){
			// upcomming!!!			
		},
		
		//*****************************************************************//
		/////////////////////////////// CLEAR ///////////////////////////////
		//*****************************************************************//
						
		clear: function(str){
			
			/**	
			* Run a function at start.
			**/	
			if(typeof str.beforeClear == 'function'){
				str.beforeClear.call(this);
			}	
			
			/**	
			* Remove all open growls/notifications.
			**/				
			if(str.type == 'growl'){
				$('ul.e-growl-wrapper').children('li').fadeOut(200, function(){
					$(this).remove();
					if(typeof str.afterClear == 'function'){
						str.afterClear.call(this);
						str.afterClear = false;
					}  										
				});
			}else if(str.type == 'notification'){
				$('div.e-notification').fadeOut(200, function(){
					$(this).remove();
					if(typeof str.afterClear == 'function'){
						str.afterClear.call(this);
						str.afterClear = false;
					}           
				}); 				
			}
	 			
		},
	};
})(jQuery, window, document);
