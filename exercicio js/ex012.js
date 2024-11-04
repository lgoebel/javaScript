var agora = new Date()
var hora = agora.getHours()
var min = agora.getMinutes()
var dia = agora.getDay() //dia deu errado
var mes = agora.getMonth()
var ano = agora.getFullYear() //pega a hora do sistema
console.log(`data ${dia}/${mes}/${ano}  ${hora} horas ${min} minutos.`)
if (hora < 12){
    console.log('Bom dia!')
}else if(hora <= 18){
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}