$(function() {
    if ($('#js-slider').length) {
        $('#js-slider').cycle({
            slides: ".slider-list__item",
            //overlayFxSel: ">div",
            fx: "scrollHorz",
            timeout: "999999",
            pagerTemplate: "<span></span>",
            pager: ".slider__pagination",
            prev: ".slider-buttons__prev",
            next: ".slider-buttons__next",
            centerHorz: "true",
            captionPlugin: "caption2",
            log: true
        });
    }
});
