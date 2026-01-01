// ==================== SCROLL TO TOP ON PAGE LOAD/REFRESH ====================
// Prevent scroll restoration and force page to top on load
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Force scroll to top immediately
window.scrollTo(0, 0);

// Also force on page show (handles back/forward navigation)
window.addEventListener('pageshow', function(event) {
    window.scrollTo(0, 0);
});

// ==================== PRELOADER ====================
window.addEventListener('load', function() {
    // Ensure we're at the top
    window.scrollTo(0, 0);
    
    const preloader = document.getElementById('preloader');
    setTimeout(function() {
        preloader.classList.add('hide');
    }, 1000);
});

// ==================== PROFILE IMAGE LOADING ====================
document.addEventListener('DOMContentLoaded', function() {
    // Force scroll to top on DOM ready as well
    window.scrollTo(0, 0);
    
    const profileImg = document.querySelector('.profile-img');
    if (profileImg) {
        // Add loading class initially
        profileImg.classList.add('loading');
        
        // Remove loading class when image is loaded
        profileImg.addEventListener('load', function() {
            profileImg.classList.remove('loading');
        });
        
        // If image is already cached and loaded
        if (profileImg.complete) {
            profileImg.classList.remove('loading');
        }
    }
});

// ==================== NAVBAR SCROLL ====================
const navbar = document.getElementById('navbar');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// ==================== MOBILE MENU TOGGLE ====================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');

navToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
    
    // Animate hamburger
    const spans = navToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        navMenu.classList.remove('active');
        const spans = navToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// ==================== SMOOTH SCROLLING ====================
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ==================== ACTIVE NAVIGATION ====================
const sections = document.querySelectorAll('.section, .hero-section');

window.addEventListener('scroll', function() {
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop - 150) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
            link.classList.add('active');
        }
    });
});

// ==================== TYPED TEXT ANIMATION ====================
const typedTextElement = document.querySelector('.typed-text');
const texts = [
    'Software Developer Engineer',
    'Backend Developer',
    'AI Integration Specialist',
    'Test Automation Expert',
    'Competitive Programmer',
    'Problem Solver'
];

let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeText() {
    const currentText = texts[textIndex];
    
    if (isDeleting) {
        typedTextElement.textContent = currentText.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        typedTextElement.textContent = currentText.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }
    
    if (!isDeleting && charIndex === currentText.length) {
        isDeleting = true;
        typingSpeed = 2000; // Wait before deleting
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
        typingSpeed = 500; // Wait before typing next text
    }
    
    setTimeout(typeText, typingSpeed);
}

// Start typing animation
setTimeout(typeText, 1000);

// ==================== COUNTER ANIMATION ====================
const counters = document.querySelectorAll('.stat-number');
let counterAnimated = false;

function animateCounters() {
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const increment = target / (duration / 16); // 60 FPS
        let current = 0;
        
        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current) + (target >= 1000 ? '+' : '%');
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target + (target >= 1000 ? '+' : '%');
            }
        };
        
        updateCounter();
    });
}

// Trigger counter animation when stats section is visible
window.addEventListener('scroll', function() {
    if (!counterAnimated) {
        const statsSection = document.querySelector('.about-stats');
        if (statsSection) {
            const rect = statsSection.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            
            if (isVisible) {
                animateCounters();
                counterAnimated = true;
            }
        }
    }
});

// ==================== PARTICLES BACKGROUND ====================
function createParticles() {
    const particlesContainer = document.querySelector('.hero-particles');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        
        const size = Math.random() * 3 + 1;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        const duration = Math.random() * 20 + 10;
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(108, 99, 255, 0.5);
            border-radius: 50%;
            left: ${x}%;
            top: ${y}%;
            animation: float ${duration}s ${delay}s infinite ease-in-out;
            box-shadow: 0 0 10px rgba(108, 99, 255, 0.5);
        `;
        
        particlesContainer.appendChild(particle);
    }
}

// Add particle animation CSS
const style = document.createElement('style');
style.textContent = `
    @keyframes float {
        0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.5;
        }
        25% {
            transform: translate(20px, -30px) scale(1.2);
            opacity: 0.8;
        }
        50% {
            transform: translate(-20px, -60px) scale(0.8);
            opacity: 0.3;
        }
        75% {
            transform: translate(-40px, -30px) scale(1.1);
            opacity: 0.6;
        }
    }
`;
document.head.appendChild(style);

createParticles();

// ==================== SCROLL ANIMATIONS ====================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe elements for animation
const animateElements = document.querySelectorAll(
    '.info-card, .skill-item, .timeline-item, .project-card, .achievement-highlight, .rank-card'
);

animateElements.forEach(element => {
    observer.observe(element);
});

// ==================== BACK TO TOP BUTTON ====================
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ==================== FORM HANDLING ====================
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };
    
    // PLACEHOLDER: Add your form submission logic here
    // This could be sending to a backend API, email service, etc.
    console.log('Form submitted:', formData);
    
    // Show success message
    alert('Thank you for your message! I will get back to you soon.');
    
    // Reset form
    contactForm.reset();
    
    // You can integrate with services like:
    // - EmailJS: https://www.emailjs.com/
    // - Formspree: https://formspree.io/
    // - Netlify Forms: https://www.netlify.com/products/forms/
});

// ==================== SKILL ITEM ANIMATION ====================
const skillItems = document.querySelectorAll('.skill-item');

skillItems.forEach((item, index) => {
    item.style.animationDelay = `${index * 0.1}s`;
});

// ==================== PROJECT CARD TILT EFFECT ====================
const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 20;
        const rotateY = (centerX - x) / 20;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ==================== TIMELINE ANIMATION ====================
const timelineItems = document.querySelectorAll('.timeline-item');

timelineItems.forEach((item, index) => {
    item.style.opacity = '0';
    item.style.transform = 'translateX(-50px)';
    item.style.transition = 'all 0.6s ease';
    item.style.transitionDelay = `${index * 0.2}s`;
});

const timelineObserver = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateX(0)';
        }
    });
}, { threshold: 0.2 });

timelineItems.forEach(item => {
    timelineObserver.observe(item);
});

// ==================== CURSOR TRAIL EFFECT ====================
let mouseX = 0;
let mouseY = 0;
let cursorX = 0;
let cursorY = 0;

document.addEventListener('mousemove', function(e) {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    
    requestAnimationFrame(animateCursor);
}

animateCursor();

// ==================== SCROLL PROGRESS INDICATOR ====================
const scrollProgress = document.createElement('div');
scrollProgress.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 0%;
    height: 3px;
    background: linear-gradient(90deg, #6C63FF 0%, #4CAF50 100%);
    z-index: 10000;
    transition: width 0.1s ease;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', function() {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.scrollY / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// ==================== PARALLAX EFFECT ====================
window.addEventListener('scroll', function() {
    const scrolled = window.pageYOffset;
    const parallaxElements = document.querySelectorAll('.hero-particles');
    
    parallaxElements.forEach(element => {
        const speed = 0.5;
        element.style.transform = `translateY(${scrolled * speed}px)`;
    });
});

// ==================== LAZY LOADING IMAGES ====================
const images = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => {
    imageObserver.observe(img);
});

// ==================== SOCIAL LINK HOVER EFFECTS ====================
const socialLinks = document.querySelectorAll('.social-link, .social-links a');

socialLinks.forEach(link => {
    link.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px) scale(1.1)';
    });
    
    link.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// ==================== RIPPLE EFFECT ON BUTTONS ====================
const buttons = document.querySelectorAll('.btn');

buttons.forEach(button => {
    button.addEventListener('click', function(e) {
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.5);
            left: ${x}px;
            top: ${y}px;
            transform: scale(0);
            animation: ripple 0.6s ease-out;
            pointer-events: none;
        `;
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation CSS
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(rippleStyle);

// ==================== CONSOLE MESSAGE ====================
console.log('%c👋 Hello! Thanks for checking out my portfolio!', 'color: #6C63FF; font-size: 20px; font-weight: bold;');
console.log('%c🚀 Want to collaborate? Let\'s connect!', 'color: #4CAF50; font-size: 16px;');
console.log('%c📧 Email: colinrolance2001@gmail.com', 'color: #FF6B6B; font-size: 14px;');

// ==================== PERFORMANCE OPTIMIZATION ====================
// Debounce function for scroll events
function debounce(func, wait = 10) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy functions
const debouncedScroll = debounce(function() {
    // Any heavy scroll operations can be debounced here
}, 10);

window.addEventListener('scroll', debouncedScroll);

// ==================== THEME TOGGLE (Optional Enhancement) ====================
// PLACEHOLDER: You can add a theme toggle functionality here
// Example:
/*
const themeToggle = document.createElement('button');
themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
themeToggle.className = 'theme-toggle';
document.body.appendChild(themeToggle);

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('light-theme');
    const icon = this.querySelector('i');
    if (document.body.classList.contains('light-theme')) {
        icon.className = 'fas fa-sun';
    } else {
        icon.className = 'fas fa-moon';
    }
});
*/

// ==================== INITIALIZE ====================
document.addEventListener('DOMContentLoaded', function() {
    console.log('Portfolio loaded successfully! 🎉');
    
    // Add any initialization code here
    
    // Animate elements on load
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});
