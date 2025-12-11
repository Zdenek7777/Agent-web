# Modul 08: Chytrá práce s daty

## Klíčové koncepty a frameworky

### Demokratizace dat
**Definice:** Přiblížení dat biznisu - lidé, kteří s daty pracují, by měli mít nástroje a schopnosti je analyzovat sami, místo čekání na datová oddělení.

**Filipova filozofie:**
> "Kdo by měl udělat rychlou analýzu potenciálních klientů, kteří jsou už v databázi, ale dlouho nenakoupili? Je daleko lepší, když to udělá obchodník, než když bude muset posílat někam požadavek."

**Proč je to důležité:**
- Datová oddělení by se měla starat o "trubky" (infrastrukturu), ne o každou analýzu
- Biznis zná kontext svých dat nejlépe
- AI demokratizuje dovednosti - nemusíte být data scientist

**Praktická implementace:**
- Naučit se základy práce s AI nástroji pro analýzu
- Znát, kdy použít jednoduchý chatbot vs. kdy potřebuji skript
- Budovat povědomí o možnostech v týmu

---

### DIKW pyramida (data → informace → znalosti → moudrost)
**Definice:** Hierarchický model transformace surových dat do prakticky využitelné moudrosti.

**Komponenty:**
- **Data:** Surová čísla, texty, záznamy v databázích
- **Informace:** Data s kontextem a významem
- **Znalosti:** Syntetizované informace, pochopení vztahů
- **Moudrost:** Schopnost správně rozhodnout na základě znalostí

**Filipova reflexe k AI éře:**
> "Je otázka, jestli se nepřesune i ta wisdom, protože už třeba nebudeme vědět, co všechno v těch datech je, jak do detailu jsou ti agenti nachystaní, a budeme možná i tu moudrost trošku muset outsourcovat, delegovat na AI."

**Posun v práci s AI:**
- Dříve: Sbírání → organizace → syntéza = výstup
- Nyní: Design procesu → deep research → zadání agentovi → výstup s human-in-the-loop

---

### Context engineering > prompt engineering
**Definice:** Nestačí jen dobře formulovat instrukce (prompt), klíčové je připravit kvalitní kontext - data, znalosti, nástroje, které AI dostane k dispozici.

**Komponenty kontextu:**
- Interní znalosti a informace firmy
- Data z internetu nebo externích zdrojů
- Nástroje (API, skripty, databáze)
- Příklady a vzory ideálních výstupů

**Klíčový princip:**
> "Jakmile jste schopni designovat dobré prompty a připravit dobrý kontext, to znamená data, dá se říct, že jste ready a připraveni na to, abyste dokázali AI využít."

**Praktický tip - vzor místo popisu:**
> "Když pracujeme s daty, tak je dobré někdy říct - tady já pracuji na tom, jak má vypadat výsledek - a dám ho jako součást toho promptu a pak AI si s tím poradí daleko líp."

---

### Strukturovaná vs. nestrukturovaná data
**Definice:** Dva základní typy dat vyžadující různé přístupy ke zpracování.

**Strukturovaná data (~20% ve firmách):**
- Tabulky, databáze, informační systémy
- Popsaná, kategorizovaná, konzistentní formát
- Příklady: CRM kontakty, registrační formuláře, transakce

**Nestrukturovaná data (~80% ve firmách):**
- Texty, smlouvy, prezentace, obrázky, video, audio
- Konverzace, e-maily, dokumenty
- Donedávna náročné na zpracování, s AI se to změnilo

**Filipova teze o hodnotě:**
> "Možná ta největší hodnota leží v našich konverzacích, protože tam spočívá naše znalost. Kterou pak můžeme dostat do AI agentů."

---

### Evoluce práce s daty (3 generace)
**Definice:** Historický vývoj přístupu k datové analytice.

**Generace 1 - Tabulky a manuální práce:**
- Excel, ruční zpracování
- Omezená škálovatelnost

**Generace 2 - Business Intelligence:**
- Power BI, Tableau, Looker Studio
- Dashboardy, vizualizace, proklikávání
- Stovky reportů ve firmách

**Generace 3 - Talk to Data:**
- Přirozený jazyk pro dotazování
- Okamžité insighty
- AI analyzuje a odpovídá
- Keboola jako příklad české inovace

**Filipova predikce:**
> "Klasická business intelligence, jak ji známe, nebude existovat, protože nebude dávat smysl, aby existovalo ve firmě stovky reportů na různé aktivity."

---

## Kritická znalost: kdy použít jaký nástroj

### Rozhodovací matice pro práci s daty

| Velikost dat | Složitost úkolu | Doporučený nástroj | Spolehlivost |
|--------------|-----------------|-------------------|--------------|
| Malá (<100 řádků) | Jednoduchá analýza | Chatbot (Claude, GPT, Gemini) | Vysoká |
| Střední (100-1000) | Jednoduchá analýza | Chatbot s reasoning mode | Střední-vysoká |
| Střední | Komplexní analýza | Cursor, Claude Code | Vysoká |
| Velká (1000+) | Jakákoliv | Skripty (Python, Apps Script) | Vysoká |
| Velmi velká (10k+) | Jakákoliv | Specializované nástroje (Keboola, Julius) | Vysoká |

**Kritické pravidlo:**
> "Lidé mají pocit, že můžou hodit do AI i velmi komplexní tabulky s tisícovkami řádků, ale je potřeba opravdu vědět, kdy to můžu hodit do chatbota, nebo spíš si nechat napsat nějaký skript."

### Praktické zjištění z Filipova testu (analýza 3000 řádků)

**Testované nástroje a výsledky:**

1. **Copilot v Excelu:** Dobrý, ale vyžadoval upřesnění (míchal reklamu se službami)
2. **Gemini v Google Sheets:** Rovnou grafy a souhrn, funkční
3. **ChatGPT:** Nejhorší - nepřesnosti, špatné zpracování
4. **Claude:** Nejlepší z chatbotů
5. **Claude Code / Cursor:** Nejspolehlivější - programuje, kontroluje, 99% spolehlivost

**Klíčové poučení:**
> "Pro jednoduchý věci už tady ty nástroje jsou super. Pokud chcete spolehlivost a chcete, aby to zpracovalo daleko víc informací, tak potřebujete používat ty skriptovací nástroje."

---

## Nástroje a technologie

### Databáze pro běžné uživatele

#### Airtable
**Účel:** Databázový nástroj na pomezí tabulky a plnohodnotné databáze pro netechnické uživatele.

**Klíčové funkce:**
- Formuláře pro sběr dat (podobné Google Forms)
- Různé typy polí (text, výběr, soubory, funkce)
- Propojování tabulek mezi sebou
- Různé pohledy na data (tabulka, Kanban, kalendář, galerie)
- Automatizace bez kódu
- Integrace s AI funkcemi

**Cena:** Freemium model, placené plány od cca $20/měsíc

**Nejlepší pro:**
- CRM systémy
- Projektové řízení
- Event management
- Content kalendáře
- Tracking čehokoliv

**Pro tip - Airtable Universe:**
> "Jsou to šablony od lidí. Lidé sdílí, jak používají Airtable a vy si můžete podívat, k čemu tady lidé používají databáze."

Příklad: Book promotion databáze pro autory s přehledem serverů pro propagaci knih.

**Alternativy:**
- Microsoft Lists (pro Microsoft 365 uživatele)
- Notion databases
- Tabidoo

---

#### Microsoft Copilot v Excelu (Agent Mode)
**Účel:** AI asistent přímo v Excelu pro analýzu a tvorbu dat.

**Požadavky:**
- Microsoft 365 s Copilotem
- Pro Agent Mode: Frontier program (insider preview)
- Excel v angličtině

**Klíčové funkce:**
- Vytváření analýz z promptu
- Generování syntetických dat
- Automatické grafy a vizualizace
- Návrhy na základě kontextu

**Příklad použití (Karel):**
Prompt: "Vytvoř analýzu potřeb zákazníků" → Copilot navrhl strukturu tabulky, vygeneroval testovací data, nabídl grafy důležitosti vs. spokojenosti.

**Varování:**
- Spolehlivost stále není 100%
- Někdy se zasekne nebo vynechá data
- Vždy vizuálně kontrolovat výstupy

---

### Skriptovací a programovací nástroje

#### Cursor
**Účel:** AI-powered IDE pro programování a práci s daty pomocí přirozeného jazyka.

**Klíčové funkce:**
- Plan mode pro strategické plánování před implementací
- Browser mode pro stahování dat z webu
- Práce s lokálními soubory a složkami
- Generování a spouštění skriptů
- Integrace s různými AI modely

**Cena:** Freemium, Pro plan cca $20/měsíc

**Nejlepší pro:**
- Komplexní analýzy dat
- Automatizace opakujících se úkolů
- Web scraping
- Personalizace a obohacování dat
- Porovnávání dokumentů

**Filipovy use cases:**
1. Konsolidace dat účastníků FAIL z více zdrojů
2. Porovnávání verzí knihy (česká vs. anglická)
3. Due diligence - analýza firem, e-mailů, WhatsApp konverzací

**Pro tip - Plan mode:**
> "Čím dál raději používám ten Plan mode. Nejdřív dám ty data, udělám tu strategickou část - brainstorming - a on mi udělá analýzu. Potom řeknu postav to a spust ten skript."

**Klávesová zkratka:** `Ctrl+Shift+V` pro zobrazení Markdown v hezké podobě

---

#### Claude Code
**Účel:** Příkazový řádek pro pokročilou práci s AI bez nutnosti programátorského prostředí.

**Klíčové funkce:**
- Dostupný i přes web (bez instalace)
- Práce se soubory na počítači
- Generování a spouštění skriptů
- Vysoká spolehlivost pro datovou analýzu

**Nejlepší pro:**
- Uživatele bez přístupu ke Cursoru
- Korporátní prostředí s omezenými nástroji
- Pokročilé datové analýzy

**Filipovo doporučení:**
> "Pro mě pokud nemáte přístup ke Cursoru, tak dneska asi jedinej nástroj, který vás může přiblížit i přes web, je Claude Code."

---

#### OpenRouter
**Účel:** Jednotné API pro přístup k 500+ AI modelům přes jeden klíč.

**Jak funguje:**
- Registrace a vložení kreditu (např. $10)
- Jeden API klíč pro všechny modely
- Přístup ke Claude, GPT, Gemini, Llama a dalším
- Možnost nechat si doporučit nejlepší model pro úkol

**Nejlepší pro:**
- Vývojáře a power users
- Testování různých modelů
- Napojení na vlastní aplikace

---

### Nástroje pro specifické use cases

#### Google Apps Script
**Účel:** Automatizace a skriptování v Google Workspace prostředí.

**Příklad použití (Ediška):**
Stáhla příspěvky z LinkedInu a Facebooku → vytvořila knihovny na disku → nastavila Apps Script → každý týden dostává Gmail s návrhem 3 příspěvků.

**Nejlepší pro:**
- Automatizace v Google ekosystému
- Pravidelné generování obsahu
- Propojení Google služeb

---

#### NotebookLM (Google)
**Účel:** Analýza dokumentů a deep research s AI.

**Klíčové funkce:**
- Deep Research pro nalezení best practices
- Zpracování YouTube videí (extrakce otázek z podcastů)
- Analýza více dokumentů najednou

**Filipův workflow:**
1. Deep Research na téma (např. "nejpopulárnější způsoby instrukcí pro Cursor")
2. Zpracování zdrojů v NotebookLM
3. Export do Claude pro vylepšení vlastního přístupu

---

#### Keboola
**Účel:** Česká platforma pro pokročilou datovou analytiku s "talk to data" přístupem.

**Klíčové funkce:**
- Napojení na firemní databáze
- Přirozený jazyk pro dotazování
- Automatické vytváření dashboardů
- Připravenost pro AI agenty

**Reference:**
- Investice od Tomáše Čupra (Rohlík)
- Používá Rohlík, Česká spořitelna

**Filipovo hodnocení:**
> "Všem, kteří to myslí s daty a s analýzou a s reportingem vážně, by se měli potkat s Keboolou. Je to podle mě nejen budoucnost datové analytiky, ale hlavně agentů."

---

### Lokální modely pro citlivá data

#### Ollama / LM Studio
**Účel:** Spouštění AI modelů lokálně bez odesílání dat do cloudu.

**Kdy použít:**
- Citlivá firemní data
- Korporátní prostředí s přísnými pravidly
- Velké objemy dat k zpracování (např. 500k e-mailů)

**Požadavky:**
- Silný hardware (nejlepší modely 243GB)
- Menší modely od 5GB

**Varování:**
> "Kvalita je fakt někde jinde a musí se to ladit. Nicméně pro některé firmy tohle bude cesta."

---

## Workflow a procesy

### Export → AI → Kontrola workflow
**Cíl:** Efektivní zpracování dat z jakéhokoliv systému pomocí AI.

**Kroky:**
1. **Export dat** z původního systému (CSV, Excel, nebo screenshot)
2. **Příprava dat** - vyčistit, omezit na relevantní sloupce
3. **Nahrání do AI** - chatbot nebo skriptovací nástroj
4. **Analýza/transformace** pomocí promptu
5. **Vizuální kontrola** výstupu
6. **Import zpět** do cílového systému

**Příklad (Tomáš):**
Potřeba seznamu uživatelů z ChatGPT Teams (bez exportu):
1. Screenshot stránek pomocí Snagit
2. Nahrání do AI (Claude fungoval lépe než GPT)
3. Extrakce do CSV
4. Použití pro další analýzu

**Varování:**
> "GPT ten převod udělá fakt mizerně. Je schopen v půlce se zaseknout nebo třeba jednu e-mailovou adresu vynechá. Když to hodím do Claude, tak to udělá vždycky správně."

---

### CRM čištění a obohacování
**Cíl:** Vyčistit a obohatit kontaktní databázi pomocí AI.

**Martinův workflow (Cursor + API):**
1. Export dat z CRM (CSV)
2. Definice agenta s promptem pro obohacení
3. Cursor stahuje info o firmách z webů
4. Generování popisu firmy (100 znaků)
5. Identifikace segmentu (např. OLMGS)
6. Export zpět do CRM jako CSV update

**Alternativa bez skriptů (generátor oslovení):**
1. Export jmen z CRM
2. Použití online služby "generátor oslovení"
3. Vizuální kontrola - seřadit podle posledního písmene příjmení
4. Ruční opravy problematických případů
5. Import zpět

**Pro tip pro kontrolu:**
> "Seřadím podle posledního písmene, abych věděl, jestli je to A dlouhé - což je žena - nebo U s kroužkem. Pak se to dá velmi jednoduše vizuálně zkontrolovat."

---

### Konsolidace dat z více zdrojů
**Cíl:** Spojit data z různých systémů do jednoho přehledu.

**Filipův workflow pro FAIL účastníky:**

**Zdrojová data:**
- Airtable (registrace)
- Typeform (vstupní dotazník)
- Slido (aktivita během workshopů)
- E-maily (dotazy)

**Struktura projektu:**
```
FAIL/
├── účastníci/
│   ├── zdrojová_data/
│   │   ├── registrace.csv
│   │   ├── dotazy.csv
│   │   └── slido_export.csv
│   └── konsolidovaná/
│       ├── spojená_tabulka.csv
│       └── karty/
├── content/
├── operations/
└── media/
```

**Proces:**
1. Export dat z jednotlivých zdrojů
2. Cursor skript pro spojení (matching přes e-mail)
3. Řešení problémů (dva e-maily u jednoho člověka, změna příjmení)
4. Vytvoření "karet" - profil každého účastníka
5. Rozdělení do tiers podle aktivity

**Výstup - karta účastníka:**
- Příběhový popis osoby
- Co ho zajímá
- Úroveň aktivity (Tier 1/2/3)
- Historie interakcí

---

### Analýza financí (domácí úkol)
**Cíl:** Identifikovat příležitosti k úsporám a efektivitě.

**Kroky:**
1. Export pohybů z bankovního účtu (CSV)
2. Vyčištění - odstranit velké faktury, příchozí platby
3. Nahrání do AI (doporučen Claude Code nebo Cursor)
4. Identifikace digitálních služeb a subscriptions
5. Vizualizace výdajů
6. Hledání duplicit a zbytečných služeb
7. Kontrola Black Friday slev

**Tipy pro lepší výsledky:**
- Čím méně dat, tím přesnější analýza
- Vyladit prompt iterativně
- Namátková kontrola výsledků
- Pro 100% spolehlivost použít skriptovací nástroje

---

## Tipy a best practices

### Práce s chatboty

**Dělej:**
- Zapni reasoning mode (thinking) pro analýzu dat
- Začni obecně: "Řekni mi, co je v těchto datech"
- Nebo se ptej konkrétně na specifické metriky
- Vyčisti data před nahráním (méně = lépe)
- Kontroluj výstupy vizuálně

**Nedělej:**
- Nenahrávej tisíce řádků do běžného chatbota
- Nespoléhej na 100% přesnost bez kontroly
- Nemíchej různé typy dat v jednom souboru

---

### Práce s Cursorem/Claude Code

**Dělej:**
- Používej Plan mode pro komplexní úkoly
- Definuj cíl i na konci promptu
- Dávej příklady ideálních výstupů
- Iteruj a dávej zpětnou vazbu
- Nech si generovat HTML přehledy pro vizuální kontrolu

**Nedělej:**
- Nespouštěj skripty bez porozumění co dělají
- Nepřeskakuj testování na malém vzorku

**Pro tip - zkracování promptů:**
> "Megaprompt je dobré nechat pak zkrátit. AI dokáže uspořit hodně času. Jenom oslovení tam bylo v 67 tokenech a já jsem to nechal zpracovat do 8 tokenů."

---

### Dokumentace a standardy (vibecoding)

**Ondřův přístup pro konzistentní kód:**
1. Vytvořit `code_style.md` s dokumentací standardů
2. Popsat formátování, konvence, používané knihovny
3. Při každém promptu odkázat na tento soubor
4. AI pak generuje konzistentní kód

**Pro tip:**
> "Nechal jsem Claude, aby se podíval, jak vývojáři standardně dokumentují svůj styl kódování. On mi to hezky vygeneroval a potom automaticky vidí ten code style."

---

### Kombinace nástrojů

**Best practice workflow:**
1. **NotebookLM** - Deep Research na téma, nalezení best practices
2. **Export** - zpracované zdroje
3. **Claude/GPT** - vylepšení vlastního přístupu na základě výzkumu
4. **Cursor** - implementace a automatizace

**Příklad (příprava na podcast):**
1. NotebookLM → analýza vlastních předchozích podcastů z YouTube
2. Claude → návrh zlepšení otázek
3. Import "karty" hosta → personalizace otázek
4. Výsledek: perfektně připravený rozhovor

---

## Strategie adopce a implementace

### Datové hekatony / sprinty
**Kontext:** Filip doporučuje pro čištění nepořádku v datech, ideálně v lednu.

**Konkrétní příklad:**
> "Pokud si myslíte, že nemáte kvalitní data - kontakty na zákazníky, cokoliv - je nejlepší příležitost udělat si třeba v lednu, kdy je trošku volno, čištění sprint, hekaton, když zkusíte ta data za pomocí AI vyčistit, připravit."

**Jak to funguje:**
- Vyhradit pevný časový blok (např. 1-2 dny)
- Definovat konkrétní cíl (vyčistit CRM, sjednotit kontakty)
- Použít AI nástroje pro urychlení
- Pracovat v týmu pro větší momentum

**Proč to funguje:**
Koncentrovaná práce na nudném úkolu, AI výrazně zkracuje čas, definovaný konec motivuje k dokončení.

**Podobné aktivity se stejným principem:**
1. **Migration sprint** - přesun dat do nového systému v rámci jednoho týdne
2. **Documentation day** - den věnovaný dokumentaci procesů a znalostí
3. **Automation week** - týden zaměřený na automatizaci opakujících se úkolů
4. **Data quality audit** - pravidelný (čtvrtletní) audit kvality dat

**Nejlepší pro:**
- Týmy s historickým "dluhem" v datech
- Přechod na nové systémy
- Přípravu na AI agenty

**Úskalí:**
- Bez jasného cíle se může rozplynout
- Potřeba leadership buy-in pro uvolnění času

---

### Admin parties
**Kontext:** Společné řešení nudných administrativních úkolů s přáteli nebo kolegy.

**Konkrétní příklad:**
> "Někdo sdílel super věc, že to dělá jako party s přáteli. Pozvete pár přátel a společně uděláte ty otravný věci - pojďme se podívat kolik platíme za energie, za nějaké zbytečné náklady. Uděláte to v pátek večer, sedíte, bavíte se, otevřete si u toho nějaký dobrý čaj nebo víno."

**Jak to funguje:**
- Pozvat 2-5 lidí se stejným "dluhem"
- Každý pracuje na svém, ale společně
- Sdílení objevů a tipů
- Neformální atmosféra

**Proč to funguje:**
Sociální tlak a podpora, sdílení know-how, z nudné práce se stává událost.

**Podobné aktivity se stejným principem:**
1. **Coworking sessions** - pravidelné online sessions kde každý pracuje na svém
2. **Accountability pairs** - dvojice, která si vzájemně hlásí pokrok
3. **Team cleanup hour** - hodina týdně na "úklid" (e-maily, soubory, data)
4. **Friday wrap-up** - páteční hodinka na uzavření týdenních restů

**Nejlepší pro:**
- Jednotlivce, kteří prokrastinují nudné úkoly
- Malé týmy nebo skupiny přátel
- Úkoly, které nevyžadují deep focus

---

### Show & Tell sessions
**Kontext:** Sdílení objevů a best practices v týmu (odvozeno z formátu FAIL workshopů).

**Konkrétní příklad:**
Na workshopu účastníci sdíleli své use cases: Karel ukázal Copilot v Excelu, Martin workflow pro CRM, Ondra dokumentaci kódu, Tomáš trik se screenshoty.

**Jak to funguje:**
- Pravidelné setkání (týdenní/měsíční)
- Jeden člověk prezentuje konkrétní use case
- Sdílení obrazovky, live demo
- Q&A a diskuze

**Proč to funguje:**
Peer learning, konkrétní příklady inspirují více než teorie, budování společné knowledge base.

**Podobné aktivity se stejným principem:**
1. **Tool rotation** - každý měsíc tým zkouší jeden nový nástroj společně
2. **Failure Friday** - sdílení co nefungovalo a proč
3. **Prompt library review** - společná revize a vylepšování promptů
4. **AI office hours** - pravidelná hodina, kdy "AI champion" pomáhá ostatním

**Nejlepší pro:**
- Týmy 5-20 lidí
- Mix skill levels
- Organizace budující AI kulturu

---

### Vzor jako kontext (show don't describe)
**Kontext:** Místo popisu požadovaného výstupu ukázat ideální příklad.

**Konkrétní příklad:**
> "Potřebuji z Excelu seznam parcel vytvořit stejný výstup, jako je v Wordu, který jsem tam nahrál. Výsledek měl za tři minuty. Do té doby to musel dělat měsíc."

**Jak to funguje:**
- Připravit vzorový výstup (dokument, formát, struktura)
- Nahrát vzor společně s daty
- Říct "udělej to stejně jako vzor"
- AI replikuje formát na nová data

**Proč to funguje:**
AI lépe pochopí vizuální vzor než textový popis, eliminuje nedorozumění, rychlejší iterace.

**Podobné aktivity se stejným principem:**
1. **Template library** - sbírka vzorových dokumentů pro různé účely
2. **Before/after examples** - ukázky transformací pro trénink AI
3. **Style guides** - dokumentace vizuálního a obsahového stylu
4. **Golden samples** - ideální příklady pro každý typ výstupu

**Nejlepší pro:**
- Opakující se formáty dokumentů
- Migrace mezi systémy
- Standardizace výstupů v týmu

---

## Příběhy úspěchu účastníků

### Automatizace reportu o incidentech (Mirek)
**Kdo:** Mirek, IT/operations

**Výzva:** Manuální vytváření reportů o provozních incidentech z Teams konverzací.

**Řešení:** Sestavil asistenta, který analyzuje Teams konverzace a generuje strukturovaný report.

**Použité nástroje:** AI asistent (pravděpodobně Claude nebo GPT)

**Výsledek:**
- Automatické sestavení časové osy průběhu
- Identifikace příčin
- Návrh poučení
- 80% úspora času, ruční doladění stále potřeba

**Klíčový poznatek:**
> "O tom to je - nehledejme 100%, hledejme úspory nebo zlepšení v jakékoliv části procesu."

---

### 80 slajdů z Knowledge Base (anonymní účastnice)
**Kdo:** Účastnice FAIL

**Výzva:** Vytvoření rozsáhlé prezentace z interní knowledge base.

**Řešení:** Použila Cursor pro generování 80 slajdů v Markdownu, následně Claude pro HTML návrh, finální doladění.

**Použité nástroje:** Cursor, Claude, HTML export

**Výsledek:**
> "Neskutečná úspora času. Stoprocentně bych to neměla ani obsahově tak dobré a už vůbec ne graficky."

**Klíčový poznatek:** Iterativní přístup - generování → návrh designu → doladění.

---

### Výběr asistentky podle Dana Martela (anonymní účastník)
**Kdo:** Účastník FAIL hledající asistentku

**Výzva:** Systematicky vyhodnotit kandidáty na pozici asistentky.

**Řešení:** Vzal návod Dana Martela (jak vybírá asistentku) + vlastní zadání → dal do Cursoru → AI obodoval kandidáty.

**Použité nástroje:** Cursor

**Výsledek:** Strukturované hodnocení kandidátů podle osvědčeného frameworku.

**Adopční lekce:**
> "Tohle je geniální. Vidím video, jak někdo pracuje lépe, vezmu framework a řeknu, jak bych na jeho základě mohl zlepšit ten svůj."

---

### Automatické návrhy příspěvků (Ediška)
**Kdo:** Ediška, content creator

**Výzva:** Pravidelně vytvářet příspěvky na sociální sítě.

**Řešení:**
1. Stáhla historické příspěvky z LinkedIn a Facebooku
2. Vytvořila knihovny na Google Drive
3. Nastavila Google Apps Script automatizaci

**Použité nástroje:** Google Drive, Google Apps Script, Gmail

**Výsledek:** Každý týden dostává e-mail s návrhem 3 příspěvků k úpravě.

**Klíčový poznatek:**
> "Je to boží. Skvělé propojení skriptovacího nástroje."

---

### Obohacení CRM dat (Martin)
**Kdo:** Martin, sales/marketing

**Výzva:** Obohacení tisíců firemních kontaktů o aktuální informace.

**Řešení:** Cursor + agent pro stahování dat z webů firem, generování popisů, kategorizace segmentů.

**Použité nástroje:** Cursor, API pro web scraping, CSV export/import

**Výsledek:** Automatické obohacení CRM o:
- Popis firmy (100 znaků)
- Identifikace segmentu
- Aktuální informace z webu

**Pro tip:**
> "Výsledek možná bude škaredý, ale jde o to, že získávám zpětně CSV, které je schopné updatovat zpátky do CRM."

---

### Inteligentní zdroje dat pro aplikaci (Ondra)
**Kdo:** Ondra, vývojář

**Výzva:** Udržovat aktuální zdroje externích dat (kurzy, statistiky) bez manuální práce.

**Řešení:** Vytvořil systém s:
- Definicí zdroje (URL, popis, instrukce pro AI)
- Automatickým stahováním
- AI fallback pro nalezení nového zdroje když původní nefunguje

**Použité nástroje:** Claude Code, vlastní aplikace

**Výsledek:** Aplikace automaticky aktualizuje zdroje dat, při selhání se AI zeptá a najde alternativu.

**Klíčový poznatek:**
> "Claude mě pochválil, jak se mu to hezky navrhl. Je to příjemné - ten feedback, pracuji a řekne 'to je super, tenhle tvůj nápad'."

---

### Analýza parcel pro kraj (Karel)
**Kdo:** Karel, veřejná správa

**Výzva:** Transformovat Excel s 2000 řádky a 30 sloupci parcel do specifického Word formátu.

**Řešení:**
1. Vybrat pouze 3 relevantní sloupce
2. Nahrát vzorový Word dokument
3. Prompt: "Potřebuji z Excelu seznam parcel vytvořit stejný výstup jako je v Wordu"

**Použité nástroje:** ChatGPT nebo Claude

**Výsledek:** 3 minuty místo měsíce práce.

**Adopční lekce:**
> "Poradil jsem kolegovi - z těch 30 sloupců vyber jenom ty tři, které potřebuješ, a rovnou tam nahraj ten Word, jak to má vypadat."

---

## Zdroje a reference

### Zmíněné nástroje

**Databáze a tabulky:**
- Airtable: https://airtable.com - databáze pro běžné uživatele
- Microsoft Lists: součást Microsoft 365
- Tabidoo: alternativa k Airtable
- Google Sheets: tabulky s Gemini AI

**AI nástroje:**
- Claude: https://claude.ai - nejlepší pro datovou analýzu
- Claude Code: příkazový řádek pro pokročilou práci
- Cursor: https://cursor.sh - AI-powered IDE
- ChatGPT: https://chat.openai.com
- Gemini: https://gemini.google.com
- Copilot: https://copilot.microsoft.com

**Specializované datové nástroje:**
- Julius AI: https://julius.ai - 33% sleva na Black Friday
- Keboola: https://www.keboola.com - český startup pro "talk to data"
- OpenRouter: https://openrouter.ai - jednotné API pro 500+ modelů
- NotebookLM: https://notebooklm.google.com - deep research

**Lokální modely:**
- Ollama: https://ollama.com
- LM Studio: https://lmstudio.ai

**Utility:**
- Snagit: screenshoty a scrolling capture
- Google Takeout: export dat z Google služeb
- Google Apps Script: automatizace v Google Workspace

### Lidé k sledování

**Miss Excel (Kat Norton):**
- LinkedIn: sdílí tipy na tabulky a Excel
- Skvělé pro začátečníky i pokročilé

**Petr Šimeček (Keboola):**
- LinkedIn a blog
- Články o budoucnosti datové analytiky

**Ramit Sethi:**
- "I Will Teach You to Be Rich"
- Osobní finance a finanční gramotnost

---

## Quick reference

### Nejdůležitější poznatky

1. **Znát limity nástrojů:** Chatboty pro stovky řádků, skripty pro tisíce. Toto je kritická znalost, kterou by měl mít každý.

2. **Context > Prompt:** Kvalitní data a vzory jsou důležitější než perfektní formulace instrukce.

3. **Iteruj a kontroluj:** AI není 100% spolehlivá. Vždy vizuálně kontrolovat, testovat na malém vzorku.

4. **Claude Code/Cursor = game changer:** Pro spolehlivou práci s většími daty jsou skriptovací nástroje nezbytné.

5. **Data jsou všude:** Největší hodnota může být v konverzacích, e-mailech, nestrukturovaných datech.

### Action items pro začátečníky

1. **Tento týden:** Vyexportuj data z jednoho systému (banka, CRM, e-mail) a analyzuj v chatbotu
2. **Příští týden:** Vyzkoušej Airtable nebo Microsoft Lists na jednom use case
3. **Tento měsíc:** Udělej analýzu osobních/firemních financí (domácí úkol)
4. **Q1:** Naplánuj datový hekaton pro vyčištění jedné oblasti

### Běžné chyby

| Chyba | Jak se jí vyhnout |
|-------|-------------------|
| Nahrání obrovské tabulky do chatbota | Použít Cursor/Claude Code nebo rozdělit na části |
| Slepá důvěra ve výstup AI | Vždy vizuální kontrola, namátková verifikace |
| Popis místo vzoru | Ukázat ideální výstup jako příklad |
| Čekání na dokonalá data | Začít s tím co máte, iterovat |
| Práce v silosu | Sdílet objevy v týmu, Show & Tell sessions |

### Pro týmy a organizace

**Okamžitě:**
- Identifikovat "AI championa" v týmu
- Zjistit jaké nástroje jsou dostupné (Copilot, Claude, GitHub Copilot)
- Začít sdílet best practices

**Krátkodobě:**
- Zorganizovat první Show & Tell session
- Vytvořit sdílenou knihovnu promptů
- Naplánovat datový hekaton

**Střednědobě:**
- Vyhodnotit nástroje jako Airtable pro standardizaci
- Prozkoumat možnosti Kebooly pro pokročilou analytiku
- Připravit data pro AI agenty

---

## Adoption framework pro práci s daty

### Filipův přístup k adopci

**Potřebné změny mindsetu:**
- "Nemáme kvalitní data" není výmluva, ale příležitost
- Data patří biznisu, ne datovému oddělení
- 80% s kontrolou > 100% manuálně

**Praktická implementace:**
1. Znát možnosti nástrojů (tabulky pro jednoduché, skripty pro komplexní)
2. Začít s jednoduchým use case
3. Iterovat a budovat důvěru
4. Postupně automatizovat opakující se úkoly

**Budování návyků:**
- Export → AI → Kontrola jako standardní workflow
- Pravidelné Show & Tell pro sdílení
- Dokumentace promptů a postupů

**Týmové aktivity:**
- Datové hekatony pro čištění
- Admin parties pro nudné úkoly
- AI office hours pro podporu

### Domácí úkol modulu

**Zadání:** Analyzovat finance (osobní, domácnosti, nebo týmu)

**Cíl:**
- Identifikovat příležitosti k úsporám
- Najít duplicitní nebo zbytečné služby
- Využít Black Friday slevy
- Případně identifikovat investiční příležitosti

**Hodnocení:**
- Kreativita přístupu
- Využití AI nástrojů
- Případné zapojení dalších lidí

**Bonus:** Udělat to jako "admin party" s přáteli nebo rodinou.
