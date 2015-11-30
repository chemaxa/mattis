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
});
