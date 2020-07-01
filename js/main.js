
(function ($) {
    "use strict";

    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }

    jQuery(".fa-volume-up").click(function() {
        jQuery(this).hide();
        jQuery(".fa-volume-off").show();
    });

    jQuery(".fa-volume-off").click(function() {
        jQuery(this).hide();
        jQuery(".fa-volume-up").show();
    });

    jQuery("#animated-button1").click(function() {
        jQuery(".container-login100").show();
        jQuery(".initial-wrap").hide();

        jQuery(".wrap-login100").fireworks({
          sound: false,
          opacity: 0.5,
          width: '100%',
          height: '100%'
        });

        var happyBirthdayAudio = document.getElementById("happy-birthday-audio");
        happyBirthdayAudio.play();
        happyBirthdayAudio.muted = false;

        setTimeout(function() {
            jQuery("#fireworksField").fadeOut(1500);
            jQuery(".login100-form-title").fadeIn(3000);
            jQuery(".wrap-input100").fadeIn(3000);
            jQuery(".container-login100-form-btn").fadeIn(3000);
            jQuery(".fa-volume-up").fadeIn(3000);

        }, 24000)
    });

})(jQuery);