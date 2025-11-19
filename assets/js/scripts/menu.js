jQuery(document).ready(function ($) {
    $('.hamburger-mobile').click(function () {
        if ($(this).hasClass('is-active')) {
            $(this).removeClass('is-active');
            $('body').removeClass('hidden');
            $(this).siblings('.wrap-menu-mobile').fadeOut();
        } else {
            $(this).addClass('is-active');
            $('body').addClass('hidden');
            $(this).siblings('.wrap-menu-mobile').fadeIn();
        }
    });
    $('[data-tab]').click(function () {
        const data_tab_content = $(this).data('tab');
        if (data_tab_content) {
            $(`[data-tab-content=${data_tab_content}]`).addClass('active').siblings('[data-tab-content]').removeClass('active')
        }
        $(this).addClass('active').siblings('[data-tab]').removeClass('active');
    });


    var lastScrollTop = 0;
    $(document).scroll(function (event) {
        const st = $(this).scrollTop();
        const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
        if (vw >= 1024) {
            if (st > lastScrollTop) {
                $('#header-main').removeClass('active');
            } else {
                $('#header-main').addClass('active');
            }
            lastScrollTop = st;
        } else {
            $('#header-main').addClass('active');
            $('.wrap-menu-mobile>ul.menu>li>a').click(function () {
                $('.wrap-menu-mobile').fadeOut();
                $('body').removeClass('hidden');
                $('.hamburger-mobile').removeClass('is-active');
            })


        }
    });

});