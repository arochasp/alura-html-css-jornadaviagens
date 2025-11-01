function validarEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validarTelefone(telefone) {
    const regex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
    return regex.test(telefone);
}

const form = document.getElementById('formContact');

const fieldName = document.getElementById('name');
const fieldNameError = document.getElementById('errorMsgName');

const fieldPhone = document.getElementById('phonenum');
const fieldPhoneError = document.getElementById('errorMsgPhone');

const fieldEmail = document.getElementById('emailadd');
const fieldEmailError = document.getElementById('errorMsgEmail');

const fieldSubject = document.getElementById('subject');
const fieldSubjectError = document.getElementById('errorMsgSubject');

const fieldMessage = document.getElementById('contant');
const fieldMessageError = document.getElementById('errorMsgContant');


form.addEventListener('submit', function (event) {

    if (fieldName.value.trim().length < 10) {
        event.preventDefault(); // Impede o envio do formulário
        fieldNameError.style.display = 'block'; // Mostra a mensagem de erro
    } else {
        fieldNameError.style.display = 'none'; // Esconde a mensagem de erro
    }

    if (!validarEmail(fieldEmail.value)) {
        event.preventDefault();
        fieldEmailError.style.display = 'block';
    } else {
        console.log('Email validado: false')
        fieldEmailError.style.display = 'none';
    }

    if (fieldSubject.value.trim().length < 10) {
        event.preventDefault();
        fieldSubjectError.style.display = 'block';
    } else {
        fieldSubjectError.style.display = 'none';
    }

    if (fieldMessage.value.trim().length < 10) {
        event.preventDefault();
        fieldMessageError.style.display = 'block';
    } else {
        fieldMessageError.style.display = 'none';
    }

    if (!validarTelefone(fieldPhone.value)) {
        event.preventDefault();
        fieldPhoneError.style.display = 'block';
    } else {
        fieldPhoneError.style.display = 'none';
    }



});
