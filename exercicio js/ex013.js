var agora = new Date()
var diaSem = agora.getDay()
/*
0 = Domingo
6 = sabado

*/
switch(diaSem){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda')
        break
    case 3:
        console.log('Quarta')
        break
}