function calcularFatorial() {
    const numero = parseInt(prompt("Digite um número:"));
    
    if (isNaN(numero)) {
      alert("Número inválido. Por favor, digite um número válido.");
      return;
    }
    
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
    
    alert(`O fatorial de ${numero} é: ${fatorial}`);
  }
  
  calcularFatorial();
 
