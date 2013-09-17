jQuery(document).ready(function() {
    jQuery('.step').mouseenter(function(){
        jQuery(this).css('background-color','#FF6000');
    });
    
    jQuery('.step').mouseleave(function(){
        jQuery(this).css('background-color','white');
    });
    
    jQuery('#steps-description .second-step, #steps-description .third-step, ').toggle();
    
    jQuery('div.first-step').mouseenter(function(){
        jQuery('.step-active').toggle();
        jQuery('.step-active').removeClass('step-active');
        jQuery('#steps-description .first-step').toggle().addClass('step-active');
    });    
    
    jQuery('div.second-step').mouseenter(function(){
        jQuery('.step-active').toggle();
        jQuery('.step-active').removeClass('step-active');
        jQuery('#steps-description .second-step').toggle().addClass('step-active');
    });
    
    jQuery('div.third-step').mouseenter(function(){
        jQuery('.step-active').toggle();
        jQuery('.step-active').removeClass('step-active');
        jQuery('#steps-description .third-step').toggle().addClass('step-active');
    });
});