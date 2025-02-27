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

document.getElementById("atualizacoesForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio do formulário imediatamente

    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let checkBox = document.getElementById("exampleCheck1").checked;

    if (email === "" || password === "") {
      Swal.fire({
        icon: "warning",
        title: "Campos obrigatórios!",
        text: "Por favor, preencha todos os campos antes de enviar.",
        confirmButtonColor: "#28a745"
      });
    } else if (!checkBox) {
      Swal.fire({
        icon: "info",
        title: "Confirmação necessária!",
        text: "Você precisa marcar a opção para receber atualizações.",
        confirmButtonColor: "#28a745"
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Inscrição realizada!",
        text: "Obrigado por se inscrever!",
        confirmButtonColor: "#28a745"
      }).then(() => {
        window.location.href = "index.html";
      });
    }
  });

