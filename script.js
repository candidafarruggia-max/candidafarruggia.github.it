const translations = {
  it: {
    nav_gallery: 'Galleria', nav_about: 'About me', nav_contact: 'Contatti',
    hello_small: 'Ciao, io sono', role: 'Graphic Design<br>& UX/UI Design',
    about_label: 'About me', about_title: 'Creo identità visive, layout digitali e progetti con carattere.',
    more_about: 'More about me', works_label: 'Selected works', projects_title: 'Progetti', footer_cta: 'Creiamo insieme'
  },
  en: {
    nav_gallery: 'Gallery', nav_about: 'About me', nav_contact: 'Contacts',
    hello_small: 'Hi, I am', role: 'Graphic Design<br>& UX/UI Design',
    about_label: 'About me', about_title: 'I create visual identities, digital layouts and projects with character.',
    more_about: 'More about me', works_label: 'Selected works', projects_title: 'Projects', footer_cta: 'Let’s create together'
  },
  sp: {
    nav_gallery: 'Galería', nav_about: 'Sobre mí', nav_contact: 'Contactos',
    hello_small: 'Hola, soy', role: 'Diseño gráfico<br>y UX/UI Design',
    about_label: 'Sobre mí', about_title: 'Creo identidades visuales, layouts digitales y proyectos con carácter.',
    more_about: 'Más sobre mí', works_label: 'Trabajos seleccionados', projects_title: 'Proyectos', footer_cta: 'Creamos juntos'
  }
};

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    document.querySelectorAll('.lang-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    document.documentElement.lang = lang === 'sp' ? 'es' : lang;
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.dataset.i18n;
      if (translations[lang][key]) el.innerHTML = translations[lang][key];
    });
  });
});

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});

const contact = document.querySelector('#contact');
const projects = document.querySelector('#projects');
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(l => l.classList.remove('active'));
      const active = document.querySelector(`.nav-link[data-section="${entry.target.id === 'contact' ? 'contact' : 'projects'}"]`);
      if (active) active.classList.add('active');
    }
  });
}, { threshold: 0.45 });
if (projects) observer.observe(projects);
if (contact) observer.observe(contact);

const cards = document.querySelectorAll('.project-card');
cards.forEach(card => {
  card.addEventListener('mousemove', e => {
    const r = card.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5;
    const y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `translateY(-8px) rotateX(${y * -5}deg) rotateY(${x * 5}deg)`;
  });
  card.addEventListener('mouseleave', () => card.style.transform = '');
});
