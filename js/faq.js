// Interatividade no FAQ (mostrar/esconder respostas)
const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const pergunta = item.querySelector('h2');
  const resposta = item.querySelector('p');

  if (pergunta && resposta) {
    resposta.style.display = 'none';

    pergunta.style.cursor = 'pointer';
    pergunta.addEventListener('click', () => {
      resposta.style.display = resposta.style.display === 'none' ? 'block' : 'none';
    });
  }
});