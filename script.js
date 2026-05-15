const translations = {
  it: {
    nav_gallery: 'Galleria',
    nav_about: 'About me',
    nav_contact: 'Contatti',
    gallery_title: 'Galleria',
    gallery_intro: 'Progetti universitari selezionati — branding, editoriale, UX/UI e visual design.',
    label_subject: 'Materia',
    project_jekyll: 'Dottor Jekyll e il Signor Hyde'
  },
  en: {
    nav_gallery: 'Gallery',
    nav_about: 'About me',
    nav_contact: 'Contact',
    gallery_title: 'Gallery',
    gallery_intro: 'Selected university projects — branding, editorial, UX/UI and visual design.',
    label_subject: 'Subject',
    project_jekyll: 'Doctor Jekyll and Mister Hyde'
  },
  sp: {
    nav_gallery: 'Galería',
    nav_about: 'Sobre mí',
    nav_contact: 'Contactos',
    gallery_title: 'Galería',
    gallery_intro: 'Proyectos universitarios seleccionados — branding, editorial, UX/UI y diseño visual.',
    label_subject: 'Materia',
    project_jekyll: 'Doctor Jekyll y Mister Hyde'
  }
};

const gridView = document.getElementById('gridView');
const listView = document.getElementById('listView');
const buttons = document.querySelectorAll('.view-btn');

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    buttons.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const mode = btn.dataset.view;
    gridView.classList.toggle('active-view', mode === 'grid');
    listView.classList.toggle('active-view', mode === 'list');
  });
});

// Card selezionabile: primo click seleziona, secondo click apre il progetto.
document.querySelectorAll('.project-card').forEach(card => {
  card.addEventListener('click', event => {
    if (!card.classList.contains('selected')) {
      event.preventDefault();
      document.querySelectorAll('.project-card').forEach(c => c.classList.remove('selected'));
      card.classList.add('selected');
    }
  });
});


// Lista selezionabile: primo click seleziona, secondo click apre il progetto.
document.querySelectorAll('.list-group a').forEach(item => {
  item.addEventListener('click', event => {
    if (!item.classList.contains('selected')) {
      event.preventDefault();
      document.querySelectorAll('.list-group a').forEach(i => i.classList.remove('selected'));
      item.classList.add('selected');
    }
  });
});

function setLanguage(lang) {
  const dict = translations[lang] || translations.it;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (dict[key]) el.textContent = dict[key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  document.documentElement.lang = lang === 'sp' ? 'es' : lang;
  localStorage.setItem('cafarru-lang', lang);
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

setLanguage(localStorage.getItem('cafarru-lang') || 'it');
