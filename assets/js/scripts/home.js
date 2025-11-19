
jQuery(document).ready(function ($) {
    $(window).on('scroll', function () {
        mapAjax('.map-section4', 'template-parts/home/section4-map');
        mapAjax('.map-section6', 'template-parts/home/section6-map');
    })


    function mapAjax(nameClass, templateName) {
        if ($(nameClass).hasClass('map-ajax')) {
            if ($(nameClass).offset().top - 900 < $(window).scrollTop()) {
                $(nameClass).removeClass('map-ajax');
                $.ajax({
                    url: obj.AJAX_URL,
                    type: 'POST',
                    data: {
                        action: "ajax_load_svg_home",
                        templateName: templateName,
                    },
                    success: function (response) {
                        $(nameClass).append(response)
                    }
                })

            }
        }
    }


    // wrap first letter
    //  section 2
    const letter = $('.h-section2 .tw-content p:first-of-type').text();
    const text = letter.substring(1);
    const first_letter = letter.slice(0, 1);
    const wrap_letter = `<span><span>${first_letter}</span></span>`;

    const text_rendered = wrap_letter + text;
    $('.h-section2 .tw-content p:first-of-type').html(text_rendered)

    new Swiper('.h-section2 .swiper-images', {
        speed: 1000,
        // effect: 'fade',
        autoplay: {
            delay: 3000
        },
        navigation: {
            prevEl: '.swiper-images .swiper-button-prev',
            nextEl: '.swiper-images .swiper-button-next',
        }
    })


    //  section 5
    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)

    if (vw >= 768) {
        var swiper_section5_top = new Swiper('.h-section5-swiper-top', {
            spaceBetween: 0,
            direction: "vertical",
            loop: true,
            simulateTouch: false,
            freeMode: true,
            watchSlidesProgress: true,
            speed: 1800,
            autoplay: {
                delay: 5000,
            },

        })
        var swiper_section5_bottom = new Swiper('.h-section5-swiper-bottom', {
            spaceBetween: 30,
            slidesPerView: 3,
            loop: true,
            speed: 1800,
            autoplay: {
                delay: 5000,
            },
            direction: "vertical",
            centeredSlides: true,
            navigation: {
                prevEl: '.h-section5 .button .button-top',
                nextEl: '.h-section5 .button .button-bottom',
            },
            thumbs: {
                swiper: swiper_section5_top,
            },
        })
        swiper_section5_top.on('transitionStart', function (swiper) {
            let target = $('.h-section5-swiper-top .swiper-slide-active').data('target');
            $(`.h-section5 .image-slide`).removeClass('active');
            $(`.h-section5 ${target}`).addClass('active');
        })
    } else {
        var swiper_section5_top = new Swiper('.h-section5-swiper-top', {
            spaceBetween: 1,
            direction: "vertical",
            loop: true,
            speed: 1800,
            autoplay: {
                delay: 5000,
            },
            navigation: {
                prevEl: '.h-section5 .button .button-top',
                nextEl: '.h-section5 .button .button-bottom',
            },

        })
        swiper_section5_top.on('transitionStart', function (swiper) {
            let target = $('.h-section5-swiper-top .swiper-slide-active').data('target');
            $(`.h-section5 .image-slide`).removeClass('active');
            $(`.h-section5 ${target}`).addClass('active');
        })
        swiper_section5_top.slideTo(1)
    }



    //section 6
    $("[data-utilities]").click(function () {
        $('[data-utilities]').removeClass("active");
        let data_utilities = $(this).attr('data-utilities');
        $('[data-utilities= "' + data_utilities + '"]').addClass("active");
    })
    $("[data-area]").click(function () {
        $('[data-area]').removeClass("active");
        let data_area = $(this).attr('data-area');
        $('[data-area= "' + data_area + '"]').addClass("active");
    })
    $(".area img").click(function () {
        $('[data-area]').removeClass("active");
    })



    //section 7 
    new Swiper('.h-section7 .swiper-utilities', {
        spaceBetween: 24,
        loop: true,
        speed: 1000,
        // autoplay: {
        //     delay: 3000,
        // },
        pagination: {
            el: '.swiper-pagination-number',
            type: 'custom',
            renderCustom: function (swiper_sticky_posts, current, total) {
                if (current < 10) {
                    current = '0' + current;
                }
                if (total < 10) {
                    total = '0' + total;
                }
                return '<span class="heading h4 line-height-1 current">' + current + '</span> | ' +
                    '<span class="heading h6 total">' + total + '</span>';
            }
        },
        navigation: {
            prevEl: '.swiper-utilities .swiper-button-prev',
            nextEl: '.swiper-utilities .swiper-button-next',
        }
    })


    //section 11
    new Swiper('.h-section11 .h-partners .swiper-partners', {
        slidesPerView: 5,
        spaceBetween: 24,
        speed: 800,
        autoplay: {
            delay: 3000,
        },
        breakpoints: {
            0: {
                slidesPerView: 1.5,
                spaceBetween: 12,
            },
            576: {
                slidesPerView: 2,
                spaceBetween: 12,
            },
            769: {
                slidesPerView: 3,
                spaceBetween: 16,
            },
            1025: {
                slidesPerView: 5,
                spaceBetween: 24,
            },
        },
        navigation: {
            prevEl: '.h-partners .swiper-button-prev',
            nextEl: '.h-partners .swiper-button-next',
        },
    })
});