/*
 * ************************************************************* *
 * Name       : eOsKeyboard                                      *
 * Date       : May 2011                                         *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency : jQuery UI core                                   *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */

;(function($, window, document, undefined){
    $.fn.eOsKeyboard = function(options) { 
	
		options = $.extend({}, $.fn.eOsKeyboard.options, options); 
	 
			return this.each(function() {  

				/**
				* Variables.
				**/
				var obj         = $(this);
				var shift       = false;				
				var capslock    = false;
							
				/**
				* Creating a keyboard as an variable.
				**/
				var theKeyboard = '<div class="e-oskeyboard" style="z-index:'+options.zIndex+'">'+
						  '<div><p>'+options.title+'</p><span>x</span></div>'+
						  '<ul>'+
							  '<li class="symbol"><span class="off">`</span><span class="on">~</span></li>'+
							  '<li class="symbol"><span class="off">1</span><span class="on">!</span></li>'+
							  '<li class="symbol"><span class="off">2</span><span class="on">@</span></li>'+
							  '<li class="symbol"><span class="off">3</span><span class="on">#</span></li>'+
							  '<li class="symbol"><span class="off">4</span><span class="on">$</span></li>'+
							  '<li class="symbol"><span class="off">5</span><span class="on">%</span></li>'+
							  '<li class="symbol"><span class="off">6</span><span class="on">^</span></li>'+
							  '<li class="symbol"><span class="off">7</span><span class="on">&amp;</span></li>'+
							  '<li class="symbol"><span class="off">8</span><span class="on">*</span></li>'+
							  '<li class="symbol"><span class="off">9</span><span class="on">(</span></li>'+
							  '<li class="symbol"><span class="off">0</span><span class="on">)</span></li>'+
							  '<li class="symbol"><span class="off">-</span><span class="on">_</span></li>'+
							  '<li class="symbol"><span class="off">=</span><span class="on">+</span></li>'+
							  '<li class="delete">delete</li>'+
							  '<li class="tab">tab</li>'+
							  '<li class="letter">q</li>'+
							  '<li class="letter">w</li>'+
							  '<li class="letter">e</li>'+
							  '<li class="letter">r</li>'+
							  '<li class="letter">t</li>'+
							  '<li class="letter">y</li>'+
							  '<li class="letter">u</li>'+
							  '<li class="letter">i</li>'+
							  '<li class="letter">o</li>'+
							  '<li class="letter">p</li>'+
							  '<li class="symbol"><span class="off">[</span><span class="on">{</span></li>'+
							  '<li class="symbol"><span class="off">]</span><span class="on">}</span></li>'+
							  '<li class="symbol"><span class="off">\</span><span class="on">|</span></li>'+
							  '<li class="capslock">caps</li>'+
							  '<li class="letter">a</li>'+
							  '<li class="letter">s</li>'+
							  '<li class="letter">d</li>'+
							  '<li class="letter">f</li>'+
							  '<li class="letter">g</li>'+
							  '<li class="letter">h</li>'+
							  '<li class="letter">j</li>'+
							  '<li class="letter">k</li>'+
							  '<li class="letter">l</li>'+
							  '<li class="symbol"><span class="off">;</span><span class="on">:</span></li>'+
							  '<li class="symbol"><span class="off">\'</span><span class="on">&quot;</span></li>'+
							  '<li class="enter">enter</li>'+
							  '<li class="left-shift">shift</li>'+
							  '<li class="letter">z</li>'+
							  '<li class="letter">x</li>'+
							  '<li class="letter">c</li>'+
							  '<li class="letter">v</li>'+
							  '<li class="letter">b</li>'+
							  '<li class="letter">n</li>'+
							  '<li class="letter">m</li>'+
							  '<li class="symbol"><span class="off">,</span><span class="on">&lt;</span></li>'+
							  '<li class="symbol"><span class="off">.</span><span class="on">&gt;</span></li>'+
							  '<li class="symbol"><span class="off">/</span><span class="on">?</span></li>'+
							  '<li class="right-shift">shift</li>'+
							  '<li class="space">space</li>'+
						  '</ul>'+
					  '</div>';
				
				/**
				* Giving an extra class depending on the type of input.
				**/				
				if(obj.is('textarea')){
					var eType = 'e-oskeyboard-textarea';
				}else if(obj.is('input')){
					var eType = 'e-oskeyboard-input';	
				}
					  
				/**
				* Wrapping the field and adding the keyboard.
				**/					  
				obj.wrap('<div class="e-oskeyboard-wrap clearfix '+eType+'"></div>').parents('.e-oskeyboard-wrap').append(theKeyboard);

				/**
				* Showing the keyboard on focus or click.
				**/					
				if(options.trigger == 'focus'){
					obj.focus(function(){	
						/**
						* Getting the height of the field + distance.
						**/						  
						var posY = $(this).outerHeight()+ options.posY;
						/**
						* Giving the keyboard the right position.
						**/					
						$(this).next().css({top: posY, right: options.posX}).fadeIn(200);
					});
				}else if(options.trigger == 'icon'){
					/**
					* Add a trigger icon, the position is different upon input type.
					**/	
					obj.parent().append('<span class="e-oskeyboard-icon"></span>');	
					/**
					* Getting the height of the field + distance.
					**/	
					obj.parent().children('span').click(function(){	
						/**
						* Getting the height of the field + distance.
						**/						  
						var posY = $(this).parent().children('input').outerHeight()+ options.posY;
						/**
						* Giving the keyboard the right position.
						**/					
						$(this).prev().css({top: posY, right: options.posX}).fadeIn(200);
					});
					
				}

				/**
				* Add, change, update and delte characters.
				**/	
				obj.parents('.e-oskeyboard-wrap').find('li').click(function(){
					/**
					* Variables.
					**/	
					var oskeys     = $(this);
					var oskeyboard = oskeys.parent('ul');
					var character  = oskeys.html(); // If it's a lowercase letter, nothing happens to this variable
					var getInput   = oskeys.parents('.e-oskeyboard-wrap').find(obj);
					/**
					* Shift keys.
					**/	
					if (oskeys.hasClass('left-shift') || oskeys.hasClass('right-shift')) {
						oskeyboard.find('.letter').toggleClass('uppercase');
						oskeyboard.find('.symbol span').toggle();
						shift = (shift === true) ? false : true;
						var capslock = false;
						return false;
					}
					/**
					* Caps lock.
					**/	
					if (oskeys.hasClass('capslock')) {
						oskeyboard.find('.letter').toggleClass('uppercase');
						var capslock = true;
						return false;
					}
					/**
					* Delete.
					**/	
					if (oskeys.hasClass('delete')) {
						if(getInput.is('textarea')){
							var html = getInput.html();
							getInput.html(html.substr(0, html.length - 1));
						}else if(getInput.is('input')){
							var html = getInput.val();
							getInput.val(html.substr(0, html.length - 1));
						}
						return false;
					}
					/**
					* Special characters.
					**/	
					if (oskeys.hasClass('symbol')){ 
						var character = $('span:visible', oskeys).html();
					}
					if (oskeys.hasClass('space')){ 
						var character = ' ';
					}
					if (oskeys.hasClass('tab')){ 
						var character = "\t";
					}
					if (oskeys.hasClass('enter')){ 
						var character = "\n";
					}
					/**
					* Uppercase letter.
					**/	
					if (oskeys.hasClass('uppercase')){
						 var character = character.toUpperCase();
					}
					/**
					* Remove shift once a key is clicked.
					**/	
					if (shift === true) {
						oskeyboard.find('.symbol span').toggle();
						if (capslock === false){ 
							oskeyboard.find('.letter').toggleClass('uppercase')
						}
						shift = false;
					}
					/**
					* Add the character.
					**/	
					if(getInput.is('textarea')){
						getInput.html(obj.html() + character);
					}else if(getInput.is('input')){
						getInput.val(obj.val() + character);
					}
					
				});
				
				/**
				* Hide the keyboard.
				**/				
				$('.e-oskeyboard div span').click(function(){
					$(this).parents('.e-oskeyboard').fadeOut(200,function(){
						$(this).css({top: 0, left: 0});
					});
				});
				
				
				/**
				* Making the keyboard draggable.
				**/
				if(options.draggable === true){
					$(".e-oskeyboard").draggable({
						handle: $(".e-oskeyboard > div")
					});
				}

		   });
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eOsKeyboard.options = {
			title:'OS Keyboard',
			trigger: 'icon',
			draggable: true,
			posY: 20,
			posX: 0,
			zIndex: 1000		
		};
		
})(jQuery, window, document);
