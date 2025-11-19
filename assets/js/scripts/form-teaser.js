jQuery(document).ready(function ($) {
    Validator({
        form: '#form-contact-footer',
        formGroupSelector: '.form-group',
        errorSelector: '.form-message',
        classError: 'invalid',
        rules: [
            Validator.isRequired('#fullname', ' '),
            Validator.isMinLength('#fullname', 3, ' '),
            Validator.isText('#fullname', ' '),

            Validator.isRequired('#email', ' '),
            Validator.isEmail('#email', ' '),

            Validator.isRequired('#phone', ' '),
            Validator.isPhone('#phone', ' '),

        ],
        //nếu không truyền vào callback submit sẽ nhận trường hợp submit mặc định của form
        onSubmit: (data) => {
            $('#form-contact-footer .submit-button').attr('disabled', true);
            const formThisData = new FormData(document.getElementById('form-contact-footer'));
            jQuery.ajax({
                type: 'POST',
                url: obj.AJAX_URL,
                processData: false,
                contentType: false,
                data: formThisData,
                beforeSend: () => {
                    $('#form-contact-footer .submit .form-group').addClass('spin')
                },
                complete: () => { },
                success: (response) => {
                    $('#form-contact-footer .submit .form-group').removeClass('spin')
                    const message = $('#form-contact-footer .form-message-status');


                    $('#form-contact-footer .submit .form-group').html('<a href="." class="submit-button tw-button  tw-sub sub4"> ĐĂNG KÝ Lại</a>');
                    message.html(response.data)

                    if (response.success == false) {
                        message.addClass('active error')
                    } else {
                        message.addClass('active success')
                    }
                    // $('#form-ft-recruiment').trigger("reset");
                },
                error: (jqXHR, textStatus, errorThrown) => {
                    textErrorDefault = "<?php _e('Có lỗi xảy ra, vui lòng thử lại', 'corex'); ?>";
                    $('#form-receive-consultation .form-message-status').html(errorThrown).addClass('error');
                }
            });
        }
    });
    // loi form la do input file bi gi de gia tri cua no la undefined

});