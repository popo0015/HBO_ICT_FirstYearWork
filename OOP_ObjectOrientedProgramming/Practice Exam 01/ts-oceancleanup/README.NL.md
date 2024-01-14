# Examen Object Oriented Programming (OOP)

| Vak | Object Oriented Programming |
|---|---|
| Code | CU75004V1 |
| Datum | 15 December 2022 |
| Tijd | 09:00 |
| Tijdsduur | 180 minuten (+extra) |
| Inleveren | Inleveren via CodeGrade |

### Instructies
 - De technische vereisten voor het spel beginnen op pagina 2.
 - Download de starter .ZIP uit Learn.
 - Unzip en open de directory in je persoonlijke code editor, bijvoorbeeld Visual Studio Code.
 - Run `npm install`.
 - Implementeer de technische vereisten.
 - Run `npm run build` om de game te compileren. (Je kunt ook "watch mode" gebruiken met `npm run watch`).

### Toegestaan
 - Gebruik van je eigen laptop 

### NIET Toegestaan
 - Gebruik van boeken en/of eigen notities
 - Gebruik van internet als informatiebron of ter referentie
 - Gebruik van internet als communicatiemiddel (e-mail, Teams, Discord, posts op Stack Overflow, enzovoort)
 - Gebruik van andere communicatiemiddelen zoals bijvoorbeeld een mobiele telefoon
 - Gebruik van oortjes en hoofdtelefoon

### Inleveren
 - Inleveren op de bijbehorende CodeGrade.
 - Lever ENKEL je *.ts bestanden in
 - Het is toegestaaan om tijdens het examen meerdere keren in te leveren.
 - CodeGrade test enkel: 1) dat jouw code succesvol compileert en 2) de output van ESLint. De rest van het examen wordt handmatig nagekeken.
 - De laatste inlevering wordt beschouwd als je uiteindelijke inlevering en zal beoordeeld worden.
 - De beoordelingscriteria staan op pagina 4.

<div class="page"/>

# Ocean Cleanup
> Er bevinden zich naar schatting 5.25 biljoen (10^12) stukken plastic afval in de oceanen.

Met behulp van je toetsenbord bestuur je een net in de oceaan. Vang al het afval in het net, maar vermijd de vissen!

## Voorbeeld demo

Je kunt de game spelen op [demo hier](https://hz-hbo-ict.github.io/ts-oceancleanup/).

## Technische Vereisten

 - Het klassediagram is gegeven als uitgangspunt. Gebruik overerving (inheritance) en polymorfisme op een correcte manier.

 - De aangeleverde bestanden `GameLoop.ts`, `CanvasRenderer.ts` en `KeyListener.ts` mogen niet gewijzigd worden.

 - De speler (![](./assets/player.png)) bevindt zich aan de rechterzijde van het scherm en kan omhoog en omlaag bewegen door middel van gebruik van het toetsenbord.

 - Tussen de 300ms tot 600ms (milliseconden) verschijnt er telkens een nieuwe vis óf een stuk afval aan de linkerkant van het scherm, op een willekeurige hoogte. Er verschijnt in 70% van de gevallen een vis en in 30% van de gevallen een stuk afval.

- Er zijn 3 verschillende vissen. Elke vis heeft een bepaalde kans om te verschijnen, en levert een aantal minpunten op:
    1. Vis ![](./assets/fish1.png): -5 punten, 33% kans om te verschijnen
    2. Vis ![](./assets/fish2.png): -10 punten, 33% kans om te verschijnen
    3. Vis ![](./assets/fish3.png): -15 punten, 34% kans om te verschijnen

 - Er zijn 3 verschillende soorten afval, elke soort afval levert de speler een aantal punten op en heeft een kans om te verschijnen:
    1. Afval ![](./assets/waste1.png): +10 punten, 50% kans om te verschijnen
    2. Afval ![](./assets/waste2.png): +20 punten, 30% kans om te verschijnen
    3. Afval ![](./assets/waste3.png): +30 punten, 20% kans om te verschijnen

 - Elke vis zwemt met een snelheid van 0.2px per verstreken miliseconde van links naar rechts over het scherm. Afval beweegt met 0.3px per verstreken miliseconde in dezelfde richting.

 - **Blubber!** Wanneer een stuk afval zich tussen de 400 en 450 pixels van de linkerkant van het scherm bevindt, dan is er een kans van 10% dat het verandert in blubber. Het stuk afval zal dan veranderen in blubber ![](./assets/toxic.png). Als de speler de blubber vangt krijgt hij 100 punten. De snelheid van blubber is 0.35px per verstreken miliseconde, van links naar rechts.

 - De speler vangt de vis of het afval wanneer de afbeeldingen botsen.

 - Het spel is voorbij wanneer de score 0 of minder is óf wanneer de speler 10 of meer vissen gevangen heeft.

<div class="page"/>

### Klasse Diagram
![](./docs/classdiagram.svg)

*Het is toegestaan om af te wijken van dit klassediagram, zolang de juiste principes van object georiënteerd programmeren gehandhaafd blijven.*

## Extra functionaliteit
De Gouden Capsule (![](./assets/capsule.png)) verwijdert al het afval dat zich op dat moment in het water bevindt. De Gouden Capsule heeft een kans van 5% om te verschijnen en is 0 (nul) punten waard. Wanneer de speler de Gouden Capsule vangt verdwijnt al het afval dat op dat moment op het scherm zichtbaar is en worden de punten van dat afval bij de score opgeteld. De Gouden Capsule beweegt van links naar rechts over het scherm met een snelheid van 0.3px per verstreken milliseconden én drijft naar boven met een snelheid van 0.03px per verstreken milliseconde.

Om deze functionaliteit te implementeren moet het design van een aantal klassen uitgebreid worden. Je hoeft dit design niet in te leveren.

*Besteed geen tijd aan de extra functionaliteit als de basisfunctionaliteit nog niet klaar is!*

<div class="page"/>

# Beoordelingscriteria

**Scoringsdrempel:** Code moet foutloos compileren in de TypeScript compiler. Als de code niet compileert, is het cijfer een 1,0. De beoordelaar kan bij simpele compilatiefouten proberen de fout binnen 30 seconden op te lossen. Als dit lukt, wordt het examen alsnog beoordeeld.

| No | Criterion | Insufficient | Sufficient | Good | Excellent |
|---|---|---|---|---|---|
| 0  | Code Compiles | Code does not compile. (0 pnts) | Code must compile without any errors from the TypeScript compiler. (10 pnts) |  |  |
| 1 | Code Quality & Style | Style and quality deficient. ESLint errors are present. (0 pnts) | Types are properly used for variables, attributes and methods. Some ESLint warnings (less than 5). (5 pnts) | Types are properly used. No ESLint warnings, however comments and documentation insufficient. (7 pnts) | Types are properly used. No ESLint problems. Good quality and style, including complete JSDocs. (10 pnts) |
| 2 | Object Oriented Programming Principles & Concepts    | Most classes missing. Implementation of most class members (attributes and methods) are absent. (0 pnts)    | Basic classes for functionality of game present. All required  class members are implemented. (10 pnts) | Most classes required for functional game are present with appropriate use of composition. Abstract classes are absent. Most class members appropriately communicate. (15 pnts)   | Classes required for functional game (inherited and abstract) are present with good use of inheritance and composition. Polymorphism appropriately used to reduce code duplication (30 pnts) |
| 3 | Game Functionality | Game has little to no functionality. (0 pnts) | Game is playable but not complete. Functionality is absent. (20 pnts) | Game is fundamentally complete, but not all features are present. (30 pnts) | Game functions exactly as per requirements. (40 pnts) |
| 4 | Bonus | Bonus feature not attempted. (0 pnts) | Traces of bonus feature present, but not functional. (3 pnts) | Bonus feature functional, but incomplete. (6 pnts) | Bonus feature functions exactly as per requirements. (10 pnts) |

## Credits
 - https://www.freepik.com/free-vector/sea-background-video-conferencing_9453742.htm
 - https://www.freepik.com/free-vector/garbage-sorting-set_13146308.htm
 - https://www.freepik.com/free-vector/exotic-fish-set_4187133.htm
 - https://www.freepik.com/free-vector/slime-splashes-set_9176817.htm
 - https://www.freepik.com/free-vector/golden-capsule-fish-oil-vitamin_8368280.htm
