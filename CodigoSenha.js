document.addEventListener("DOMContentLoaded", function () {
    const inputSenha = document.getElementById("InputSenha");
    const formSenha = document.getElementById("FormSenha");

    window.addEventListener("pageshow", function (event) {
        localStorage.clear()
    });

    formSenha.addEventListener("submit", function (event) {
        event.preventDefault();
        const senhaColocada = inputSenha.value;
        const senhaMD5 = CryptoJS.MD5(senhaColocada).toString();

        if (senhaMD5 === "da5aa53c8b9535ebc04f3813a34cbedd") {
            const Autorizacao = "Autorizado";
            localStorage.setItem("Autorizacao", Autorizacao);
            window.location.href = "./PaginaJogadores.html";
        } else {
            alert('Senha incorreta!');
            inputSenha.value = "";
        }
    });
});


