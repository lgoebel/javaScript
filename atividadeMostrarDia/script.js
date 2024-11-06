function carregar(){
var msg = document.getElementById('msg')
var img = document.getElementById('img')
var data = new Date()
var hora = data.getHours()

msg.innerHTML = `Agora são ${hora} horas.`

if(hora >= 6 && hora <12){
    //BOM DIA!
    img.src = "manha3.png"
    document.body.style.background="yellow"
    cabeca.innerHTML=`De manhã!` //muda o texto
    cabeca.style.color="black" //muda a cor da fonte
    

}else if(hora >=12 && hora <18){
    //BOA TARDE!
    img.src = "tarde3.png"
    document.body.style.background="brown"
    cabeca.innerHTML=`De tarde!` //muda o texto
}else{
    //BOA NOITE!
    img.src = "noite3.png"
    document.body.style.background="black"
    cabeca.innerHTML=`De noite!` //muda o texto
}
}