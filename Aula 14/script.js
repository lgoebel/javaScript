function verificar(){
    var ini = parseInt(document.getElementById('inicial').value) //.value no final pra pegar o valor
    var fin = parseInt(document.getElementById('final').value)
    var pass= parseInt(document.getElementById('passo').value)
    var res = document.getElementById('res')
    var resultado = '' // '' transforma em string
    var contador = ini 

    // enquanto ini <= fin, irá guardar o valor dentro da string soma (o + nesse momento é concatenação)
    if(ini == 0 || fin == 0 || ini == fin || ini > fin){
        alert('[ERRO]')
        return;
    }

    for(contador = ini; contador<=fin; contador+=pass){
        resultado += contador + ' ';
    }
    res.innerHTML = resultado;
}