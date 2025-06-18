// Scroll navigation highlight
window.addEventListener('scroll', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('nav a');

  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').includes(current)) {
      link.classList.add('active');
    }
  });
});

// Show/hide contact info
function toggleContact() {
  const contact = document.getElementById('contact-info');
  contact.style.display = (contact.style.display === 'none') ? 'block' : 'none';
}

// Dynamic footer year
document.addEventListener('DOMContentLoaded', () => {
  document.getElementById('year').textContent = new Date().getFullYear();
});

//Contact-button
function toggleContact() {
  const contactDiv = document.getElementById("contact-info");
  contactDiv.style.display = contactDiv.style.display === "none" ? "block" : "none";
}
