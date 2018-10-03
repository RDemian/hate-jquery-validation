$(document).ready(function () {
    const $form = $('.form');
    const $phone = $('#phone');

    $form.on('submit', (e) => {
        e.preventDefault();
    })

    // $phone.inputmask('+7 (999) 999 99 99');

    $form.validate({

        debug: true,

        submitHandler: function (form, event) {
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
                minlength: 6,
            },
            returnPassword: {
                required: true,
                minlength: 6,
                equalTo: '#password',
            },
            email: {
                required: true,
                email: true,
                minlength: 6,
            },
            phone: {
                required: true,
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
                email: 'Введите корректную почту',
            },
            phone: {
                required: 'Это обязательное поле',
                minlength: 'Номер должен быть длиннее 11 символов',
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