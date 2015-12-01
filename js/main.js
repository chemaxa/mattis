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
            centerHorz: "true",
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
});
