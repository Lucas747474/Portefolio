// Portfolio JavaScript

// ===== VARIABLES =====
const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const portfolioGrid = document.getElementById('portfolioGrid');
const filterBtns = document.querySelectorAll('.filter-btn');
const projectModal = document.getElementById('projectModal');

// ===== TYPING ANIMATION =====
const phrases = [
    "en 2ème année de BTS SIO option SISR",
    "curieux",
    "un futur étudiant en cyberdéfense",
    "recherches d'alternance",
    "motivé"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function typeEffect() {
    const typedTextElement = document.getElementById('typed-text');
    if (!typedTextElement) return;

    const currentPhrase = phrases[phraseIndex];

    if (isDeleting) {
        // Effacer le texte
        typedTextElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 50;
    } else {
        // Écrire le texte
        typedTextElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 100;
    }

    // Si on a fini d'écrire
    if (!isDeleting && charIndex === currentPhrase.length) {
        typingSpeed = 2000; // Pause à la fin
        isDeleting = true;
    }
    // Si on a fini d'effacer
    else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length; // Passer à la phrase suivante
        typingSpeed = 500; // Petite pause avant de recommencer
    }

    setTimeout(typeEffect, typingSpeed);
}

// Démarrer l'animation après le chargement de la page
window.addEventListener('load', () => {
    setTimeout(typeEffect, 1000);
});

// ===== VANTA.JS BACKGROUND =====
if (typeof VANTA !== 'undefined') {
    VANTA.NET({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x2563eb,
        backgroundColor: 0x1e1e1f,
        points: 10.00,
        maxDistance: 20.00,
        spacing: 15.00
    });
}

// ===== NAVBAR SCROLL EFFECT =====
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Update active nav link based on scroll position
    updateActiveNavLink();
});

// ===== HAMBURGER MENU =====
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===== UPDATE ACTIVE NAV LINK =====
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// ===== PORTFOLIO FILTERING =====
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Get filter value
        const filter = btn.getAttribute('data-filter');

        // Filter portfolio items
        const portfolioItems = document.querySelectorAll('.portfolio-item');
        portfolioItems.forEach(item => {
            if (filter === 'all') {
                item.classList.remove('hidden');
                setTimeout(() => {
                    item.style.animation = 'fadeIn 0.6s ease';
                }, 100);
            } else {
                const category = item.getAttribute('data-category');
                if (category === filter) {
                    item.classList.remove('hidden');
                    setTimeout(() => {
                        item.style.animation = 'fadeIn 0.6s ease';
                    }, 100);
                } else {
                    item.classList.add('hidden');
                }
            }
        });
    });
});

// ===== PROJECT DATA =====
const projectsData = {
    1: {
        title: "Application E-Commerce",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80",
        category: "Développement Web",
        date: "Décembre 2024",
        description: "Plateforme de vente en ligne complète avec système de paiement intégré, gestion des stocks en temps réel et tableau de bord administrateur.",
        technologies: ["React", "Node.js", "Express", "MongoDB", "Stripe", "JWT"],
        features: [
            "Authentification sécurisée avec JWT",
            "Panier d'achat dynamique avec localStorage",
            "Paiement en ligne via Stripe",
            "Dashboard admin pour la gestion des produits",
            "Système de recherche et filtres avancés",
            "Responsive design pour mobile et tablette"
        ],
        challenges: "Implémentation d'un système de paiement sécurisé et gestion des transactions en temps réel.",
        github: "https://github.com/username/ecommerce-app",
        demo: "https://ecommerce-demo.com",
        docs: "assets/docs/ecommerce-docs.pdf"
    },
    2: {
        title: "Design System",
        image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
        category: "Design UI/UX",
        date: "Novembre 2024",
        description: "Bibliothèque de composants UI réutilisables avec documentation complète, créée pour assurer la cohérence visuelle à travers tous les projets.",
        technologies: ["React", "Storybook", "Styled Components", "TypeScript"],
        features: [
            "50+ composants réutilisables",
            "Documentation interactive avec Storybook",
            "Thème personnalisable (light/dark mode)",
            "Accessibilité WCAG 2.1 AA",
            "Tests unitaires avec Jest",
            "NPM package pour installation facile"
        ],
        challenges: "Créer des composants flexibles et accessibles qui fonctionnent dans différents contextes.",
        figma: "https://figma.com/design-system",
        demo: "https://design-system-demo.com",
        docs: "assets/docs/design-system-docs.pdf"
    },
    3: {
        title: "Dashboard Analytics",
        image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80",
        category: "Data Visualization",
        date: "Octobre 2024",
        description: "Interface de visualisation de données en temps réel pour suivre les KPIs et métriques business avec graphiques interactifs.",
        technologies: ["Vue.js", "Chart.js", "D3.js", "Node.js", "Socket.io", "PostgreSQL"],
        features: [
            "Visualisation temps réel avec WebSocket",
            "Graphiques interactifs et personnalisables",
            "Export de rapports en PDF/Excel",
            "Filtres et périodes personnalisées",
            "Alertes automatiques sur seuils",
            "Multi-utilisateurs avec rôles"
        ],
        challenges: "Optimiser les performances pour afficher des milliers de points de données en temps réel.",
        youtube: "https://youtube.com/watch?v=demo",
        demo: "https://dashboard-demo.com",
        github: "https://github.com/username/dashboard-analytics"
    },
    4: {
        title: "Infrastructure Cloud",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
        category: "DevOps & Cloud",
        date: "Septembre 2024",
        description: "Architecture réseau sécurisée déployée sur AWS avec haute disponibilité, scalabilité automatique et monitoring complet.",
        technologies: ["AWS", "Terraform", "Docker", "Kubernetes", "Jenkins", "Prometheus"],
        features: [
            "Infrastructure as Code avec Terraform",
            "Auto-scaling basé sur la charge",
            "Load balancing multi-zones",
            "CI/CD avec Jenkins",
            "Monitoring avec Prometheus & Grafana",
            "Backup automatique et disaster recovery"
        ],
        challenges: "Mettre en place une architecture hautement disponible tout en optimisant les coûts.",
        docs: "assets/docs/infrastructure-docs.pdf",
        diagram: "assets/docs/architecture-diagram.pdf"
    },
    5: {
        title: "API REST Complète",
        image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&q=80",
        category: "Backend Development",
        date: "Août 2024",
        description: "API RESTful scalable avec authentification JWT, rate limiting, documentation Swagger et tests automatisés.",
        technologies: ["Node.js", "Express", "MongoDB", "JWT", "Swagger", "Jest"],
        features: [
            "Authentification & autorisation JWT",
            "Rate limiting et protection DDoS",
            "Documentation Swagger interactive",
            "Validation des données avec Joi",
            "Tests unitaires et d'intégration",
            "Logging et monitoring des erreurs"
        ],
        challenges: "Sécuriser l'API contre les attaques courantes (injection SQL, XSS, CSRF).",
        github: "https://github.com/username/rest-api",
        docs: "https://api-docs-demo.com",
        postman: "https://postman.com/collection"
    },
    6: {
        title: "Mobile App Design",
        image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?w=800&q=80",
        category: "Mobile UI/UX",
        date: "Juillet 2024",
        description: "Interface moderne et intuitive pour application mobile de fitness avec tracking d'activités et planification d'entraînements.",
        technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
        features: [
            "Wireframes et prototypes interactifs",
            "Design system cohérent",
            "Micro-interactions et animations",
            "Tests utilisateurs A/B",
            "Mode sombre et clair",
            "Accessibilité optimisée"
        ],
        challenges: "Créer une expérience utilisateur intuitive pour tous les niveaux de fitness.",
        figma: "https://figma.com/fitness-app",
        prototype: "https://invision.com/prototype",
        demo: "https://fitness-app-demo.com"
    }
};

// ===== OPEN PROJECT MODAL =====
function openProjectModal(projectId) {
    const project = projectsData[projectId];
    if (!project) return;

    const modalContent = document.getElementById('modalContent');

    modalContent.innerHTML = `
        <div class="project-modal">
            <img src="${project.image}" alt="${project.title}" class="project-modal-image">

            <div class="project-modal-header">
                <h2>${project.title}</h2>
                <div class="project-meta">
                    <span class="project-category">${project.category}</span>
                    <span class="project-date">${project.date}</span>
                </div>
            </div>

            <div class="project-modal-body">
                <section class="modal-section">
                    <h3><i class="fas fa-info-circle"></i> Description</h3>
                    <p>${project.description}</p>
                </section>

                <section class="modal-section">
                    <h3><i class="fas fa-code"></i> Technologies utilisées</h3>
                    <div class="tech-tags">
                        ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                    </div>
                </section>

                <section class="modal-section">
                    <h3><i class="fas fa-check-circle"></i> Fonctionnalités principales</h3>
                    <ul class="features-list">
                        ${project.features.map(feature => `<li>${feature}</li>`).join('')}
                    </ul>
                </section>

                <section class="modal-section">
                    <h3><i class="fas fa-lightbulb"></i> Défis techniques</h3>
                    <p>${project.challenges}</p>
                </section>

                <section class="modal-section">
                    <h3><i class="fas fa-link"></i> Liens du projet</h3>
                    <div class="project-links">
                        ${project.github ? `<a href="${project.github}" target="_blank" class="project-link"><i class="fab fa-github"></i> GitHub</a>` : ''}
                        ${project.demo ? `<a href="${project.demo}" target="_blank" class="project-link"><i class="fas fa-external-link-alt"></i> Demo Live</a>` : ''}
                        ${project.docs ? `<a href="${project.docs}" target="_blank" class="project-link"><i class="fas fa-file-pdf"></i> Documentation</a>` : ''}
                        ${project.figma ? `<a href="${project.figma}" target="_blank" class="project-link"><i class="fab fa-figma"></i> Figma</a>` : ''}
                        ${project.youtube ? `<a href="${project.youtube}" target="_blank" class="project-link"><i class="fab fa-youtube"></i> Vidéo</a>` : ''}
                    </div>
                </section>
            </div>
        </div>
    `;

    projectModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// ===== CLOSE PROJECT MODAL =====
function closeProjectModal() {
    projectModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && projectModal.classList.contains('active')) {
        closeProjectModal();
    }
});

// ===== GIT SYNC =====
document.getElementById('gitSync')?.addEventListener('click', async (e) => {
    e.preventDefault();
    const btn = e.currentTarget;
    const originalText = btn.innerHTML;

    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Synchronisation...';
    btn.style.pointerEvents = 'none';

    try {
        // Simuler un appel API (remplacer par votre endpoint PHP)
        await new Promise(resolve => setTimeout(resolve, 2000));

        btn.innerHTML = '<i class="fas fa-check"></i> Synchronisé!';
        btn.style.color = '#4ade80';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.color = '';
            btn.style.pointerEvents = 'auto';
        }, 3000);
    } catch (error) {
        btn.innerHTML = '<i class="fas fa-times"></i> Erreur';
        btn.style.color = '#ef4444';

        setTimeout(() => {
            btn.innerHTML = originalText;
            btn.style.color = '';
            btn.style.pointerEvents = 'auto';
        }, 3000);
    }
});

// ===== SCROLL REVEAL ANIMATION =====
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

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// ===== CONSOLE MESSAGE =====
console.log('%c🎨 Portfolio créé avec ❤️', 'color: #6c0707; font-size: 20px; font-weight: bold;');
console.log('%cSi vous êtes ici, c\'est que vous êtes curieux! 👀', 'color: #b3b3b3; font-size: 14px;');
console.log('%cN\'hésitez pas à me contacter pour discuter de vos projets!', 'color: #b3b3b3; font-size: 14px;');

// ===== CUSTOM CURSOR (Optional) =====
// Uncomment to enable custom cursor effect
/*
const cursor = document.createElement('div');
cursor.className = 'custom-cursor';
document.body.appendChild(cursor);

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
});

document.querySelectorAll('a, button').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('hover'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});
*/
