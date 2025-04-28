// JAVASCRIPT PERUSTEET

function tulostaPerusteet1() {
  let ekaNumero = 5;
  let tokaNumero = 10;
  let vastaus = ekaNumero + tokaNumero;
}
document.getElementById("perusteet-vastaus").innerHTML = vastaus;

// 1. Mitä tulostuu html-elementin sisään, minkä id on "perusteet-vastaus"? Vastaus: undefined.

function tulostaPerusteet2() {
  let n = 2;
  let s = "2";
  document.getElementById("perusteet-vastaus").innerHTML = n + n + s;
}

// 2. Mitä tulostuu html-elementin sisään, minkä id on "perusteet-vastaus"? Vastaus = 42.

// EHTOLAUSEET

function tulostaEhto() {
  let ehdollinen = "";
  let totuusarvo = true;
  if (totuusarvo === true) {
    ehdollinen += "eka ";
  }
  if (totuusarvo === false) {
    ehdollinen += "toka ";
  }
  if (totuusarvo) {
    ehdollinen += "kolmas";
  }
  document.getElementById("ehto-vastaus").innerHTML = ehdollinen;
}

// 3. Mitä tulostuu html-elementin sisään, minkä id on "ehto-vastaus"? Vastaus: eka kolmas.

// VALINTALAUSEET

function tulostaValinta() {
  let kellonAika = 18;
  let tervehdys = "";
  if (kellonAika >= 6 && kellonAika < 12) {
    tervehdys = "Hyvää huomenta!";
  } else if (kellonAika >= 12 && kellonAika < 18) {
    tervehdys = "Hyvää iltapäivää!";
  } else if (kellonAika >= 18 && kellonAika < 23) {
    tervehdys = "Hyvää iltaa!";
  } else if (
    (kellonAika >= 23 && kellonAika < 25) ||
    (kellonAika >= 0 && kellonAika < 6)
  ) {
    tervehdys = "Hyvää yötä!";
  } else {
    tervehdys = "Epäkelpo kellonaika";
  }
  document.getElementById("valinta-vastaus").innerHTML = tervehdys;
}

// 4. Mikä on muuttujan 'tervehdys' arvo funktion suorituksen lopussa? Vastaus: Hyvää huomenta!

// 5. Jos muuttujan 'kellonAika' on 18, mikä olisi muuttujan 'tervehdys' arvo funktion suorituksen lopussa? Vastaus: Hyvää iltaa!

// 6. Millä muuttujan 'kellonAika' arvoilla (kokonaisluvut) muuttujaan 'tervehdys' sijoitetaan merkkijono "Hyvää yötä!"? 23, 24, 0-5.

// TOISTORAKENNE
function tulostaToisto() {
  let vastausTeksti = "";
  let laskuri = 0;
  for (let i = 1; i <= 10; i++) {
    laskuri += 3;
    vastausTeksti +=
      "Laskentakierros: " + i + ". Laskurin arvo: " + laskuri + ".<br>";
    console.log("i = " + i + " | laskuri = " + laskuri);
  }
  document.getElementById("toisto-vastaus").innerHTML = vastausTeksti;
}

// 7. Kuinka monta laskentakierrosta toistorakenteessa suoritetaan? Vastaus: 10

// 8. Mikä on muuttujan 'laskuri' arvo 3. laskentakierroksella? Vastaus: 9

// 9. For-toistorakenteessa käytetään apumuuttujaa. Mikä on apumuuttujan arvon lisäämiseen käytetty operaattori? Vastaus: ++

// BONUS 1. Kirjoita rivin 70 sijoituslause toisella tavalla.
