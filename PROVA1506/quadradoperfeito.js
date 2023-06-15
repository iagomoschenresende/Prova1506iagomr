function quadradoperfeito(){
    var n = parseFloat(prompt('Digite o número que você deseje saber se ele é ou não um quadrado perfeito:'))
    if( Math.sqrt(n) % 1 === 0){
        alert('Este número é um quadrdo perfeito')
        return;
    }
    alert('Este número não é um quadrdo perfeito')
}

quadradoperfeito();