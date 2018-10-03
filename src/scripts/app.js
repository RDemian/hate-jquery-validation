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
    };

    $.validator.addMethod("passwordText", function (value, element) {
        return this.optional(element) || /^(?=.*\d)(?=.*[a-z]).*$/.test(value);
    }, "Пароль должен состоять из цифр и английских букв");

    $.validator.addMethod("emailText", function (value, element) {
        return this.optional(element) || /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/.test(value);
    }, 'Введите корректный почтовый адрес');

    $form.validate({

        debug: true,

        submitHandler: function (form, event) {
            openPopup();
            $form[0].reset();
            console.log('Форма успешно отправлена!');
        },

        invalidHandler: function (event, validator) {
            console.warn('Форма заполнена с ошибками!');
        },

        errorElement: 'div',

        errorClass: 'form__input_error',

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
            country: {
                required: true,
                minlength: 2,
            },
            city: {
                required: true,
                minlength: 2,
            },
        },

        messages: {
            firstName: {
                required: 'Это обязательное поле',
                minlength: 'Имя должно быть длиннее 2 символов',
            },
            secondName: {
                required: 'Это обязательное поле',
                minlength: 'Фамилия должна быть длиннее 2 символов',
            },
            username: {
                required: 'Это обязательное поле',
                minlength: 'Логин должен быть длиннее 4 символов',
            },
            password: {
                required: 'Это обязательное поле',
                minlength: 'Пароль должен быть длиннее 6 символов',
            },
            returnPassword: {
                required: 'Это обязательное поле',
                minlength: 'Пароль должен быть длиннее 6 символов',
                equalTo: 'Пароли не совпадают',
            },
            email: {
                required: 'Это обязательное поле',
                minlength: 'Почта должна быть длиннее 5 символов',
            },
            phone: {
                required: 'Это обязательное поле',
                minlength: 'Номер должен быть длиннее 11 символов',
                digits: 'Номер должен состоять только из цифр'
            },
            country: {
                required: 'Это обязательное поле',
                minlength: 'Страна должна быть длиннее 2 символов',
            },
            city: {
                required: 'Это обязательное поле',
                minlength: 'Город должен быть длиннее 2 символов',
            },
        }
    });
});