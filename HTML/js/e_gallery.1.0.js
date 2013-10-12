/*
 * ************************************************************* *
 * Name       : eGallery                                         *
 * Date       : December 2011                                    *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.0                                              *
 * Updated    : --/--/----                                       *
 * Developer  : Mark                                             *
 * Dependency : jQueryUI core                                    *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
 
;(function($, window, document, undefined){
    $.fn.eGallery = function(options) { 
	
		options = $.extend({}, $.fn.eGallery.options, options); 

			return this.each(function() { 
			
				/**
				* Append the content of the trashbin to the bin.
				* Allow to set the main empty trash bin button on or off.
				**/
				if(options.clearTrash === true){
					var bin = '<div style="min-height:8.5em">'+
					          '<span class="e-gallery-emptybin"></span>'+
							  '<ul></ul>'+
							  '<div><span>'+options.labelTrash+'</span><a href="javascript:void(0);" class="emptybin">'+options.labelButton+'</a></div>'+
							  '</div>';					
				}else{
					var bin = '<div style="min-height:5.5em">'+
					          '<span class="e-gallery-emptybin"></span>'+
							  '<ul></ul>'+
							  '</div>';		
				}
				$('.e-gallery-trashbin').append(bin);
						
				/**
				* Variables.
				**/
				var obj              = $(this);								
				var gallList         = obj.children('ul');
				var gallListItem     = gallList.children('li');
				var trashBin         = obj.find('.e-gallery-trashbin').children('div');
				var trashList        = trashBin.children('ul');
				var gallHeader       = obj.find('header');
				var trashBox         = '.e-gallery-trashbin';
				var gallFilter       = obj.find('.e-gallery-filter');

				/**
				* Check for touch support and set right click events.
				**/
				if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch){
					var clickEvent = 'click tap';	
				}else{
					var clickEvent = 'click';	
				}
										
				/**
				* Making the gallery items draggable.
				**/
				if(options.draggable === true){
					gallListItem.find('div').css({cursor: 'move'});
					gallListItem.draggable({
						cancel: ".btn-undo, .btn-delete, .btn-lightbox",
						revert: "invalid",
						helper: "clone",
						cursor: "move",
						opacity: 0.8,
						start:function(e, ui){
							obj.find(trashBox).show();	
						},
						stop:function(event, ui){
							/* check the bin if its empty */
							setTimeout(function() {
								if(obj.find(trashBox).find('li').length > 0){
									obj.find(trashBox).show(200);	
								}else{
									obj.find(trashBox).slideUp(200);
								}
							}, 500);								
						}
					});	
				}
				
				/**
				* Making the trash item droppable.
				**/
				trashBin.droppable({
					accept: gallListItem,
					activeClass: "ui-state-highlight",
					drop: function(event, ui){
						deleteImage(ui.draggable);										
					}
				});
				
				/**
				* Making the gallery items droppable.
				**/
				gallList.droppable({
					accept:'.e-gallery-trashbin li',
					activeClass: "e-gallery-state-active",
					cancel: '.button-icon',
					drop: function(event, ui){
						revertImage(ui.draggable);							
					}
				});
				
				/**
				* Image deleting function.
				* This allows you to delete an gallery item and move 
				* it to the trash bin.
				**/
				function deleteImage(listItem) {
					listItem.fadeOut(function() {
						var list = $("ul", trashBin);
						listItem.find(".btn-delete, .btn-lightbox").hide().end().addClass('in-bin').attr('style', '');
						if(listItem.find('.btn-undo').length < 1){
							listItem.append('<a href="javascript:void(0);" class="btn-undo">Undo</a>').appendTo(list).fadeIn();
						}else{
							listItem.appendTo(list).fadeIn();
						}
					});				
				}
				
				/**
				* Image revert function that will allow you to revert items
				* that are in the trash bin. It will also check if the trash 
				* bin is empty, if so it will hide the trash bin.
				* If an image is revered it will reset teh filters.
				**/
				function revertImage(recItem){
					recItem.fadeOut(function(){
						recItem.removeClass('in-bin').find(".btn-undo").remove().end().find(".btn-delete, .btn-lightbox, img").show();
						recItem.appendTo(gallList).fadeIn();
					});
					/* reset the filter */
					gallFilter.find('.active').removeClass(options.activeClass).end().find('a:first').addClass(options.activeClass);
					/* reset all items */
					gallListItem.fadeTo(100,1.0);
					/* reset the bin if empty */			
					if(obj.find(trashBox).find('li').length < 2){
						obj.find(trashBox).delay(400).slideUp(200);
					}			
				}
				
				/**
				* Add a main delete trash button to the header,
				* and allow this button to empty the trash bin.
				**/				
				if(options.clearTrash === true){
					obj.on(clickEvent,'.emptybin', function(e){
						$(this).parents(obj).find(trashBox).find('li').fadeOut(200, function(){
							$(this).remove();
							obj.find(trashBox).slideUp(200, function(e){
								$(this).children().fadeOut();
							});
						});
						e.preventDefault();	
					});
				}else{
					obj.find('.emptybin').hide();
				}
				
				/**
				* Open the trash bin if an item is deleted with the delete button.
				**/				
				obj.on(clickEvent,'.btn-delete',function(e){
					$(this).parents(obj).find(trashBox).slideDown(200);
				});	
														
				/**
				* Delete to temp bin
				**/
				obj.on(clickEvent,'.btn-delete',function(e){
					deleteImage($(this).parents('li'));
					e.preventDefault();
				});
				
				/**
				* Undo deleted item.
				**/
				obj.on(clickEvent, '.btn-undo',function(e){			
					revertImage($(this).parents('li'));
					e.preventDefault();					
				});
				
				/**
				* The filter code that allows users to filter the items.
				**/				
				obj.find(gallFilter).on(clickEvent,'a',function(e){
					$(this).parents('ul').find('.'+options.activeClass).removeClass(options.activeClass);
					$(this).addClass(options.activeClass);
					var getFilter = $(this).attr('href').slice(1);
					if(getFilter == 'all'){
						$('*',gallListItem).fadeTo(200, 1.0);// IE issue with fading only list items (*)
					}else{
						gallListItem.each(function(){
							if(!$(this).hasClass('in-bin')){
								var dataFilter = $(this).data('gallery-filter');
								if(dataFilter == getFilter){
									$('*', this).fadeTo(200, 1.0);// IE issue with fading only list items (*)
								}else{
									$('*', this).fadeTo(200, options.opacityFilter);// IE issue with fading only list items (*)
								}
							}
					    });
					}
					e.preventDefault();
				});
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eGallery.options = {
			draggable: true,
			clearTrash: true,
			opacityFilter: 0.3,
			activeClass: 'active',
			labelButton: 'Empty',
			labelTrash: 'Dragg to delete'
		};
		
})(jQuery, window, document);
