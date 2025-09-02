// Initialize AOS
AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: true,
    offset: 100
});

// Initialize Feather Icons
feather.replace();

// Mobile menu toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');

mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = mobileMenuButton.querySelector('i');
    if (mobileMenu.classList.contains('hidden')) {
        feather.replace();
    } else {
        icon.setAttribute('data-feather', 'x');
        feather.replace();
    }
});

// Create particles
function createParticles() {
    const container = document.getElementById('particles-bg');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2px and 6px
        const size = Math.random() * 4 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;

        // Random delay
        particle.style.animationDelay = `${Math.random() * 5}s`;

        container.appendChild(particle);
    }
}

// Number counters
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const count = +counter.innerText;
        const increment = target / speed;

        if (count < target) {
            counter.innerText = Math.ceil(count + increment);
            setTimeout(animateCounters, 1);
        } else {
            counter.innerText = target;
        }
    });
}

// Intersection Observer for counters
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            animateCounters();
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.counter').forEach(counter => {
    observer.observe(counter);
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });

            // Close mobile menu if open
            if (!mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
                const icon = mobileMenuButton.querySelector('i');
                icon.setAttribute('data-feather', 'menu');
                feather.replace();
            }
        }
    });
});

// Chat functionality
const chatContainer = document.querySelector('.chat-container');
const chatInput = document.getElementById('chatInput');
const sendButton = document.getElementById('sendMessage');

function addMessage(text, isUser) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('chat-message', isUser ? 'user-message' : 'bot-message');
    messageDiv.classList.add(isUser ? 'ml-auto' : '');
    messageDiv.classList.add('p-4', 'rounded-lg', 'mb-4', 'max-w-xs');

    if (isUser) {
        const messageContent = document.createElement('div');
        messageContent.classList.add('flex', 'items-start', 'gap-2');

        const avatar = document.createElement('div');
        avatar.className = 'w-8 h-8 rounded-full bg-dark flex items-center justify-center shrink-0';
        avatar.innerHTML = '<i data-feather="user" class="text-primary w-4 h-4"></i>';

        const textDiv = document.createElement('div');
        const messageText = document.createElement('p');
        messageText.className = 'text-primary';
        messageText.textContent = text;

        textDiv.appendChild(messageText);
        messageContent.appendChild(avatar);
        messageContent.appendChild(textDiv);
        messageDiv.appendChild(messageContent);
    } else {
        const messageContent = document.createElement('div');
        messageContent.classList.add('flex', 'items-start', 'gap-2');

        const avatar = document.createElement('div');
        avatar.className = 'w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center shrink-0';
        avatar.innerHTML = '<i data-feather="cpu" class="text-primary w-4 h-4"></i>';

        const textDiv = document.createElement('div');
        const messageText = document.createElement('p');
        messageText.className = 'text-gray-300';
        messageText.textContent = text;

        const meta = document.createElement('div');
        meta.className = 'text-xs text-gray-500 mt-1';
        meta.textContent = 'Agente IA • Online';

        textDiv.appendChild(messageText);
        textDiv.appendChild(meta);
        messageContent.appendChild(avatar);
        messageContent.appendChild(textDiv);
        messageDiv.appendChild(messageContent);
    }

    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
    feather.replace();
}

function handleSendMessage() {
    const message = chatInput.value.trim();
    if (message) {
        addMessage(message, true);
        chatInput.value = '';

        // Simulate bot response
        setTimeout(() => {
            const responses = [
                "Entendi sua dúvida. Posso te explicar melhor sobre como nossa solução funciona.",
                "Ótima pergunta! Nossa IA pode automatizar até 95% dos processos manuais.",
                "Para essa necessidade, recomendo nosso pacote de automação empresarial.",
                "Posso conectar você com um especialista para detalhes técnicos.",
                "Temos vários cases de sucesso nessa área. Posso compartilhar alguns."
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];
            addMessage(randomResponse, false);
        }, 1000);
    }
}

sendButton.addEventListener('click', handleSendMessage);
chatInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') handleSendMessage();
});

// Quick question buttons
document.querySelectorAll('.quick-question').forEach(button => {
    button.addEventListener('click', () => {
        const question = button.textContent.trim();
        chatInput.value = question;
        handleSendMessage();
    });
});

// Lazy loading para imagens
function lazyLoadImages() {
    const lazyImages = document.querySelectorAll('img.lazy');

    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.src;
                    img.classList.add('lazy-loaded');
                    imageObserver.unobserve(img);
                }
            });
        });

        lazyImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback para navegadores sem suporte a IntersectionObserver
        lazyImages.forEach(img => {
            img.src = img.src;
            img.classList.add('lazy-loaded');
        });
    }
}

// Initialize particles and lazy loading when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createParticles();
    lazyLoadImages();
});