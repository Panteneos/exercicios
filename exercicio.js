function validarFormulario(event) {
    event.preventDefault(); // Impede o envio do formulário

    const campoA = parseFloat(document.getElementById('campoA').value);
    const campoB = parseFloat(document.getElementById('campoB').value);

    if (campoB > campoA) {
        alert('Formulário válido! Campo B é maior que Campo A.');
    } else {
        alert('Formulário inválido! Campo B deve ser maior que Campo A.');
    }
}
