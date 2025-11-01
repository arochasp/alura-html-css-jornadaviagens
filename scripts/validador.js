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

let auxTelefone;

function validarEmail(email) {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validarTelefone(telefone) {
    telefone = telefone.replace(/\D/g, '');
    const regex = /^\(?\d{2}\)?\s?\d{5}-?\d{4}$/;
    auxTelefone = telefone;
    return regex.test(telefone);
}

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
        fieldPhone.value = auxTelefone.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
    }

});
