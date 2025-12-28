const navLinks = document.querySelectorAll('.nav-link');
const navMenu = document.getElementById('navMenu');
const menuToggle = document.getElementById('menuToggle');

navLinks.forEach(link => {
    link.onclick = e => {
        e.preventDefault();
        document.querySelector(link.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });

        navLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
        navMenu.classList.remove('show');
    };
});

menuToggle.onclick = () => navMenu.classList.toggle('show');

document.querySelectorAll('.contact-actions button').forEach(btn => {
    btn.onclick = () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const message = messageInput.value.trim();

        if (!name || !email || !message) return alert('Isi semua kolom.');

        const text = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

        if (btn.dataset.type === 'whatsapp')
            window.open(`https://wa.me/6281221068135?text=${encodeURIComponent(text)}`);

        if (btn.dataset.type === 'email')
            location.href = `mailto:defarrazarzero3@gmail.com?subject=Portfolio Contact&body=${encodeURIComponent(text)}`;

        if (btn.dataset.type === 'instagram')
            window.open('https://www.instagram.com/seravelle.43/');
    };
});

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
