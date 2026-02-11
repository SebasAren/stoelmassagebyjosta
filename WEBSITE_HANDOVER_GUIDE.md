# Website Overname Handleiding - Stoelmassage by Josta

Welkom bij de website beheergids voor Stoelmassage by Josta. Dit document legt uit hoe u het Decap CMS beheerderspaneel kunt gebruiken om uw website-inhoud bij te werken en te beheren.

## Inhoudsopgave

1. [Toegang tot het Beheerderspaneel](#toegang-tot-het-beheerderspaneel)
2. [Overzicht van het Beheerderspaneel](#overzicht-van-het-beheerderspaneel)
3. [Website-inhoud Bewerken](#website-inhoud-bewerken)
4. [Nieuwe Inhoud Toevoegen](#nieuwe-inhoud-toevoegen)
5. [Werken met Afbeeldingen](#werken-met-afbeeldingen)
6. [Tips voor Inhoudsorganisatie](#tips-voor-inhoudsorganisatie)
7. [Wijzigingen Publiceren](#wijzigingen-publiceren)
8. [Problemen Oplossen](#problemen-oplossen)

## Toegang tot het Beheerderspaneel

**URL:** `https://uwdomein.nl/admin.html`

**Authenticatie:**

- Het systeem gebruikt GitHub-authenticatie
- U heeft toegang nodig tot de GitHub-repository: `SebasAren/raapisdingman`
- Neem contact op met de websitebeheerder als u toegang nodig heeft

## Overzicht van het Beheerderspaneel

Het Decap CMS-beheerderspaneel heeft een linkernavigatiebalk met alle inhoudsverzamelingen:

- **Website** - Basiswebsite-instellingen
- **Hero Sectie** - Homepage hero-sectie
- **Stoelmassage Sectie** - Stoelmassage dienstinformatie
- **Contactgegevens** - Contactinformatie
- **Getuigenissen** - Klantreviews
- **Over Mij Pagina** - Over mij pagina-inhoud
- **Voordelen** - Voordelen van massagetherapie
- **Navigatie Menu** - Navigatiemenu-items

## Website-inhoud Bewerken

### 1. Website-instellingen (Website)

**Locatie:** Website-verzameling

**Velden die u kunt bewerken:**

- **Site Titel**: De hoofdtitel die in browsertabs wordt getoond
- **Site Beschrijving**: Meta-beschrijving voor zoekmachines
- **Bedrijfsnaam**: Uw bedrijfsnaam
- **Slogan**: Korte slogan
- **LinkedIn URL**: Uw LinkedIn-profiellink

**Hoe te bewerken:**

1. Klik op "Website" in de zijbalk
2. Werk de velden bij zoals nodig
3. Klik op "Publiceren" om wijzigingen op te slaan

### 2. Hero Sectie (Hero Sectie)

**Locatie:** Hero Sectie-verzameling

**Velden:**

- **Kop**: Hoofdkop op de homepage
- **Beschrijving**: Subtitel/beschrijvingstekst
- **Hero Afbeelding**: Achtergrondafbeelding voor hero-sectie

**Aanbevelingen voor afbeeldingen:**

- Gebruik hoogwaardige landschapsafbeeldingen (1920x1080px aanbevolen)
- Bestandsgrootte onder 500KB voor optimale laadsnelheid

### 3. Stoelmassage Sectie (Stoelmassage Sectie)

**Locatie:** Stoelmassage Sectie-verzameling

**Velden:**

- **Titel**: Sectietitel
- **Beschrijving**: Hoofdbeschrijving van stoelmassage
- **Wat is Stoelmassage?**: Gedetailleerde uitleg
- **Voordelen**: Lijst met voordelen (scheid met enters)
- **Praktische Info**: Praktische informatie voor klanten

### 4. Contactinformatie (Contactgegevens)

**Locatie:** Contactgegevens-verzameling

**Velden:**

- **Telefoon**: Uw contacttelefoonnummer
- **E-mail**: Uw e-mailadres
- **Website**: Uw website-URL
- **Laatste Afspraak Notitie**: Optionele notitie over laatste afspraken
- **Spoed Notitie**: Optionele spoedcontactinformatie

### 5. Over Mij Pagina (Over Mij Pagina)

**Locatie:** Over Mij Pagina-verzameling

**Dit is een uitgebreide sectie met meerdere onderdelen:**

**Basisinformatie:**

- **Professionele Naam**: Uw professionele naam
- **Professionele Foto**: Uw professionele foto

**Reis Sectie:**

- **Reis Titel**: Titel voor uw professionele reis
- **Reis Inhoud**: Gedetailleerd verhaal (ondersteunt markdown)

**Filosofie Sectie:**

- **Filosofie Titel**: Titel voor uw filosofie
- **Filosofie Items**: Lijst met filosofiepunten (titel + beschrijving)

**Referenties:**

- **Opleiding**: Uw opleidingsgeschiedenis
- **Certificeringen**: Professionele certificeringen
- **Lidmaatschappen**: Professionele lidmaatschappen
- **Specialisaties**: Specialisatiegebieden

**Call-to-Action:**

- Optionele CTA-sectie onderaan

## Nieuwe Inhoud Toevoegen

### 1. Getuigenissen Toevoegen (Getuigenissen)

**Locatie:** Getuigenissen-verzameling

**Stappen:**

1. Klik op "Getuigenissen" in de zijbalk
2. Klik op de knop "Nieuwe Getuigenissen"
3. Vul in:
   - **Naam**: Naam van de klant
   - **Getuigenis**: Hun reviewtekst
   - **Behandeling**: Dienst die ze ontvingen
   - **Datum**: Datum van de dienst
   - **Beoordeling**: 1-5 sterren
   - **Uitgelicht**: Vink aan om op de homepage te tonen
   - **Volgorde**: Weergavevolgorde (lagere nummers eerst)
4. Klik op "Publiceren"

**Tips:**

- Uitgelichte getuigenissen verschijnen op de homepage
- Gebruik volgordenummers om de weergavevolgorde te beheersen (10, 20, 30 voor eenvoudig herschikken)

### 2. Voordelen Toevoegen (Voordelen)

**Locatie:** Voordelen-verzameling

**Stappen:**

1. Klik op "Voordelen" in de zijbalk
2. Klik op "Nieuwe Voordelen"
3. Vul in:
   - **Titel**: Korte titel van het voordeel
   - **Beschrijving**: Gedetailleerde beschrijving
   - **Icoon**: Icoonnaam (gebruik Font Awesome-iconen zoals "heart", "star", etc.)
   - **Volgorde**: Weergavevolgorde
4. Klik op "Publiceren"

### 3. Navigatiemenu-items Toevoegen (Navigatie Menu)

**Locatie:** Navigatie Menu-verzameling

**Stappen:**

1. Klik op "Navigatie Menu" in de zijbalk
2. Klik op "Nieuw Navigatie Menu"
3. Vul in:
   - **Label**: Menu-tekst
   - **URL**: Linkbestemming (gebruik /about voor interne pagina's)
   - **Is Knop**: Vink aan voor knopstijl
   - **Volgorde**: Menupositie
4. Klik op "Publiceren"

**Opmerking:** Wees voorzichtig met wijzigingen in de navigatie, omdat deze de gebruiksvriendelijkheid van de site beïnvloeden

## Werken met Afbeeldingen

### Ondersteunde Afbeeldingstypen:

- JPG, PNG, GIF (JPG aanbevolen voor foto's)

### Uploadproces:

1. Klik op een afbeeldingsveld
2. Selecteer de knop "Uploaden"
3. Kies een bestand van uw computer
4. Wacht tot de upload is voltooid
5. Klik op "Invoegen"

### Tips voor Afbeeldingsoptimalisatie:

- **Hero-afbeeldingen**: 1920x1080px, onder 500KB
- **Professionele foto's**: 800x800px, onder 300KB
- Gebruik tools zoals TinyPNG om te comprimeren voordat u uploadt

## Tips voor Inhoudsorganisatie

### Volgordesysteem:

De meeste verzamelingen gebruiken een "Volgorde"-veld:

- Lagere nummers verschijnen eerst
- Gebruik stappen van 10 (10, 20, 30) voor eenvoudig herschikken
- Voorbeeld: Volgorde 10, 20, 30 maakt later invoegen op 15 mogelijk

### Uitgelichte Inhoud:

Sommige verzamelingen hebben "Uitgelicht"-selectievakjes:

- Uitgelichte getuigenissen verschijnen op de homepage
- Uitgelichte voordelen kunnen speciale opmaak krijgen

### Markdown-opmaak:

Sommige tekstvelden ondersteunen markdown:

- `# Kop` voor koppen
- `**vette tekst**` voor vet
- `*cursieve tekst*` voor cursief
- `- Lijstitem` voor opsommingstekens

## Wijzigingen Publiceren

### Hoe het Werkt:

1. Alle wijzigingen worden aanvankelijk opgeslagen als concepten
2. Klik op "Publiceren" om wijzigingen live te maken
3. Wijzigingen worden gecommit aan de GitHub-repository
4. De website wordt automatisch opnieuw opgebouwd (kan 1-2 minuten duren)

### Beste Praktijken:

- Maak meerdere wijzigingen voordat u publiceert om frequente herbouwen te voorkomen
- Bekijk alle wijzigingen voordat u publiceert
- Wijzigingen worden versiebeheerd in GitHub

## Problemen Oplossen

### Veelvoorkomende Problemen:

**Probleem: Wijzigingen verschijnen niet**

- Oplossing: Wacht 1-2 minuten tot de herbouw, ververns de pagina vervolgens (Ctrl+F5)

**Probleem: Afbeeldingsupload mislukt**

- Oplossing: Controleer de bestandsgrootte (max 2MB), probeer een ander formaat

**Probleem: Kan niet inloggen**

- Oplossing: Zorg ervoor dat u GitHub-toegang heeft tot de repository

**Probleem: Opmaak ziet er verkeerd uit**

- Oplossing: Controleer de markdown-syntaxis, vermijd speciale tekens

### Hulp Krijgen:

- Neem contact op met de websitebeheerder: [uw contactinformatie]
- Decap CMS-documentatie: https://decapcms.org/docs/
- GitHub-issues: https://github.com/SebasAren/raapisdingman/issues

## Snelle Referentie Cheat Sheet

| Taak                      | Locatie         | Belangrijke Velden            |
| ------------------------- | --------------- | ----------------------------- |
| Bedrijfsnaam bijwerken    | Website         | Bedrijfsnaam                  |
| Hero-afbeelding wijzigen  | Hero Sectie     | Hero Afbeelding               |
| Getuigenis toevoegen      | Getuigenissen   | Naam, Getuigenis, Beoordeling |
| Telefoonnummer bijwerken  | Contactgegevens | Telefoon                      |
| Nieuw voordeel toevoegen  | Voordelen       | Titel, Beschrijving, Icoon    |
| Navigatie wijzigen        | Navigatie Menu  | Label, URL, Volgorde          |
| Over mij-pagina bijwerken | Over Mij Pagina | Reis Inhoud, Filosofie Items  |

## Belangrijke Opmerkingen

1. **Backup**: Alle wijzigingen worden automatisch opgeslagen in GitHub
2. **Responsief**: Afbeeldingen moeten werken op mobiele apparaten
3. **SEO**: Site-beschrijving beïnvloedt zoekmachineresultaten
4. **Toegankelijkheid**: Gebruik beschrijvende linktekst in navigatie

Deze handleiding zou alles moeten bevatten wat nodig is om de Stoelmassage by Josta-website effectief te beheren. Houd hem bij de hand voor referentie bij het maken van updates!
