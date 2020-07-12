
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

        if(check) {
            jQuery(".wrap-login100").fadeOut(1500);    

             setTimeout(function() {
                jQuery(".wrap-choice").show();
            }, 1500);
        }

        return false;
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
            if($(input).val().trim() == '' 
                || $(input).val().trim().toLowerCase() != "дуду"){
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

    jQuery("#animated-button1").click(function() {
        jQuery(".container-login100").show();
        jQuery(".initial-wrap").hide();

        jQuery(".wrap-login100").fireworks({
          sound: false,
          opacity: 0.5,
          width: '100%',
          height: '100%'
        });

        setTimeout(function() {
            var happyBirthdayAudio = document.getElementById("happy-birthday-audio");
            happyBirthdayAudio.muted = false;
            happyBirthdayAudio.play();
        }, 500);

        setTimeout(function() {
            jQuery("#fireworksField").fadeOut(1500);

            setTimeout(function() {
                jQuery(".login100-form-title").css("visibility","visible").hide().fadeIn(3000);
            }, 1500);

             setTimeout(function() {
                jQuery(".wrap-input100").css("visibility","visible").hide().fadeIn(3000);
            }, 2500);

              setTimeout(function() {
                jQuery(".container-login100-form-btn").css("visibility","visible").hide().fadeIn(3000);
            }, 3500);
        }, 24000) //1000
    });

    jQuery("#album-button").click(function() {
        jQuery(".container-login100").fadeOut(1500);   

        setTimeout(function() {
            jQuery(".gallery-wrap").show();
        }, 1500);
    });

    jQuery("#album-back-button").click(function() {
        jQuery(".gallery-wrap").fadeOut(1500);   

        setTimeout(function() {
            jQuery(".container-login100").show();
        }, 1500);
    });

    jQuery("#prague-back-button").click(function() {
        jQuery("#prague-wrap").fadeOut(1500);   

        setTimeout(function() {
            jQuery(".gallery-wrap").show();
        }, 1500);
    });

    jQuery("#plovdiv-back-button").click(function() {
        jQuery("#plovdiv-wrap").fadeOut(1500);   

        setTimeout(function() {
            jQuery(".gallery-wrap").show();
        }, 1500);
    });

    jQuery("#paris-back-button").click(function() {
        jQuery("#paris-wrap").fadeOut(1500);   

        setTimeout(function() {
            jQuery(".gallery-wrap").show();
        }, 1500);
    });

    jQuery("#prague-more").click(function() {
        jQuery(".gallery-wrap").fadeOut(1500);

        setTimeout(function() {
            jQuery("#prague-wrap").show();
        }, 1500);

    });

    jQuery("#plovdiv-more").click(function() {
        jQuery(".gallery-wrap").fadeOut(1500);

        setTimeout(function() {
            jQuery("#plovdiv-wrap").show();
        }, 1500);

    });

    jQuery("#paris-more").click(function() {
        jQuery(".gallery-wrap").fadeOut(1500);

        setTimeout(function() {
            jQuery("#paris-wrap").show();
        }, 1500);

    });

})(jQuery);