# TradeJourney Website

Site web officiel de TradeJourney construit avec Nuxt 4 et @nuxt/content.

## 🚀 Développement

```bash
# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📝 Contenu

Les fichiers Markdown sont dans le dossier `content/` :
- `content/documentation.md` - Documentation complète
- `content/installation.md` - Guide d'installation

Nuxt Content convertit automatiquement les `.md` en pages HTML.

## 🏗️ Build pour production

```bash
# Build statique pour GitHub Pages
npm run generate

# Les fichiers statiques seront dans .output/public/
```

## 🚀 Déploiement sur GitHub Pages

### Option 1 : Déploiement manuel

```bash
# Build
npm run generate

# Déployer le contenu de .output/public/ sur GitHub Pages
```

### Option 2 : GitHub Actions (automatique)

Le workflow `.github/workflows/deploy.yml` déploie automatiquement à chaque push sur `main`.

## 📁 Structure

```
website/
├── content/              # Fichiers Markdown
│   ├── documentation.md
│   └── installation.md
├── pages/               # Pages Vue
│   ├── index.vue       # Page d'accueil
│   └── [...slug].vue   # Pages dynamiques (Markdown)
├── layouts/            # Layouts
│   └── default.vue
├── nuxt.config.ts      # Configuration Nuxt
└── package.json
```

## 🎨 Personnalisation

- **Couleurs** : Modifiez les classes Tailwind dans les composants
- **Contenu** : Éditez les fichiers `.md` dans `content/`
- **Navigation** : Modifiez `layouts/default.vue`

## 📖 Documentation

- [Nuxt 4](https://nuxt.com)
- [Nuxt Content](https://content.nuxt.com)
- [Tailwind CSS](https://tailwindcss.com)
