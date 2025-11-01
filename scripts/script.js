// Sanitiza a string argumento
function stripTags(htmlText) {
    let div = document.createElement('div');
    div.innerHTML = htmlText.trim().replace(/<script>.*<\/script>/, '');
    return div.textContent;
}

// Sanitiza os campos do formulário
function clearFields() {
    // Referências dos elementos
    var fieldName = document.getElementById('name');
    var fieldPhone = document.getElementById('phonenum');
    var fieldEmail = document.getElementById('emailadd');
    var fieldSubject = document.getElementById('subject');
    var fieldMessage = document.getElementById('contant');
    // Sanitiza e reescreve os campos
    fieldName.value = stripTags(fieldName.value);
    fieldEmail.value = stripTags(fieldEmail.value);
    fieldSubject.value = stripTags(fieldSubject.value);
    fieldMessage.value = stripTags(fieldMessage.value);
    fieldPhone.value = stripTags(fieldPhone.value);

    // console.log('NAME=' + fieldName.value)
    // console.log('PHONE=' + fieldPhone.value)
    // console.log('EMAIL=' + fieldEmail.value)
    // console.log('SUBJECT=' + fieldSubject.value)
    // console.log('CONTENT=' + fieldMessage.value)
}

// Quando o documento estiver pronto no navegador
document.addEventListener('DOMContentLoaded', function () {
    console.log('Exec função')
    // Referência do formulário de contatos
    var formContact = document.getElementById('formContact');
    // Se o formulário existe
    if (formContact) {
        console.log('Entrou no if')
        // Quando o formulário for enviado, executa `clearFields`
        formContact.addEventListener('submit', clearFields);
        // Quando o formulário for modificado, executa `clearFields`
        formContact.addEventListener('change', clearFields);
    }
});