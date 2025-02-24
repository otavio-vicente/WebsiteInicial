function toggleTexto() {
    var conteudo = document.getElementById("mais");
    var botao = document.getElementById("botaoLerMais");

    if (conteudo.style.display === "none" || conteudo.style.display === "") {
        conteudo.style.display = "inline";
        botao.innerHTML = "Leia Menos";
    } else {
        conteudo.style.display = "none";
        botao.innerHTML = "Leia Mais";
    }
}

const fixedUser = "adm";
const fixedPassword = "1234";
    
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const user = document.getElementById("user").value;
    const password = document.getElementById("password").value;
    const errorMsg = document.getElementById("errorMsg");

    if (user === fixedUser && password === fixedPassword) {
        alert("Login bem-sucedido!");
        window.location.href = "adm.html";
    } else {
        errorMsg.textContent = "Usuário ou senha incorretos!";
    }
});