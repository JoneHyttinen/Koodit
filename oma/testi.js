let suoritukset = [
  {
    nimi: "Johdanto digitaalisiin palveluihin",
    tunnus: "DIG001IT1A",
    arvosanat: [
      { paiva: "14.03.2023", arvosana: "3" },
      { paiva: "21.03.2023", arvosana: "2" },
      { paiva: "02.04.2023", arvosana: "4" },
    ],
  },
  {
    nimi: "Johdanto liiketoimintalähtöiseen ICT:hen",
    tunnus: "ICB001IT1A",
    arvosanat: [{ paiva: "15.03.2023", arvosana: "4" }],
  },
  {
    nimi: "Johdanto ICT-infrastruktuuriin ja pilvipalveluihin",
    tunnus: "ICI001IT1A",
    arvosanat: [
      { paiva: "16.03.2023", arvosana: "1" },
      { paiva: "23.03.2023", arvosana: "4" },
    ],
  },
];

let kurssiTunnus = suoritukset[0].tunnus;
let suorituksenPaiva = suoritukset[0].arvosanat[0].paiva;
console.log(suorituksenPaiva);
