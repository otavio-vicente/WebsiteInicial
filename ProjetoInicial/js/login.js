document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let user = document.getElementById("user").value.trim();
    let password = document.getElementById("password").value.trim();

    if (user === "" || password === "") {
        Swal.fire({
            icon: "warning",
            title: "Campos obrigatórios!",
            text: "Por favor, preencha todos os campos antes de enviar.",
            confirmButtonColor: "#28a745"
        });
        return;
    }

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