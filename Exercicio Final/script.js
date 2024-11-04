function analisadorNumero() {
    // Obtenha o número inserido pelo usuário
    let numero = parseInt(document.getElementById('numero').value);
    let result = document.getElementById('result');
    let tabela = document.getElementById('tabela'); // Obtenha o elemento <select> com id "tabela"

    // Limpa a mensagem anterior
    result.innerHTML = '';

    // Verifica se o valor inserido é um número
    if (isNaN(numero)) {
        result.innerHTML = '<p>Por favor, digite um número.</p>';
        return;
    }

    // Verifica se o número já está presente na tabela
    let numeroPresente = false; //considera que o numero não existe
    for (let i = 0; i < tabela.options.length; i++) {
        if (parseInt(tabela.options[i].value) === numero) {
            numeroPresente = true;
            break;
        }
    }

    // Se o número não estiver presente, adicione uma nova opção
    if (!numeroPresente) {
        let option = document.createElement('option');
        option.value = numero; // Define o valor da opção
        option.text = `Número ${numero} adicionado`; // Define o texto da opção
        tabela.add(option);
        result.innerHTML = '<p>Número adicionado com sucesso!</p>';
    } else {
        result.innerHTML = '<p>O número já está na tabela.</p>';
    }
}