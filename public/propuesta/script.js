'use strict';

const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

function closeMenu() {
  navigation.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Abrir menú');
}

toggle.addEventListener('click', () => {
  const isOpen = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(isOpen));
  toggle.setAttribute('aria-label', isOpen ? 'Cerrar menú' : 'Abrir menú');
  navigation.classList.toggle('open', isOpen);
});

navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});
document.addEventListener('click', event => {
  if (!event.target.closest('.header')) closeMenu();
});
window.matchMedia('(min-width: 1001px)').addEventListener('change', event => {
  if (event.matches) closeMenu();
});

if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08 });
  document.querySelectorAll('.reveal').forEach(element => observer.observe(element));
  document.body.classList.add('motion-ready');
}

document.querySelectorAll('[data-service]').forEach(card => {
  card.addEventListener('click', () => {
    document.querySelector('#service').value = card.dataset.service;
  });
});

document.querySelectorAll('[data-product]').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelector('#service').value = 'Consulta de producto';
    const message = document.querySelector('#message');
    const text = 'Me interesa recibir información sobre ' + link.dataset.product + '.';
    if (!message.value.trim()) message.value = text;
  });
});

// Native dialog keeps keyboard focus inside the image viewer and supports Escape.
const imageDialog = document.querySelector('.gallery-dialog');
document.querySelectorAll('[data-gallery]').forEach(button => {
  button.addEventListener('click', () => {
    const img = document.querySelector('#gallery-dialog-image');
    img.src = button.dataset.gallery;
    img.alt = button.dataset.caption;
    document.querySelector('#gallery-dialog-caption').textContent = button.dataset.caption;
    imageDialog.showModal();
  });
});
imageDialog.querySelector('.dialog-close').addEventListener('click', () => imageDialog.close());
imageDialog.addEventListener('click', event => {
  const rect = imageDialog.getBoundingClientRect();
  if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) imageDialog.close();
});

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const hero = document.querySelector('.hero');
const contactSection = document.querySelector('#contacto');
const floatingContact = document.querySelector('.floating-contact');
let scrollQueued = false;
function updateScrollUI() {
  // The original photograph's HMI console is a transparent foreground layer.
  // The factory and text remain stationary relative to the section.
  const heroBounds = hero.getBoundingClientRect();
  const heroVisible = heroBounds.bottom > 0 && heroBounds.top < window.innerHeight;
  const travel = Math.max(0, Math.min(-heroBounds.top, heroBounds.height));
  const strength = window.innerWidth <= 760 ? 0.25 : 0.45;
  const offset = reducedMotion.matches ? 0 : Math.min(travel * strength, 180);
  hero.style.setProperty('--console-offset', offset.toFixed(2) + 'px');
  hero.classList.toggle('console-moving', heroVisible && !reducedMotion.matches);
  const max = document.documentElement.scrollHeight - window.innerHeight;
  document.documentElement.style.setProperty('--progress', max > 0 ? String(window.scrollY / max) : '0');
  document.querySelector('.header').classList.toggle('scrolled', window.scrollY > 40);
  const contactBounds = contactSection.getBoundingClientRect();
  const contactVisible = contactBounds.top < window.innerHeight && contactBounds.bottom > 0;
  const footerVisible = document.querySelector('.footer').getBoundingClientRect().top < window.innerHeight;
  const showContact = window.scrollY > 600 && !contactVisible && !imageDialog.open && !heroVisible && !footerVisible;
  floatingContact.classList.toggle('shown', showContact);
  floatingContact.inert = !showContact;
  scrollQueued = false;
}
window.addEventListener('scroll', () => {
  if (!scrollQueued) {
    scrollQueued = true;
    window.requestAnimationFrame(updateScrollUI);
  }
}, { passive: true });
window.addEventListener('resize', updateScrollUI);
reducedMotion.addEventListener('change', updateScrollUI);
updateScrollUI();

if ('IntersectionObserver' in window) {
  const navLinks = [...navigation.querySelectorAll('a[href^="#"]')];
  const sectionObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.hash === '#' + entry.target.id;
          link.classList.toggle('active', active);
          if (active) link.setAttribute('aria-current', 'location');
          else link.removeAttribute('aria-current');
        });
      }
    });
  }, { rootMargin: '-15% 0px -55% 0px', threshold: 0 });
  navLinks.forEach(link => {
    const section = document.querySelector(link.hash);
    if (section) sectionObserver.observe(section);
  });
}

const quickForm = document.querySelector('#quick-dispatch');
quickForm.addEventListener('submit', event => {
  event.preventDefault();
  const input = document.querySelector('#quick-contact');
  const value = input.value.trim();
  const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
  const digits = value.replace(/\D/g, '');
  const isPhone = /^[+\d\s().-]+$/.test(value) && digits.length >= 10 && digits.length <= 15;
  input.setCustomValidity(isEmail || isPhone ? '' : 'Ingresa un correo válido o un teléfono de 10 a 15 dígitos.');
  if (!quickForm.reportValidity()) return;
  const target = document.querySelector(isEmail ? '#email' : '#phone');
  target.value = value;
  contactSection.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth' });
  document.querySelector('#name').focus({ preventScroll: true });
  document.querySelector('#form-status').textContent = 'Tu contacto está listo. Completa los detalles para preparar tu solicitud.';
});
quickForm.querySelector('input').addEventListener('input', event => event.target.setCustomValidity(''));

const filterButtons = [...document.querySelectorAll('[data-filter]')];
const productCards = [...document.querySelectorAll('[data-category]')];
filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filterButtons.forEach(filter => {
      const selected = filter === button;
      filter.classList.toggle('active', selected);
      filter.setAttribute('aria-pressed', String(selected));
    });
    let count = 0;
    productCards.forEach(card => {
      const show = category === 'all' || card.dataset.category === category;
      card.hidden = !show;
      if (show) {
        count++;
        card.classList.add('visible');
      }
    });
    document.querySelector('.product-layout').classList.toggle('filtered', category !== 'all');
    document.querySelector('.product-list').hidden = !productCards.some(card => card.closest('.product-list') && !card.hidden);
    document.querySelector('#filter-status').textContent = count + (count === 1 ? ' producto mostrado.' : ' productos mostrados.');
  });
});

const brandStrip = document.querySelector('.brand-names');
const brandTrack = document.createElement('div');
brandTrack.className = 'brand-track';
const brandGroup = document.createElement('div');
brandGroup.className = 'brand-group';
while (brandStrip.firstChild) brandGroup.append(brandStrip.firstChild);
const brandCopy = brandGroup.cloneNode(true);
brandCopy.setAttribute('aria-hidden', 'true');
brandTrack.append(brandGroup, brandCopy);
brandStrip.append(brandTrack);
document.querySelector('#marquee-toggle').addEventListener('click', event => {
  const button = event.currentTarget;
  const paused = button.getAttribute('aria-pressed') !== 'true';
  button.setAttribute('aria-pressed', String(paused));
  button.textContent = paused ? 'Reanudar movimiento' : 'Pausar movimiento';
  brandTrack.style.animationPlayState = paused ? 'paused' : '';
});

document.querySelector('#year').textContent = new Date().getFullYear();

document.querySelector('#project-form').addEventListener('submit', event => {
  event.preventDefault();
  const form = event.currentTarget;
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = 'Consulta de proyecto — ' + (data.get('service') || 'IDEB México');
  const body = [
    'Hola, equipo de IDEB México:',
    '',
    'Nombre: ' + data.get('name').trim(),
    'Empresa: ' + (data.get('company').trim() || 'No indicada'),
    'Correo: ' + data.get('email').trim(),
    'Teléfono: ' + (data.get('phone').trim() || 'No indicado'),
    'Solución: ' + (data.get('service') || 'Por definir'),
    '',
    data.get('message').trim(),
  ].join('\n');
  const mailto = 'mailto:Contacto@idebmexico.com?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
  const status = document.querySelector('#form-status');
  status.replaceChildren(document.createTextNode('Tu consulta está preparada. Si no se abrió tu aplicación, '));
  const retry = document.createElement('a');
  retry.href = mailto;
  retry.textContent = 'abre el correo aquí';
  retry.style.textDecoration = 'underline';
  status.append(retry, document.createTextNode(' o llámanos al 33 1592 2676.'));
  window.location.href = mailto;
});
