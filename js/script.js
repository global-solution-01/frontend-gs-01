

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