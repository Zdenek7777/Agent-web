# 🔧 Databáze AI Aplikací

Kolekce 75+ AI nástrojů používaných v programu Future AI Leader.

## Hlavní soubory

| Soubor | Popis |
|--------|-------|
| `apps-databaze.csv` | Základní databáze všech aplikací |
| `apps-enriched.csv` | Rozšířená verze s dodatečnými informacemi |

## Struktura CSV

```csv
id, name, description, category, icon, url, english_description
```

## Kategorie

| Kategorie | Popis | Příklady |
|-----------|-------|----------|
| `chatbot` | AI asistenti | ChatGPT, Claude, Gemini, Copilot |
| `agent` | AI agenti | Gumloop, Relevance AI, Suna, Simular |
| `video` | Video nástroje | Synthesia, Heygen, Runway, Skyreels |
| `audio` | Audio a hlas | ElevenLabs, Play.ht, Speechify, Vapi |
| `avatar` | AI avatary | Synthesia, Heygen |
| `design` | Design a grafika | Canva, FloraFauna, Relume |
| `photography` | Obrázky | Ideogram, Photoroom, ChatGPT 4o |
| `ux` | UX design | Relume, UX Pilot |
| `transcription` | Přepisy | TurboScribe, Fireflies, TLDV |
| `utility` | Automatizace | Make, Zapier, Relay |
| `ai` | AI infrastruktura | LangChain, Chroma, Replicate |
| `infrastructure` | Infrastruktura | Hyperbrowser, E2B |
| `coding` | Vývoj | Cursor, Bolt, Lovable, Replit |
| `communication` | Komunikace | Bardeen, Phantombuster |
| `3d` | 3D modely | Hunyuan-3D, Hype3D |

## Detailní popisy

Pro každou aplikaci existuje **samostatný markdown soubor** s detailním popisem:

```
agno.md, apify.md, bardeen.md, bolt.md, canva.md, 
chatgpt.md, claude.md, cursor.md, elevenlabs.md, 
make.md, zapier.md, ...
```

## Použití s AI

### Načtení do ChatGPT/Claude
1. Nahraj `apps-databaze.csv` jako soubor
2. Zeptej se: "Které nástroje jsou vhodné pro automatizaci?"

### Python příklad
```python
import pandas as pd
df = pd.read_csv('apps-databaze.csv')
agents = df[df['category'] == 'agent']
print(agents[['name', 'description']])
```

---

**75+ nástrojů. Nekonečné možnosti.**

