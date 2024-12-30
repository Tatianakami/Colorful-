// Selecionar todos os cartões
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
      // Gerar uma cor aleatória
      const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
      // Alterar a cor do cartão
      card.style.setProperty('--card-color', randomColor);

      // Atualizar o texto do cartão para exibir a nova cor
      const colorText = card.querySelector('p');
      colorText.textContent = `This card is now ${randomColor}.`;
  });
});