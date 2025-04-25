let opiskelija = {
  tunnus: "a1234567",
  nimi: {
    etunimi: "Pekka",
    sukunimi: "Virtanen",
  },
  osoite: {
    lahiosoite: "Helsinginkatu 11",
    postinumero: "00100",
    postitoimipaikka: "Helsinki",
  },
  puhelimet: [
    { numero: "050-123456", tyyppi: "työ" },
    { numero: "050-7654321", tyyppi: "henkilökohtainen" },
    { numero: "050-1234321", tyyppi: "salainen" },
  ],
};
let numeroTyyppi = opiskelija.puhelimet[0].tyyppi;

console.log(numeroTyyppi);
