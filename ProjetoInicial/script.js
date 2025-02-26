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