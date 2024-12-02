function validarSenhaCadastro() {
    const senha = document.getElementById("senha").value;
    const confirmarSenha = document.getElementById("confirmar_senha").value;
    if (senha !== confirmarSenha) {
        alert("As senhas não coincidem!");
        return false;
    }
    return true;
}
//  Criação da página de login com validação de senha