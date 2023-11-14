document.addEventListener("DOMContentLoaded", function () {
    const inputSenha = document.getElementById("InputSenha");
    const formSenha = document.getElementById("FormSenha");

    formSenha.addEventListener("submit", function (event) {
        event.preventDefault();
        const senhaColocada = inputSenha.value;
        const senhaMD5 = CryptoJS.MD5(senhaColocada).toString();

        if (senhaMD5 === "da5aa53c8b9535ebc04f3813a34cbedd") {
            // Senha correta, redirecionar para outra página
            window.location.href = "./PaginaJogadores.html";
        } else {
            alert('Senha incorreta!');
            inputSenha.value = "";
        }
    });
});

