function nayta() {
  let teksti = "";
  for (let i = 1; i <= 40; i++) {
    teksti = teksti + i + " ";
    if (i % 10 == 0) {
      teksti = teksti + "<br>";
    }
  }
  document.getElementById("vastaus").innerHTML = teksti;
}
nayta();
