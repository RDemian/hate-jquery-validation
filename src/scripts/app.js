$(document).ready(function () {
    const $form = $('.form');

    $form.on('submit', (e) => {
        e.preventDefault();
    })

    $form.validate({

        submitHandler: function (form) {
            console.log('Форма успешно отправлена!');
        },

        rules: {
            firstName: {
                required: true,
                minlength: 2,
            },
            secondName: {
                required: true,
                minlength: 2,
            },
        },
        messages: {
            firstName: {
                required: "Укажите своё имя",
                minlength: "Имя должно быть длиннее 2 символов",
            },
            secondName: {
                required: "Укажите свою фамилию",
                minlength: "Фамилия должна быть длиннее 2 символов",
            },
        }
    });
});