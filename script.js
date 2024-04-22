// Função para alterar o texto com base no tamanho da tela
function alterarTexto() {
    var textoAlvo = document.getElementById('texto-alvo');

    if (window.innerWidth <= 768) {
        textoAlvo.innerHTML = "Texto para tela pequena";
    } else {
        textoAlvo.innerHTML = "Texto para tela grande";
    }
}

// Verifica o tamanho da tela ao carregar a página
window.onload = function() {
    alterarTexto();
};

// Verifica o tamanho da tela quando a janela é redimensionada
window.onresize = function() {
    alterarTexto();
};
