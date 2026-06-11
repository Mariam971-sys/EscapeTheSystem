Öppna UPPGIFT.md och börja.
# Escape the System

## Beskrivning

Escape the System är ett escape room-spel byggt med React, TypeScript och React Router.

Spelaren är instängd i Project NEXUS och måste ta sig genom flera rum genom att lösa pussel och samla föremål. Varje rum kräver ett specifikt föremål för att lösas. När ett rum löses får spelaren ett nytt föremål som används i nästa rum.

## Funktioner

* React Router med dynamiska routes
* Navigation mellan rum
* Inventory hanterat med React Context
* Pussellogik baserad på föremål
* Rum visar olika innehåll beroende på om de är lösta eller inte
* Ledtrådar med useSearchParams
* Victory-sida efter att spelet har klarats
* Redirect för ogiltiga URL:er

## Starta projektet

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna sedan:

```txt
http://localhost:5173
```

## Tekniker

* React
* TypeScript
* React Router DOM
* Context API
* Vite
