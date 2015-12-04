$(function() {
    if ($('#js-slider').length) {
        $('#js-slider').cycle({
            slides: ".slider__item",
            //overlayFxSel: ">div",
            fx: "scrollHorz",
            timeout: "999999",
            pagerTemplate: "<span></span>",
            pager: ".slider__pagination",
            prev: ".slider__button_prev",
            next: ".slider__button_next",
            centerHorz: true,
            captionPlugin: "caption2",
            log: false
        });
    }

    if ($('.gallery').length) {
        $(window).load(function() {
            var maxHeight = 0;
            $('.gallery__item').each(function() {
                if (this.offsetHeight > maxHeight)
                    maxHeight = this.offsetHeight;
            });
            $('.gallery__item').height(maxHeight);
        });
    }

    if ($('.object__slider').length) {
        var step = $('.object__slider-pagination-list img').outerWidth(true),
            length = $('.object__slider-pagination-list img').length; //include margin

        $('.object__slider-pagination-list img').click(function() {
            $('.object__slider img').attr('src', this.src);
        });
        $('.object__slider-button_next').click(function(e) {
            var currentStep = parseInt($('.object__slider-pagination-list').css('right')) || 0;
            if (currentStep >= (Math.floor(length / 2)) * step) return;
            $('.object__slider-pagination-list').css('right', currentStep + step);
        });
        $('.object__slider-button_prev').click(function(e) {
            var currentStep = parseInt($('.object__slider-pagination-list').css('right')) || 0;
            if (currentStep <= 0) return;
            $('.object__slider-pagination-list').css('right', currentStep - step);
        });
    }

});
