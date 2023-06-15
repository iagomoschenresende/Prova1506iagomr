function validarSenha() {
    var senha = prompt('Digite a sua senha para ver se é válida ou não:')
    if (senha.length < 8) {
        alert('Essa senha não é válida')
      return;
    }
  
    // Verifica se contém pelo menos uma letra maiúscula, uma letra minúscula e um número
    let temMaiuscula = false;
    let temMinuscula = false;
    let temNumero = false;
  
    for (let i = 0; i < senha.length; i++) {
      if (senha[i] >= 'A' && senha[i] <= 'Z') {
        temMaiuscula = true;
      } else if (senha[i] >= 'a' && senha[i] <= 'z') {
        temMinuscula = true;
      } else if (senha[i] >= '0' && senha[i] <= '9') {
        temNumero = true;
      }
  
      // Verifica se todos os critérios foram atendidos
      if (temMaiuscula && temMinuscula && temNumero) {
        alert('Essa senha é válida')
        return;
      }
    }
     alert('Essa senha não é válida')
    return false;
  }

  validarSenha();