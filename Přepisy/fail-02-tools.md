# FAIL 02 - Jak využít nástroje s AI: Kompletní znalostní dokument

## Klíčové koncepty & frameworky

### Pět úrovní AI nástrojů

**Definice:** Hierarchický systém kategorizace AI nástrojů podle složitosti použití a integrace do pracovních procesů.

**Komponenty:**
- **Úroveň 1 - Chatboty:** Manuální využití AI nástrojů (ChatGPT, Claude, Gemini)
- **Úroveň 2 - Asistenti:** Tvorba AI asistentů pro opakované úkoly
- **Úroveň 3 - Skriptování:** Programování a low-code tvorba za pomocí AI
- **Úroveň 4 - Automatizace:** Workflow s integrací AI modelů
- **Úroveň 5 - Agenti:** Agentské procesy s autonomním rozhodováním

**Kdy použít:** Postupné zavádění od úrovně 1, pokročilé úrovně 3-5 vyžadují větší technické znalosti nebo podporu specialistů.

**Filosofický princip:** "Zaměřte se na to klíčové - první dvě úrovně jsou nejdůležitější pro každého."

---

### Kontextové okno (Context Window)

**Definice:** Množství dat (měřeno v tokenech), která můžete nahrát do AI modelu a která model dokáže zpracovat.

**Klíčové informace:**
- 1 token ≈ 3/4 slova nebo slabika
- Google Gemini: 1 milion tokenů
- ChatGPT & Copilot: stovky tisíc tokenů
- Claude: stovky tisíc tokenů

**Kdy použít:** Důležité při práci s velkými dokumenty nebo mnoha soubory najednou.

**Varování:** Když přesáhnete limit, AI může začít "halucinovat" nebo se konverzace zastaví. Řešení: nechte si shrnout konverzaci a začněte nový chat.

**Pro tip:** Notebook LM a Google modely mají největší kontextové okno - ideální pro práci s PDF 150+ stránek.

---

### Rychlý vs. Přemýšlející model

**Definice:** Rozdělení AI modelů podle rychlosti a hloubky zpracování.

**Typy:**
- **Rychlý (Instant):** Pro běžné úkoly, rychlé odpovědi, čištění textů
- **Přemýšlející (Reasoning):** Pro komplexní analýzy, strategické rozhodování, hlubší zpracování

**Kdy použít:** 
- Rychlý: rutinní úkoly, formátování, jednoduché dotazy
- Přemýšlející: složité projekty, analýzy, strategické plánování

**Filipův přístup:** "Nechci, aby model sám volil. Mám v prohlížeči rozdělený GPT na přemýšlející a instant rychlý."

**Pro tip:** V Cursoru použijte funkci "planning" - model nejdřív naplánuje, pak se pustí do akce.

---

### Deep Research (Hluboký průzkum)

**Definice:** Funkce AI, která prohledává stovky webových stránek pro získání komplexních a ověřených informací.

**Kapacity:**
- Claude: až 500 stránek
- Gemini: 50-100 stránek  
- ChatGPT: desítky stránek
- Perplexity: placený účet nutný

**Kdy použít:**
- Potřebujete ověřit fakta z více zdrojů
- Hledáte aktuální informace
- Chcete porovnat data z různých míst
- Plánujete cestu, výzkum, analýzu trhu

**Konkrétní příklad:** "Najdi mi coworkingová místa do 20 minut od této adresy, s kontakty a možností pronájmu meetingové místnosti."

**Pro týmy:** Použijte Deep Research pro ověření AI-generovaných reportů před dodáním klientovi (lekce z případu Deloitte).

---

### Symptozy, ne nahrazení (Symbiosis, not replacement)

**Definice:** Filozofie práce s AI jako s partnerem, ne jako s náhradou za lidskou práci.

**Principy:**
- AI nedělá práci od A do Z
- Rozdělte úkol na kroky
- Na každý krok použijte vhodný nástroj nebo prompt
- Vždy kontrolujte výstupy

**Příklad z praxe:** Dáma chtěla, aby AI porovnala produkty z webů. Správný postup: 1) stáhnout stránky, 2) analyzovat v chatbotu, 3) případně použít nástroj na analýzu fotek.

**Klíčový poznatek:** "Dneska už není možné říct AI: udělej takto komplexní úkol a ona si s tím poradí. Musíme rozdělit proces."

---

## Nástroje & technologie

### ChatGPT (OpenAI)

**Účel:** Univerzální chatbot pro široké spektrum úkolů od psaní po analýzu.

**Klíčové funkce:**
- Auto-výběr modelu (rychlý vs. reasoning)
- Tvorba asistentů (GPTs)
- Vyhledávání na webu
- Práca s dokumenty a obrázky
- Agentská funkce (generování prezentací, práce s virtuálním prohlížečem)

**Cena:** 
- Free: omezený počet dotazů
- Plus: $20/měsíc
- Pro/Team: vyšší tarify

**Nejlepší pro:** Běžné uživatele, začátečníky, ty, kdo chtějí "pochlebování" při práci

**Osobnost:** Pochlebovačný, pozitivní, někdy až příliš

**Varování:** V free verzi může halucinovat častěji, doporučuje se platit

**Filipův tip:** "Mám rozdělený GPT na přemýšlející a instant v prohlížeči - nechci, aby model sám volil."

---

### Claude (Anthropic)

**Účel:** Pokročilý chatbot s důrazem na kvalitu, bezpečnost a delší kontextové okno.

**Klíčové funkce:**
- Nejlepší Deep Research (až 500 stránek)
- Memory funkce napříč konverzacemi
- Práce s dokumenty, kódem, obrázky
- Artifacts (interaktivní výstupy)
- Kritičtější zpětná vazba než ChatGPT

**Cena:**
- Free: značně omezeno
- Pro: ~$20/měsíc (s Black Friday slevami klidně 40-50%)
- Team/Enterprise: vyšší tarify

**Nejlepší pro:** Pokročilé uživatele, ty, kdo chtějí kritičtější feedback, práce s mnoha dokumenty

**Osobnost:** Kritičtější, méně pochlebovačný, fokus na business

**Integrace:** Funguje skvěle s Cursor pro programování

**Filipova preference:** "Claude je můj primární nástroj - zaměřuje se na biznis aspekty."

---

### Google Gemini & Notebook LM

**Účel:** Gemini = univerzální chatbot od Google, Notebook LM = specializovaný na práci s dokumenty.

**Gemini klíčové funkce:**
- Největší kontextové okno (1 milion tokenů)
- Integrace s Google Workspace
- Multimodální schopnosti
- Deep Research

**Notebook LM specifika:**
- Funguje POUZE s nahranými dokumenty
- Nenaučený na externích datech
- Perfektní pro analýzu PDF, knih, produktových listů
- Vytváří podcasty z dokumentů

**Cena:** 
- Gemini: free i placená verze
- Notebook LM: zdarma i v pokročilé verzi

**Nejlepší pro:** 
- Gemini: uživatelé Google ekosystému
- Notebook LM: analýza velkých dokumentů, kdy nechcete, aby AI používala externí znalosti

**Varování:** Gemini má tendenci zaměřovat se na širší společenské změny (vs. Claude na biznis, Copilot na technické detaily)

---

### Microsoft Copilot & GitHub Copilot

**Účel:** Copilot = AI asistent v Microsoft ekosystému, GitHub Copilot = programátorský asistent.

**Microsoft Copilot funkce:**
- Integrace s Microsoft 365
- Práce v Word, Excel, PowerPoint, Teams
- Copilot Notebooks (podobné Claude Projects)

**GitHub Copilot:**
- AI programování v reálném čase
- Doplňování kódu
- Alternativa k Cursor pro programátory

**Cena:** 
- Microsoft Copilot: součást M365 nebo samostatně
- GitHub Copilot: ~$10-20/měsíc

**Nejlepší pro:** Korporátní prostředí s Microsoft ekosystémem, programátoři

**Filipův tip:** "Pokud nemůžete použít Cursor v korporátu, požádejte o licenci GitHub Copilot."

---

### Cursor

**Účel:** AI-powered code editor pro programování, skriptování a datovou analýzu - i pro neprogramátory.

**Klíčové funkce:**
- Agentský mód (samostatné plánování a provádění úkolů)
- Planning funkce (naplánuje před akcí)
- Práce s celými složkami
- Privátní mód (data se nesdílejí)
- Integrace s nejlepšími AI modely
- Automatické rozdělení velkých souborů

**Cena:**
- Free: omezený počet dotazů
- Pro: ~$20/měsíc
- Max: stovky dolarů (více dotazů, větší kontextové okno)

**Nejlepší pro:** 
- Analýza dat bez programování
- Tvorba obsahu (strukturování, čištění)
- Automatizace
- Programování (pro pokročilé)

**Filipova práce s Cursor:**
- 30% svého času tráví v Cursoru
- Používá pro analýzu dat z formulářů
- Čištění a strukturování souborů
- Generování personalizovaných výstupů

**Konkrétní use case:** "Vzal jsem 30 souborů z registrací, prompt 'analyzuj adresář a navrhni pročištění' - během chvíle měl strukturované složky a konsolidované data."

**Pro tip:** Použijte Planning mód - dáte mu úkol, on naplánuje a pak realizuje. "Eliminuje rizika a dělá to systematicky."

**Varování:** Na první pohled vypadá "strašidelně" jako nástroj pro programátory, ale stačí se naučit základy (otevření složky, agentský mód).

**Alternativy:** VS Code s pluginem Claude, GitHub Copilot

---

### Replit

**Účel:** Online platforma pro tvorbu aplikací a webů pomocí AI bez nutnosti programování.

**Klíčové funkce:**
- Tvorba celých aplikací z promptu
- Real-time náhled
- Hosting aplikací
- Dashboard tvorba
- CSV zpracování

**Cena:** Free i placené verze

**Nejlepší pro:** Tvorbu jednoduchých aplikací, dashboardů, interaktivních webů bez programátorských znalostí

**Příběh úspěchu:** Martina Habová - vytvořila AI dashboard pro analýzu dotazníků po týdnu zkoušení v Claude, pak to přenesla do Replitu a měla hotovo během pár promptů.

**Pro tip:** "Když vás ChatGPT nebo Claude zastaví kvůli limitům, přesuňte projekt do Replitu."

---

### Gamma

**Účel:** AI nástroj na tvorbu prezentací, dokumentů a webových stránek.

**Klíčové funkce:**
- Generování prezentací z textu nebo dokumentu
- Vlastní design templaty
- Export do PowerPoint
- Interaktivní prezentace

**Cena:** Free verze dostupná, placené plány pro pokročilé funkce

**Nejlepší pro:** Rychlou tvorbu prezentací, když nepotřebujete přesný korporátní design

**Alternativy:** Canva s AI, Beautiful.ai

---

### Lenis Newsletter Bundle

**Účel:** Předplatné poskytující přístup k placenýn verzím mnoha AI nástrojů za zlomek ceny.

**Co obsahuje:**
- Gamma (prezentace)
- Replit (programování)
- Nástroje na přepis videa
- Další desítky specializovaných nástrojů

**Cena:** $200/rok (hodnota běžně $10,000+)

**Nejlepší pro:** Ty, kdo chtějí vyzkoušet mnoho nástrojů bez investice do každého zvlášť

**Filip doporučuje:** "Za 200 dolarů za rok dostanete hromadu nástrojů - značná úspora."

---

## Workflow & procesy

### Tvorba prezentací s AI

**Cíl:** Vytvořit kvalitní prezentaci s pomocí AI efektivně a v kontrolovaném procesu.

**Tři hlavní přístupy:**

**1. Specializovaná aplikace (Gamma, Canva)**
- Nahrajete dokument nebo myšlenky
- AI vygeneruje kompletní prezentaci
- Vhodné pro: inspiraci, rychlé drafty, netradičí formáty
- Nevýhoda: nemusí odpovídat firemnímu designu

**2. Analýza existující + copy-paste (PowerPoint/Google Slides)**
- Nahrajte předchozí prezentaci do AI
- Prompt: "Analyzuj styl, formát slajdů, chci zadat svému asistentovi"
- Dáváte svoje nápady, myšlenky, data
- Společně čistíte: odrážky, texty, formáty
- Copy-paste do PowerPoint
- Vhodné pro: udržení kontroly, učení se strukturovat myšlenky

**3. Diktování + iterace**
- Nadiktujete obsah
- AI formátuje a čistí
- Řeknete: "Udělej to kratší, musí se to vejít na jeden slajd"
- Rychlejší spolupráce

**Filipův přístup:** "Pro mě je příprava prezentace jako psaní - strukturuji myšlenky. Proto nechci úplně autorsovat tvorbu, ale používám AI na návrh struktury, ladění textů."

**Časová investice:** Záleží na přístupu - od 15 minut (Gamma) po hodiny (kontrolovaný proces)

**Potřebné nástroje:** ChatGPT/Claude/Gemini + PowerPoint NEBO Gamma/Canva

**Klíčový poznatek:** "Není to automatizované, ale já za prvé nad tím chci mít kontrolu a za druhé, pro mě příprava prezentace je strukturování myšlenek."

---

### Tvorba AI asistentů (GPTs)

**Cíl:** Vytvořit specializovaného AI asistenta pro opakované úkoly s konzistentními výstupy.

**Kdy vytvořit asistenta:**
- Používáte stejný typ promptu opakovaně
- Potřebujete konzistentní formát výstupů
- Chcete sdílet nástroj s týmem
- Pravidelně pracujete se stejným typem úkolů

**Kroky:**
1. Identifikujte opakující se úkol
2. Vytvořte systémový prompt (instrukce pro asistenta)
3. Nahrajte relevantní dokumenty/znalostní bázi (volitelné)
4. Otestujte a iterujte
5. Sdílejte s týmem (pokud je to týmový nástroj)

**Filipovy asistenti:**
- **Prompt Writer:** Pomáhá psát lepší prompty
- **Email Formatter:** Opraví chyby, vytvoří předmět, hezky naformátuje
- **Training Material Creator:** Poradce na tvorbu tréninků a materiálů (diskutuje strategie, poskytuje feedback)

**Příklad procesu - Email Formatter:**
1. Napíšu rychlý, nečistý text
2. Asistent: opraví chyby, vytvoří předmět, naformátuje
3. Já: dvakrát vyměním pár slov
4. Hotovo

**Pro tip:** "Nedávejte tam AI, ať to dělá celé - dávejte konkrétní instrukce na jeden specifický aspekt."

**Platformy:** ChatGPT (GPTs), Claude (Projects), Gemini (Gems)

---

### Řešení komplexního problému s AI

**Cíl:** Systematický přístup k řešení složitých pracovních výzev pomocí AI.

**Framework "Co bys udělal v mé kůži":**

**Krok 1: Kontextualizace (5-10 minut mluvení)**
- Popište situaci detailně
- Nahrajte relevantní dokumenty
- Vysvětlete cíl
- Sdílejte omezení

**Krok 2: Otázka**
"Co bys udělal v mé kůži, kdybys měl za cíl [KONKRÉTNÍ CÍL]?"

**Krok 3: Deep Research (pokud je potřeba)**
Pokud chcete external input: "Najdi mi příklady existujících řešení nebo aplikací pro firmy tohoto typu."

**Krok 4: Iterace**
- Dostanete návrh přístupu/systému
- Diskutujete detaily
- Upravujete podle potřeby

**Krok 5: Implementace**
- Rozdělíte na konkrétní kroky
- Případně použijete další nástroje (Cursor pro data, specializované aplikace)

**Příklad z praxe:** "Potřebuji vymyslet systém kroků a logiku rozhodování, jak se dostat z velmi komplikované situace ve spadlém projektu."
- 5 minut kontextu (co se děje v projektu)
- Nahrát dokumenty
- Prompt: "Potřebuji vytvořit systém kroků a rozhodování. Co bys navrhl v mé kůži?"

**Klíčový poznatek:** "50% věcí, které jste chtěli udělat tento týden, by šlo vyřešit pomocí nejzákladnějších funkcí AI."

---

### Práce s velkými soubory v Cursor

**Cíl:** Zpracovat, analyzovat nebo vyčistit velké množství dat bez programování.

**Use case - Ivo z T-Mobile:**
Problém: 15,000 řádků technických dat, ChatGPT nedokázal zpracovat

**Řešení s Cursor:**

**Krok 1: Příprava**
- Otevřít složku s daty v Cursoru
- Zapnout privátní mód

**Krok 2: Vytvoření asistenta**
- Prompt: Popis, co potřebujete extrahovat
- Pravidla pro zpracování
- Formát výstupu (tabulka)

**Krok 3: Iterace**
- Cursor zkusí část dat
- Vy dáte feedback
- Cursor ladí přístup

**Krok 4: Spuštění na všechna data**
- Když funguje na prvních 10 řádcích
- Cursor automaticky rozdělí soubor
- Zpracuje všechno

**Filipův use case - Čištění workshopových dat:**
Problém: 30 souborů v různých formátech

**Řešení:**
1. Prompt: "Analyzuj adresář a navrhni pročištění"
2. Cursor navrhl strukturu
3. 2-3 feedbacky
4. Cursor: smazal zbytečné, vytvořil skripty, vytvořil novou strukturu
5. Výsledek: zdrojová_data / konsolidované / jednotlivé_karty

**Časová investice:** Záleží na složitosti - od 30 minut po pár hodin

**Potřebné nástroje:** Cursor, základní pochopení toho, co chcete

**Varování:** Když necháte Cursor použít AI pro samotné zpracování dat (ne jen skriptování), vždy kontrolujte kvalitu výstupu.

---

### Deep Research pro business rozhodnutí

**Cíl:** Získat komplexní přehled o tématu z mnoha zdrojů pro informované rozhodování.

**Use case - Filip hledá coworking:**

**Krok 1: Zadání Deep Research**
"Najdi mi coworkingová místa v okolí do 20 minut od [adresa]. Najdi kontakty, ideálně ten, kdo má i meetingovou zasedačku pro pronájmutí."

**Krok 2: Čekání (5-15 minut)**
AI prohledá stovky stránek

**Krok 3: Zpracování výstupů**
- Vzít výsledky
- Hodit do AI
- "Udělej z toho jen kontakty a oslovení"

**Krok 4: Personalizace**
- Vytáhnout z kalendáře události
- "Vytvoř email pro tyto coworky, abych si to tam mohl zaregistrovat"

**Výsledek:** Relevantní kontakty s kompletními informacemi

**Další use case:**
- **Verifikace reportů:** Nechat AI ověřit studie zmíněné v dokumentu (lekce z Deloitte)
- **Analýza konkurence:** Porovnat více produktů/služeb z různých zdrojů
- **Průzkum trhu:** Najít trendy, best practices, case studies

**Časová investice:** 10-20 minut (většinu času čeká AI)

**Nejlepší nástroje:** Claude (až 500 stránek), Gemini (50-100 stránek)

---

## Tipy & best practices

### Práce s kontextovým oknem

**Dělej:**
- Rozděl dlouhé dokumenty na menší části pro nástroje s menším oknem
- Používej Gemini nebo Notebook LM pro PDF 100+ stránek
- Když konverzace je moc dlouhá, nech AI shrnout a začni nový chat
- Kontroluj, jestli AI nezačíná halucinovat (znak vyčerpaného kontextu)

**Nedělej:**
- Nepokračuj v chatu, když AI začíná dávat divné odpovědi
- Nenechávej AI zpracovat více dat, než zvládne její kontextové okno

**Pro tip:** "Pokud si AI začne trochu vymýšlet, nechte si zhrnout konverzaci a začněte znovu, protože to je častokrát právě tím, že vyčerpá kontextové okno."

---

### Výběr správného modelu

**Dělej:**
- Používej rychlý model pro: čištění textů, formátování, běžné dotazy
- Používej přemýšlející model pro: analýzy, strategii, komplexní problémy
- Nastav si přímé zkratky v prohlížeči pro oba typy
- V Cursoru používej Planning funkci pro složité úkoly

**Nedělej:**
- Nespoléhej na auto-výběr modelu v ChatGPT
- Nepoužívej reasoning model na jednoduché úkoly (plýtvání časem a penězi)

**Pro tip:** "Já nechci, aby model sám volil. Já vím, jestli dávám komplexní úkol a chci, aby přemýšlel, nebo chci rychle tady vyčistit zprávu."

---

### Bezpečné použití AI

**Dělej:**
- Vypni "improve model for everyone" v nastavení ChatGPT a Claude
- Používej placené verze pro citlivá data
- Používej temporary/incognito chat pro důvěrné informace
- Kontroluj, jestli firma má firemní AI nástroje (bezpečnější)
- Zjisti si bezpečnostní nastavení každého nástroje (Filip poskytl audit)

**Nedělej:**
- Nedávej důvěrné informace do free verzí nástrojů
- Nepoužívej neověřené/malé poskytovatele pro citlivá data
- Nevěř, že "bezpečnost není riziko" - vždy je nějaké riziko

**Kategorie dat:**
- **Veřejná:** Cokoliv na internetu - použij jakýkoliv nástroj
- **Interní necitlivá:** Brainstorming, analýzy - používej placené verze s vypnutým učením
- **Důvěrné:** Pouze firemní nástroje nebo placené s privátním módem

**Pro tip:** "Pokud důvěřujeme firmám jako Microsoft nebo Google s našimi daty, měli bychom věřit i největším providerům AI."

---

### Efektivní prompting pro nástroje

**Dělej:**
- Začni s kontextem (kdo jsi, co děláš, co potřebuješ)
- Používej "What would you do in my shoes?" pro komplexní problémy
- Iteruj - první prompt je vždy jen začátek
- Dávej konkrétní feedback ("toto ne, udělej to spíš takhle")
- Používej screenshoty pro vysvětlení problémů

**Nedělej:**
- Neočekávej perfektní výsledek na první pokus
- Nepíš román - AI zvládá i strohé instrukce
- Nepoužívej vágní výrazy ("udělej to hezky") - specifikuj

**Pro tip - Iterativní ladění promptů:**
1. Vygeneruj základní výstup s jednoduchým promptem
2. Screenshot neuspokojivého výsledku
3. Ukaž AI screenshot: "Tento výstup špatně kopíroval styl. Potřebuji to více [konkrétní požadavek]"
4. AI automaticky upraví prompt
5. Zkopíruj upravený prompt zpět do asistenta
6. Testuj a opakuj

**Časová investice:** Typicky 5-10 iterací

---

### Práce s Multiple nástroji

**Dělej:**
- Porovnávej stejný prompt ve více nástrojích (ChatGPT vs Claude vs Gemini)
- Používej každý nástroj na jeho silné stránky:
  - Claude: Deep research, kritická analýza, business focus
  - ChatGPT: Kreativita, brainstorming, "friendly" výstupy
  - Gemini: Velké dokumenty, širší kontext
  - Copilot: Technické detaily
- Kombinuj nástroje v jednom workflow (Deep Research v Claude → analýza v Cursor)

**Nedělej:**
- Nespoléhej na jeden nástroj pro všechno
- Nevěř slepě jednomu výstupu - ověřuj z více zdrojů pro důležitá rozhodnutí

**Filip porovnával analýzu 200 textů:**
- Copilot: technické detaily
- Notebook LM: širší společenské změny
- Claude: biznis aspekty
- Každý se zaměřil na něco jiného!

**Klíčový poznatek:** "Nástroje, které používáme, velmi ovlivní, jak přemýšlíme, jakým způsobem budeme vytvářet produkty."

---

## Strategie adopce & implementace

### První krok: Porovnání dvou nástrojů

**Kontext:** Filip doporučuje každému účastníkovi jako domácí úkol.

**Konkrétní příklad:**
"Zkuste porovnat dva různé nástroje na stejný prompt. Vezměte třeba Copilot, Claude či GPT, udělejte si jeden prompt a schválně odešlete do více nástrojů."

**Jak to funguje:**
- Připravte jeden konkrétní úkol/dotaz
- Zadejte do 2-3 různých AI nástrojů
- Porovnejte výstupy
- Všímejte si rozdílů v tónu, hloubce, zaměření

**Proč to funguje:**
Praktická zkušenost je nejlepší učitel. Objevíte:
- Který nástroj preferujete
- Jaké jsou silné stránky každého
- Jak osobnost modelu ovlivňuje výstupy
- Kdy použít který nástroj

**Podobné aktivity se stejným principem:**
1. **A/B testing promptů** - Stejný nástroj, dva různé prompty na stejný úkol
2. **Model progression** - Začněte s free verzí, postupně vyzkoušejte placené
3. **Feature exploration** - Každý týden vyzkoušejte jednu novou funkci AI nástroje
4. **Use case rotation** - Každý den použijte AI na jiný typ úkolu (psaní, analýza, brainstorming)

**Nejlepší pro:**
- Začátečníky, kteří nevědí, který nástroj si vybrat
- Týmy, které rozhodují o nákupu licencí
- Každého, kdo chce rozumět nástrojům hlouběji

**Úskalí:**
- Neberte to jako "competition" - každý nástroj má své místo
- Jeden test nestačí - opakujte s různými úkoly

---

### Týmový AI Hackathon

**Kontext:** Filip zmiňuje v kontextu učení se novým nástrojům.

**Konkrétní příklad:**
"Pro learning nových nástrojů je super zorganizovat týmový AI hackathon, kde si každý vyzkouší něco nového."

**Jak to funguje:**
- Určí se časový rámec (2-4 hodiny)
- Každý člen týmu si vybere nástroj nebo use case na prozkoumání
- Experimentují samostatně, ale sdílejí objevy
- Na konci 10-15minutové prezentace nejlepších nálezů
- Diskuze o tom, co by mohli použít v praxi

**Proč to funguje:**
- Hands-on experimentace v bezpečném prostředí
- Peer learning - učíme se od kolegů
- Okamžitá aplikace na reálné problémy
- Buduje týmové know-how

**Podobné aktivity se stejným principem:**
1. **Show & Tell Sessions** - Týdenní 30min setkání, kde jeden člověk ukáže, co nového objevil s AI
2. **AI Tool Rotation** - Každý týden tým zkouší jeden konkrétní nástroj na společném projektu
3. **Problem-Solution Marketplace** - Lidé sdílejí problémy a jiní navrhují AI řešení, pak se společně implementují
4. **Parallel Experimentation** - Stejný úkol řeší více lidí různými AI nástroji, pak porovnají přístupy
5. **AI Office Hours** - Pravidelná hodina, kdy "AI champion" pomáhá ostatním s jejich konkrétními use cases

**Nejlepší pro:**
- Týmy 5-15 lidí
- Mix skill levels (začátečníci i pokročilí)
- Organizace v rané fázi AI adopce
- Když chcete rychle zjistit, které nástroje mají potenciál

**Úskalí:**
- Bez konkrétního problému k řešení může být hackathon příliš abstraktní
- Potřeba facilitátora, který udržuje momentum
- Důležité nastavit očekávání - nejde o dokonalá řešení, jde o učení

---

### "Ukaž, nepředepisuj" (Show, don't prescribe)

**Kontext:** Filipova filosofie adopce AI v týmech.

**Konkrétní příklad:**
"Nejlepší je, když ukážu konkrétní příklad, nebo když sám sdílím a tím pádem si to dokážou daleko lépe představit."

**Jak to funguje:**
- Místo instrukcí ("Musíte používat AI") ukažte reálný příklad
- Sdílejte své vlastní workflow
- Nařiďte konkrétní výstupy, které jste s AI vytvořili
- Zapojte lidi do live demo

**Proč to funguje:**
- Autentičtější než teoretické rady
- Lidé vidí reálný benefit
- Inspiruje k vlastnímu experimentování
- Odbourává strach z neznámého

**Podobné aktivity se stejným principem:**
1. **Live Workflow Walkthroughs** - Natočte/streamujte svůj běžný pracovní den s AI
2. **Before/After Showcases** - Ukažte úkol před AI a po AI (čas, kvalita)
3. **Tool-of-the-Week Demos** - Každý týden někdo z týmu předvede nástroj live
4. **AI Wins Channel** - Slack/Teams kanál na sdílení úspěchů s AI
5. **Pair Working Sessions** - Pracujte s kolegou na jeho úkolu s použitím AI

**Nejlepší pro:**
- Skeptické týmy
- Manažery/lídry, kteří chtějí inspirovat
- Onboarding nových členů týmu
- Když jsou lidé "too busy to learn"

**Úskalí:**
- Musíte opravdu používat AI sami - není to o PowerPointech
- Ukažte i neúspěchy - autenticita je klíčová

---

### Iteruj místo perfekcionismu (Iterate over perfection)

**Kontext:** Základní přístup k práci s AI nástroji.

**Konkrétní příklad:**
Jozef KubÃ­nek: "Čtyři týdny jsem čekal na ITáky, aby mi udělali e-mailový podpis. S ChatGPT jsem to vyřešil během čtyř, pěti, šesti promptů."

**Jak to funguje:**
- První pokus nikdy není perfektní
- Každý prompt je feedback pro další iteraci
- Postupné zlepšování než čekání na dokonalost
- "Done is better than perfect"

**Proč to funguje:**
- Rychlejší výsledky než čekání na experta
- Učíte se během procesu
- Můžete adjustovat podle potřeby
- Není to "all or nothing"

**Podobné aktivity se stejným principem:**
1. **Weekly Iterations** - Každý týden vylepšete jeden prompt/workflow o 10%
2. **Version Control for Prompts** - Ukládejte si verze promptů (v1, v2, v3) a sledujte zlepšení
3. **Feedback Loops** - Po každém AI výstupu: Co fungovalo? Co ne? Jak upravit?
4. **90% Rule** - Cílte na 90% kvalitu s AI, zbylých 10% dodělat ručně
5. **Prototype Fridays** - Jeden den v týdnu na rychlé prototypy bez očekávání perfekce

**Nejlepší pro:**
- Perfekcionisty, kteří se bojí začít
- Projekty s time pressure
- Learning by doing přístup
- Agilní týmy

**Úskalí:**
- Někdy je potřeba více času na přípravu než hned začít (strategické projekty)
- Neberte to jako výmluvu pro nekvalitní práci
- Některé projekty vyžadují vyšší kvalitu od začátku (např. s klienty)

---

### Black Friday AI nákupy

**Kontext:** Filip doporučuje strategický přístup k nákupu AI nástrojů.

**Konkrétní příklad:**
"Blíží se Black Friday a Cyber Monday a některé aplikace nabízejí zvýhodněnou koupy. Pokud si vyberete nějaký nástroj a on vám dá slevu, doporučuji koupit si to na rok."

**Jak to funguje:**
- Sledujte Black Friday deals (typicky 40-50% slevy)
- Vyberte si 2-3 nástroje, které už používáte ve free verzi
- Kupte roční předplatné se slevou
- Nástroje na přepisy mívají největší slevy

**Proč to funguje:**
- Ušetříte stovky dolarů ročně
- Motivace používat nástroj (už jste zaplatili)
- Roční plán = méně starostí s platbami
- Lepší ROI než měsíční platby

**Podobné aktivity se stejným principem:**
1. **Bundle Deals** - Lenis Newsletter ($200/rok za desítky nástrojů v hodnotě $10,000)
2. **Team Licenses** - Kupte více licencí najednou pro větší slevu
3. **Annual Audits** - Jednou ročně zrevidujte, které nástroje skutečně používáte
4. **Tool Consolidation** - Místo 5 nástrojů za $20 najděte 1 za $50, který dělá všechno
5. **Free Tier Testing** - Před nákupem vždy otestujte free verzi alespoň týden

**Nejlepší pro:**
- Freelancery a malé firmy s omezeným budgetem
- Jednotlivce, kteří si platí nástroje sami
- Ty, kdo chtějí vyzkoušet více nástrojů levně

**Úskalí:**
- Nekupte nástroj jen kvůli slevě - musíte ho opravdu používat
- Roční závazek = musíte být jistí, že nástroj chcete
- Sledujte, jestli se nevyplatí čekat na lepší deal

---

### Just-in-time software adoption

**Kontext:** Filipova filosofie přístupu k nástrojům.

**Konkrétní příklad:**
Notebook LM + úvod nástrojů: "Dělám to takhle rychle, jako jednoduchý Copilot. A on mi udělá takhle krásný, sformátovaný [výstup]."

**Jak to funguje:**
- Neinstalujte desítky nástrojů "pro případ, že"
- Počkejte, až máte konkrétní potřebu
- Pak najděte nástroj, který přesně řeší ten problém
- Naučte se ho používat pro ten jeden use case
- Postupně objevujte další funkce

**Proč to funguje:**
- Menší overwhelm z množství nástrojů
- Učíte se s konkrétním cílem = lepší motivace
- Méně nepoužívaných subscriptions
- Fokus na to, co opravdu potřebujete

**Podobné aktivity se stejným principem:**
1. **Problem-First Approach** - Začněte s problémem, pak hledejte nástroj (ne naopak)
2. **One Tool Deep** - Místo 10 nástrojů povrchně, naučte se 1 důkladně
3. **Quarterly Tool Review** - Každé 3 měsíce: Které nástroje jsem skutečně použil?
4. **Pain Point Mapping** - Mapa největších bolestí → pak hledejte nástroje
5. **Tool Substitution** - Před přidáním nového nástroje zkuste, jestli to nezvládne existující

**Nejlepší pro:**
- Ty, kdo se cítí overwhelmed množstvím nástrojů
- Pragmatické týmy
- Organizace s omezeným budgetem
- Začátečníky v AI

**Úskalí:**
- Může vést k "analysis paralysis" - neustálé hledání perfektního nástroje
- Někdy je dobré experimentovat i bez konkrétní potřeby (learning)

---

## Příběhy úspěchu účastníků

### Ivo Benc (T-Mobile) - Analýza technických dat

**Výzva:** Analyzovat 15,000 řádků komunikace mobilních terminálů se sítí, najít featury, které zařízení podporuje/nepodporuje

**Řešení:** 
- Začal s ChatGPT - vytvořil asistenta s pravidly
- ChatGPT hlásil "cannot process 15,000 lines"
- Přešel na Cursor s privátním módem
- Cursor automaticky rozdělil data a zpracoval

**Použité nástroje:** ChatGPT (neúspěšně), Cursor (úspěšně)

**Výsledek:** Tabulka s pásmy, featury, primary cells - přesně jak potřeboval

**Klíčový poznatek:** "Tohle byl ten use case, který vypadá hodnÄ› komplikovanÄ›, ale pÅ™esnÄ› tady ten klÃ­ÄovÃ½ moment: VyskouÅ¡el jsem nÄ›co a bÄ›hem toho jsem iteroval a vylepÅ¡oval."

**Adopční lekce:** 
- První nástroj nemusí fungovat - zkoušejte další
- Pro reálný use case z práce je tým ochotnější AI přijmout
- Iterace je klíčová

---

### Jozef Kubínek - E-mailový podpis

**Kdo:** IT profesionál s MacBookem (jediný v týmu)

**Výzva:** Čtyři týdny čekal na ITáky, aby mu udělali e-mailový podpis, který fungoval na Macu. Neustále posílali nové verze, nic nefungovalo.

**Řešení:** Dal celý problém do ChatGPT - během 4-6 promptů vyřešeno

**Použité nástroje:** ChatGPT

**Výsledek:** Funkční e-mailový podpis

**Klíčový poznatek:** "Pro mě to bylo takové spíš jako zlomové, že jsem viděl, že já i bez nějakého širšího kontextu, když vím, jak má vypadat ten výsledek, tak mi to bylo schopný [AI udělat]."

**Autonomie:** "Ta autonomie, kterou jsi zmiňoval v tom sdílení, to znamená, že já nemusím čekat na ostatní a můžu si tu danou věc za pomocí AI udělat, je zkrátka naprosto geniální."

**Adopční lekce:**
- Malé úspěchy jsou stejně důležité jako velké projekty
- Autonomie a nezávislost na IT oddělení je obrovská motivace
- Ukažte týmu "quick wins"

---

### Martina Habová - Dashboard pro AI report

**Kdo:** Konzultantka pracující s klientem na AI adopci

**Výzva:** Vytvořit brandový dashboard s výsledky dotazníku o používání AI ve firmě

**Řešení - Fáze 1 (částečný neúspěch):**
- Začala v Claude Web3 free verzi
- Sestavila dashboard od nuly s pomocí AI
- Začalo to fungovat, pak narazila na problémy
- Iterace vedla k tomu, že se "točila v koleÄkÃ¡ch"
- Free verze ji zastavovala po pár promptech (čekání 5 hodin)

**Řešení - Fáze 2 (úspěch):**
- Přešla na Replit (doporučený Filipem)
- Vytvořila fiktivní CSV data
- Replit vygeneroval kompletní dashboard s drill-down funkcionalitou
- Vizuálně krásný výstup

**Použité nástroje:** Claude (částečný úspěch), Replit (úspěch)

**Výsledek:** Interaktivní dashboard s možností filtrování podle oddělení, brandovým designem

**Klíčový poznatek:** "Já jsem z toho úplně nadšená, protože jsem si nedokázala možná týden zpátky představit, že bych něco takového jako já s mými nulovými IT schopnostmi byla schopná dosáhnout."

**Adopční lekce:**
- Když jeden nástroj nefunguje, zkuste jiný
- Persistence je klíčová - nevzdávejte to
- AI umožňuje i non-tech lidem vytvářet technické řešení

---

### Filip Dřímalka - Příprava workshopu

**Výzva:** Připravit personalizovaná doporučení pro 84 účastníků programu FAIL

**Řešení s Cursor:**
1. Složka s různými soubory (registrace, dotazníky, LinkedIn profily, úkoly)
2. Jeden prompt: "Analyzuj tento adresář a udělej konsolidovaný výstup. Jednu tabulku, kde bude všechno."
3. Cursor pracoval samostatně (agentsky)
4. Výsledek: 67 sloupců s kompletními daty + dokumentace

**Použité nástroje:** Cursor s agentským módem

**Výsledek:** Strukturovaná data pro personalizované konzultace, profily účastníků, pokrytí dat

**Časová investice:** Jeden prompt = cca 10-15 minut práce AI

**Klíčový poznatek:** "Pro mě je to absolutně největší gamechanger při práci s AI, protože nahrazuje spoustu ručních kroků, které bych musel dělat."

**Použití Cursor na:**
- Analýzu dat (ne programování aplikací)
- Spojování tabulek
- Tvorba obsahu (návody pro FAIL)
- Čištění a strukturování souborů

---

## Zdroje & reference

**Zmíněné nástroje:**
- ChatGPT: https://chat.openai.com - Univerzální chatbot
- Claude: https://claude.ai - Pokročilý chatbot s nejlepším Deep Research
- Gemini: https://gemini.google.com - Google AI s největším kontextovým oknem
- Notebook LM: https://notebooklm.google.com - Práce s vlastními dokumenty
- Cursor: https://cursor.sh - AI code editor pro všechny
- Replit: https://replit.com - Tvorba aplikací bez programování
- Gamma: https://gamma.app - AI prezentace
- Perplexity: https://perplexity.ai - AI vyhledávač
- GitHub Copilot: https://github.com/features/copilot - Programátorský asistent

**Speciální nabídky:**
- Lenis Newsletter: https://www.lennysnewsletter.com/ - $200/rok za desítky AI nástrojů
- There's an AI for that: https://theresanaiforthat.com - 40,000+ AI aplikací
- Hugging Face: https://huggingface.co - 2+ miliony AI modelů

**Filipův bezpečnostní audit:**
[Link byl zmíněn, ale nebyl uveden konkrétně - Filip ho poskytne účastníkům]

**Black Friday tipy:** 
- Sledujte nástroje na přepis hlasu (40-50% slevy)
- Gamma, Replit a další často ve slevách
- Kupte roční předplatné se slevou

**Blog doporučení:**
- Seth Godin - Blog o nástrojích a produktivitě
  - "Average tools" - Proč průměrné nástroje škodí
  - "Using tools" - Jak se učit používat složité nástroje

---

## Quick reference

**Nejdůležitější poznatky:**
1. **Zaměřte se na první dvě úrovně** - Chatboty a asistenti jsou základ pro všechny
2. **Kontextové okno rozhoduje** - Velké soubory = Gemini/Notebook LM, běžná práce = ChatGPT/Claude
3. **Deep Research je game-changer** - Ověřování faktů, průzkum, komplex informace z 100+ zdrojů
4. **Cursor není jen pro programátory** - Nejlepší nástroj na analýzu dat a automatizaci i pro non-tech
5. **Každý model má jinou osobnost** - Claude (kritický, business), ChatGPT (friendly, kreativní), Gemini (široký kontext)

**Action items pro začátečníky:**
- Zaregistrovat se do ChatGPT, Claude a Notebook LM (free verze stačí na start)
- Vyzkoušet stejný prompt ve dvou různých nástrojích
- Vytvořit si prvního AI asistenta pro opakující se úkol (např. čištění emailů)
- Použít Deep Research na jeden reálný pracovní problém
- Vypnout "improve model for everyone" v nastavení

**Běžné chyby:**
- **Očekávání práce od A do Z** - AI nedělá celý úkol sám, musíte proces rozdělit na kroky
- **Používání free verzí na citlivá data** - Vždy platit a vypnout učení z dat
- **Jeden nástroj na všechno** - Každý nástroj má silné stránky, kombinujte je
- **Nevyužití kontextového okna** - Když se chat zastaví nebo AI začne halucinovat, začněte nový
- **Spoléhání se na auto-výběr modelu** - Raději si vyberte sami rychlý vs. přemýšlející

**Pro týmy a organizace:**
- **Ukažte, nepředepisujte** - Live demo je lepší než PowerPoint o AI
- **Týmové hackathony** - 2-4 hodiny společného experimentování s AI
- **Show & Tell Sessions** - Týdenní sdílení objevů
- **Problem-First přístup** - Začněte s konkrétním problémem, pak hledejte nástroj
- **Black Friday nákupy** - Roční předplatné se slevou pro celý tým

---

## Filipův přístup k adopci AI nástrojů

**Potřebné změny mindsetu:**
- AI nedělá práci za vás od A do Z - je to partner, ne náhrada
- První pokus není perfektní - iterace je klíčová
- "Too busy to learn" = cesta k frustraci
- Průměrné nástroje škodí více než pomáhají
- Nástroje nás formují - vybírejte pečlivě

**Praktická implementace:**
- Začněte s placenými verzemi top nástrojů (ChatGPT/Claude)
- Porovnejte minimálně 2 nástroje na stejný úkol
- Vytvořte si asistenty pro opakující se úkoly
- Experimentujte 4-10 hodin týdně (ne jen "práce do práce")
- Používejte Deep Research pro ověřování a výzkum

**Budování návyků:**
- Každý den použijte AI na jiný typ úkolu
- Ukládejte si vylepšené prompty (verze v1, v2, v3)
- Sdílejte úspěchy s týmem (AI Wins channel)
- Týdenní iterace - každý týden o 10% lepší workflow

**Týmové aktivity:**
- Týmové AI hackathony (2-4 hodiny)
- Show & Tell Sessions (týdenní 30 min)
- AI Office Hours (expert pomáhá ostatním)
- Live Workflow Walkthroughs (natočte svůj den s AI)

**Filipova osobní sada nástrojů:**
- **Primární:** Claude (business focus, kritické myšlení)
- **Sekundární:** ChatGPT (kreativita)
- **Dokumenty:** Notebook LM (velké PDF)
- **Data & automatizace:** Cursor (30% času)
- **Strategie:** Deep Research v Claude

**Jak vybírá nástroje:**
- Kvalita > Cena (ale využívá Black Friday slevy)
- Placené verze pro reálnou práci
- Top provideři (OpenAI, Anthropic, Google) kvůli bezpečnosti
- Testuje 1-2 měsíce před finálním rozhodnutím
- Preferuje jednoduchost (Cursor vs. VS Code s pluginy)