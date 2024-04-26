// Seleciona o elemento .cabecalho__menu_container
const cabecalhoMenuContainer = document.querySelectorAll('.cabecalho__menu_container');

// Seleciona o elemento #menu_sobre
const menuSobre = document.querySelector('#page_atual');

// Adiciona um ouvinte de evento para quando o mouse entra no elemento .cabecalho__menu_container
cabecalhoMenuContainer.forEach(item=>{item.addEventListener('mouseenter', () => {
  // Altera a opacidade de #menu_sobre para 0
  menuSobre.style.opacity = '0';})

  item.addEventListener('mouseleave', () => {
    // Altera a opacidade de #menu_sobre para 0.25
    menuSobre.style.opacity = '0.25';
  });
});

