# 🎨 Portfolio Professionnel

Portfolio moderne et élégant avec design sombre, inspiré du modèle de Jolan Noirot.

![Portfolio Preview](https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200&q=80)

## ✨ Fonctionnalités

- ✅ **Design moderne** avec thème sombre et accent rouge (#6c0707)
- ✅ **Animation de fond** avec Vanta.js (effet réseau 3D interactif)
- ✅ **Navigation fixe** avec smooth scrolling
- ✅ **Section Hero** avec photo de profil et informations personnelles
- ✅ **Section À propos** avec grille de compétences (Frontend, Backend, Outils)
- ✅ **Certifications** avec cartes élégantes
- ✅ **Parcours** avec timeline (Formation & Expérience)
- ✅ **Portfolio** avec filtrage par catégorie (Tout, Développement, Design, Réseaux)
- ✅ **Modales de projets** avec détails complets, technologies, fonctionnalités
- ✅ **100% Responsive** pour mobile, tablette et desktop
- ✅ **Animations fluides** au scroll avec Intersection Observer
- ✅ **Menu hamburger** pour mobile
- ✅ **Footer** avec synchronisation Git

---

## 🚀 Installation

### 1. Cloner ou télécharger

```bash
git clone https://github.com/votre-username/portfolio.git
cd portfolio
```

### 2. Ouvrir le fichier

Ouvrez simplement `index.html` dans votre navigateur. Aucune installation requise!

```bash
# Windows
start index.html

# Mac
open index.html

# Linux
xdg-open index.html
```

### 3. Avec un serveur local (recommandé)

Pour éviter les problèmes CORS avec les fichiers locaux:

**Avec Python:**
```bash
# Python 3
python -m http.server 8000

# Ouvrir http://localhost:8000
```

**Avec Node.js (live-server):**
```bash
npm install -g live-server
live-server
```

**Avec VS Code:**
Installer l'extension "Live Server" et cliquer sur "Go Live" en bas à droite.

---

## 🎨 Personnalisation

### 1. Informations personnelles

Modifiez les informations dans **`index.html`** (section Hero - lignes 46-75):

```html
<h1 class="hero-title">VOTRE NOM</h1>
<p class="hero-subtitle">Développeur Full Stack & Designer</p>
<div class="hero-info">
    <div class="info-item">
        <i class="fas fa-birthday-cake"></i>
        <span>25 ans</span> <!-- Votre âge -->
    </div>
    <div class="info-item">
        <i class="fas fa-map-marker-alt"></i>
        <span>Paris, France</span> <!-- Votre ville -->
    </div>
    <div class="info-item">
        <i class="fas fa-envelope"></i>
        <span>contact@exemple.fr</span> <!-- Votre email -->
    </div>
    <div class="info-item">
        <i class="fas fa-graduation-cap"></i>
        <span>Bac +3 Informatique</span> <!-- Votre niveau -->
    </div>
</div>
```

### 2. Photo de profil

**Option A - Utiliser votre propre image:**
```html
<!-- Remplacer ligne 49 -->
<img src="assets/images/profile.jpg" alt="Photo de profil">
```

**Option B - Utiliser UI Avatars (généré automatiquement):**
```html
<img src="https://ui-avatars.com/api/?name=Votre+Nom&size=200&background=6c0707&color=fff&bold=true">
```

**Option C - Utiliser Gravatar:**
```html
<img src="https://www.gravatar.com/avatar/VOTRE_HASH?s=200">
```

### 3. Liens sociaux

Modifiez les liens dans **`index.html`** (lignes 76-81):

```html
<div class="social-links">
    <a href="https://github.com/votre-username" target="_blank" title="GitHub">
        <i class="fab fa-github"></i>
    </a>
    <a href="https://linkedin.com/in/votre-profil" target="_blank" title="LinkedIn">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="https://twitter.com/votre-username" target="_blank" title="Twitter">
        <i class="fab fa-twitter"></i>
    </a>
    <a href="https://instagram.com/votre-username" target="_blank" title="Instagram">
        <i class="fab fa-instagram"></i>
    </a>
</div>
```

### 4. Section À propos

Modifiez votre bio dans **`index.html`** (lignes 93-105):

```html
<div class="about-text">
    <p>
        Votre première phrase d'accroche...
    </p>
    <p>
        Votre deuxième paragraphe...
    </p>
</div>
```

### 5. Compétences

Modifiez les compétences dans **`index.html`** (lignes 107-136):

```html
<div class="skill-category">
    <h3><i class="fas fa-code"></i> Frontend</h3>
    <div class="skills-list">
        <span class="skill-tag">HTML5</span>
        <span class="skill-tag">CSS3</span>
        <!-- Ajoutez vos compétences -->
    </div>
</div>
```

### 6. Certifications

Modifiez les certifications dans **`index.html`** (lignes 149-178):

```html
<div class="cert-card">
    <div class="cert-icon">
        <i class="fas fa-certificate"></i>
    </div>
    <h3>Nom de la certification</h3>
    <p class="cert-provider">Organisme</p>
    <p class="cert-date">2024</p>
    <a href="#" class="cert-link">Voir la certification</a>
</div>
```

### 7. Parcours (Formation & Expérience)

Modifiez la timeline dans **`index.html`** (lignes 194-250):

```html
<div class="timeline-item">
    <div class="timeline-dot"></div>
    <div class="timeline-content">
        <span class="timeline-date">2022 - 2024</span>
        <h4>Titre du diplôme/poste</h4>
        <p class="timeline-location">Établissement/Entreprise</p>
        <p>Description...</p>
    </div>
</div>
```

### 8. Projets

**A. Modifier les cartes de projets** dans **`index.html`** (lignes 270-370):

```html
<div class="portfolio-item" data-category="web">
    <div class="portfolio-image">
        <img src="URL_IMAGE" alt="Projet 1">
        <div class="portfolio-overlay">
            <h3>Nom du projet</h3>
            <p>Description courte</p>
        </div>
    </div>
    <div class="portfolio-actions">
        <button class="action-btn" onclick="openProjectModal(1)">
            <i class="fas fa-info-circle"></i> Détails
        </button>
        <a href="#" class="action-btn" target="_blank">
            <i class="fas fa-file-pdf"></i> Docs
        </a>
        <a href="#" class="action-btn" target="_blank">
            <i class="fab fa-github"></i> GitHub
        </a>
    </div>
</div>
```

**B. Modifier les données détaillées** dans **`assets/js/script.js`** (lignes 99-200):

```javascript
const projectsData = {
    1: {
        title: "Nom du projet",
        image: "URL_IMAGE",
        category: "Catégorie",
        date: "Mois Année",
        description: "Description complète...",
        technologies: ["React", "Node.js", "MongoDB"],
        features: [
            "Fonctionnalité 1",
            "Fonctionnalité 2",
            "Fonctionnalité 3"
        ],
        challenges: "Défis techniques rencontrés...",
        github: "https://github.com/...",
        demo: "https://demo.com",
        docs: "assets/docs/..."
    }
};
```

### 9. Couleurs du thème

Modifiez les couleurs dans **`assets/css/style.css`** (lignes 9-23):

```css
:root {
    --primary-color: #6c0707;      /* Rouge principal */
    --primary-light: #8f0a0a;      /* Rouge clair */
    --primary-dark: #4a0505;       /* Rouge foncé */
    --bg-dark: #1e1e1f;            /* Fond principal */
    --bg-darker: #151516;          /* Fond plus foncé */
    --bg-card: #252526;            /* Fond des cartes */
    /* Modifiez selon vos préférences */
}
```

### 10. Animation de fond Vanta.js

Modifiez les paramètres dans **`assets/js/script.js`** (lignes 11-24):

```javascript
VANTA.NET({
    el: "#vanta-bg",
    color: 0x6c0707,           /* Couleur du réseau (hex sans #) */
    backgroundColor: 0x1e1e1f, /* Couleur de fond (hex sans #) */
    points: 10.00,             /* Nombre de points (5-20) */
    maxDistance: 20.00,        /* Distance max entre points */
    spacing: 15.00             /* Espacement des points */
});
```

---

## 📁 Structure du projet

```
portfolio/
│
├── index.html              # Page principale
│
├── assets/
│   ├── css/
│   │   └── style.css       # Styles CSS
│   │
│   ├── js/
│   │   └── script.js       # JavaScript
│   │
│   ├── images/
│   │   └── profile.jpg     # Votre photo (à ajouter)
│   │
│   └── docs/
│       └── cv.pdf          # Votre CV (à ajouter)
│
└── README.md               # Ce fichier
```

---

## 🎯 Catégories de filtrage

Le portfolio supporte 4 catégories de filtrage:

| Catégorie | `data-category` | Description |
|-----------|----------------|-------------|
| Tout | `all` | Affiche tous les projets |
| Développement | `web` | Projets de développement web |
| Design | `design` | Projets de design UI/UX |
| Réseaux | `network` | Projets d'infrastructure et DevOps |

**Pour ajouter une nouvelle catégorie:**

1. Ajouter un bouton de filtre dans **`index.html`**:
```html
<button class="filter-btn" data-filter="mobile">Mobile</button>
```

2. Ajouter l'attribut `data-category="mobile"` sur vos projets

---

## 📱 Responsive Design

Le portfolio est entièrement responsive avec 3 breakpoints:

- **Desktop**: > 1024px - Layout complet
- **Tablet**: 768px - 1024px - Layout adapté
- **Mobile**: < 768px - Menu hamburger, colonnes simples

---

## 🔧 Technologies utilisées

- **HTML5** - Structure sémantique
- **CSS3** - Styles modernes avec variables CSS
- **JavaScript Vanilla** - Interactions sans frameworks
- **Vanta.js** - Animation de fond 3D
- **Three.js** - Moteur 3D pour Vanta
- **Font Awesome** - Icônes
- **Google Fonts** - Typographie Poppins

---

## 🚀 Déploiement

### GitHub Pages (Gratuit)

1. Créer un repo sur GitHub
2. Pusher votre code
3. Aller dans Settings > Pages
4. Source: `main` branch
5. Votre site sera sur `https://username.github.io/portfolio`

### Netlify (Gratuit)

1. Créer un compte sur [Netlify](https://www.netlify.com/)
2. Drag & drop le dossier portfolio
3. Votre site est en ligne en quelques secondes!

### Vercel (Gratuit)

1. Créer un compte sur [Vercel](https://vercel.com/)
2. Importer votre repo GitHub
3. Déploiement automatique à chaque commit

---

## 📝 Personnalisations avancées

### Ajouter un formulaire de contact

Intégrer **Formspree**, **EmailJS** ou **Netlify Forms**.

**Exemple avec Formspree:**
```html
<form action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
    <input type="text" name="name" placeholder="Nom" required>
    <input type="email" name="email" placeholder="Email" required>
    <textarea name="message" placeholder="Message" required></textarea>
    <button type="submit">Envoyer</button>
</form>
```

### Ajouter Google Analytics

Avant la balise `</head>` dans **`index.html`**:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-YOUR_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-YOUR_ID');
</script>
```

### Mode clair/sombre

Ajouter un bouton toggle dans la navigation et utiliser CSS variables pour changer le thème.

### Curseur personnalisé

Décommenter le code à la fin de **`assets/js/script.js`** (lignes 299-311)

---

## 🐛 Problèmes courants

### L'animation Vanta ne fonctionne pas

**Solution:** Vérifier que Three.js et Vanta.js sont bien chargés:
```html
<script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.net.min.js"></script>
```

### Les icônes Font Awesome ne s'affichent pas

**Solution:** Vérifier le lien Font Awesome:
```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
```

### Les images ne se chargent pas

**Solution:** Utiliser des chemins relatifs corrects:
```html
<!-- Correct -->
<img src="assets/images/profile.jpg">

<!-- Incorrect -->
<img src="/assets/images/profile.jpg">
```

---

## 📄 Licence

Ce projet est libre d'utilisation. Vous pouvez le modifier et l'utiliser pour votre propre portfolio.

**Crédits:** Inspiré du portfolio de [Jolan Noirot](https://portfolio.jolan-nrt.fr/)

---

## 📞 Support

Si vous avez des questions ou besoin d'aide:
- Ouvrir une issue sur GitHub
- Me contacter sur [LinkedIn](https://linkedin.com/in/votre-profil)
- Email: contact@exemple.fr

---

## 🎉 Merci!

N'oubliez pas de ⭐ star le projet si vous l'utilisez!

**Bon développement!** 🚀
test 