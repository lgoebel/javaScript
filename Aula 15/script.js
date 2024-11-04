function gerarTabuada() {
    var numero = document.getElementById('numero').value;
    var resultDiv = document.getElementById('result');

    resultDiv.innerHTML = '' //limpa o trem anterior

    if (numero === '') {
        resultDiv.innerHTML = '<p>Por favor, digite um número.</p>'
        return  
    }

    for (var i = 1; i <= 10; i++) {
        var resultado = numero * i
        var p = document.createElement('p')
        p.innerText = numero + ' x ' + i + ' = ' + resultado
        resultDiv.appendChild(p)
    }
}