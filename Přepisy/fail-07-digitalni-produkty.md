# Stavění digitálních produktů s AI

## Klíčové koncepty & frameworky

### Digitální produkty v kontextu AI

**Definice:** Cokoliv digitálního, co řeší problém nebo automatizuje práci - aplikace, webové stránky, formuláře, automatizace, skripty.

**Dvě roviny využití AI:**

1. **AI jako nástroj pro stavbu** - AI pomáhá s diskuzí o designu, zadáním, psaním kódu nebo postavením celého produktu
2. **AI uvnitř produktu** - produkt využívá AI pro koncové uživatele (chatboti, převod dokumentů, automatické odpovědi)

---

### Citizen developer (Občanský vývojář)

**Definice:** Člověk pracující na počítači, který si může postavit digitální projekt nebo produkt bez nutnosti být programátorem.

**Tři úrovně vývoje:**
- **No-Code:** Skládání aplikací jako kostičky z lega, bez jakéhokoliv kódu
- **Low-Code:** Občasná customizace s minimálním množstvím kódu
- **AI-powered development:** AI programuje za uživatele

---

### Vibecoding

**Definice:** Nový způsob programování, kdy neprogramátoři programují za pomoci AI. Termín zavedl Andrej Karpathy (spoluzakladatel OpenAI).

**Princip:** Dáváte AI směřování a cíl (vibe), AI programuje za vás. V extrémní podobě "zapomenete úplně na kód" a akceptujete všechny návrhy AI.

**Klíčový citát:**
> "I proto bychom se měli urychleně začít připravovat na svět bez programátorů, ve kterém budou programátory úplně všichni."

---

### Just-in-time software

**Definice:** Software vytvořený přesně v momentě, kdy ho potřebujete, pro konkrétní účel.

**Filosofie:** Místo toho, abyste využili AI k provedení úkolu, necháte AI naprogramovat řešení, které vám s úkolem pomůže.

**Příklad:** Místo "přepiš mi 50 dokumentů do textu" → "naprogramuj nástroj, který mi bude převádět dokumenty do textu"

---

### Rizikové zóny vibeckodingu

**Zelená zóna (Doporučeno):**
- Prototyping - návrhy aplikací bez napojení na systémy
- Interní nástroje - jednoduché jednorázové nástroje
- Marketingové experimenty - webové stránky na projekty, registrační weby
- **Není potřeba dohled, naučíte se za pár dní nebo týden**

**Žlutá zóna (Opatrně):**
- Aplikace nabízené zákazníkům
- Aplikace s platbami
- Interní nástroje napojené na citlivá data
- Projekty, které začínají narůstat
- **Potřeba minimálně vědět, co děláte, nebo mít někoho na kontrolu**

**Červená zóna (Nedoporučeno bez expertízy):**
- Kritické systémy firmy
- Aplikace s velmi citlivými daty
- Komplexní projekty vyvíjené 10-15 let
- Systémy kde výpadek = ztráta zákazníků, reputace, finanční škoda, porušení zákona

---

## Nástroje & technologie

### Kategorie No-Code/Low-Code nástrojů

#### 1. Databáze

**Nástroje:** Airtable, Notion databáze, Microsoft Lists

**Účel:** Centralizace dat s více formáty (soubory, datumy, možnosti) a další práce s nimi.

**Příklady použití:**
- Evidence uchazečů o zaměstnání
- Sledování milníků v projektu
- Evidence knih v domácí knihovně

**Klíčový poznatek:** Často slouží jako základ pro automatizace - moderní nástroje nahrazují původní komplexní databázové systémy.

---

#### 2. Interní systémy

**Nástroje:** Tabidoo (ČR), Retool (svět), Microsoft Power Apps

**Účel:** Tvorba interních aplikací bez pokročilého vývoje - skládání komponent.

**Výhoda:** Rychlejší cesta od nápadu k realizaci, flexibilnější úpravy bez čekání na dodavatele nebo IT.

---

#### 3. Webové stránky

**Nástroje:** Webflow, Framer, Solidpixels

**Účel:** Sestavení internetových stránek z předpřipravených nebo custom šablon s redakčním systémem.

**Kdy použít:** Pro weby vyžadující správu a vyhledatelnost (ne pro jednorázové akce).

---

#### 4. Aplikace

**Nástroje:** Softr, Glide, Bubble

**Účel:** Tvorba webových, desktopových i mobilních aplikací bez programování.

**Jak funguje:** Napojení na databázi (např. Notion, tabulka) a sestavení aplikace podle požadavků.

**Tip:** Podívejte se na šablony a galerie existujících aplikací - nejlepší řešení pro pokročilejší systémy na sběr a zpracování dat.

---

#### 5. Chatboti

**Nástroje:** Specializované platformy pro tvorbu chatbotů

**Účel:** Vytvoření chatbota na míru bez trénování AI - nahrání znalostí, webových stránek nebo firemních dokumentů.

**Využití:**
- Interní: Odpovědi zaměstnancům na dotazy pro HR
- Externí: Odpovědi zákazníkům

**Evoluce:** Text → Voicebot → Video avatar

**Omezení:** Pro velké firmy s velkým množstvím dat potřeba komplexnější řešení.

**Hodnota:** Ideální pro prototyping a první verze - vyzkoušet, jak chatboti na vašich datech fungují.

---

#### 6. Formuláře

**Nástroje:** Typeform, Tally

**Účel:** Sběr dat s pokročilými funkcemi - logické větvení, video, platby.

**Příklady použití:**
- Sběr zpětné vazby
- Registrace na workshopy
- Příprava cenových nabídek
- Kompletní landing page s formulářem

**Pokročilé funkce Typeform:** Video dotazníky - otázky i odpovědi ve formě videa/hlasu.

---

### Nástroje pro vibecoding

#### Pro všechny (začátečníci i pokročilí)

**Příprava a konzultace:**
- ChatGPT, Claude, Gemini
- ChatPRD (specializovaný)

**Použití:** Nahrání dokumentů, přepisů z hovorů → vytvoření strukturovaného zadání pro vývojáře.

---

**Jednoduché aplikace v chatbotech:**

**ChatGPT Canvas / Claude Artifacts**

**Ideální pro:** Interaktivní grafy, kalkulačky, jednoduché hry, klikací prezentace.

**Jak použít:** 
- ChatGPT: "naprogramuj mi canvas"
- Claude: "naprogramuj mi artefakt"

**Bonus v Claude Pro:** Možnost vytvořit aplikaci s AI (např. aplikace na učení jazyka s vyhodnocováním odpovědí).

---

**Komplexnější aplikace:**

**Replit, Lovable, Bolt**
- Webové stránky a aplikace
- Vlastní databáze
- Přihlašování uživatelů
- AI funkcionality

**Google AI Studio, Google Opal**
- Volání AI modelů přes API
- Využití integrované AI

---

#### Spouštění skriptů a automatizací

**Lokální nástroje:**
- Mac: Terminál
- Windows: PowerShell, Task Scheduler

**Tip:** Pokud neumíte psát skripty, nechte si je vygenerovat v ChatGPT nebo Claude.

---

**Google Apps Script**

**Účel:** Automatizace v rámci Google ekosystému.

**Ideální jako:** Učící nástroj - vytvoření skriptu v AI, zkopírování do Google tabulky, automatizace, export.

---

**Cursor**

**Co to je:** Vývojové prostředí s integrovanou AI funkcí - funguje jako agent.

**Proč je to nástroj #1:**
- Zadám požadavek → AI programuje
- Stavba aplikací
- Úprava hotových skriptů
- Spouštění skriptů pro analýzu dat, úklid souborů, předělávání textů
- Vše v jednom prostředí - nemusím řešit kam skript dát a jak ho spustit

**Klíčový poznatek:** 
> "Toto je budoucnost znalostní práce - kdokoliv, kdo více pracuje s daty nebo potřebuje automatizovat, bude tyto nástroje ovládat."

**Dostupnost:** Existují i verze pro korporátní svět.

---

**Webové spouštění skriptů:**

**Google Colab, Jupyter Notebook, DeepNote**

**Účel:** Analýza dat, generování reportů, spouštění skriptů bez lokální instalace.

**Výhoda:** Možnost učit se pracovat s daty + využití AI pro generování skriptů.

---

#### Pro pokročilé

**Databáze a ukládání dat:** Supabase, Firebase, PlanetScale

**Autentifikace a napojení:** Auth0, Clerk

**Verzování a úložiště kódu:** GitHub, GitLab

**Deployment:** Vercel, Netlify, Railway

---

## Workflow & procesy

### Workflow pro první vibecoding projekt

**Cíl:** Vytvořit první funkční aplikaci nebo skript za pomoci AI.

**Kroky:**

1. **Promyslet problém**
   - Identifikujte reálný problém, který řešíte
   - Nedělejte to "jen tak" - stavte na skutečné potřebě

2. **Konzultace s AI**
   - Otevřete ChatGPT/Claude/Gemini
   - Nahrajte relevantní dokumenty nebo přepisy z hovorů
   - Diskutujte o tom, jak by řešení mohlo vypadat

3. **Vytvoření zadání**
   - Nechte AI vytvořit strukturované zadání
   - Zadání by mělo obsahovat jasné požadavky a funkce

4. **Výběr nástroje**
   - Pro jednoduché věci: ChatGPT Canvas / Claude Artifacts
   - Pro komplexnější: Replit, Lovable, Bolt, Google AI Studio
   - Pro skripty: Cursor, Google Apps Script

5. **Experimentování**
   - Vyzkoušejte 2-3 nástroje (většina má free tier)
   - Porovnejte výsledky stejného zadání v různých nástrojích

**Tip:** Pokud nevíte, jaký nástroj zvolit, nahrajte přehled nástrojů do AI a nechte si poradit.

---

### Workflow pro týmovou adopci vibeckodingu

**Cíl:** Zavést vibecoding do týmu nebo organizace.

**Kroky:**

1. **Diskuze o povědomí**
   - Zjistěte, kdo v týmu vibecoding zná a používá
   - Identifikujte early adopters

2. **Mapování příležitostí**
   - Kde by vibecoding mohl pomoci?
   - Prototyping, pilotování řešení, automatizace

3. **První společný projekt**
   - Vyberte jednoduchý use case ze zelené zóny
   - Společně projděte celý workflow

4. **Hackathon nebo workshop**
   - Organizujte setkání, kde každý zkusí něco navibeckodovat
   - Sdílení výsledků a learnings

---

## Příklady využití vibeckodingu

### Skripty pro automatizaci

**Export dat z tabulky:**
- Problém: Data z každého řádku tabulky exportovat do jednotlivých souborů
- Řešení: Skript v Cursoru, který to automaticky rozdělí
- Use case: Příprava dat pro nahrání do AI

**Konsolidace dat:**
- Problém: Spojit data z pěti tabulek
- Řešení: AI analyzuje strukturu, najde společné prvky, naprogramuje skript pro propojení

**Napojení na API:**
- Problém: 50 dokumentů převést do textu
- Řešení: Zjistit API AI nástroje, napojit se přes vibecoding, zaplatit 2-3 dolary
- Rozšíření: Vytvořit tisíc videí avataru v Heygenu přes API

---

### Mikroaplikace

**Definice:** Jednoúčelové webové nástroje pro konkrétní úkol.

**Příklady:**
- Kalkulačka cenových nabídek
- Nástroj pro převod audia na text
- Interní dashboard pro tým

**Výhoda:** Jednorázové, jen pro mě, nemusím řešit udržitelnost nebo prodej.

---

### Weby a větší aplikace

**Možnosti:** Kompletně navibeckodované startupy existují.

**Varování:** Přistupovat opatrně kvůli rizikům udržitelnosti, bezpečnosti a "iluze hotového projektu".

---

## Rizika vibeckodingu

### Bezpečnost
- Únik citlivých dat, hesel nebo kódu
- Problémy uživatelům při nedostatečném zabezpečení

### Škálovatelnost
- Prototyp funguje skvěle
- Při větším množství uživatelů → pomalost, sekání

### Údržba
- AI píše hodně kódu
- Bez znalostí vzniká "balast"
- Nikdo se v tom nezorientuje

### Iluze hotového projektu
- Vypadá to jako 90% hotovo
- Posledních 10% (databáze, škálování, přihlašování, bezpečnost) = většina práce
- Nutnost drahého přepisování

### Právní rizika
- Porušení předpisů
- Závislost na jedné platformě
- Vysoké náklady za každou úpravu

---

## Cílové skupiny pro vibecoding

### 1. Netechničtí profesionálové
- Zakladatelé, manažeři, znalostní/kreativní pracovníci
- **Cíl:** Rychle ověřit nápad, vytvořit automatizaci, usnadnit práci
- **Motivace:** Zjistit, jestli projekt dává smysl před investicí času/financí

### 2. Produktoví lidé
- Odpovědní za vývoj produktu nebo služby
- **Cíl:** Rychle experimentovat, přivádět funkce v život, testovat nápady
- **Motivace:** Ukazovat nápady na reálných prototypech, investovat čas vývojářů až do ověřených věcí

### 3. Provozní týmy
- Marketing, personalisté, obchod
- **Cíl:** Automatizovat část práce bez IT oddělení
- **Příklady:** 
  - Marketing: Web na akci za pár hodin
  - HR: Dotazník pro zaměstnance

### 4. Firemní lídři
- **Cíl:** Analyzovat data, automatizovat práci
- **Motivace:** Jednodušší než prosit někoho jiného
- **Bonus:** Zjistit, co všechno AI dnes dokáže

---

## Strategie adopce & implementace

### Postupné škálování podle rizikových zón

**Kontext:** Filip rozděluje vibecoding projekty do tří zón podle míry rizika.

**Konkrétní přístup:**

1. **Začněte v zelené zóně**
   - Prototypy, interní nástroje, marketingové experimenty
   - Není potřeba dohled
   - Naučíte se za pár dní

2. **Postupte do žluté zóny**
   - Až když rozumíte základům
   - Nebo máte někoho na kontrolu
   - Citlivá data, platící zákazníci

3. **Červená zóna pouze s expertízou**
   - Kritické systémy
   - Komplexní projekty
   - Musíte vědět, co děláte

**Proč to funguje:** Bezpečné učení bez rizika škod, postupné budování sebevědomí a kompetencí.

**Podobné aktivity se stejným principem:**

1. **Sandbox projekty** - Vytvořte "bezpečné hřiště" kde tým může experimentovat bez dopadu na produkci
2. **Graduální odpovědnost** - Začněte s osobními projekty → týmové interní → zákaznické
3. **Peer review systém** - Než projekt přejde do vyšší zóny, někdo zkušenější ho zkontroluje
4. **Dokumentace learnings** - Každý projekt v zelené zóně zdokumentujte pro budoucí referenci

**Nejlepší pro:**
- Organizace začínající s vibeckodingem
- Týmy bez předchozích zkušeností s vývojem
- Prostředí s důrazem na bezpečnost a compliance

**Úskalí:**
- Lidé mohou být netrpěliví a přeskočit zóny
- Hranice mezi zónami nejsou vždy jasné

---

### Týmový vibecoding hackathon

**Kontext:** Filip doporučuje vibecoding jako aktivitu pro firemní setkání.

**Konkrétní příklad:**
> "Vibecoding je aktivita, kterou můžete dělat nejen v práci, ale i třeba s dětmi, nebo v rámci firemních setkání nebo hekatonů, kdy můžete posunout nějaký projekt o míle dopředu za jeden jediný den."

**Jak to funguje:**
- Stanovte časový rámec (4-8 hodin)
- Každý tým/jednotlivec vybere problém k řešení
- Použijí vibecoding nástroje k vytvoření řešení
- Na konci prezentace výsledků

**Proč to funguje:** Praktická zkušenost s reálným výstupem, peer learning, demonstrace možností AI.

**Podobné aktivity se stejným principem:**

1. **Build Day** - Pravidelný den (měsíčně) kdy tým pracuje pouze na vibecoding projektech
2. **Problem-Solution Sprint** - 2-hodinový sprint kde jeden člověk prezentuje problém, ostatní navibeckodují řešení
3. **Tool Exploration Session** - Každý zkusí jiný nástroj (Replit, Lovable, Cursor) na stejný problém, pak porovnání
4. **Cross-functional Pairing** - Technický člověk + netechnický člověk společně navibeckodují projekt
5. **Demo Friday** - Každý pátek 30 minut na ukázku co kdo navibeckodoval během týdne

**Nejlepší pro:**
- Týmy 5-20 lidí
- Mix technických a netechnických lidí
- Organizace hledající quick wins s AI

**Úskalí:**
- Bez konkrétních problémů může být hackathon příliš abstraktní
- Potřeba předpřipravit nástroje a přístupy
- Někteří lidé mohou být frustrovaní z technických problémů

---

### Workflow "Problém → AI konzultace → Zadání → Nástroj"

**Kontext:** Filip zdůrazňuje důležitost správného postupu před samotným vibeckodingem.

**Konkrétní příklad:**
> "Ideálně je promyslet si, co by vám nejvíce pomohlo. Opravdu to zkuste stavět na problém, který reálně řešíte. Potom se pobavte se AI a vytvořte si zadání. To znamená, nechoďte do těch nástrojů, nezačněte psát jen tak, ale opravdu ten první krok udělejte ve vašem AI chatbotovi."

**Jak to funguje:**
1. Identifikace reálného problému
2. Konzultace s ChatGPT/Claude - nahrání dokumentů, diskuze o řešení
3. Vytvoření strukturovaného zadání
4. Teprve pak výběr nástroje a implementace

**Proč to funguje:** Prevence "just building" bez účelu, lepší kvalita výstupu, jasnější směřování.

**Podobné aktivity se stejným principem:**

1. **Pre-mortem session** - Před začátkem projektu diskuze "co by mohlo selhat"
2. **Requirements gathering s AI** - Nahrání všech relevantních dokumentů do AI pro extrakci požadavků
3. **Comparative prompting** - Stejné zadání do 2-3 nástrojů, výběr nejlepšího výstupu
4. **Iterative refinement** - Postupné zpřesňování zadání na základě prvních výstupů

**Nejlepší pro:**
- Jednotlivce začínající s vibeckodingem
- Projekty kde není jasný scope
- Prevence scope creep

**Úskalí:**
- Může zpomalit rychlé experimenty
- Někdy je lepší "just start" a iterovat

---

## Příběhy úspěchu

### CEO s církevní aplikací

**Kdo:** CEO firmy s hodnotou desítek miliard

**Výzva:** Potřeba aplikace pro lidi navštěvující jeho kostel

**Řešení:** Sám si aplikaci navibeckodoval

**Klíčový poznatek:** Vibecoding je přístupný i pro nejvyšší management - není to jen nástroj pro "technické lidi".

**Adopční lekce:** Když CEO používá vibecoding, legitimizuje to pro celou organizaci.

---

## Tipy & best practices

### Výběr nástroje

**Dělej:**
- Začni s konzultací v ChatGPT/Claude před výběrem nástroje
- Vyzkoušej 2-3 nástroje na stejném zadání (většina má free tier)
- Pro jednoduché věci použij Canvas/Artifacts přímo v chatbotu

**Nedělej:**
- Neskákej rovnou do nástroje bez promyšlení problému
- Nevyber nástroj jen podle popularity - záleží na use case

**Pro tip:** Nahraj přehled nástrojů do AI a nech si poradit podle tvého konkrétního problému.

---

### Bezpečnost a rizika

**Dělej:**
- Začni v zelené zóně a postupně škáluj
- Měj někoho na kontrolu při žluté zóně
- Dokumentuj, co jsi postavil a jak to funguje

**Nedělej:**
- Nepřeskakuj do červené zóny bez expertízy
- Nenechávej citlivá data v navibeckodovaných aplikacích bez review
- Nepodceňuj "posledních 10%" projektu

**Pro tip:** "Iluze hotového projektu" - to, co vypadá jako 90% hotovo, může být ve skutečnosti jen začátek. Nastavení databáze, škálování, přihlašování a bezpečnost jsou často většina práce.

---

### Učení a experimentování

**Dělej:**
- Stav na reálných problémech, které řešíš
- Používej Google Apps Script jako učící nástroj pro skripty
- Zkoušej vibecoding i s dětmi nebo na osobních projektech

**Nedělej:**
- Neučse abstraktně - vždy měj konkrétní cíl
- Nečekej perfektní výsledky napoprvé

**Pro tip:** Cursor je "nástroj #1" protože vše běží v jednom prostředí - nemusíte řešit, kam skript dát a jak ho spustit.

---

## Quick reference

### Nejdůležitější poznatky

1. **Just-in-time software** - Místo využití AI na úkol nechte AI naprogramovat nástroj, který úkol vyřeší
2. **Rizikové zóny** - Zelená (safe), Žlutá (opatrně), Červená (pouze s expertízou)
3. **Workflow** - Vždy: Problém → AI konzultace → Zadání → Teprve pak nástroj

### Action items pro začátečníky

1. Zkuste si vytvořit alespoň jednu webovou stránku nebo aplikaci
2. Nebo vytvořte alespoň jeden skript (spojení dat, export, analýza)
3. Proberte s týmem, kde by vibecoding mohl pomoci

### Běžné chyby

1. **Přeskočení konzultace s AI** - Jít rovnou do nástroje bez promyšlení zadání
2. **Podceňování posledních 10%** - Iluze hotového projektu
3. **Práce s citlivými daty bez review** - Přeskočení žluté zóny rovnou do červené

### Pro týmy a organizace

- Začněte týmovým hackhatonem nebo Build Day
- Vytvořte sandbox pro bezpečné experimentování
- Zaveďte peer review před přechodem do vyšších rizikových zón

---

## Zdroje & reference

### Zmíněné nástroje

**Databáze:**
- Airtable
- Notion databáze
- Microsoft Lists

**Interní systémy:**
- Tabidoo (ČR)
- Retool
- Microsoft Power Apps

**Webové stránky:**
- Webflow
- Framer
- Solidpixels

**Aplikace:**
- Softr
- Glide
- Bubble

**Formuláře:**
- Typeform
- Tally

**Vibecoding:**
- ChatGPT, Claude, Gemini
- ChatPRD
- Replit
- Lovable
- Bolt
- Google AI Studio
- Google Opal
- Cursor
- Google Apps Script
- Google Colab
- Jupyter Notebook
- DeepNote

**Pro pokročilé:**
- Supabase, Firebase, PlanetScale (databáze)
- Auth0, Clerk (autentifikace)
- GitHub, GitLab (verzování)
- Vercel, Netlify, Railway (deployment)

### Další prozkoumání

- Šablony a galerie aplikací v Glide/Bubble - inspirace pro vlastní projekty
- Heygen API - automatická tvorba video avatarů

---

## Adoption framework

### Filipův přístup k adopci vibeckodingu

**Potřebné změny mindsetu:**

1. **Od "potřebuji vývojáře" k "můžu to navibeckodovat"** - Uvědomění, že mnoho věcí zvládnu sám
2. **Od "hotový produkt" k "just-in-time software"** - Tvorba nástrojů přesně když je potřebuji
3. **Od "perfektní hned" k "iterace"** - Začít jednoduše, postupně vylepšovat

**Praktická implementace:**

1. **Osobní úroveň:** Vytvořit první projekt v zelené zóně
2. **Týmová úroveň:** Hackathon nebo Build Day
3. **Organizační úroveň:** Definice rizikových zón a procesů pro přechod mezi nimi

**Budování návyků:**

1. **Při každém novém úkolu se zeptejte:** "Mohl bych na to mít nástroj místo jednorázového řešení?"
2. **Pravidelné experimentování:** Vyhraďte si čas na zkoušení nových nástrojů
3. **Sdílení:** Ukažte kolegům, co jste navibeckodovali

**Týmové aktivity:**

1. **Vibecoding hackathon** - Celý den zaměřený na tvorbu projektů
2. **Demo Friday** - Pravidelné sdílení výsledků
3. **Peer review** - Kontrola projektů před přechodem do vyšších zón
4. **Tool rotation** - Každý měsíc jeden nový nástroj k vyzkoušení
