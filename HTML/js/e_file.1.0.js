/*
 * ************************************************************* *
 * Name       : eFile                                            *
 * Date       : January 2012                                     *
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
    $.fn.eFile = function(options) { 
	
		options = $.extend({}, $.fn.eFile.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj = $(this);
				
				/**	
				* Check for the right type and wrap all file inputs.
				**/
				if(obj.is('[type=file]')){
					
					obj
					.not(options.exclude)
					.wrap('<div class="e-file"/>')
					.before('<input type="text" class="e-file-input"/><span class="e-file-button">'+options.label+'</span>')
					.wrap('<div class="e-file-wrapper"/>');
					
					/**	
					* IOS cant handle the file type, lets keep it simple
					* and add some text as an indicator.
					**/
					if(navigator.platform === 'iPad' || navigator.platform === 'iPhone' || navigator.platform === 'iPod'){
						obj.parents('.e-file').find('.e-file-input').val('disabled');
					}
				}
				
				/**	
				* Make the hidden file input follow your cursor.
				**/
				obj.parents('.e-file').mousemove(function(e){
					
					/**	
					* Set some variables.
					**/
					var fileWrap = $(this).offset();
				    var realFile = $(this).children('.e-file-wrapper');

					/**	
					* Set the position for the file input.
					**/
					realFile.css({
						left: e.pageX - fileWrap.left - (realFile.width()) + 30,
						top: e.pageY - fileWrap.top - (realFile.height() / 2)
					});
				});
				
				/**	
				* Run if the file input has any changes.
				**/
				obj.change(function(){
					
					/**	
					* Get the file value, and strip it down to the file only.
					**/
					var getFile = $(this).val().split(/\\/).pop();

					/**	
					* Get the file value, and strip it down to the file only.
					**/
					$(this).parents('.e-file').children('.e-file-input').val(getFile);

				    /**	
					* Run the callback function.
					**/	
					if(typeof options.onUpload == 'function'){
						options.onUpload.call(this);
					}					
				});
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eFile.options = {
			label: 'upload',
			exclude: '',
			onUpload: function(){ }	
		};
		
})(jQuery, window, document);
