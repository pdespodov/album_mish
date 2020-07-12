(function(window, document, $, undefined) {
    var $slides, $btnArr;

    function onClick(e) {
        var $target = $(e.target);
        if ($target.hasClass('slide') && !$target.hasClass('active') && !$target.siblings().hasClass('active')) {
            $target.removeClass('anim-in last-viewed').addClass('active')
            $target.siblings().removeClass('anim-in last-viewed').addClass('anim-out');

            setTimeout(function() {
                $target.find(".btn-more").show();
            }, 3200);
        }
    }

    function closeSlide(e) {
        var $slide = $(e.target).parent();
        $slide.removeClass('active anim-in').addClass('last-viewed');
        $slide.siblings().removeClass('anim-out').addClass('anim-in');

        $slide.find(".btn-more").hide();
    }

    $(function() {
        $slides = $('.slide');
        $btnArr = $slides.find('.btn-close');
        $slides.on('click', onClick);
        $btnArr.on('click', closeSlide);
    });
})(this, document, jQuery);