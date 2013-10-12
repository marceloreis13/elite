/*
 * ************************************************************* *
 * Name       : eContactForm                                     *
 * Date       : September 2011                                   *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.1                                              *
 * Updated    : 20/11/2012                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.4+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
 
;(function($, window, document, undefined){
    $.fn.eContactForm = function(options) { 
	
		options = $.extend({}, $.fn.eContactForm.options, options); 	 

			return this.each(function() {  

				/**
				* Variables.
				**/
				var obj           = $(this);
				var input         = obj.find('input:not([type=submit]), select, textarea');
				var errorClass    = 'e-contactform-errorlabel';
				var passClass     = 'e-af-match'

				/**
				* Function that ads a error label to the field.	
				**/						
				function runCheck(ivar, evar){
					if(!ivar.parents('.'+errorClass).length){
						var parDiv = ivar.parent('div');
						
						/**
						* Getting a custom error label.	
						**/	
						if(evar === undefined){
							var labelError = options.labelError;
						}else{
							var labelError = evar;
						}
						/**
						* Wrap and add the error label to the input.
						* Check for out other form styling plugins and adjust to it.	
						**/	
						if(parDiv.hasClass('e-checkbox') || parDiv.hasClass('e-select') || parDiv.hasClass('e-select-multiple')){
							/**
							* Set extra styling for checkbox fields.	
							**/	
							if(parDiv.hasClass('e-checkbox')){
								var exClass = 'width:auto;float:left;';
							}else{
								var exClass ='';
							}
							ivar
							.parent()
							.wrap('<div class="'+errorClass+' clearfix" style="'+exClass+'"/>')
							.parent('.'+errorClass)
							.prepend('<span>'+labelError+'<span></span></span>');
						}else{
							ivar
							.wrap('<div class="'+errorClass+' clearfix"/>')
							.parent('.'+errorClass)
							.prepend('<span>'+labelError+'<span></span></span>');
						}
					}
				}

				/**
				* Function that removes the error label.	
				**/	
				function removeCheck(ivar){
					var ivarParent = ivar.parents('.'+errorClass);
					if(ivarParent.length){
						ivarParent
						.children('span')
						.remove()
						.end()
						.replaceWith(ivarParent.contents());
					}
				}
					
				/**
				* Run validation and ajax code.
				**/
				obj.submit(function(e){
					
					/**	
					* Run the callback function.
					**/	
					if(typeof options.before == 'function'){
						options.before.call(this);
					}
					
					/**
					* Reset all hidden error labels(if present).	
					**/	
					$('.'+errorClass).children('span').show();	
								
					/**
					* The validation part.	
					**/	
					input.each(function(){
						var inp = $(this);
						
						/**
						* Get all of the data values.	
						**/							
						var valType   = inp.data('validation-type');
						var valLabel  = inp.data('validation-label');
						var valMatch  = inp.data('validation-match-value');
						var valMin    = inp.data('validation-minimum');
						var valMax    = inp.data('validation-maximum');
						var valMatch  = inp.data('validation-match');
						
						/**
						* Set the right minimum and maximum value(s).	
						**/							
						if(valMin === undefined){
							var valminimal = 0;
						}else{
							var valminimal = valMin -1;
						}
						if(valMax === undefined){
							var valmaximum = 10000000;
						}else{
							var valmaximum = valMax;
						}	
											
						/**
						* Get the right validation type.	
						**/	
						switch(valType){
							
							/**
							* Validation rule: present.	
							**/								
							case 'present':
								if(inp.is('[type=checkbox]')){
									if(inp.is(':checked')){
										removeCheck(inp);
									}else{
										runCheck(inp, valLabel);
									}
								}else if(inp.is('select')){
									if($.trim(inp.val()).length > 0){
										removeCheck(inp);
									}else{
										runCheck(inp, valLabel);
									}
								}else{
									if(($.trim(inp.val()).length > valminimal) && (inp.val().length < valmaximum)){
										removeCheck(inp);
									}else{
										runCheck(inp, valLabel);
									}
								}
							break;
							/**
							* Validation rule: email.	
							**/								
							case 'email':
								var a = inp.val();
								var regexp = /^[a-zA-Z0-9]+[a-zA-Z0-9_.-]+[a-zA-Z0-9_-]+@[a-zA-Z0-9]+[a-zA-Z0-9.-]+[a-zA-Z0-9]+.[a-z]{2,4}$/;
								if(regexp.test(a)){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;
							/**
							* Validation rule: url.	
							**/	
							case 'url':
								var a = inp.val();
								var regexp = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
								if(regexp.test(a)){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;
							/**
							* Validation rule: numbers	
							**/								
							case 'numbers':
								var a = inp.val();
								var regexp = /^[0+9]$/;
								if(($.trim(inp.val()).length > valminimal) && (inp.val().length < valmaximum) && (regexp.test(a))){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}	
							break;						
							/**
							* Validation rule: date.	
							**/	
							case 'date':
								var a = inp.val();
								var regexp = /^[0-9]{2}\-[0-9]{2}\-[0-9]{4}$/i;
								if(regexp.test(a)){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;
							/**
							* Validation rule: letters.	
							**/	
							case 'letters':
								var a = inp.val();
								var regexp = /^[A-Za-z ]+$/;
								if(($.trim(inp.val()).length > valminimal) && (inp.val().length < valmaximum) && (regexp.test(a))){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;							
							/**
							* Validation rule: regex.	
							**/								
							case 'regex':
								var a = inp.val();
								var regexp = inp.attr('valdiation-regex');
								if(regexp.test(a)){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;
							/**
							* Validation rule: password.	
							**/								
							case 'password':
								if(($.trim(inp.val()).length > valminimal) && (inp.val().length < valmaximum)){
									if(inp.val() == obj.find('[data-validation-type="password"]').not(inp).val()){
										removeCheck(inp);
									}else{
										runCheck(inp, valLabel);
									}
								}else{
									runCheck(inp, valLabel);
								}
							break;	
							/**
							* Validation rule: match.	
							**/								
							case 'match':
								if((inp.val()) == valMatch){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;
							/**
							* Validation rule: ip.	
							**/	
							case 'ip':
								var a = inp.val();
								var regexp = /\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b/;
								if((regexp.test(a))){
									removeCheck(inp);
								}else{
									runCheck(inp, valLabel);
								}
							break;																																																																							
						};							
					});
					
					/**
					* If the valdiation isn't good, it will show an notification box, 
					* and it wont submit the form. If the validation is good, it will 
					* send the form with AJAX(see the else section)	
					**/	
					if(obj.find('.'+errorClass).length){
						return false;
					}else{
						if(options.useAjax === true){
							/**
							* Remove any exciting boxes.
							**/
							$('.e-contactform-infobox').remove();
							/**
							* Prepend the notification box.
							**/						
							obj.prepend('<div class="e-contactform-infobox"></div>');						
							/**
							* AJAX, this will send the form without refreshing the page.
							**/
							$.ajax({
								type: obj.attr('method'),
								url: obj.attr('action'),
								data: obj.serialize(),
								dataType: 'html',
								error: function(){
									$('.e-contactform-infobox').addClass('e-contactform-fail-color').text(options.labelFail).slideDown(200);
								},
								success: function(data){
									$('.e-contactform-infobox').addClass('e-contactform-success-color').text(options.labelSuccess).slideDown(200); 
									
									/**	
									* Run the callback function.
									**/	
									if(typeof options.after == 'function'){
										options.after.call(this, data);
									} 
								}								
							});
							return false; 
						}else{
							return true;
						}
					}
				});
				
				/**
				* Hide the error label with a keydown event.
				**/
				if(options.keydown === true){
					input.keydown(function(){
						$(this).parents('.'+errorClass).children('span').hide();
					});
				}
			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eContactForm.options = {
			labelError: 'This field is required!',
			labelSuccess: 'Your message has been send successfully!',
			labelFail: 'The form has not been send, please try it again!',
			keydown: true,
			useAjax: true,
			before: function(){ },
			after: function(){ }
		};
		
})(jQuery, window, document);
