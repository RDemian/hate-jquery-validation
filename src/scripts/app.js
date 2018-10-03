$(document).ready(function () {
    const $form = $('.form');
    const $phone = $('#phone');

    $form.on('submit', (e) => {
        e.preventDefault();
    });

    const $popupWrap = $('.popup-wrap');
    const $popup = $('.popup');
    const $close = $('.popup__close');

    function openPopup() {
        $popupWrap.css('display', 'block');
        $popup.css('display', 'flex');

        $close.on('click', () => {
            $popupWrap.css('display', 'none');
            $popup.css('display', 'none');
        });

        $popupWrap.on('click', () => {
            $popupWrap.css('display', 'none');
            $popup.css('display', 'none');
        });
    };

    $.validator.addMethod("passwordText", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z]).*$/.test(value);
    }, "Только цифры и буквы");

    $.validator.addMethod("emailText", function (value, element) {
        return this.optional(element) || /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(value);
    }, 'Некорректный адрес');

    $form.validate({

        debug: true,

        submitHandler: function (form, event) {
            openPopup();
            $form[0].reset();
            $('.form__input').removeClass('form__input_valid');
            console.log('Форма успешно отправлена!');
        },

        invalidHandler: function (event, validator) {
            console.warn('Форма заполнена с ошибками!');
        },

        errorElement: 'div',

        errorClass: 'form__input_error',

        validClass: 'form__input_valid',

        rules: {
            firstName: {
                required: true,
                minlength: 2,
            },
            secondName: {
                required: true,
                minlength: 2,
            },
            username: {
                required: true,
                minlength: 4,
            },
            password: {
                required: true,
                passwordText: true,
                minlength: 6,
            },
            returnPassword: {
                required: true,
                passwordText: true,
                minlength: 6,
                equalTo: '#password',
            },
            email: {
                required: true,
                emailText: true,
                minlength: 6,
            },
            phone: {
                required: true,
                digits: true,
                minlength: 11,
            },
            city: {
                required: true,
                minlength: 2,
            },
        },

        messages: {
            firstName: {
                required: 'Обязательное поле',
                minlength: 'Короче 2 символов',
            },
            secondName: {
                required: 'Обязательное поле',
                minlength: 'Короче 2 символов',
            },
            username: {
                required: 'Обязательное поле',
                minlength: 'Короче 4 символов',
            },
            password: {
                required: 'Обязательное поле',
                minlength: 'Короче 6 символов',
            },
            returnPassword: {
                required: 'Обязательное поле',
                minlength: 'Короче 6 символов',
                equalTo: 'Пароли не совпадают',
            },
            email: {
                required: 'Обязательное поле',
                minlength: 'Короче 5 символов',
            },
            phone: {
                required: 'Обязательное поле',
                minlength: 'Короче 11 символов',
                digits: 'Только цифры'
            },
            city: {
                required: 'Обязательное поле',
                minlength: 'Короче 2 символов',
            },
        }
    });
});