// Script para FAQ: abrir e fechar respostas
document.addEventListener('DOMContentLoaded', () => {
    const questions = document.querySelectorAll('.faq-question');
    questions.forEach(q => {
      q.addEventListener('click', () => {
        q.classList.toggle('active');
        const answer = q.nextElementSibling;
        if (answer.style.display === 'block') {
          answer.style.display = 'none';
        } else {
          answer.style.display = 'block';
        }
      });
    });
  
    // Script para formulário contato
    const form = document.getElementById('contact-form');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        const nome = form.nome.value.trim();
        const email = form.email.value.trim();
        const mensagem = form.mensagem.value.trim();
  
        if (!nome || !email || !mensagem) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
        // Validação simples de email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
          alert('Por favor, insira um e-mail válido.');
          return;
        }
  
        alert('Mensagem enviada com sucesso! Obrigado pelo contato.');
        form.reset();
      });
    }
  });
  // Marcadores simulados: posição em porcentagem (left, top) relativa ao container
  const markers = [
    {
      name: 'Área de Enchente',
      class: 'enchente',
      left: '65%', top: '25%',
      icon: '💧'
    },
    {
      name: 'Área de Incêndio Florestal',
      class: 'incendio',
      left: '50%', top: '50%',
      icon: '🔥'
    },
    {
      name: 'Área de Tremor de Terra',
      class: 'tremor',
      left: '25%', top: '80%',
      icon: '🌎'
    }
  ];

  document.addEventListener('DOMContentLoaded', () => {
    const mapContainer = document.getElementById('map-container');
    markers.forEach(marker => {
      const el = document.createElement('button');
      el.className = `marker ${marker.class}`;
      el.style.left = marker.left;
      el.style.top = marker.top;
      el.setAttribute('title', marker.name);
      el.setAttribute('tabindex', '0');
      el.setAttribute('aria-label', marker.name);

      // Ícone
      el.textContent = marker.icon;

      // Label
      const label = document.createElement('span');
      label.className = 'marker-label';
      label.textContent = marker.name;
      el.appendChild(label);

      el.onclick = () => alert(`Alerta: ${marker.name}`);
      el.onkeypress = e => {
        if (e.key === 'Enter' || e.key === ' ') {
          alert(`Alerta: ${marker.name}`);
        }
      };
      mapContainer.appendChild(el);
    });
  });