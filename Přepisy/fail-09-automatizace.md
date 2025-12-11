# Modul 09: Automatizace s AI - prework

## Klíčové koncepty & frameworky

### Proč automatizace s AI mění pravidla hry

**Hlavní myšlenka:** I drobné automatizace mohou přinést obrovské úspory, když se aplikují ve velkém měřítku.

**Příklad "Skip Intro":** Tlačítko na Netflixu šetří jednotlivci pár vteřin, ale globálně šetří stovky let života denně. Podobně malé automatizace v práci mohou ušetřit desítky hodin ročně.

**Co šetříme automatizací:**
- Čas (konkrétní minuty/hodiny)
- Mentální kapacitu (nemusíme na to myslet)
- Prevenci chyb (konzistence procesů)

**Klíčový posun:** *"Přemýšlet nad automatizací koncepčně a strategicky, protože ty úspory mohou být obrovské."*

---

### Princip 90-10 v automatizaci

**Definice:** 90 % automatizace uděláte za pár minut, ale zbylých 10 % vám může zabrat hodiny až desítky hodin ladění.

**Praktické důsledky:**
- Začněte rychle, laďte postupně
- Nechtějte dokonalost od začátku
- Někdy je lepší "polo-automatizace" než snaha o 100% řešení
- Pokud automatizace není spolehlivá, raději si uložte prompt a dělejte to manuálně 1× týdně

**Varování:** Automatizace může být "králičí nora" - pozor na overengineering.

---

### Elonův algoritmus (před automatizací)

**Princip:** Nejdříve zjednodušit, pak automatizovat.

**Kroky:**
1. Zamyslet se, proč to děláme
2. Zjednodušit proces
3. Zkrátit kroky
4. Mazat zbytečné části
5. **Teprve pak** automatizovat

**Důvod:** Jakmile automatizujete něco zbytečného, amplifikujete plýtvání.

---

### Human in the loop

**Definice:** Koncept, kde automatizace provede část kroků, pak nastoupí člověk pro kontrolu/rozhodnutí, a poté pokračuje další automatizace.

**Proč je to důležité:**
- Zajišťuje kvalitu výstupů
- Umožňuje lidský úsudek v kritických bodech
- AI zatím nezvládá vše od A do Z spolehlivě

**Posun v přístupu k práci:**
- **Dříve:** Lidé jsou "in the loop" (uvnitř procesů)
- **Nyní:** Lidé jsou "on the loop" (nad procesy, designují je)

**Metafora:** Od sochařů (vezmeme info, předěláme, pošleme dál) k zahradníkům (vytvoříme prostředí a staráme se, aby to rostlo).

---

### Nedeterministická povaha AI automatizace

**Co to znamená:** Na rozdíl od tradiční automatizace (A→B→C), AI automatizace obsahuje kroky, které mohou dát různé výsledky.

**Důsledky:**
- Automatizace vás může překvapit
- Nový model může změnit výstupy
- Potřeba průběžné kontroly a ladění

**Realistické očekávání:** I když influenceři ukazují "perfektní" automatizace, realita je komplexnější.

---

## Taxonomie nástrojů: 6 kategorií automatizace

### Kategorie 1: Polo-automatizace (šablony & prompty)

**Účel:** Připravit si opakovaně použitelné materiály pro rychlejší práci.

**Tradiční přístup:**
- Šablony v Outlooku/Gmailu
- Šablony v Notionu, Wordu
- Checklisty a procesy

**AI přístup:**
- Nechat si šablonu vygenerovat na míru
- Uložit si prompty pro opakované použití
- "Just-in-time" automatizace - vytvořím, co potřebuji, když to potřebuji

**Klíčový poznatek:** V době AI nedává smysl hledat existující šablony - rychlejší je nechat AI vytvořit přesně to, co potřebuji.

---

### Kategorie 2: Specializované nástroje

**Účel:** Nástroje zaměřené na konkrétní automatizační úlohu.

**Příklady:**
- **Automation Doc** (český startup) - automatizace v Excelu
- **Canva** - automatizace tvorby obrázků
- **Hromadné zasílání SMS/e-mailů**
- **Browser extensions** - automatizace v prohlížeči

**Jak hledat:**
- Klíčová slova: "bulk", "batch", "hromadně", "automatizace"
- Google: "[úkol] bulk" nebo "[úkol] automation"
- Chrome/Edge extension store

**Příklady use cases:**
- Hromadné zmenšení 50 fotografií
- Ukládání stránek do Obsidianu/OneNote
- Stažení textu z webových stránek do Markdown

**Tip:** Cokoliv děláte pravidelně, často nebo hromadně - pravděpodobně existuje nástroj.

---

### Kategorie 3: Autonomní ovládání počítače

**Účel:** AI kliká za vás a provádí operace na počítači nebo v prohlížeči.

**Nástroje a funkce:**
- **Claude:** Computer Use
- **OpenAI:** Operator
- **Cursor:** Browser Mode
- **Manus** - agent pro komplexnější úkoly (prezentace, automatizace)

**Aktuální stav:**
- Zatím pomalé, není 100% spolehlivé
- Vyžaduje objevování vhodných use cases
- Nevhodné pro triviální úkoly (objednání u kadeřníka)

**Vhodné use cases:**
- Hromadné stahování podkladů z různých systémů
- Práce vyžadující mnoho klikání v prohlížeči
- Úkoly, kde je obtížné napsat tradiční automatizaci

**Příklad z praxe:** Martin Imrich (Ability) použil tuto funkci ke stažení všech materiálů z FAIL programu - přihlásil se a nechal agenta klikat a ukládat.

---

### Kategorie 4: Vibe-coding & skripty

**Účel:** Nechat AI naprogramovat automatizaci podle přirozeného jazykového zadání.

**Nástroje:**
- **Cursor**
- **Claude Code**
- **Replit**

**Proč je to Filipova nejoblíbenější forma:**
- Rychlé
- Není potřeba skládat vizuální bloky
- Zadám agentovi, co chci, a on to naprogramuje

**Klíčový koncept: Agent = Prompt**

*"Častokrát ti agenti jsou jenom soupis funkcionalit a popisu... dokumentovaná znalost."*

**Přístup k práci:**
1. Připravit si prompty a kontext na počítači
2. Použít programovací nástroje (Cursor, Claude Code)
3. Agent provede hromadu práce za vás

**Avizované téma:** V dalším workshopu - systém tvorby agentů na počítači.

---

### Kategorie 5: Jednoduché automatizační platformy

**Účel:** Vizuální skládání automatizací bez programování.

| Nástroj | Složitost | Vhodné pro |
|---------|-----------|------------|
| **Relay** | Nejjednodušší | Začátečníky, rychlé prototypy |
| **Make** | Střední | Komplexnější workflow |
| **Power Automate** | Variabilní | Microsoft ekosystém |

**Relay doporučení:**
- 500 AI kreditů zdarma
- Spousta návodů a videí
- AI asistent postaví automatizaci za vás
- **Každý by měl zkusit postavit alespoň jednu automatizaci**

**Postup pro začátečníky:**
1. V AI (Claude/ChatGPT) popsat proces, který chci automatizovat
2. Nechat AI vyladit popis
3. Vložit do AI asistenta v Relay
4. Sledovat, jak se automatizace skládá

---

### Kategorie 6: Agentní systémy

**Účel:** Pokročilé autonomní automatizace s plánováním, reflexí a přístupem k nástrojům.

**Oblíbené platformy:**
- **N8N** (čte se "NATEN") - oblíbený u zákazníků
- **Copilot Studio** - pro Microsoft prostředí
- **Relevance AI** - platforma na stavbu agentů
- **Crew AI**
- **Runbear** - napojení agentů do Teams/Slack

**Budoucnost:** Agenti přímo v komunikačních nástrojích - napíšete jim jako kolegovi a oni pracují.

**Varování:** Hodně technicky pokročilé, zatím spíše pro zkušené uživatele.

---

## Agent vs. Asistent - klíčové rozlišení

### Co je Asistent

**Definice:** Uložený prompt s předdefinovanou znalostí, kde uživatel aktivně přichází a ptá se.

**Charakteristiky:**
- Pasivní (čeká na váš dotaz)
- Bez napojení na další nástroje
- Provádí jednu konverzační interakci

**Příklad:** Microsoft Copilot "Create an Agent" je ve skutečnosti Asistent.

### Co je Agent

**Definice:** Autonomní systém s cílem, který sám plánuje kroky a napojuje se na nástroje.

**Charakteristiky:**
- **Plánování:** Sám rozhodne, co udělat
- **Reflexe:** Zkontroluje, jestli dosáhl cíle
- **Paměť:** Pracuje s daty a historií
- **Nástroje:** Přístup k databázím, webu, API

**Příklad workflow:**
1. Přijde e-mail
2. Agent projde CRM, zjistí, jestli jde o existujícího zákazníka
3. Uloží do CRM
4. Notifikuje příslušného obchodníka
5. Zkontroluje, jestli se to povedlo
6. Pokud ne, zkusí znovu

### Koncept agents.md

**Inspirace:** Doména agents.md (moldavská .md = markdown)

**Myšlenka:** Agent může být komplexní prompt/markdown soubor definující:
- Funkcionality
- Způsob práce
- Rozhodovací pravidla

*"Možná i my lidé jsme tak trošku jenom soubor markdown souborů, které definují, co umíme, jak pracujeme, jak se rozhodujeme."*

---

## Rozdíl: Klasická vs. AI vs. Agentní automatizace

| Aspekt | Klasická automatizace | AI automatizace | Agentní workflow |
|--------|----------------------|-----------------|------------------|
| **Kroky** | Pevně dané (1→2→3→4) | Obsahuje AI krok (prompt) | Flexibilní plánování |
| **Logika** | Deterministická | Částečně nedeterministická | Autonomní rozhodování |
| **Příklad** | E-mail → uložit → notifikace | E-mail → AI analyzuje → roztřídí | E-mail → agent rozhodne, kam a jak |
| **Kontrola** | Úplná | Částečná | Minimální |

---

## Strategie adopce & implementace

### Týmový workshop: Mapování procesů

**Kontext:** Pro identifikaci automatizačních příležitostí v týmu.

**Jak to funguje:**
1. Sednout si s týmem
2. Nakreslit si proces vizuálně
3. Projít jednotlivé kroky a ptát se:
   - Co lze vyladit ve stávajících nástrojích?
   - Co lze automatizovat?
   - Kde použít AI?

**Proč to funguje:** Vizualizace procesu odhalí neefektivity a příležitosti, které nejsou vidět při denní práci.

**Podobné aktivity se stejným principem:**
1. **Process Audit Sessions** - pravidelné čtvrtletní revize klíčových procesů s cílem najít automatizační příležitosti
2. **Bottleneck Hunting** - tým identifikuje úzká místa a společně hledá AI/automatizační řešení
3. **Time Tracking Challenge** - týden měření času na úkolech, pak analýza, co automatizovat
4. **Cross-Team Process Sharing** - týmy si navzájem představují své automatizace a inspirují se

**Nejlepší pro:**
- Týmy v rané fázi AI adopce
- Procesy zahrnující více lidí
- Situace, kdy není jasné, kde začít

---

### Automatizační koučovací otázky

**Kontext:** Otázky pro identifikaci automatizačních příležitostí.

**Konkrétní příklady:**
- *"Co by se stalo, kdybychom měli 10× více poptávek?"*
- *"Co bych musel automatizovat, kdybych měl na práci jen polovinu času?"*
- *"Kdyby ke mně nastoupil nový kolega, který zvládne cokoliv - co bych mu dal za práci?"*

**Jak to funguje:**
- Hypotetické scénáře odhalí reálné priority
- Odkryjí činnosti, které se "dělají, protože se vždycky dělaly"
- Identifikují kandidáty na AI nebo automatizaci

**Proč to funguje:** Limitní scénáře nutí přemýšlet jinak než "co bych mohl automatizovat".

**Podobné aktivity se stejným principem:**
1. **"Robot Test"** - Pro každý úkol se ptát: "Mohl by to dělat robot?" Pokud ano, proč to nedělá?
2. **New Employee Perspective** - Představit si, že vysvětluji práci nováčkovi. Co zní absurdně složitě?
3. **10× Challenge** - Každý člen týmu vybere jeden proces a navrhne, jak zvládnout 10× objem
4. **Zero-Based Process Design** - Kdyby proces neexistoval, jak bychom ho dnes navrhli od nuly?

**Nejlepší pro:**
- Individuální reflexi
- Brainstorming sessions
- Strategické plánování

---

### Denní návyková otázka

**Kontext:** Budování automatizačního mindsetu jako denní návyk.

**Konkrétní příklad:**
*"Co můžu udělat dnes proto, abych měl zítra jednodušší práci?"*

**Jak implementovat:**
- Přidat do kalendáře jako denní připomínku
- Nebo přirozeně zařadit do ranní rutiny
- Odpovědět si alespoň jednou větou

**Proč to funguje:** Malé denní kroky vedou k systematické optimalizaci práce.

**Podobné aktivity se stejným principem:**
1. **Weekly Automation Hour** - Blok v kalendáři na prozkoumávání automatizačních možností
2. **"One Thing" Rule** - Každý den automatizovat/zjednodušit alespoň jednu drobnost
3. **Friction Log** - Zapisovat si během dne momenty, kdy něco bylo zbytečně složité
4. **End-of-Day Review** - 5 minut reflexe: co jsem dělal ručně, co nemusel?

**Nejlepší pro:**
- Jednotlivce budující návyky
- Long-term improvement mindset
- Postupnou transformaci práce

---

### Inspirace z automatizačních aplikací

**Kontext:** Reverzní přístup - začít od existujících řešení.

**Jak to funguje:**
1. Otevřít automatizační nástroj (Relay, Make, N8N...)
2. Projít jejich use cases a šablony
3. Zamyslet se: "Něco takového by mi mohlo pomoci?"
4. Adaptovat na vlastní potřeby

**Proč to funguje:** Vidět konkrétní příklady je snazší než vymýšlet od nuly.

**Tip:** Screenshoty v prezentaci jsou klikatelné - lze prozkoumat šablony přímo.

---

### Model externích automatizačních konzultantů

**Kontext:** Řešení pro týmy bez interních kompetencí.

**Jak to funguje:**
- Najít malou skupinku (2-3 lidi) specializovanou na automatizace
- Pravidelné online setkání (pár hodin týdně)
- Pomáhají interně stavět automatizace
- Učí tým za pochodu

**Výhody:**
- Není potřeba velká firma
- Cenově dostupné
- Okamžitý start
- Transfer znalostí do týmu

**Kde hledat:**
- **Fiverr** - miliony freelancerů po celém světě
- **Upwork** - specializované platformy
- Doporučení od AI komunity

**Nejlepší pro:**
- Týmy bez technických kompetencí
- Komplexnější automatizace
- Rychlý start s externím vedením

---

## Příběhy úspěchu & case studies

### Personalizovaný outreach pro e-shopy

**Kdo:** Agentura z Pakistánu vyvíjející aplikace pro e-shopy

**Výzva:** Získat nové klienty efektivněji než generic oslovením

**Řešení:**
1. Stáhnout tabulku e-shopů běžících na Shopify
2. AI analyzuje každý e-shop a navrhne konkrétní vylepšení
3. Automaticky rozeslat personalizované návrhy majitelům

**Výsledek:** Obrovská poptávka, protože oslovení bylo na míru - ne "chcete pomoct s aplikací", ale konkrétní návrh pro daný e-shop.

**Klíčový poznatek:** AI umožňuje personalizaci ve velkém měřítku, která dříve nebyla možná.

---

### Relevance AI personalizovaný onboarding

**Kdo:** Relevance AI (platforma na stavbu agentů)

**Výzva:** Zapůsobit na nové uživatele personalizovaně

**Řešení:** Agent, který po registraci:
1. Analyzuje e-mail uživatele
2. Provede web scraping (LinkedIn profil, web, podcast)
3. AI sumarizuje informace
4. Vygeneruje personalizovaný e-mail
5. Vytvoří něco konkrétního (v případě Filipa: cvičení pro workshopy)

**Filipova zkušenost:** *"Ahoj Filipe, zrovna jsem si přečetl Budoucnost nepráce... viděl jsem, že máš 30 tisíc followerů na LinkedInu, našel jsem tvůj podcast..."*

**Klíčový poznatek:** Vše, co děláme ručně v FAIL programu, se dá poskládat a automatizovat.

---

### Landing page místo prezentace

**Kdo:** Filip

**Výzva:** Připravit návrh hackatonu pro zákazníka před hovorem

**Řešení:**
1. V Claude napsat pár bodů, jak by hackathon měl vypadat
2. Claude vytvoří návrh
3. Hodit do Replitu/Cursoru - vygenerovat landing page
4. Prezentovat jako webovou stránku místo PowerPointu

**Výsledek:** 
- Několik promptů místo hodiny práce na prezentaci
- Zákazníci nadšení: *"To je neuvěřitelné, že máme akci za dva měsíce a ty už to máš kompletně připravené!"*

**Klíčový poznatek:** Změna formátu výstupu (web místo PPT) plus AI = wow efekt u zákazníků.

---

### Stažení všech FAIL materiálů

**Kdo:** Martin Imrich, team lead Ability

**Výzva:** Mít všechny materiály z FAIL programu na jednom místě

**Řešení:** Použil autonomní browser mode agenta:
1. Agent se přihlásil k materiálům
2. Klikal a stahoval přepisy a prezentace
3. Uložil vše na jedno místo

**Charakteristika:** Pomalé, ne 100% spolehlivé, ale pro tento typ úkolu perfektní řešení.

**Klíčový poznatek:** Autonomní agenti jsou vhodní pro úkoly s mnoha opakovanými kroky v prohlížeči.

---

## Nástroje & technologie - souhrn

### Automatizační platformy

| Nástroj | Úroveň | Cena | Nejlepší pro |
|---------|--------|------|--------------|
| **Relay** | Začátečník | 500 AI kreditů zdarma | První automatizace |
| **Make** | Střední | Freemium | Komplexnější workflow |
| **Power Automate** | Variabilní | Součást M365 | Microsoft prostředí |
| **N8N** | Pokročilý | Self-hosted/Cloud | Agentní systémy |
| **Copilot Studio** | Pokročilý | Enterprise | Microsoft agenti |

### Agentní platformy

| Nástroj | Specializace |
|---------|--------------|
| **Relevance AI** | Stavba AI agentů |
| **Crew AI** | Multi-agent systémy |
| **Runbear** | Agenti v Teams/Slack |
| **Manus** | Komplexní úkoly, prezentace |

### Vibe-coding nástroje

| Nástroj | Použití |
|---------|---------|
| **Cursor** | Programování + browser mode |
| **Claude Code** | Agentní programování |
| **Replit** | Rychlé prototypy, landing pages |

### Specializované nástroje (zmíněné)

| Nástroj | Účel |
|---------|------|
| **Automation Doc** | Automatizace v Excelu (český startup) |
| **Canva** | Automatizace tvorby obrázků |
| **Browser extensions** | Automatizace v prohlížeči |

### Outsourcing platformy

| Platforma | Popis |
|-----------|-------|
| **Fiverr** | Miliony freelancerů, rychlé úkoly |
| **Upwork** | Dlouhodobější spolupráce, specialisté |

---

## Tipy & best practices

### Kdy automatizovat

**Dělej:**
- Činnosti, které děláš pravidelně, často, hromadně
- Procesy s jasně definovanými kroky
- Úkoly, kde chyba má vysokou cenu
- Práce, kterou bys dal novému kolegovi

**Nedělej:**
- Automatizovat zbytečné procesy (nejdřív zjednodušit)
- Trávit desítky hodin na automatizaci, kterou použiješ 1× týdně
- Očekávat 100% spolehlivost od AI automatizací

### Rozhodovací matice: Co použít?

| Situace | Řešení |
|---------|--------|
| Jednorázový úkol | AI asistent (Claude, ChatGPT) |
| Opakovaný úkol, nespolehlivá automatizace | Uložený prompt + kalendář |
| Jednoduchá automatizace | Relay |
| Komplexní workflow | Make, N8N |
| Programovatelný úkol | Cursor, Claude Code |
| Komplikovaný proces | Externí konzultant |
| Triviální úkol | Nedělat nic, není potřeba automatizovat |

### Pro týmy

**Dělej:**
- Udělat analýzu, co máte ve firmě k dispozici
- Zjistit, jak pracují ostatní oddělení
- Hledat interní podporu nebo externí dodavatele
- Pracovat s týmem tak, aby sám přicházel s nápady

**Nedělej:**
- Předpokládat, že všichni musí umět automatizovat
- Automatizovat bez pochopení procesu
- Ignorovat existující firemní nástroje

---

## Quick reference

### Nejdůležitější poznatky

1. **90-10 princip:** 90 % automatizace rychle, 10 % může trvat věčně - začněte a laďte
2. **Elonův algoritmus:** Nejdřív zjednodušit, pak automatizovat
3. **Agent ≠ Asistent:** Agent plánuje a jedná autonomně, asistent čeká na dotaz
4. **Denní otázka:** "Co můžu udělat dnes, abych měl zítra jednodušší práci?"
5. **AI automatizace je nedeterministická:** Očekávejte, že bude potřeba kontrola a ladění

### Action items pro začátečníky

1. Projít si kalendář z minulosti a to-do list - co by pomohlo automatizovat?
2. Postavit první automatizaci v Relay (500 AI kreditů zdarma)
3. Nainstalovat užitečné browser extensions pro opakované úkoly
4. Zkusit popsat jeden proces AI a nechat ji navrhnout automatizaci

### Běžné chyby

| Chyba | Jak se jí vyhnout |
|-------|-------------------|
| Automatizovat zbytečné procesy | Nejdřív aplikovat Elonův algoritmus |
| Strávit příliš času laděním | Respektovat princip 90-10, použít alternativu |
| Očekávat 100% spolehlivost | Počítat s human-in-the-loop |
| Ignorovat existující šablony | Prozkoumat use cases v automatizačních aplikacích |
| Snažit se vše dělat sám | Zvážit externí konzultanty pro komplexní věci |

### Pro týmy a organizace

- **Zmapujte procesy vizuálně** a identifikujte automatizační příležitosti
- **Používejte koučovací otázky** (10× více práce, polovina času)
- **Zjistěte, co už firma má** - nástroje, kompetence, podpora
- **Budujte kulturu sdílení** - kdo co automatizoval, co funguje
- **Zvažte malé externí týmy** pro kickstart automatizací

---

## Adoption framework

### Filipův přístup k adopci automatizace

**Potřebné změny mindsetu:**
- Od "dělám ručně" k "jak si to zjednodušit"
- Od "hledám šablonu" k "nechám AI vytvořit"
- Od "musím to udělat perfektně" k "začnu a budu ladit"
- Od "já v procesu" k "já nad procesem"

**Praktická implementace:**
1. Denní otázka v kalendáři
2. Revize kalendáře a to-do listu 1× měsíčně
3. První automatizace v Relay
4. Postupné rozšiřování do složitějších nástrojů

**Budování návyků:**
- Automatizační mindset = denní reflexe
- Učit se hledat (bulk, batch, automation)
- Zapisovat si friction points během práce
- Sdílet objevy s týmem

**Týmové aktivity:**
- Mapování procesů (workshop)
- Koučovací otázky (brainstorming)
- Prohlížení šablon v automatizačních nástrojích (inspirace)
- Show & tell sessions (sdílení)

---

## Zdroje & reference

**Zmíněné nástroje:**
- **Relay** - nejjednodušší automatizace s AI
- **Make** - pokročilejší automatizace
- **N8N** - agentní systémy
- **Relevance AI** - platforma pro AI agenty
- **Cursor** - vibe-coding
- **Replit** - rychlé prototypy
- **Automation Doc** - český startup pro Excel automatizace
- **Fiverr, Upwork** - outsourcing platformy
- **Runbear** - agenti v Teams/Slack

**Koncepty k dalšímu prozkoumání:**
- **agents.md** - koncept agenta jako markdown souboru
- **Human in the loop** - koncept lidského dohledu v automatizacích
- **Checklist Manifesto** - zmíněná kniha o síle checklistů

**Další zdroje:**
- Šablony a use cases přímo v automatizačních aplikacích (klikatelné screenshoty v prezentaci)
- NotebookLM pro zpracování dalších materiálů o agentech
