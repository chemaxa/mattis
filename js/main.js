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
        $('.object__slider').cycle({
            //slides: ".slider__item",
            //overlayFxSel: ">div",
            fx: "scrollHorz",
            timeout: "999999",
            //pagerTemplate: "<a href='{{src}}' class='link object__slider-pagination-item-link slider__pagination-item-link_bordered'><img class='object__slider-pagination-item-image' src='{{src}}'></a>",
            //pager: ".object__slider-pagination-list",
            //prev: ".object__slider-button_prev",
            //next: ".object__slider-button_next",
            centerHorz: true,
            log: false
        });
    }
    setTimeout(startCarousel, 5000);
    //startCarousel();

    function startCarousel() {
        if ($('.object__slider-pagination-list').length) {
            $('.object__slider-pagination-list').cycle({
                slides: ".object__slider-pagination-item-link",
                //overlayFxSel: ">div",
                fx: "carousel",
                timeout: "999999",
                //pagerTemplate: "<a href='{{src}}' class='link object__slider-pagination-item-link slider__pagination-item-link_bordered'><img class='object__slider-pagination-item-image' src='{{src}}'></a>",
                //pager: ".object__slider-pagination-list",
                prev: ".object__slider-button_prev",
                next: ".object__slider-button_next",
                carouselVisible: 3,
                carouselFluid: true,
                allowWrap: true,
                log: true
            });
        }
    }


});
