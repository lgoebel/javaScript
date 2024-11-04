function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        //res.innerHTML=`Idade calculada: ${idade} anos`
        var genero
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'homem'
            if(idade>= 0 && idade <18){
                img.setAttribute('src','homem1.png')
                //crianca
            }else if(idade<50){
                img.setAttribute('src','homem2.png')
                //jovem
            }else{
                img.setAttribute('src','homem3.png')
                //velho
            }
        }else if(fsex[1].checked){
            genero = 'mulher'
            if(idade>= 0 && idade <18){
                img.setAttribute('src','mulher1.png')
                //crianca
            }else if(idade<50){
                img.setAttribute('src','mulher2.png')
                //jovem
            }else{
                img.setAttribute('src','mulher3.png')
                //velho
            }
        }
        res.innerHTML=`Você é: ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}