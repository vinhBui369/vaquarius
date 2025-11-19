jQuery(document).ready(function ($) {
    var swiper_ground = [];
    $('.swiper-ground').each(function (i, el) {
        swiper_ground.push(new Swiper($(this)[0], {
            navigation: {
                prevEl: `[data-tab-content=shophouse-${i}]>.swiper-button-prev`,
                nextEl: `[data-tab-content=shophouse-${i}]>.swiper-button-next`,
            }
        }));
    })
    swiper_ground.forEach(element => {
        element.on('slideChange', function () {
            const index = element.activeIndex;
            $('.ground-list.active .ground-item').eq(index).addClass('active').siblings().removeClass('active');
        });
    });
    $('.ground-list .ground-item').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        const index = $(this).index();
        parent = $(this).parent('.ground-list.active').index();
        swiper_ground[parent - 1].slideTo(index)
    });

    $('#product_type').change(function () {
        const tab_content = $(this).val();
        if ($(`[data-tab-content=${tab_content}]`)) {
            $(`[data-tab-content=${tab_content}]`).addClass('active').siblings().removeClass('active')
        }
    })
});