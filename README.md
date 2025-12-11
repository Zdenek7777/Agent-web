# FAIL AI Agents

Webová aplikace pro prezentaci a použití AI agentů pro zpracování emailů a automatizaci úkolů.

## 🚀 Funkce

- **4 AI Agenti:**
  - 📧 Email Response Agent - Příprava odpovědí na emaily
  - ✍️ Content Creation Agent - Tvorba obsahu
  - 📊 Data Analysis Agent - Analýza dat
  - ⚙️ Automation Agent - Automatizace úkolů

- **Email zpracování:**
  - Drag & drop .eml souborů
  - Copy-paste textu emailu
  - Automatické parsování emailů
  - Generování profesionálních odpovědí

- **Design:**
  - Moderní UI podobný ChatGPT/Claude
  - Světlý, jemně barevný design
  - Responzivní layout

## 📦 Instalace

```bash
# Instalace závislostí
npm install

# Spuštění vývojového serveru
npm run dev
```

Aplikace poběží na [http://localhost:3000](http://localhost:3000)

## 🌐 Nasazení na Vercel

### Krok 1: Připravte projekt

1. Ujistěte se, že máte všechny soubory commitnuté v Git:
```bash
git add .
git commit -m "Initial commit"
```

### Krok 2: Vytvořte účet na Vercel

1. Jděte na [vercel.com](https://vercel.com)
2. Přihlaste se pomocí GitHub/GitLab/Bitbucket účtu
3. Klikněte na "Add New Project"

### Krok 3: Propojte repozitář

1. Vyberte váš Git repozitář
2. Vercel automaticky detekuje Next.js projekt
3. Klikněte na "Deploy"

### Krok 4: Konfigurace (volitelné)

Vercel automaticky:
- Detekuje Next.js framework
- Nastaví build příkazy (`npm run build`)
- Nastaví output directory (`.next`)

### Krok 5: Environment Variables (pokud budete používat AI API)

V Settings → Environment Variables přidejte:
- `OPENAI_API_KEY` (pokud použijete OpenAI)
- Nebo jiné API klíče podle použitého AI providera

## 🔧 Vývoj

### Struktura projektu

```
.
├── app/
│   ├── api/
│   │   └── process-email/    # API endpoint pro zpracování emailů
│   ├── globals.css            # Globální styly
│   ├── layout.tsx             # Root layout
│   └── page.tsx               # Hlavní stránka
├── components/
│   ├── AgentView.tsx          # Zobrazení agenta
│   ├── EmailInput.tsx         # Input pro emaily
│   ├── ResponseDisplay.tsx    # Zobrazení odpovědi
│   └── Sidebar.tsx            # Boční menu
├── types/
│   └── agent.ts               # TypeScript typy
└── package.json
```

### Přidání nového agenta

1. Upravte `app/page.tsx` a přidejte nového agenta do pole `agents`
2. Implementujte logiku v `components/AgentView.tsx`
3. Vytvořte API endpoint v `app/api/` pokud je potřeba

### Integrace skutečného AI API

Upravte `app/api/process-email/route.ts`:

```typescript
// Příklad s OpenAI
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const completion = await openai.chat.completions.create({
  model: "gpt-4",
  messages: [
    { role: "system", content: "Jsi expert na psaní profesionálních emailů..." },
    { role: "user", content: emailContent }
  ],
});
```

## 📝 Poznámky

- Aktuálně je implementován pouze Email Response Agent
- Ostatní agenti jsou připraveni pro budoucí implementaci
- Pro produkční použití je nutné připojit skutečné AI API

## 🛠️ Technologie

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **React Dropzone** - Drag & drop pro soubory

## 📄 Licence

MIT
