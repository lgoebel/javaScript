function parimpar(n){
    if(n%2 == 0 ){
        return 'PAR!'
    }else{
        return 'IMPAR!'
    }
}

let res = parimpar(5)
console.log(res)

//pode ser feito também dessa forma
console.log(res = parimpar(5))