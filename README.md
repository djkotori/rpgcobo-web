# rpgcobo-web

![Logo Image](header.jpg)

[⇒ Japanese](README.ja.md)

A repository that manages RPG-Cobo's **Official website and Documentation**.  
Built using Astro + Starlight, it includes guides, feature introductions, download pages, and more.

---

## 🌐 Public site

This repository is linked to the URL below by Cloudflare.  
https://rpg-cobo.com

---

## 📦 About this repository

This repository contains:

- Official website
  - Function introduction of RPG-Cobo
  - Download
  - Sample game (the binary entity of the game is on a separate server)
- document
  - User guide
  - Troubleshooting
  - Information for developers

As the first place for RPG-Cobo users, we aim to create a structure that is easy to understand, lightweight, and easy to maintain.

---

## 🛠️ How to run it locally

### 1. Clone the repository
```bash
git clone https://github.com/djkotori/rpgcobo-web
cd rpgcobo-web
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start the development server
```bash
npm run dev
```

You can view the site locally in your browser by visiting:

```
http://localhost:4321
```

---

## 📁 Directory structure (overview)

```
rpgcobo-web/
├─ src/
│  ├─ assets/          # Astro.js material
│  │  ├─ docs/         # Images for guide etc.
│  │  ├─ feature/      # Images of function introduction etc.
│  │  ├─ releases/     # Release MarkDown etc.
│  │  └─ top/          # Top page images etc.
│  ├─ components/      # UI components
│  └─ content/docs/    # Guide document
└─ public/             # Images/static files
   └─ portal/          # Reference from portal app
```

---

## 🤝 Contribution

We welcome website translations, improvement suggestions, typo corrections, and additions to guides.  
Please send us an issue/pull request.

---

## 📄 License

This repository is published under the **Apache-2.0 License**.

---

## 🧩 Related repositories

- **rpgcobo-tool** — Tool body (editor runtime)
- **rpgcobo-portal** — Project management app
- **rpgcobo-assets** — Default materials/templates
