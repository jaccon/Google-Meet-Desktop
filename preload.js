window.addEventListener('DOMContentLoaded', () => {
  // Força o título da janela
  document.title = "Google Meet Desktop";

  // Adiciona o CSS customizado para modo escuro
  const darkModeStyle = document.createElement('style');
  darkModeStyle.innerText = `
      /* Modo Escuro */
      body {
          background-color: #202124 !important;
          color: #E8EAED !important;
      }
      /* Exemplo de seletores específicos */
      .your-class-selector {
          background-color: #303134 !important;
          color: #E8EAED !important;
      }
      /* Altere as cores de outros elementos conforme necessário */
      a {
          color: #8AB4F8 !important;
      }
      /* Adicione mais regras CSS aqui para ajustar o modo escuro */
  `;
  document.head.appendChild(darkModeStyle);
});
