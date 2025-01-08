document.addEventListener('DOMContentLoaded', () => {
    const toggleSwitch = document.getElementById('flexSwitchCheckDefault');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const bannersTitulos = document.querySelectorAll('.banners-titulo');
  
    // Verifica se o modo escuro está salvo no localStorage
    if (localStorage.getItem('dark-mode') === 'enabled') {
      body.classList.add('dark-mode');
      navbar.classList.add('dark-mode');
      bannersTitulos.forEach((element) => {
        element.classList.add('dark-mode');
      });
      toggleSwitch.checked = true;
    }
  
    toggleSwitch.addEventListener('change', () => {
      body.classList.toggle('dark-mode');
      navbar.classList.toggle('dark-mode');
      bannersTitulos.forEach((element) => {
        element.classList.toggle('dark-mode');
      });
  
      // Salva a preferência no localStorage
      if (body.classList.contains('dark-mode')) {
        localStorage.setItem('dark-mode', 'enabled');
      } else {
        localStorage.setItem('dark-mode', 'disabled');
      }
    });
  });
  