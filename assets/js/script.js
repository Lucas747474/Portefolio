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
    'cobian': {
        title: "Cobian Reflector",
        image: "assets/projects/cobian-reflector/apercu.png",
        category: "Administration Systèmes",
        date: "Décembre 2025",
        description: "Mise en place d'une solution de sauvegarde automatisée et fiable avec Cobian Reflector pour assurer la protection des données critiques de l'entreprise.",
        technologies: ["Cobian Reflector", "Windows Server", "Tâches planifiées", "Sauvegarde incrémentielle"],
        features: [
            "Configuration de sauvegardes automatiques programmées",
            "Sauvegarde incrémentielle pour optimiser l'espace disque",
            "Rotation des sauvegardes avec rétention personnalisée",
            "Notifications par email en cas d'échec",
            "Vérification de l'intégrité des sauvegardes",
            "Documentation complète de la procédure"
        ],
        challenges: "Mettre en place une stratégie de sauvegarde efficace tout en optimisant l'utilisation des ressources de stockage.",
        docs: "assets/projects/cobian-reflector/documentation.pdf"
    },
    'fog': {
        title: "FOG Project",
        image: "assets/projects/fog/apercu.png",
        category: "Déploiement Réseau",
        date: "Décembre 2025",
        description: "Déploiement et configuration d'un serveur FOG pour le clonage et le déploiement d'images système à grande échelle dans un environnement de parc informatique.",
        technologies: ["FOG Project", "Linux", "PXE Boot", "TFTP", "NFS", "MySQL"],
        features: [
            "Installation et configuration du serveur FOG",
            "Création et gestion d'images système Windows/Linux",
            "Déploiement réseau via PXE Boot",
            "Gestion centralisée du parc informatique",
            "Multicast pour déploiements simultanés",
            "Inventaire automatique des machines"
        ],
        challenges: "Optimiser les performances du déploiement réseau pour gérer simultanément plusieurs machines tout en maintenant la stabilité du réseau.",
        docs: "assets/projects/fog/documentation.pdf"
    },
    'glpi-install': {
        title: "GLPI - Installation",
        image: "assets/projects/glpi-installation/apercu.png",
        category: "Gestion de Parc",
        date: "Décembre 2025",
        description: "Installation et configuration complète d'un système de gestion de parc informatique GLPI avec base de données MySQL et serveur web Apache.",
        technologies: ["GLPI", "Apache", "MySQL", "PHP", "Linux Debian", "FusionInventory"],
        features: [
            "Installation de GLPI sur serveur Linux Debian",
            "Configuration de la base de données MySQL",
            "Paramétrage du serveur web Apache avec SSL",
            "Installation des plugins essentiels (FusionInventory)",
            "Configuration des droits et rôles utilisateurs",
            "Sécurisation de l'accès à l'interface web"
        ],
        challenges: "Assurer une installation sécurisée et optimisée en respectant les bonnes pratiques d'administration système.",
        docs: "assets/projects/glpi-installation/documentation.pdf"
    },
    'glpi-usage': {
        title: "GLPI - Utilisation",
        image: "assets/projects/glpi-utilisation/apercu.png",
        category: "Gestion de Parc",
        date: "Décembre 2025",
        description: "Gestion quotidienne et utilisation avancée de GLPI pour le suivi du parc informatique, la gestion des tickets et l'inventaire des équipements.",
        technologies: ["GLPI", "FusionInventory", "Gestion des tickets", "Inventaire automatique"],
        features: [
            "Création et suivi des tickets d'incidents",
            "Gestion de l'inventaire matériel et logiciel",
            "Attribution des équipements aux utilisateurs",
            "Gestion des licences logicielles",
            "Suivi des interventions et historiques",
            "Génération de rapports et statistiques"
        ],
        challenges: "Optimiser l'organisation du parc informatique et améliorer la traçabilité des interventions techniques.",
        docs: "assets/projects/glpi-utilisation/documentation.pdf"
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
