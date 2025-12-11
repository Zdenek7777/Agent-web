# FAIL Modul 6: Zrychlení projektů s AI

## Klíčové koncepty a frameworky

### WBS (Work Breakdown Structure)
**Definice:** Rozpad jakéhokoli projektu nebo práce na jednotlivé kroky a podprocesy

**Jak používat:**
- Popište záměr/projekt v bodech nebo volně
- Použijte AI k rozpadu na konkrétní kroky
- AI může navrhnout i využití AI v jednotlivých krocích
- Výstup: strukturovaný plán s jasnou posloupností

**Proč je klíčový:**
Filipův prompt na VBS kombinuje:
- Tradiční projektový management (rozpad na kroky)
- Best practices z FAIL programu (kde použít AI)
- Bez uvádění konkrétních nástrojů (flexibilita)

**Příklad z transkriptu:**
Filip vytvořil asistenta "FailVBS", který vezme jednoduchý popis projektu (např. z Evernote poznámek) a rozpracuje ho do detailní struktury s návrhem, jak využít AI v každém kroku.

---

### Princip 90-10 vs 10-90
**Standard 90-10:** AI vytvoří 90% práce, člověk dodá 10% finální úpravy

**Obrácený 10-90 pro přípravu:**
Čím více času věnuješ přípravě a podkladům (10-90), tím méně času strávíš úpravami výstupů.

**Kdy použít:**
- Složité projekty: investuj čas do přípravy, researche, struktury
- Opakující se procesy: vytvoř jednou kvalitní prompt/systém
- Zakázkové práce: důkladná příprava = minimální iterace

---

### LNO Framework (Leverage, Neutral, Overhead)
**Definice:** Prioritizace AI příležitostí podle dopadu

**Kategorie:**
- **Leverage:** Aktivity, které usnadní vše do budoucna (automatizace, šablony, systémy)
- **Neutral:** Běžná práce bez dlouhodobého dopadu
- **Overhead:** Aktivity, které zabírají čas bez přidané hodnoty

**Aplikace v projektech:**
Prioritně řešit Leverage aktivity - i když nejsou urgentní, mají nejvyšší dlouhodobou hodnotu.

---

### OHIO princip (Only Handle It Once)
**Definice:** Neřeš stejnou věc vícekrát - vytvoř systém, proces nebo si to zapiš

**V praxi:**
- Místo opakovaného promptování: vytvoř asistenta
- Místo opakovaného vysvětlování: udělej zápis do druhého mozku
- Místo hledání informací: centralizuj data na jedno místo

**Příklad:**
Pavla dělala 13 kroků ručně v Excelu. Popsala kroky, Claude jí naprogramoval makro. Z opakované rutiny jednorázové řešení.

---

### Compounding Engineering
**Definice:** Systém, kde každý úkol může vylepšit celý systém učením AI

**Princip:**
- Každá práce na projektu vylepšuje tvoje nástroje/prompty
- Memory AI asistentů se postupně zdokonaluje
- Buduj systém, který se neustále učí a zlepšuje

**Implementace:**
- Po každém projektu: aktualizuj prompty, asistenty, dokumentaci
- Do druhého mozku ukládej nejen výstupy, ale i learningy
- Využij memory funkcí v Claude/ChatGPT pro postupné zlepšování

**Odkaz na deep dive:**
Article od produktového manažera na Evry.tu s GitHubem plným promptů

---

### "Show, Don't Prescribe" (Ukazuj, nepředepisuj)
**Definice:** Při zavádění AI do týmů nepředepisuj nástroje, ale ukazuj konkrétní výsledky

**Proč funguje:**
- Lidé mění návyky, když vidí hodnotu
- Demonstrace > teoretické přesvědčování
- Konkrétní use case > obecné prohlášení o AI

**Aplikace:**
- Sdílej wow momenty s kolegy
- Prezentuj hotové výstupy namísto tutoriálů
- Umožni lidem vidět tvůj proces

---

### Alometrie a Metcalfův zákon
**Alometrie:** Čím větší tým, tím více režie na jeho udržení

**Metcalfův zákon:** Počet spojení roste exponenciálně s počtem členů týmu

**Důsledek pro AI éru:**
Budoucnost = malé týmy + AI zastupující další role = maximální efektivita bez režie velkých organizací

**Inspirace:**
37signals (Basecamp) - 80 lidí, stovky tisíc zákazníků vs konkurence s tisíci zaměstnanci

---

## Pět způsobů jak AI zrychlí projekty

### 1. Příprava (Research & Analysis)
**Co to znamená:**
Namísto ručního hledání si necháš AI najít informace, analyzovat data, připravit podklady

**Konkrétní aktivity:**
- Deep Research na témata před zahájením projektu
- Analýza existujících dat (přepisy schůzek, dokumenty, emaily)
- Vytvoření otázek pro klienta/stakeholdery
- Průzkum best practices ("Jak to dělají jinde?")
- Hledání existujících řešení (GitHub skripty, šablony)

**Filipův tip:**
"Pokud dělám něco, co jsem ještě nedělal, měl bych se zeptat AI. Ideálně ještě předtím, než někomu pošlu dotaz."

**Příklad workflow:**
1. Zadej AI svůj záměr projektu
2. Požádej o Deep Research konkurence/best practices
3. Nech analyzovat existující data (CRM, schůzky, dokumenty)
4. Připrav podklady PŘED spuštěním projektu

**Time investment:**
10-90 princip: investuj 10% času do důkladné přípravy, ušetříš 90% času na opravách

---

### 2. Prototypování
**Definice:**
Z myšlenky na hmatatelný výstup co nejrychleji - nejen aplikace, ale cokoli

**Co prototypovat:**
- Struktura druhého mozku
- Dashboard nebo reporting
- Cenové nabídky
- Dokumenty a smlouvy
- Prezentace
- Webové stránky
- Onboarding procesy

**Proč je klíčové:**
- Lepší diskuze nad konkrétním návrhem než nad abstrakcí
- Rychlá zpětná vazba
- Možnost iterace před finální implementací
- V prototypu lze vyzkoušet flow před investicí do development

**Proces:**
1. Udělej základní prototyp v Claude Artifacts/ChatGPT Canvas
2. Iteruj s AI, dávej zpětnou vazbu
3. Když je prototyp dobrý, převeď do finálního nástroje

**Příklad:**
Josef prototypoval celý projektový management systém - od brainstormingu přes Deep Research až po simulaci expert panelu. Výsledek: prezentace pro vedení a konkrétní implementační plán.

---

### 3. Transformační workflow (Od záměru k realizaci)
**Definice:**
Jeden vstup → série výstupů pro různé účely/lidi pomocí AI transformace

**Princip:**
1. Udělej jednou kvalitní přípravu/zápis
2. Transformuj pro různé účely bez opakované ruční práce

**Konkrétní příklady:**

**Příklad 1: Marketing kampaň (Filip)**
- Videohovor s týmem → přepis
- Konverzace v Teams → export
- AI → zadání pro grafika
- AI → zadání pro tiskárnu (EN, americké jednotky)
- AI → briefing pro kolegyni

**Příklad 2: Grantová žádost**
- Přípravné dokumenty → AI
- Strukturovaný návrh projektu
- Finální text žádosti
- Prezentace pro vedení
- Shrnutí pro team

**Příklad 3: Web development**
- Hovor s klientem → přepis
- AI → strukturovaný brief
- AI → zadání pro copywritera
- AI → zadání pro designéra
- AI → technická specifikace

**Klíč k úspěchu:**
Kvalitní vstup (detailní přepis/zápis) = minimální manuální práce na jednotlivých výstupech

---

### 4. Řízení projektů (Management & Tracking)
**Současný stav:**
- Tradiční nástroje: Planner, Asana, Jira, Trello
- AI funkce: postupně přibývají, ale nerevoluční
- Zatím spíš používáme AI k "vedlejším" aktivitám než k samotné práci v nástroji

**Kam to směřuje:**
Budoucnost = agent-first platformy (Duvo AI, nové startupy z YC)
- Ne nástroj + AI funkce
- Ale AI-first nástroj s agentic capabilities

**Jak používat AI dnes:**
1. **Rozpad úkolů:** Projekt → AI → struktura úkolů
2. **Popis úkolů:** Stručný zápis → AI → detailní task description
3. **Reporting:** Data z nástroje → AI → přehledný report
4. **Analýza:** Přepisy schůzek + úkoly → AI → stav projektu

**Best practice:**
Zatím nechat tradiční nástroje na evidenci, AI na "obalové" aktivity (příprava, analýza, reporting)

---

### 5. Automatizace vs poluautomatizace
**Kritické rozlišení:**
Ne vždy musíš automatizovat kompletně. Často stačí poluautomatizace.

**Poluautomatizace:**
Několik manuálních kroků + AI = dramatické zrychlení

**Příklad 1: Nábor (Filip)**
- Kandidáti → videodotazník
- Odpovědi → manuální přepis
- AI → analýza a doporučení
- Výsledek: 10x rychleji než individuální hovory

**Příklad 2: Excel makro (Pavla)**
- 13 manuálních kroků popsané
- Claude → VBA makro
- Nyní 1 kliknutí místo 13 kroků

**Kdy plná automatizace:**
- Opakující se proces (denně/týdně)
- Vysoká časová náročnost
- Dostupná integrace mezi nástroji
- Spolehlivý datový vstup

**Kdy poluautomatizace:**
- Občasný proces
- Potřeba lidského úsudku v některých krocích
- Složité API/integrace
- Testování před plnou automatizací

**Filipův workflow:**
1. Nejdřív dělej manuálně, poznávej proces
2. Identifikuj části vhodné pro AI
3. Vytvoř poluautomatizované řešení
4. Testuj, iteruj
5. Teprve pak řeš plnou automatizaci

---

## Nástroje a technologie

### Klasické projektové nástroje

**Microsoft ekosystém:**
- Planner (úkoly)
- Teams (komunikace)
- OneNote/Loop (poznámky)
- Excel (data)
- Power Automate (automatizace)

**Google ekosystém:**
- Google Tasks
- Google Workspace
- Google Drive
- Google Apps Script

**Populární projektové nástroje:**
- **Asana:** Projektové řízení pro týmy
- **Monday.com:** Vizuální work management
- **Jira:** Především pro development týmy
- **Trello:** Kanban boards
- **Notion:** All-in-one workspace
- **Freelo:** České řešení pro projektové řízení

**Produktové nástroje (nová vlna):**
- **Linear:** Moderní issue tracking, rychlé AI funkce
- **Height:** AI-first project management
- **Product Board:** Product management + AI

**Cena:** Většinou od $8-15/uživatel/měsíc, často s free tier

---

### AI-powered nástroje na projekty

**Emerging kategorie:**
Nová generace nástrojů postavená od základu s AI

**Příklady:**
- **Duvo AI:** Agent-first platforma pro retail (TomášČupr)
- **Gamma:** AI prezentace (zmíněno v diskusi)
- **Nástroje z YC:** Nové startupy zcela přepisují kategorie

**Proč sledovat:**
- Ukážou směr, kam se ubírá projektový management
- Inspirace pro využití AI i v tradičních nástrojích
- Možnost early adoption pro konkurenční výhodu

**Klíčový posun:**
Od "nástroj + AI funkce" k "AI agent + UI pro kontrolu"

---

### Nástroje na automatizaci

**No-code/Low-code:**
- **Make (Integromat):** Vizuální automatizace
- **Zapier:** Propojení aplikací
- **Power Automate:** Microsoft ekosystém
- **Relay:** AI-enhanced automatizace

**Kdy použít:**
- Propojení mezi systémy (CRM → Slack → Email)
- Pravidelné reporty
- Zpracování dat z více zdrojů

**Filip používá:**
Make.com pro automatizaci typu "najdi LinkedIn profily z listu emailů"

---

### Coding nástroje pro projekty

**Claude Code:**
- Nově v prohlížeči
- Umí pracovat s daty z GitHubu
- Dobrý pro začátečníky s code

**Cursor:**
- Filipova preference
- Práce s lokálními soubory a projekty
- Vhodné pro pokročilejší

**GitHub:**
- Ukládání dokumentace
- Verzování promptů a kódu
- Inspirace od druhých (veřejné repozitory)

**Kdy použít:**
- Skripty pro automatizaci
- Prototypování aplikací
- Zpracování dat
- Integrace mezi systémy

---

### Druhý mozek (nástroje)

**Filipův stack:**
- **Apple Reminders:** Rychlé zachycení (first capture)
- **Evernote:** Osobní zpracování
- **Notion:** Týmové sdílení

**Alternativy v komunitě:**
- **Obsidian:** Lokální, markdown, propojení (ukázka od Ani)
- **OneNote:** Microsoft ekosystém
- **Apple Notes:** Jednoduchost
- **Notion:** All-in-one

**Klíčové funkce:**
- Rychlé zachycení myšlenek
- Snadné vyhledávání
- AI integrace (čím dál důležitější)
- Možnost strukturování

**Best practice:**
Rozdělení pracovní vs osobní druhý mozek (bezpečnost dat, continuity při změně zaměstnání)

---

### Transcription & Research nástroje

**TurboScribe:**
Přepis audio/video, přesná transkripce, používá Magda i Filip

**Notebook LM:**
- Deep Research v interních dokumentech
- Nová funkce: research až do depthů webu
- Audio summaries

**Claude s projekty:**
- Nahrání dokumentů
- Kontextová konverzace
- Memory funkce

**Deep Research funkce:**
- ChatGPT: Search → Deep Research
- Claude: Web search → Iterativní research
- Perplexity: Specializovaný research

---

### Voice & AI asistenti

**Claude desktop/mobile:**
Hlasový režim - "země koule" (používá Tomášova rodina s dětmi)

**ChatGPT Voice:**
Advanced Voice Mode pro přirozenější konverzace

**Use case:**
- Děti se ptají během učení
- Quick lookup informací
- Brainstorming při procházce/jízdě

**Pozor:**
Vždy ověřuj kritické informace (halucinace stále možné)

---

## Workflow a procesy

### WBS Workflow (Work Breakdown Structure)

**Cíl:** Rozpadnout jakýkoli projekt na akční kroky s návrhem využití AI

**Filipův postup:**

**Krok 1: Příprava promptu**
- Vzal přepis ze svého přípravného videa (struktura, kde použít AI)
- Přidal přepis z modulu o symbióze s AI
- Vytvořil prompt pro "experta na rozpad projektů"

**Krok 2: Vytvoření asistenta**
- V Claude vytvořil asistenta "FailVBS"
- Do instrukcí dal vyladěný prompt
- Nastavil formát výstupu (markdown artefakt)

**Krok 3: Použití**
- Do asistenta hodí popis projektu (i volný text z Evernote)
- AI rozpracuje na kroky
- U každého kroku navrhne využití AI
- Bez konkrétních nástrojů (flexibilita)

**Výstup:**
- Zhrnutí projektu
- Strukturované fáze
- Konkrétní aktivity
- Tipy na AI v každém kroku
- Roadmapa

**Time estimate:** Z chaosu k struktuře za 5-10 minut

**Iterace:**
Filip pak říká "udělej to jednodušší" nebo "zaměř se na X" a AI upravuje

---

### Prototypovací workflow

**Cíl:** Z myšlenky na hmatatelný výstup co nejrychleji

**Kroky:**

1. **Definice záměru**
   - Stručný popis (může být i hlasový diktat)
   - Co má výstup dělat
   - Pro koho je určený

2. **Výběr nástroje pro prototyp**
   - Claude Artifacts (React komponenty, HTML)
   - ChatGPT Canvas (dokumenty, texty, simpler UI)
   - Cursor/Claude Code (složitější prototypy)

3. **Iterativní vylepšování**
   - Screenshot problému → AI: "Toto není dobré, chci X"
   - AI upraví prompt i výstup
   - Kopíruj upravený prompt zpět
   - Opakuj 5-10x

4. **Finalizace**
   - Buď použij prototyp jako finální řešení
   - Nebo ho předej jako zadání vývojářům/designérům

**Filipův tip na iteraci:**
"Ukazuj, nevysvětluj - screenshoty jsou efektivnější než popisy"

**Příklad výstupů:**
- Dashboard struktura
- Kalkulačka
- Mini aplikace
- Vizuální návrh procesu
- Struktura databáze

---

### Research workflow

**Cíl:** Získat maximum relevantních informací před zahájením projektu

**Metoda 1: Deep Research (Web)**

Kroky:
1. Definuj research otázku (čím konkrétnější, tím lepší)
2. Spusť Deep Research (ChatGPT, Claude)
3. Nech běžet (10-30 minut)
4. Analyzuj výsledky
5. Případně další kolo research na subtémata

**Filipova taktika:**
"Zadám research před volnou chvílí - jdu na kolo/do posilovny, přijdu a mám to hotové"

**Metoda 2: Research v interních datech**

Kroky:
1. Shromáždi relevantní dokumenty
2. Nahraj do Notebook LM nebo Claude projektu
3. Definuj otázky pro analýzu
4. AI vytvoří strukturovaný přehled

**Metoda 3: Kombinovaný research**

Příklad workflow:
1. Deep Research na best practices z webu
2. Analýza našich interních dokumentů
3. Expert panel simulation (viz níže)
4. Syntéza do finálního doporučení

**Time investment:**
- Jednoduchý research: 5-15 minut
- Složitý deep dive: 30-60 minut (ale můžeš dělat něco jiného)
- Výrazně méně než manuální research

---

### Transformation workflow

**Cíl:** Jeden vstup → mnoho výstupů bez ruční duplikace práce

**Základní struktura:**

1. **Kvalitní vstup**
   - Schůzka → přepis
   - Brainstorming → zápis
   - Diskuze v chatu → export

2. **První transformace**
   - Strukturovaný dokument
   - Shrnutí klíčových bodů
   - Action items

3. **Paralelní výstupy**
   - Zadání pro člena týmu A
   - Zadání pro člena týmu B
   - Zadání pro externího dodavatele
   - Email pro stakeholdery
   - Zápis do projektového nástroje

**Konkrétní příklad:**

Marketing materiály pro knihu:
```
Hovor s týmem → přepis
↓
Chat konverzace → export
↓
AI analýza
├→ Zadání pro grafika
├→ Zadání pro tiskárnu (EN + US units)
├→ Brief pro kolegyni na místě
└→ Checklist pro sebe
```

**Klíčový benefit:**
Udělat jednou, použít vícekrát - žádné opakované vysvětlování stejné věci různým lidem

---

### Iterativní ladění promptů

**Cíl:** Systematické zlepšování AI výstupů

**Kroky:**

1. Vygeneruj základní výstup s jednoduchým promptem
2. Udělej screenshot neuspokojivého výsledku
3. Ukaž AI screenshot: "Tento výstup špatně XYZ. Potřebuji více [konkrétní požadavek]"
4. AI automaticky upraví prompt
5. Zkopíruj upravený prompt zpět do asistenta
6. Testuj a opakuj podle potřeby

**Časová investice:** Typicky 5-10 iterací, každá pár minut

**Potřebné nástroje:** Jakýkoli AI asistent s vision capabilities (Claude, ChatGPT)

**Klíčový poznatek:** Ukazuj, nevysvětluj - screenshoty efektivnější než popisy

**Pro týmy:**
Vytvořte sdílený "prompt library" dokument. Každý týden někdo sdílí svůj nejlepší prompt a vysvětlí iterační proces.

---

### Automatizační workflow

**Fáze 1: Identifikace (Co automatizovat)**

Co hledat:
- Opakující se úkoly (denně/týdně)
- Časově náročné ruční práce
- Náchylné k chybám
- Propojení mezi systémy

**Fáze 2: Popis procesu**

Udělej popis:
1. Co je vstup
2. Jaké kroky se dějí
3. Co je výstup
4. Kde by mohla být AI/automatizace

**Fáze 3: Prototyp (Nejdřív manuálně!)**

Filipova rada:
"Na začátku to dělám manuálně s AI pomocí. Pak teprve automatizuji."

Proč:
- Odhalím edge cases
- Vyladím proces
- Zjistím, jestli to vůbec dává smysl

**Fáze 4: Poluautomatizace**

Příklad workflow:
1. Manuální export dat z systému
2. AI zpracování
3. Manuální kontrola
4. Automatické odeslání/uložení

**Fáze 5: Plná automatizace**

Až když:
- Proces je stabilní
- Víš přesně co chceš
- Testováno na dostatečném vzorku
- ROI je jasné

**Nástroje:**
- Make/Zapier pro propojení apps
- Python skripty pro složitější logiku
- Claude/Cursor pro vytvoření skriptu

---

### Expert Panel Simulation

**Cíl:** Získat perspektivy více expertů najednou pomocí AI

**Jak na to (Josef):**

1. **Příprava kontextu**
   - Tvůj project brief
   - Problémy, které řešíš
   - Existující poznámky/data

2. **Vytvoření panelu**
   - Prompt: "Vytvoř panel 5 expertů na [téma]"
   - AI najde skutečné experty nebo vytvoří charaktery
   - Každý má specif

ní perspektivu

3. **Facilitace diskuze**
   - Položíš otázku panelu
   - Každý expert odpoví ze své perspektivy
   - Můžeš požádat o follow-up diskuzi mezi experty

4. **Syntéza poznatků**
   - AI shrne klíčové body
   - Identifikuje shodu/neshodu
   - Doporučí další kroky

**Výhody:**
- Multiperspektivní pohled za minuty
- Odhalení slepých míst
- Výzva k tvým předpokladům

**Použití:**
- Strategická rozhodnutí
- Design systému
- Validace nápadů před investicí

---

## Tipy a best practices

### Pro WBS a plánování

**Dělej:**
- Začni se záměrem, ne s detaily (AI doplní)
- Nech AI navrhnout využití AI v každém kroku
- Používej screenshoty pro iterace (ne dlouhé popisy)
- Vytvoř si asistenta pro opakované použití
- Ponech flexibility - ne všechno musí být automatické

**Nedělej:**
- Nepiš 20stránkové zadání - stručný popis stačí
- Neočekávej perfektní rozpad na první pokus - iteruj
- Neplánuj automatizaci bez testování procesu manuálně
- Nezačínej s nástroji, začni s procesem

**Pro tip:**
Filipova zkratka VBS (od Martina Ošťádala) je skvělá, protože AI pravděpodobně zná tento framework. Použij "udělej mi WBS" nebo "rozlož pomocí WBS" pro strukturovaný rozpad.

---

### Pro prototypování

**Dělej:**
- Prototypuj všechno před finalizací (weby, dokumenty, procesy)
- Začni s nejjednodušším možným prototypem
- Iteruj s AI pomocí screenshotů a konkrétní zpětné vazby
- Sdílej prototypy se stakeholdery brzy (vyhnout se překvapením)
- Ponech si vyladěné prompty pro příště

**Nedělej:**
- Netlač se do finální podoby v prvním pokusu
- Neprototypuj v produkčních nástrojích - začni v Claude/ChatGPT
- Neskákej na implementaci bez prototypu
- Nepřeceňuj první návrh - stakeholders vidí věci, které ty ne

**Pro tip - rychlá validace:**
Filip: "Vytvořit prototyp a otestovat se 20 lidmi stejný den"
(Inspirováno Gamma - jejich development proces)

---

### Pro research

**Dělej:**
- Definuj jasnou research otázku (ne "všechno o X")
- Kombinuj web research + interní dokumenty
- Zadávej research před volnou chvílí (efektivita času)
- Ukládej research výstupy do druhého mozku
- Dělej follow-up research na zajímavé nálezy

**Nedělej:**
- Nehledej manuálně na Google, když můžeš Deep Research
- Neakceptuj první výsledky bez ověření
- Neignoruj zdroje - kvalitní research ukazuje použité zdroje
- Neřeš research týden - dostačující jsou hodiny

**Pro tip - "Co nedělat":**
Před researching "jak to udělat": zeptej se "jestli to vůbec dělat"
→ Research: "Měl bych X?" před "Jak udělat X?"

---

### Pro transformation workflow

**Dělej:**
- Investuj čas do kvalitního vstupu (přepis, zápis)
- Identifikuj všechny potřebné výstupy předem
- Nech AI vytvořit templaty pro opakující se transformace
- Používej konzistentní formát vstupů (usnadní automatizaci)
- Ukládej úspěšné transformation prompty

**Nedělej:**
- Nepiš každé zadání ručně, když máš společný základ
- Neposílej různým lidem různé verze truth - jedna source
- Netransformuj bez kontextu - AI potřebuje vědět "proč"
- Nekopíruj-vkládej bez kontroly - human in the loop

**Pro tip:**
Filipův příklad: meeting notes z klienta → 4 různá zadání pro 4 lidi z jednoho zdroje. Žádná duplicita vysvětlování.

---

### Pro automatizaci

**Dělej:**
- Začni popisem současného procesu (13 kroků → co dělám)
- Testuj manuálně s AI asistencí nejdřív
- Vybuduj poluautomatizaci před plnou automatizací
- Dokumentuj proces před automatizací
- Měř time savings (víš, jestli to stojí za to)

**Nedělej:**
- Neautomatizuj špatný proces (nejdřív optimalizuj)
- Neočekávej 100% automatizaci všeho
- Neignoruj edge cases (budou se dít)
- Nezapomeň na human oversight (alespoň zpočátku)

**Pro tip - ROI kalkulace:**
Pavlin příklad: 13 kroků několikrát týdně = desítky hodin ročně
→ 2 hodiny na vytvoření makra = okamžitý ROI

---

### Pro druhý mozek

**Dělej:**
- Zachycuj vše rychle (Apple Reminders / inbox)
- Zpracovávej pravidelně (čištění, organizace)
- Používej tagy/složky konzistentně
- Propoj s AI asistenty (upload do kontextu)
- Veď retrospektivu - co funguje/nefunguje

**Nedělej:**
- Neukládej vše chaoticky bez struktury
- Nezapomínej čistit (starý content = noise)
- Nenech informace jen v hlavě ("co si pamatuju")
- Nemíchej pracovní a osobní (bezpečnost, kontinuita)

**Pro tip - Filipova struktura:**
1. Apple Reminders (capture)
2. Evernote (personal processing)
3. Notion (team sharing)

**Pro tip - Compounding:**
Každý zápis do druhého mozku zlepšuje celý systém. Investice času do struktury se vrátí exponenciálně.

---

### Pro změnu návyků

**Dělej:**
- Start small - jeden projekt s AI intenzivně
- Sdílej úspěchy s kolegy (inspirace)
- Dej si dedikovaný čas (deep work sessions)
- Measured progress (kolik času ušetřil)
- Retrospektiva (co fungovalo, co ne)

**Nedělej:**
- Neočekávej okamžitou perfekci
- Neměň všechno najednou
- Neopouštěj při prvním neúspěchu
- Nepracuj s AI jen když "zbyde čas"

**Pro tip:**
Filip: "Dej si extrémně krátký čas na projekt - nucené používání AI = rychlejší learning"

---

## Strategie adopce a implementace

### Deep Work Sessions s AI

**Kontext:** Filip používá jako klíčovou techniku pro rychlý pokrok na projektech

**Jak to funguje:**
1. Dedikuj si 2-4 hodiny nepřerušeného času
2. Vyber jeden konkrétní projekt nebo problém
3. Pracuj intensivně pouze s AI jako spolupracovníkem
4. Cíl: posunout projekt o maximum za minimum času

**Proč to funguje:**
- Fokus nutí používat AI efektivně (nemáš čas na manuální práci)
- Rychlé iterace (okamžitá zpětná vazba)
- Learning by doing (exponenciální zvyšování AI skillů)
- Překonání prokrastinace (extrémní deadline)

**Podobné aktivity se stejným principem:**

1. **Hackathon Fridays** - Každý poslední pátek v měsíci: vyber kritický proces a vylepši ho s AI
2. **Sprint Weeks** - Týden zaměřený na jeden projekt, každý den deep work session
3. **Pair Programming s AI** - 2 lidé + AI řeší společně složitý problém, 3-4h session
4. **"Ship It Saturday"** - Víkendová session: cíl je vydat něco funkčního (prototyp, MVP)
5. **Lightning Builds** - 90 minut, ultra-fokus, jednoduchý well-defined output

**Nejlepší pro:**
- Solo pracovníky nebo small týmy (2-3 lidé)
- Projekty s jasným, měřitelným výstupem
- Situace, kdy potřebuješ quick win
- Learning nových AI capabilities

**Úskalí:**
- Bez jasného cíle může vést k "featuritis" (dělám věci, co vlastně nepotřebuji)
- Únava při delších sezeních (max 4h)
- Quality může trpět při extrémní rychlosti (nutnost review)

---

### Týmové AI Hackathony

**Kontext:** Filip doporučuje pro organizační adoption

**Konkrétní příklad:**
"Pojďme si dát dva dny, kdy komplexně vyčistíme data v našem CRM pomocí AI"

**Jak to funguje:**
- Stanoví se konkrétní problém nebo výzva
- Celý tým (5-15 lidí) věnuje čas (půlden až 2 dny)
- Každý experimentuje s AI na svém kusu problému
- Na konci prezentace nejlepších nálezů a implementace
- Společné rozhodnutí: co adoptujeme

**Proč to funguje:**
- Peer learning (vidím, jak kolegové používají AI)
- Bezpečný prostor pro experimentování
- Okamžitá aplikace na reálný problém
- Build momentum (viditelný pokrok za krátký čas)

**Podobné aktivity se stejným principem:**

1. **Show & Tell Fridays** - Týdenní 30min: jeden člověk ukáže AI discovery, ostatní se učí
2. **AI Tool Rotation** - Každý týden tým zkouší jeden nástroj na společném úkolu
3. **Problem-Solution Marketplace** - Lidé sdílí problémy, jiní navrhují AI řešení, pak implementují společně
4. **Parallel Experimentation** - Stejný úkol řeší více lidí různými AI nástroji, pak porovnání přístupů
5. **AI Office Hours** - Pravidelná hodina, kdy "AI champion" pomáhá ostatním s konkrétními use cases

**Nejlepší pro:**
- Týmy 5-15 lidí
- Mix skill levels (začátečníci i pokročilí)
- Organizace v rané fázi AI adoption
- Řešení konkrétních blokujících problémů

**Úskalí:**
- Bez konkrétního problému může být příliš abstraktní (vždy konkrétní challenge)
- Potřeba facilitátora (udržet momentum a focus)
- Follow-up je kritický - bez implementace po hackathonu ztráta motivace

---

### Retrospektivy s AI fokusem

**Kontext:** Adaptace tradiční retro pro AI adoption

**Struktura:**
1. **Co děláme s AI dobře?** (keep doing)
2. **Co bychom mohli s AI dělat lépe?** (improve)
3. **Co bychom měli začít dělat s AI?** (start)
4. **Co bychom měli přestat dělat?** (stop - manuální práce)

**Jak to funguje:**
- Pravidelná cadence (týdně/měsíčně)
- Každý sdílí jeden konkrétní příklad
- Fokus na actionable insights (ne jen diskuze)
- Action items s vlastníkem a deadlinem
- Review minulých action items

**Proč to funguje:**
- Systém neustálého zlepšování
- Sdílení best practices
- Identifikace problémů brzy
- Build accountability

**Podobné aktivity se stejným principem:**

1. **AI Success Stories Channel** - Slack/Teams kanál: každý sdílí weekly win s AI
2. **Failure Friday** - Sdílení věcí, co s AI nevyšly (učení z chyb)
3. **Process Review Sessions** - Každý měsíc: jeden proces pod lupou - jak ho zlepšit s AI?
4. **Metrics Review** - Tracking time savings, AI usage, output quality - pravidelný review
5. **Personal AI Audit** - Každý člen týmu quarterly: "Jak používám AI a kde můžu zlepšit?"

**Nejlepší pro:**
- Etablované týmy s běžící AI adoption
- Týmy, kde už lidé AI používají (potřeba co sdílet)
- Organizace s open feedback kulturou
- Regular cadence (ne one-off)

**Úskalí:**
- Může se stát formalitou bez action items
- Potřeba psychological safety (sdílet i failure)
- Overload informacemi - fokus na top 3-5 items

---

### Prompt & Asistent Library

**Kontext:** Týmová knowledge base pro AI workflows

**Jak to funguje:**
1. Centrální místo (Notion, Confluence, Git)
2. Struktura:
   - Use case (k čemu slouží)
   - Prompt/instrukce
   - Příklad inputu
   - Příklad outputu
   - Autor & kdy vytvořeno
   - Iterační historie (jak se vylepšovalo)

3. Přispívání:
   - Když někdo vytvoří skvělý prompt → sdílí
   - Týdenní nebo měsíční review nejlepších
   - Gamification (kdo přispěl nejvíc)

**Proč to funguje:**
- OHIO princip na týmové úrovni (neřešíme 10x to samé)
- Kompounding efekt (každý přidá, všichni profitují)
- Onboarding nových členů (okamžitý přístup k best practices)
- Živý dokument (neustále se zlepšuje)

**Podobné aktivity se stejným principem:**

1. **Template Tuesday** - Každé úterý někdo sdílí šablonu/prompt s demo
2. **Prompt Pairing** - Junior + Senior společně vytvoří prompt, zdokumentují proces
3. **Use Case Repository** - Katalog "když potřebuješ X, použij tento prompt"
4. **Improvement Thursdays** - Vezmeme starý prompt, zlepšíme ho společně
5. **AI Workflow Diagrams** - Vizuální dokumentace: flowchart jak řešit typ úkolu s AI

**Nejlepší pro:**
- Týmy 10+ lidí (víc přispěvatelů = víc hodnota)
- Organizace s opakujícími se procesy
- Týmy s různými skill levels (knowledge sharing)
- Firmy s high turnover (preserve knowledge)

**Úskalí:**
- Potřeba maintenance (staré prompty, deprecated nástroje)
- Overload (příliš mnoho promptů = noise)
- Lack of adoption (musí být easy to use)
- Zastaralost (AI modely se mění, prompty taky)

---

### "Show, Don't Prescribe" (Adoption filozofie)

**Kontext:** Filipova strategie pro zavádění AI do týmů

**Princip:**
Místo "takhle se má používat AI" → "podívej se, co jsem s AI udělal"

**Jak to funguje:**
1. **Vytvoř výsledek:** Nejdřív udělej něco konkrétního s AI
2. **Sdílej output:** Ukaž hotovou práci, ne tutorial
3. **Vysvětli proces:** Když se ptají, vysvětli jak
4. **Nabídni pomoc:** "Chceš to zkusit taky? Pomůžu ti nastavit"

**Proč to funguje:**
- Viditelná hodnota (ne teorie)
- Natural curiosity (kolegové se sami ptají)
- No pressure (každý v own pace)
- Konkrétní use case (ne abstraktní benefit)

**Příklady z transkriptu:**
- Pavla ukázala excel makro → kolegové chtěli taky
- Josef prezentoval projekt management systém → vedení schválilo
- Filip sdílí wow momenty → inspirace pro další

**Podobné aktivity se stejným principem:**

1. **Demo Days** - Měsíční: každý může ukázat co nového s AI dokázal
2. **Before/After Shares** - Sdílení "jak to bylo před AI vs po AI" (time, quality)
3. **Live Build Sessions** - Stream/prezentace: budování něčeho s AI live
4. **Client Success Stories** - Sdílení jak AI pomohlo v klientském projektu
5. **Personal Productivity Shares** - "Takhle AI zrychlil můj běžný den"

**Nejlepší pro:**
- Organizace začínající s AI
- Týmy se skeptiky nebo slow adopters
- Bottom-up adoption (ne top-down mandate)
- Různorodé skill levels

**Úskalí:**
- Pomalé (ne instant adoption)
- Neměří se (těžké trackovat impact)
- Dependent on champions (potřeba early adopters co budou sdílet)

---

### Experimentační Space

**Kontext:** Vytvořit bezpečné prostředí pro zkoušení AI

**Jak to funguje:**
1. **Dedikovaný prostor** (Slack channel, Notion page)
2. **No wrong answers culture** - cokoli zkusit OK
3. **Shared learnings** - co vyzkoušel, sdílíš (success i failure)
4. **Quick feedback** - ostatní komentují, pomáhají
5. **No judgment zone** - začátečnické otázky are welcome

**Struktura:**
- #ai-experiments channel
- Format: Use case | What I tried | Result | Learning
- Tagování (#success #failure #needs-help)
- Weekly digest nejzajímavějších experimentů

**Proč to funguje:**
- Psychologically safe (fail OK)
- Collective learning (všichni se učí z experimentů všech)
- Low barrier (sdílet experiment je easy)
- Inspiration engine (vidím co zkusit další)

**Podobné aktivity se stejným principem:**

1. **"I Tried It" Tuesdays** - Každé úterý: zkus jeden nový AI nástroj/use case
2. **Fail Forward Fridays** - Sdílej co nejlepší failure tento týden s AI
3. **Experiment Bingo** - Grid of experiments, gamify trying new things
4. **Tool Testing Pairs** - Dva lidé testují tool, sdílí jointly review
5. **Monthly Challenge** - Společná výzva: "Tento měsíc všichni zkusíme X"

**Nejlepší pro:**
- Early stage adoption (build confidence)
- Teams with varying AI experience
- Psychologically safe culture already exists
- Teams that value learning over perfection

**Úskalí:**
- Může být overwhelming (too much sharing)
- Need moderation (keep quality, relevance)
- Without structure může být chaotic
- Engagement drops over time (need fresh challenges)

---

### Change Management pro AI Projekty

**Filip o změně mindset:**
"Budoucnost: každý je builder, všichni stavíme. Ne jenom managujeme."

**Klíčové změny:**

**1. Od "Řídím" k "Stavím":**
- Manager → builder of systems, processes
- Více hands-on, méně delegování na jiné lidi
- Více delegování na AI, méně na lidi

**2. Od Specialist k Generalist:**
- T-shaped worker: deep v jednom, broad v mnoha
- AI rozšiřuje "broad" část
- Každý dokáže víc věcí než před AI

**3. Od Plánování k Prototypování:**
- Místo měsíčního plánování → týden prototypu
- Build-Measure-Learn cyklus zkrácen z měsíců na dny
- "Done is better than perfect" (Pavla's quote)

**Implementace:**

**Pro jednotlivce:**
1. Začni s jedním projektem, použij AI intenzivně
2. Dokumentuj time savings (měř dopad)
3. Sdílej s kolegy (show don't prescribe)
4. Expanduj na další projekty

**Pro týmy:**
1. Identifikuj pain points (co nás brzdí?)
2. Pilot s 2-3 early adopters
3. Hackathon s celým týmem na kritický problém
4. Standardizuj co funguje
5. Iterate na další use cases

**Pro organizaci:**
1. Top-down: leadership používá AI viditelně
2. Bottom-up: enable experiments, sdílení
3. Middle-out: AI champions v každém týmu
4. Infrastructure: nástroje, training, guidelines

**Měření úspěchu:**
- Time to output (jak rychle doručíme projekt)
- Quality metrics (chybovost, satisfaction)
- Employee sentiment (jak rád to dělají)
- AI usage rates (adoption metrics)

---

## Příběhy úspěchu účastníků

### Roman: Kreativní explorace

**Kdo:** Roman, účastník FAIL

**Výzva:** Prozkoumat kreativní možnosti AI

**Řešení:**
- Experimentoval s různými AI nástroji
- Vytvářel obrázky, videa, animace, avatary
- Generoval písničky
- Navrhl interiér

**Použité nástroje:** 
Různé image generators, video tools, audio AI

**Výsledek:**
Top output: AI-generated písnička na rádiobudík - pozvolné buzení bez ranního šoku

**Klíčový poznatek:**
Experimenty nejsou jen o práci - osobní use cases pomáhají naučit se s AI pracovat v bezpečném prostředí

**Adopční lekce:**
Start s fun use cases před serious work applications. Build confidence v low-stakes environment.

---

### Magda: Systematická integrace

**Kdo:** Magda, účastník FAIL

**Výzva:** Integrovat AI do každodenního workflow

**Řešení:**
- Zavedla systematickou práci s Notion, TurboScribe a AI
- Voice notes v iPhone → přepis → AI zpracování
- Korektura vs psaní od nuly (efektivnější)
- Vytvořila klávesové zkratky pro častá použití

**Použité nástroje:**
- Notion (organizace)
- TurboScribe (přepisy)
- iPhone Voice Memos (capture)
- Klávesové zkratky

**Výsledek:**
Kompletní workflow pro rychlé zachycení myšlenek → zpracování → využití

**Klíčový poznatek:**
Systematický přístup beats ad-hoc používání. Když vytvoříš system, používáš ho naturally.

**Adopční lekce:**
Začni s workflow pro jednu konkrétní aktivitu. Když funguje, expanduj na další.

---

### Daria: Skill Development

**Kdo:** Daria, účastník FAIL

**Výzva:** Naučit se nové dovednosti systematicky

**Řešení:**
- Každý proces rozdělila na podprocesy (process decomposition)
- Každý podproces řešila s AI
- Vytvořila obchodní prezentaci + nabídku pro klienta
- AI na první dobrou dodal kvalitní výstup

**Použité nástroje:**
Claude pro process decomposition a tvorbu obsahu

**Výsledek:**
"Profi práce za pár hodin" - velká spokojenost s výsledkem

**Klíčový poznatek:**
Rozpad složitého úkolu na jednoduché podúkoly = každý můžeš řešit s AI

**Adopční lekce:**
Naučit se dekompozici je critical skill. Jednou naučená, použitelná na všechno.

---

### Petr: Projektový Maratonec

**Kdo:** Petr, účastník FAIL

**Výzva:** Multiprojektový management

**Řešení za 4 týdny:**
- Interní firemní tool
- Plánování projektů
- Kontrola uhrazených faktur
- Docházka lidí v kanceláři
- Příprava podkladů pro účetnictví
- 2 nové webové stránky (postavené přes AI)
- Automatizace procesů

**Použité nástroje:**
Mix AI nástrojů, pravděpodobně including ChatGPT, Claude, web builders

**Výsledek:**
Impresivní produktivita - 8+ projektů za měsíc

**Klíčový poznatek:**
"Co se dá stihnout za čtyři týdny" - massive motivace pro ostatní

**Adopční lekce:**
Když začneš používat AI consistently napříč projekty, productivity exploduje.

---

### Tom: Rodina & AI

**Kdo:** Tom, účastník FAIL (+ rodina)

**Výzva:** Praktické využití AI v běžném životě

**Řešení:**
**Use Case 1: Kino**
- Nefungoval web kina
- Tom: "Zeptám se AI kdy hrajou film X"
- AI našla info
- Šli do kina

**Use Case 2: Děti a učení**
- První a druhá třída ZŠ
- Když něco neví: "Zeptáme se zeměkoule" (ChatGPT hlasový režim)
- Děti používají voice mode naturally
- Dostávají odpovědi na své otázky

**Použité nástroje:**
ChatGPT (pravděpodobně s Advanced Voice Mode)

**Výsledek:**
AI se stala přirozenou částí rodinného života

**Klíčový poznatek:**
- Automatická reakce ("Zeptám se AI" místo Google)
- Hlasová komunikace je přirozená i pro děti
- Low barrier to entry (mluvení vs psaní)

**Adopční lekce:**
Voice modes dramaticky snižují bariéru vstupu. Good for kids, non-technical users, a busy situations.

---

### Pavla: Excel Automatizace

**Kdo:** Pavla, účastník FAIL

**Výzva:** Opakovaná manuální práce v Excelu

**Řešení:**
- 13 kroků při každém exportu z SAP
- Formátování, úpravy, vkládání, mazání
- Popsala všechny kroky
- Claude jí naprogramoval Excel makro
- Nyní 1 kliknutí místo 13 kroků

**Použité nástroje:**
- Claude (pro generování VBA kódu)
- Excel (implementace)
- SAP (data source)

**Výsledek:**
Workflow používaný několikrát týdně zautomatizován

**Klíčový poznatek:**
"Excel to uměl už předtím, ale já ne" - AI democratizuje advanced functions

**Bonus:**
Vytvořila DID avatar s prezentací pro interní poradu - zpestření meetings

**Adopční lekce:**
Describe your manual process → AI can automate it. Doesn't matter if you don't know how to code.

---

### Filip: Content Automation Pipeline

**Kdo:** Filip Drimalka (vedoucí FAIL programu)

**Výzva:** Kompletní automatizace tvorby obsahu na Twitter

**Řešení:**

**Krok 1: Záměr**
- Poznámky v Evernote: zdroje (podcasty, knihy)
- Popis jak má vypadat content

**Krok 2: Vytvoření Experta**
- Prompt pro "expert na rozpad projektů"
- Input: přepis přípravného videa + modul o symbióze
- Output: AI asistent co rozpadá projekty a navrhuje AI využití

**Krok 3: Rozpad Projektu**
- Zadání: poznámky z Evernote
- AI rozpadl na fáze: definice strategie, analýza pilířů, tone of voice...
- Detailní struktura s návrhy implementace

**Krok 4: Zjednodušení**
- Filip: "Udělej to jednodušší"
- AI upravil na lean version
- Fokus na vlastní content, ne externí data

**Krok 5: Implementační Prompty**
- AI vytvořil prompty pro jednotlivé typy contentů (threads, posts)
- Návrh automatizace (napůl manuální)
- Doporučení nástrojů (Hyperfury, Buffer)

**Použité nástroje:**
- Evernote (planning)
- Claude (project breakdown, prompts)
- Hyperfury/Buffer (scheduling - doporučeno)

**Výsledek:**
Kompletní blueprint na content automatizaci za několik hodin spolupráce s AI

**Klíčový poznatek:**
Od vágního nápadu k detailnímu plánu implementace. AI dokáže project manage sama sebe.

**Adopční lekce:**
Nechat AI rozpadnout projekt → nechat AI vytvořit prompty pro podúkoly → postupovat krok za krokem. Symbiosis v akci.

---

### Josef: Municipal Project Management

**Kdo:** Josef, účastník FAIL (práce ve městě)

**Výzva:** Zlepšit projektové řízení pro městské zakázky

**Problém:**
- Projekty často probíhají bez dokumentace rozhodnutí
- Když se staví: "Proč to není jinak?"
- Lidé hledají v emailech a složkách rozhodnutí spřed let

**Řešení:**

**Fáze 1: Příprava**
- Vytvořil prompt na vytváření promptů/agentů
- Popsal problém, existující stav (Trello dashboard)
- AI vytvořil projektový plán

**Fáze 2: Research**
- Deep Research na projektové metodiky z korporátu
- Zpracování poznámek z týmových setkání
- Identifikace pain points ("tohle nefunguje, tohle štve")

**Fáze 3: Tvorba Řešení**
- Claude postupně vytvářel osnovu → směrnici
- Všechny poznámky v Obsidianu
- Cursor pomáhal najít spojitosti v datech

**Fáze 4: Expert Panel**
- AI vytvořilo panel 5 reálných expertů na projektový management
- Experti diskutovali navrhované řešení
- Josef integroval jejich feedback

**Fáze 5: Výstup**
- Kompletní systém pro Google Workspace/Trello
- Jasná zodpovědnost, každý projekt má kartu
- 10stránková prezentace (pomocí Gamma)
- Prezentace vedení → schváleno

**Použité nástroje:**
- Claude (hlavní AI partner)
- Obsidian (knowledge management)
- Cursor (analýza, hledání souvislostí)
- Trello (existující nástroj)
- Gamma (prezentace)

**Výsledek:**
Z problému bez řešení na standardizovaný systém připravený k implementaci

**Klíčový poznatek:**
"Pro mě a pro nás to bylo sci-fi na začátku" - ale s AI to dokázali

**Adopční lekce:**
I komplexní organizační změny lze nadesignovat s AI. Kombinace research + prototyping + expert simulation = robust solution.

---

### Ani: Obsidian Second Brain

**Kdo:** Ani, účastník FAIL

**Výzva:** Centralizace všech projektových informací

**Řešení:**

**Struktura:**
- Personal second brain v Obsidianu
- Firemní věci: Google Drive
- Osobní: Obsidian

**Organizace:**
- PARA method (Projects, Areas, Resources, Archives)
- AI chats exportované zpět do Obsidianu
- Retrospektivy uložené
- Decisions log
- Resources (asistenti, prompty)

**Integrace:**
- Markdown asistenti (převod PDF/jiných formátů)
- Claude projects (specifické projektové kontexty)
- Weekly retrospektiva s indexem všeho v Obsidianu

**Použité nástroje:**
- Obsidian (hlavní druhý mozek)
- Claude (AI partner)
- Cursor/Cloud Code (development)
- PARA framework

**Výsledek:**
"Cokoliv pracuji s AI, pak mám formáty... abych ty informace dostala zpět do druhého mozku"

**Klíčový poznatek:**
Centralizace = síla. Všechno na jednom místě, dostupné pro AI, průběžně aktualizované.

**Weekly retrospektiva:**
Upload indexu Obsidianu → AI analyzuje co nového → input pro retrospektivu

**Adopční lekce:**
Second brain není jen storage - je to living system. Když ho integruje s AI workflow, compound returns jsou masivní.

---

## Zdroje & reference

### Zmíněné nástroje

**Projektové řízení:**
- **Microsoft Planner** - https://tasks.office.com - Součást M365
- **Asana** - https://asana.com - Od $10.99/user/měsíc
- **Monday.com** - https://monday.com - Od $8/user/měsíc
- **Jira** - https://www.atlassian.com/software/jira - Od $7.50/user/měsíc
- **Notion** - https://notion.so - Free až $10/user/měsíc
- **Linear** - https://linear.app - Od $8/user/měsíc
- **Trello** - https://trello.com - Free až $10/user/měsíc
- **Freelo** - https://freelo.cz - České řešení

**AI Chatboti:**
- **Claude**