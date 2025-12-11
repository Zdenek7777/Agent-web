# 🚀 Návod na nasazení na Vercel

## Krok 1: Připravte Git repozitář

1. Otevřete terminál v kořenové složce projektu
2. Inicializujte Git (pokud ještě není):
```bash
git init
```

3. Přidejte všechny soubory:
```bash
git add .
git commit -m "Initial commit - FAIL AI Agents"
```

4. Vytvořte repozitář na GitHubu/GitLabu/Bitbucketu
5. Propojte lokální repozitář s remote:
```bash
git remote add origin <URL_VAŠEHO_REPO>
git push -u origin main
```

## Krok 2: Vytvořte účet na Vercel

1. Jděte na [https://vercel.com](https://vercel.com)
2. Klikněte na **"Sign Up"** nebo **"Log In"**
3. Přihlaste se pomocí GitHub/GitLab/Bitbucket účtu (doporučeno)

## Krok 3: Přidejte nový projekt

1. Po přihlášení klikněte na **"Add New Project"** nebo **"New Project"**
2. Vyberte váš Git repozitář z seznamu
3. Pokud repozitář nevidíte, klikněte na **"Import Git Repository"** a propojte účet

## Krok 4: Konfigurace projektu

Vercel automaticky detekuje Next.js projekt, ale zkontrolujte:

- **Framework Preset:** Next.js
- **Root Directory:** `./` (nechte prázdné nebo `./`)
- **Build Command:** `npm run build` (automaticky)
- **Output Directory:** `.next` (automaticky)
- **Install Command:** `npm install` (automaticky)

## Krok 5: Deploy

1. Klikněte na **"Deploy"**
2. Počkejte na dokončení buildu (obvykle 1-2 minuty)
3. Po úspěšném buildu dostanete URL ve formátu: `https://fail-ai-agents-xxx.vercel.app`

## Krok 6: Nastavení vlastní domény (volitelné)

1. V projektu na Vercel klikněte na **Settings** → **Domains**
2. Přidejte vlastní doménu (např. `fail-agents.vercel.app`)
3. Vercel automaticky nastaví SSL certifikát

## Krok 7: Environment Variables (pro budoucí AI API)

Pokud budete chtít připojit skutečné AI API:

1. V projektu na Vercel klikněte na **Settings** → **Environment Variables**
2. Přidejte proměnné:
   - `OPENAI_API_KEY` = váš OpenAI API klíč
   - Nebo jiné podle použitého providera
3. Po přidání je potřeba redeployovat projekt

## 🔄 Aktualizace aplikace

Kdykoli pushnete změny do Git repozitáře, Vercel automaticky:
1. Detekuje změny
2. Spustí nový build
3. Nasadí novou verzi

Můžete také spustit deploy ručně v Vercel dashboardu.

## 📝 Poznámky

- **Free tier Vercel** poskytuje:
  - Neomezené deployy
  - Automatické SSL
  - CDN
  - Preview deployments pro každý PR

- **Limity Free tieru:**
  - 100 GB bandwidth/měsíc
  - 100 build minut/měsíc
  - Pro většinu projektů to stačí

## 🐛 Troubleshooting

### Build selže
- Zkontrolujte logy v Vercel dashboardu
- Ověřte, že všechny závislosti jsou v `package.json`
- Zkontrolujte, že Node.js verze je kompatibilní (Next.js 14 vyžaduje Node 18+)

### Aplikace nefunguje po deployi
- Zkontrolujte, že všechny API routes jsou správně nastavené
- Ověřte environment variables
- Zkontrolujte console v prohlížeči pro chyby

### Potřebujete pomoct?
- Vercel dokumentace: https://vercel.com/docs
- Next.js dokumentace: https://nextjs.org/docs

