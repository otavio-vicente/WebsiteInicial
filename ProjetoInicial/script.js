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

document.getElementById("subscriptionForm").addEventListener("submit", function(event) {
    let emailInput = document.getElementById("emailInput");
    let emailError = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (!emailPattern.test(emailInput.value)) {
        emailError.classList.remove("d-none"); 
        emailInput.classList.add("is-invalid"); 
        event.preventDefault(); 
    } else {
        emailError.classList.add("d-none"); 
        emailInput.classList.remove("is-invalid"); 
    }
});

document.getElementById("atualizacoesForm").addEventListener("submit", function (event) {
    event.preventDefault(); 

    let user = document.getElementById("user").value.trim();
    let password = document.getElementById("password").value.trim();

    if (user === "admin" && password === "1234") {
        Swal.fire({
            icon: "success",
            title: "Login realizado!",
            text: "Redirecionando...",
            timer: 2000,
            showConfirmButton: false
        }).then(() => {
            window.location.href = "admin.html"; 
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Erro!",
            text: "Usuário ou senha incorretos",
            confirmButtonColor: "#d33"
        });
    }
});