/*
 * ************************************************************* *
 * Name       : eWizard                                          *
 * Date       : October 2012                                     *
 * Owner      : CreativeMilk                                     *
 * Url        : www.creativemilk.net                             *
 * Version    : 1.1                                              *
 * Updated    : 01/04/2013                                       *
 * Developer  : Mark                                             *
 * Dependency :                                                  *
 * Lib        : jQuery 1.7+                                      *
 * Licence    : NOT free                                         *
 * This is part of a themeforest file                            *
 * ************************************************************* *
 */
  
;(function($, window, document, undefined){
    $.fn.eWizard = function(options) { 
	
		options = $.extend({}, $.fn.eWizard.options, options); 
	 
			return this.each(function() {  
									
				/**
				* Variables.
				**/
				var obj         = $(this);
				var wizard      = obj.parents('.e-wizard');
				var wizardSteps = wizard.find('.e-wizard-steps').children('li');
				var totalSteps  = wizardSteps.length;
				var errorClass  = 'e-wizard-errorlabel';

				//*****************************************************************//
				/////////////////////////////// INIT ////////////////////////////////
				//*****************************************************************//
				
					/**
					* Set dataset indicator at start.
					**/
					wizard.attr('data-wizard-step', 0);
					
					/**
					* Set active steps.
					**/	
					activeStep(0);

					if(options.buttonNavigation === true){
						
						/**
						* Append the footer to the wizard.
						**/						
						wizard.append('<footer>'+
									  '<div class="e-wizard-ctrls">'+
									  '<a href="#" class="button-icon-text e-wizard-prev"><span class="arrow-left-10 plix-10"></span>Prev</a>'+
									  '<a href="#" class="button-text-icon e-wizard-next">Next <span class="arrow-right-10 plix-10"></span></a>'+
									  '</div>'+
									  '</footer>');
									  
						/**
						* Add a cusrsor class to the steps.
						**/										  
						wizardSteps.addClass('cursor-pointer');

						/**
						* Hide the prev button at start.
						**/	
						wizard.find('.e-wizard-prev').addClass('e-wizard-disabled');				  
					}
					
					if(options.showProgressbar === true){
						
						/**
						* Add a progressbar to the header.
						**/	
						wizard.children('header').append('<div class="e-wizard-progress">'+
															'<div>'+
																'<span></span>'+
															'</div>'+
														 '</div>');	
														 
						/**
						* Set the progressbar.
						**/
						progressBar(wizard.attr('data-wizard-step'));														 
					}
					
				//*****************************************************************//
				////////////////////// PROGRESSBAR FUNCTION /////////////////////////
				//*****************************************************************//
				
					/**
					* Set progressbar value.
					*
					* @param: index | integer | index of the active step. 
					**/
					function progressBar(index){
						
						/**
						* Calculate the value of the progressbar.
						**/
						var pro = (100 / totalSteps) * index + (100 / totalSteps);
						
						/**
						* Set the value of the progressbar.
						**/
						wizard.find('.e-wizard-progress').find('span').css({width: pro+'%'})
					}

				//*****************************************************************//
				/////////////////// ACTIVE STEP CLASS FUNCTION //////////////////////
				//*****************************************************************//
				
					/**
					* Set the active indocator class for the steps.
					*
					* @param: index | integer | index of the active step. 
					**/
					function activeStep(index){
						
						/**
						* Remove all active classes.
						**/
						wizardSteps.removeClass('e-wizard-active');
						
						/**
						* Add the active classes.
						**/
						wizardSteps.each(function(i,e){
							if(i <= index){
								$(this).addClass('e-wizard-active')
							}
						});
					}

				//*****************************************************************//
				////////////////// SHOW NAVIGATION BUTTONS FUNCTION /////////////////
				//*****************************************************************//
				
					/**
					* Show/hide the navigation buttons.
					*
					* @param: index | integer | index of the active step. 
					**/
					function showButtons(index){
						if(options.buttonNavigation === true){	
							
							/**
							* Hide/show prev button.
							**/
							if(index == 0){
								wizard.find('.e-wizard-prev').addClass('e-wizard-disabled');		
							}else{
								wizard.find('.e-wizard-prev').removeClass('e-wizard-disabled');		
							
							}
						
							/**
							* Hide/show next button.
							**/
							if((index + 1)== totalSteps){
								wizard.find('.e-wizard-next').addClass('e-wizard-disabled');	
							}else{
								wizard.find('.e-wizard-next').removeClass('e-wizard-disabled');	
							
							}						
						}
					}
												
				//*****************************************************************//
				//////////////////////// RUN CHECK FUNCTION /////////////////////////
				//*****************************************************************//

					/**
					* Function that ads a error label to the field.	
					*
					* @param: ivar | string | The input thats being validated.
					* @param: evar | string | Custom error label.  
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
					
				//*****************************************************************//
				////////////////////// REMOVE CHECK FUNCTION ////////////////////////
				//*****************************************************************//
				
					/**
					* Function that removes the error label.
					*
					* @param: ivar | string | The input thats being validated.	
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
					
				//*****************************************************************//
				////////////////////// LOOP INPUTS FUNCTION ////////////////////////
				//*****************************************************************//

					/**
					* Loop all inputs in the fieldset and validate.
					*
					* @param: index | string | The fieldset thats being validated.	
					**/	
					function validateFieldset(index){
						
						/**
						* Reset all hidden error labels(if present).	
						**/	
						$('.'+errorClass).children('span').show();	
					
						obj.children('fieldset:eq('+index+')').find('input:not([type=submit]), select, textarea').each(function(){
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
						
					}

				//*****************************************************************//
				////////////////////// SHOW FIELDSET FUNCTION ///////////////////////
				//*****************************************************************//
				
					/**
					* Show/hide the active fieldset.
					*
					* @param: index | integer | index of the active step. 
					**/
					function showFieldset(index){
						obj
						.children('fieldset')
						.hide()
						.end()
						.children('fieldset:eq('+index+')')
						.show();					
					}
					
				//*****************************************************************//
				////////////////////// CLICK ON STEPS FUNCTION //////////////////////
				//*****************************************************************//

					if(options.stepNavigation === true)	{						
						wizardSteps.click(function(e){
	
							/**
							* Get index.
							**/	
							var index    = $(this).index();
							var curIndex = wizard.attr('data-wizard-step');
							
							/**
							* Validation function
							**/	
							validateFieldset(curIndex);

							if(!obj.children('fieldset:eq('+curIndex+')').find('.'+errorClass).length || index <= curIndex){
								
								/**
								* Set active steps.
								**/	
								activeStep(index);
								
								/**
								* Set dataset indicator.
								**/
								wizard.attr('data-wizard-step', index);
	
								/**
								* Show fieldset function.
								**/
								showFieldset(index);
								
								/**
								* Set the progressbar.
								**/
								progressBar(index);
								
								/**
								* Show/hide navigation buttons.
								**/
								showButtons(index);
	
								/**	
								* Run the callback function.
								**/	
								if(typeof options.onSwitch == 'function'){
									options.onSwitch.call(this);
								}	
							}
							
							e.preventDefault();
						});
					}
					
				//*****************************************************************//
				///////////////////////// BUTTON NAVIGATION /////////////////////////
				//*****************************************************************//

					if(options.buttonNavigation === true){
						wizard.on('click', '.e-wizard-prev',function(e){
							if(!$(e.target).is('.e-wizard-disabled')){

								/**
								* Get index(needs to be parseint).
								**/	
								var curIndex = parseInt(wizard.attr('data-wizard-step'));							
								var index    = curIndex-1;
								
								/**
								* Validation function
								**/	
								validateFieldset(index - 1);
	
								if(!obj.children('fieldset:eq('+(index-1)+')').find('.'+errorClass).length || index <= curIndex){
								
									/**
									* Set dataset indicator.
									**/
									wizard.attr('data-wizard-step',index);
		
									/**
									* Show fieldset function.
									**/
									showFieldset(index);
									
									/**
									* Set the progressbar.
									**/
									progressBar(index);
		
									/**
									* Set active steps.
									**/	
									activeStep(index);
									
									/**
									* Show/hide navigation buttons.
									**/
									showButtons(index);
		
									/**	
									* Run the callback function.
									**/	
									if(typeof options.onSwitch == 'function'){
										options.onSwitch.call(this);
									}
								}
							}
							
							e.preventDefault();
							
						}).on('click', '.e-wizard-next',function(e){
							
							if(!$(e.target).is('.e-wizard-disabled')){
								
								/**
								* Get index(needs to be parseint).
								**/	
								var curIndex = parseInt(wizard.attr('data-wizard-step'));							
								var index    = curIndex+1;
							
								/**
								* Validation function
								**/	
								validateFieldset(index - 1);
	
								if(!obj.children('fieldset:eq('+(index-1)+')').find('.'+errorClass).length || index <= curIndex){

									/**
									* Set dataset indicator.
									**/
									wizard.attr('data-wizard-step',index);
		
									/**
									* Show fieldset function.
									**/
									showFieldset(index);
									
									/**
									* Set the progressbar.
									**/
									progressBar(index);
		
									/**
									* Set active steps.
									**/	
									activeStep(index);
									
									/**
									* Show/hide navigation buttons.
									**/
									showButtons(index);
		
									/**	
									* Run the callback function.
									**/	
									if(typeof options.onSwitch == 'function'){
										options.onSwitch.call(this);
									}
								}
									
							}
							
							e.preventDefault();
						});
					}

				//*****************************************************************//
				///////////////////////////// ON SUBMIT /////////////////////////////
				//*****************************************************************//
				
					obj.submit(function(e){
						
						/**
						* Validation function
						**/	
						validateFieldset(totalSteps - 1);

						if(!obj.children('fieldset').find('.'+errorClass).length){
							
							/**	
							* Run the callback function.
							**/	
							if(typeof options.onSubmit == 'function'){
								options.onSubmit.call(this);
							}	
							
						}else{	
							return false;
						}
					});

			});
		};
		
		/**
		* Default settings(dont change).
		* You can globally override these options
		* by using $.fn.pluginName.key = 'value';
		**/
		$.fn.eWizard.options = {
			showProgressbar: true,
			nextLabel: 'next',
			prevLabel: 'prev',
			buttonNavigation: true,
			stepNavigation: true,
			labelError: 'This field is required!',
			onSwitch: function(){ },	
			onSubmit: function(){ }	
		};
		
})(jQuery, window, document);
