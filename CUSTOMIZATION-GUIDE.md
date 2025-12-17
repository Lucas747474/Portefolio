# 🎨 Guide de Personnalisation Avancée

Ce guide détaille toutes les options de personnalisation pour adapter le portfolio à vos besoins.

---

## 🎭 Thèmes de couleurs prédéfinis

### Thème Rouge (Par défaut)
```css
:root {
    --primary-color: #6c0707;
    --primary-light: #8f0a0a;
    --primary-dark: #4a0505;
}
```

### Thème Bleu
```css
:root {
    --primary-color: #0066cc;
    --primary-light: #0080ff;
    --primary-dark: #004d99;
}
```

### Thème Vert
```css
:root {
    --primary-color: #00aa55;
    --primary-light: #00cc66;
    --primary-dark: #008844;
}
```

### Thème Violet
```css
:root {
    --primary-color: #8b3dff;
    --primary-light: #a366ff;
    --primary-dark: #6614cc;
}
```

### Thème Or
```css
:root {
    --primary-color: #ffd700;
    --primary-light: #ffed4e;
    --primary-dark: #ccac00;
}
```

---

## 🌈 Backgrounds Vanta.js alternatifs

### VANTA.BIRDS (Oiseaux)
```javascript
VANTA.BIRDS({
    el: "#vanta-bg",
    backgroundColor: 0x1e1e1f,
    color1: 0x6c0707,
    color2: 0x8f0a0a,
    quantity: 3,
    speedLimit: 5.00
});
```

### VANTA.WAVES (Vagues)
```javascript
VANTA.WAVES({
    el: "#vanta-bg",
    color: 0x1e1e1f,
    shininess: 30.00,
    waveHeight: 15.00,
    waveSpeed: 1.00,
    zoom: 0.75
});
```

### VANTA.FOG (Brouillard)
```javascript
VANTA.FOG({
    el: "#vanta-bg",
    highlightColor: 0x6c0707,
    midtoneColor: 0x1e1e1f,
    lowlightColor: 0x151516,
    baseColor: 0x0,
    zoom: 1.00
});
```

### VANTA.CELLS (Cellules)
```javascript
VANTA.CELLS({
    el: "#vanta-bg",
    color1: 0x6c0707,
    color2: 0x1e1e1f,
    size: 1.50,
    speed: 1.00,
    scale: 1.00
});
```

**Note:** Vous devez charger le script correspondant:
```html
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.birds.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.waves.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.fog.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vanta@latest/dist/vanta.cells.min.js"></script>
```

---

## 🔤 Typographies alternatives

### Roboto (Tech moderne)
```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700;900&display=swap" rel="stylesheet">
```
```css
body {
    font-family: 'Roboto', sans-serif;
}
```

### Montserrat (Élégant)
```html
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```
```css
body {
    font-family: 'Montserrat', sans-serif;
}
```

### Inter (Minimaliste)
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```
```css
body {
    font-family: 'Inter', sans-serif;
}
```

### Combination (Titres + Corps)
```html
<link href="https://fonts.googleapis.com/css2?family=Raleway:wght@700;800;900&family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet">
```
```css
body {
    font-family: 'Open Sans', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Raleway', sans-serif;
}
```

---

## 📐 Layouts de la section Hero

### Layout 1: Image à gauche (actuel)
```css
.hero-content {
    display: flex;
    align-items: center;
    gap: 4rem;
}

.profile-image {
    order: 1;
}

.hero-text {
    order: 2;
}
```

### Layout 2: Image au centre
```css
.hero-content {
    flex-direction: column;
    text-align: center;
}

.profile-image {
    margin: 0 auto 2rem;
}
```

### Layout 3: Image en fond avec overlay
```css
.hero-section {
    background-image: url('votre-image.jpg');
    background-size: cover;
    background-position: center;
    position: relative;
}

.hero-section::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(30, 30, 31, 0.9);
}

.profile-image {
    display: none; /* Cacher l'image de profil */
}
```

---

## 🎨 Styles de cartes alternatives

### Style 1: Cartes avec bordure colorée (actuel)
```css
.cert-card {
    border: 1px solid var(--border-color);
}

.cert-card:hover {
    border-color: var(--primary-color);
}
```

### Style 2: Cartes avec ombre colorée
```css
.cert-card {
    border: none;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.3);
}

.cert-card:hover {
    box-shadow: 0 10px 40px rgba(108, 7, 7, 0.6);
}
```

### Style 3: Cartes avec gradient
```css
.cert-card {
    background: linear-gradient(135deg, var(--bg-card), var(--bg-darker));
    border: 1px solid var(--border-color);
}
```

### Style 4: Cartes avec bordure épaisse
```css
.cert-card {
    border-left: 5px solid var(--primary-color);
    border-right: none;
    border-top: none;
    border-bottom: none;
}
```

---

## 🖼️ Effets d'image sur hover

### Effet 1: Zoom (actuel)
```css
.portfolio-item:hover .portfolio-image img {
    transform: scale(1.1);
}
```

### Effet 2: Rotation + Zoom
```css
.portfolio-item:hover .portfolio-image img {
    transform: scale(1.15) rotate(3deg);
}
```

### Effet 3: Blur
```css
.portfolio-item:hover .portfolio-image img {
    filter: blur(5px);
}
```

### Effet 4: Grayscale to Color
```css
.portfolio-image img {
    filter: grayscale(100%);
    transition: filter 0.3s ease;
}

.portfolio-item:hover .portfolio-image img {
    filter: grayscale(0%);
}
```

### Effet 5: Multiple (Zoom + Brightness)
```css
.portfolio-item:hover .portfolio-image img {
    transform: scale(1.1);
    filter: brightness(1.2);
}
```

---

## 🎯 Animations personnalisées

### Animation 1: Slide from Left
```css
@keyframes slideFromLeft {
    from {
        opacity: 0;
        transform: translateX(-50px);
    }
    to {
        opacity: 1;
        transform: translateX(0);
    }
}

.hero-text {
    animation: slideFromLeft 1s ease;
}
```

### Animation 2: Bounce In
```css
@keyframes bounceIn {
    0% {
        opacity: 0;
        transform: scale(0.3);
    }
    50% {
        transform: scale(1.05);
    }
    70% {
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.cert-card {
    animation: bounceIn 0.6s ease;
}
```

### Animation 3: Typewriter Effect
```css
@keyframes typing {
    from {
        width: 0;
    }
    to {
        width: 100%;
    }
}

@keyframes blink {
    50% {
        border-color: transparent;
    }
}

.hero-title {
    overflow: hidden;
    border-right: 3px solid var(--primary-color);
    white-space: nowrap;
    margin: 0 auto;
    animation: typing 3.5s steps(40, end), blink 0.75s step-end infinite;
}
```

### Animation 4: Fade In Up
```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

.portfolio-item {
    animation: fadeInUp 0.6s ease;
    animation-delay: calc(var(--item-index) * 0.1s);
}
```

---

## 🔘 Styles de boutons alternatifs

### Bouton 1: Gradient animé
```css
.btn-download {
    background: linear-gradient(135deg, var(--primary-color), var(--primary-light));
    position: relative;
    overflow: hidden;
}

.btn-download::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
    transition: left 0.5s ease;
}

.btn-download:hover::before {
    left: 100%;
}
```

### Bouton 2: Bordure animée
```css
.btn-download {
    background: transparent;
    border: 2px solid var(--primary-color);
    color: var(--primary-color);
    position: relative;
}

.btn-download::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    background: var(--primary-color);
    transition: width 0.3s ease;
    z-index: -1;
}

.btn-download:hover::before {
    width: 100%;
}

.btn-download:hover {
    color: white;
}
```

### Bouton 3: 3D Effect
```css
.btn-download {
    box-shadow: 0 5px 0 var(--primary-dark), 0 10px 20px rgba(0,0,0,0.3);
    transform: translateY(0);
}

.btn-download:hover {
    transform: translateY(2px);
    box-shadow: 0 3px 0 var(--primary-dark), 0 8px 15px rgba(0,0,0,0.3);
}

.btn-download:active {
    transform: translateY(5px);
    box-shadow: 0 0 0 var(--primary-dark), 0 3px 10px rgba(0,0,0,0.3);
}
```

---

## 📊 Barres de compétences avec pourcentage

Si vous préférez des barres de progression au lieu de tags:

**HTML:**
```html
<div class="skill-bar">
    <div class="skill-info">
        <span>React</span>
        <span>90%</span>
    </div>
    <div class="skill-progress">
        <div class="skill-level" style="width: 90%"></div>
    </div>
</div>
```

**CSS:**
```css
.skill-bar {
    margin-bottom: 1.5rem;
}

.skill-info {
    display: flex;
    justify-content: space-between;
    margin-bottom: 0.5rem;
    color: var(--text-secondary);
}

.skill-progress {
    height: 10px;
    background: var(--bg-darker);
    border-radius: 5px;
    overflow: hidden;
}

.skill-level {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-color), var(--primary-light));
    border-radius: 5px;
    transition: width 1s ease;
    animation: skillLoad 1.5s ease-out;
}

@keyframes skillLoad {
    from {
        width: 0;
    }
}
```

---

## 🌐 Mode Clair/Sombre

**HTML (ajouter dans la navigation):**
```html
<button id="themeToggle" class="theme-toggle">
    <i class="fas fa-moon"></i>
</button>
```

**CSS:**
```css
[data-theme="light"] {
    --primary-color: #6c0707;
    --bg-dark: #ffffff;
    --bg-darker: #f5f5f5;
    --bg-card: #ffffff;
    --text-primary: #000000;
    --text-secondary: #666666;
    --border-color: #e0e0e0;
}

.theme-toggle {
    background: var(--bg-card);
    border: 2px solid var(--border-color);
    border-radius: 50%;
    width: 45px;
    height: 45px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.3s ease;
}
```

**JavaScript:**
```javascript
const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);

    // Changer l'icône
    const icon = themeToggle.querySelector('i');
    icon.className = newTheme === 'light' ? 'fas fa-moon' : 'fas fa-sun';
});

// Charger le thème sauvegardé
const savedTheme = localStorage.getItem('theme') || 'dark';
html.setAttribute('data-theme', savedTheme);
```

---

## 📱 Ajouter un numéro de téléphone

**HTML:**
```html
<div class="info-item">
    <i class="fas fa-phone"></i>
    <a href="tel:+33612345678" style="color: var(--text-secondary); text-decoration: none;">
        +33 6 12 34 56 78
    </a>
</div>
```

---

## 💬 Ajouter un chat support (Tawk.to)

Avant la balise `</body>`:
```html
<!-- Tawk.to Live Chat -->
<script type="text/javascript">
var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
(function(){
var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
s1.async=true;
s1.src='https://embed.tawk.to/YOUR_PROPERTY_ID/YOUR_WIDGET_ID';
s1.charset='UTF-8';
s1.setAttribute('crossorigin','*');
s0.parentNode.insertBefore(s1,s0);
})();
</script>
```

---

## 🎥 Ajouter une vidéo d'intro

**HTML (dans la section Hero):**
```html
<video class="hero-video" autoplay muted loop playsinline>
    <source src="assets/videos/intro.mp4" type="video/mp4">
</video>
```

**CSS:**
```css
.hero-video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 0.3;
    z-index: 0;
}
```

---

## 📈 Compteurs animés

Pour afficher des statistiques (projets complétés, clients, etc.):

**HTML:**
```html
<div class="stats-container">
    <div class="stat-item">
        <span class="stat-number" data-target="50">0</span>
        <span class="stat-label">Projets complétés</span>
    </div>
    <div class="stat-item">
        <span class="stat-number" data-target="30">0</span>
        <span class="stat-label">Clients satisfaits</span>
    </div>
    <div class="stat-item">
        <span class="stat-number" data-target="5">0</span>
        <span class="stat-label">Années d'expérience</span>
    </div>
</div>
```

**JavaScript:**
```javascript
const counters = document.querySelectorAll('.stat-number');
counters.forEach(counter => {
    const target = parseInt(counter.getAttribute('data-target'));
    const duration = 2000; // 2 secondes
    const increment = target / (duration / 16); // 60 FPS

    let current = 0;
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            counter.textContent = Math.ceil(current);
            requestAnimationFrame(updateCounter);
        } else {
            counter.textContent = target;
        }
    };

    updateCounter();
});
```

---

Avec ce guide, vous avez toutes les clés pour personnaliser complètement votre portfolio! 🎨🚀
