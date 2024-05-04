// Seleciona o elemento .cabecalho__menu_container
const cabecalhoMenuContainer = document.querySelectorAll('.cabecalho__menu_container');

// Seleciona o elemento #menu_sobre
const menuAtual = document.querySelector('#page_atual');

// Adiciona um ouvinte de evento para quando o mouse entra no elemento .cabecalho__menu_container
cabecalhoMenuContainer.forEach(item=>{item.addEventListener('mouseenter', () => {
  // Altera a opacidade de #menu_sobre para 0
  menuAtual.style.opacity = '0';})

  item.addEventListener('mouseleave', () => {
    // Altera a opacidade de #menu_sobre para 0.25
    menuAtual.style.opacity = '0.25';
  });
});


function toggleEmailPopup() {
  var popup = document.getElementById("email-popup");
  if (popup.style.display === "flex") {
      popup.style.display = "none";
  } else {
      popup.style.display = "flex";
  }
}
