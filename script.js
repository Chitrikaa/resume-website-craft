
// DOM elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navbar = document.getElementById('navbar');
const skillsGrid = document.getElementById('skills-grid');
const projectsGrid = document.getElementById('projects-grid');

// Skills data
const skills = [
    "Java", "JavaScript", "HTML", "CSS", "React.js", "Node.js", "Express.js", "MongoDB", 
    "VS Code", "Git", "Blender", "Unity", "Figma", "C#", "Photoshop"
];

// Projects data
const projects = [
    {
        title: "E-Commerce Website",
        description: "Built a full-stack e-commerce website using React, Node.js, and MongoDB with features like user authentication, product listings, and an admin panel using JWT. Implemented cart functionality and enabled product management capabilities for administrators.",
        technologies: ["React", "Node.js", "MongoDB", "JWT"]
    },
    {
        title: "Virtual Reality Learning Environment",
        description: "Developed an interactive VR zoo in Unity with 3D models and environments created in Blender and textured using Photoshop. Implemented C# scripts for user interaction and deployed the experience on VR headsets for immersive learning.",
        technologies: ["Unity", "Blender", "C#", "Photoshop", "VR"]
    }
];

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on links
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Populate skills
function populateSkills() {
    skillsGrid.innerHTML = '';
    skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.className = 'skill-tag';
        skillElement.textContent = skill;
        skillsGrid.appendChild(skillElement);
    });
}

// Populate projects
function populateProjects() {
    projectsGrid.innerHTML = '';
    projects.forEach((project, index) => {
        const projectElement = document.createElement('div');
        projectElement.className = 'card';
        projectElement.style.animationDelay = `${index * 0.2}s`;
        
        projectElement.innerHTML = `
            <div class="card-header">
                <h3>${project.title}</h3>
            </div>
            <div class="card-content">
                <p class="company">${project.description}</p>
                <div style="margin-top: 1rem;">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectElement);
    });
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe all cards and sections
function observeElements() {
    const elementsToObserve = document.querySelectorAll('.card, .section-title, .hero-content');
    elementsToObserve.forEach(el => observer.observe(el));
}

// Active navigation link highlighting
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Particle background effect
function createParticles() {
    const hero = document.querySelector('.hero');
    const particleCount = 50;
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: 2px;
            height: 2px;
            background: rgba(255, 255, 255, 0.5);
            border-radius: 50%;
            pointer-events: none;
            animation: float ${Math.random() * 3 + 2}s infinite linear;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            animation-delay: ${Math.random() * 2}s;
        `;
        hero.appendChild(particle);
    }
    
    // Add CSS animation for particles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes float {
            0% {
                transform: translateY(0px) rotate(0deg);
                opacity: 1;
            }
            100% {
                transform: translateY(-100px) rotate(360deg);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);
}

// Form submission handling (if contact form is added)
function handleContactForm() {
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            // Handle form submission here
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        });
    }
}

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateProjects();
    observeElements();
    updateActiveNavLink();
    createParticles();
    handleContactForm();
    
    // Add entrance animations
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('fade-in');
    }, 500);
});

// Add CSS for active nav links
const style = document.createElement('style');
style.textContent = `
    .nav-link.active {
        color: #667eea;
    }
    .nav-link.active::after {
        width: 100%;
    }
`;
document.head.appendChild(style);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
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

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);
