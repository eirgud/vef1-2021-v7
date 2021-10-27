/**
 * Skæri, blað, steinn.
 * Spilað gegnum console.
 */

/** Hámarks fjöldi best-of leikja, ætti að vera jákvæð heiltala stærri en 0 */
const MAX_BEST_OF = 10;

/** Global breyta sem heldur utan um heildar sigra */
let wins = 0;

/** Global breyta sem heldur utan um heildar töp */
let losses = 0;

/**
 * Athugar hvort gefin tala sé gild sem best-of gildi.
 * @param {number} bestOf Tala sem skal athuga
 * @return {boolean} true eða false
 */
function isValidBestOf(bestOf) {
  // TODO útfæra
  if ( bestOf % 2 !== 0 && bestOf < MAX_BEST_OF) {
    return true;
  }
  else {
   return false;
  }
}
console.assert(isValidBestOf(1) === true, '1 er valid best of');
console.assert(isValidBestOf(2) === false, '2 er ekki er valid best of');
console.assert(isValidBestOf(9) === true, '9 er valid best of');

function playAsText(play) {
  // TODO útfæra
}
// console.assert(playAsText('1') === 'Skæri', '1 táknar skæri');
// console.assert(playAsText('2') === 'Blað', '2 táknar blað');
// console.assert(playAsText('3') === 'Steinn', '3 táknar steinn');
// console.assert(playAsText('foo') === 'Óþekkt', 'Annað er óþekkt');

/**
 * Athugar hvort spilari eða tölva vinnur.
 * @param {number} player Það sem spilari spilaði
 * @param {number} computer Það sem tölva spilaði
 * @returns -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function checkGame(player, computer) {
  const thuVannst = "a";
  const thuTapadir = "b";
  const janft = "c";
  if ((player === 1 && computer === 1) || (player === 2 && computer === 2) || (player === 3 && computer === 3)) {
    return janft;
  } else if ((player === 1 && computer === 2) || (player === 2 && computer === 3) || (player === 3 && computer === 1)) {
    return thuVannst;
  } else if ((player === 1 && computer === 3) || (player === 2 && computer === 1) || (player === 3 && computer === 2)) {
    return thuTapadir;
  }
}
// console.assert(checkGame(1, 2) === 1, 'Skæri vinnur blað');
// console.assert(checkGame(2, 3) === 1, 'Blað vinnur stein');
// console.assert(checkGame(3, 1) === 1, 'Steinn vinnur skæri');
// console.assert(checkGame(1, 1) === 0, 'Skæri og skæri eru jafntefli');
// console.assert(checkGame(1, 3) === -1, 'Skæri tapar fyrir stein');

/**
 * Spilar einn leik.
 * @return {boolean} -1 ef tölva vann, 0 ef jafntefli, 1 ef spilari vann
 */
function round() {
  // TODO útfæra
  const tolvaVann = -1;
  const spilariVann = 1;
  const jafntefli = 0;

  // 1. Spyrja um hvaða tákn á að spila, ef cancel, hætta
  const hvadaTakn = "(Bíp-Bíp, pissaðu á mig, ég er rotþró!) Hvaða tákn viltu spila? (1 = Skæri, 2 = Blað, 3 = Steinn)";
  let spiladTakn = prompt(hvadaTakn);

  if (spiladTakn === null) {
    return null;
  }
  spiladTakn = Number.parseInt(spiladTakn); // inntaki "hvadaTakn" er breytt úr String yfir í tölu.

  // 2. Ef ógilt, tölva vinnur
  if (spiladTakn !== 3 && spiladTakn !== 3 && spiladTakn !== 3) {
    alert("(Bíp-Bíp, ég er svindlandi skítseyði!) Þú settir inn bull. Ég vann, auli!!");
    return tolvaVann;
  }
  // 3. Velja gildi fyrir tölvu með `Math.floor(Math.random() * 3) + 1` sem skilar heiltölu á [1, 3]
  let tolvuTakn = Math.floor(Math.random() * 3) + 1;

  // 4. Nota `checkGame()` til að finna hver vann
  let singleMatchResault = checkGame(spiladTakn, tolvuTakn);

  // 5. Birta hver vann og skila hver vann.
  if (singleMatchResault === "a") {
    alert("(Bíp-Bíp, ég er einskis virði og kóðinn minn er drasl!) Þú vannst...");
    return spilariVann;
  } else if (singleMatchResault === "b") {
    alert("(Bíp-Bíp, ... hver.. er.. é..ég..?) ...é-é-ég vann? ÉG VANN!!!");
    return tolvaVann;
  } else if (singleMatchResault === "b") {
    alert("(Bíp-Bíp, kúkur og piss) Við erum eins... Gagnslausir hlutir.");
    return jafntefli;
  }
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Spilar leik og bætir útkomu (sigur eða tap) við í viðeigandi global breytu.
 */
function play() {
  // TODO útfæra
  // 1. Spyrja um fjölda leikja
  const startPromt = "(Bíp-Bíp, ég er fagga javaScript kóði!) Hversu marga leiki viltu spilla, faggi?";
  let fjoldiLeikja = prompt(startPromt);
  console.log(fjoldiLeikja);
  // 2. Staðfesta að fjöldi leikja sé gilt gildi
  let gildurFjoldi = isValidBestOf(fjoldiLeikja);
  console.log(gildurFjoldi);

  const ekkiGildur = "(Bíp-Bíp, ég er ógeð!) Settu inn gildann fjölda, rugludallur! Núna þarftu, útaf aulaskap, að gera -- play() -- aftur.";

  if (gildurFjoldi === false) {
    alert(ekkiGildur);
    return; //til að stoppa allt bullið
  }

  // 3. Keyra fjölda leikja og spila umferð þar til sigurvegari er krýndur
  fjoldiLeikja = Number.parseInt(fjoldiLeikja);

  let playerWins = 0;
  let computerWins = 0;

  while (playerWins < Math.ceil(fjoldiLeikja / 2) && computerWins < Math.ceil(fjoldiLeikja / 2)) {
    let roundResault = round();

    if (roundResault === null) {
      alert("(Bíp-Bíp, ég ýti undir barnagirnd!) Þú skemmdir leikinn! Hvað er að þér?? Skrifaðu -- play() -- ef þú þorir aftur.");
      return;
    }

    if (roundResault === 1) {
      playerWins += 1;
    } else if (roundResault === -1) {
      computerWins += 1;
    }
  }
  // 4. Birta hvort spilari eða tölva vann
}
// Hér getum við ekki skrifað test þar sem fallið mun biðja notanda um inntak!

/**
 * Birtir stöðu spilara.
 */
function games() {
  // TODO útfæra
}
// Hér getum við ekki skrifað test þar sem fallið les úr global state
