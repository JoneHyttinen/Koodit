// Tee funktio, joka palauttaa taulukon. Funktio laskee kahden taulukon alkiot yhteen.
let a1 = [6, 8];
let a2 = [10, 13, 17, 20];

// Mallivastaus = [18, 21].

function laskeTaulukko(a1, a2) {
  let ans = [];
  let lisays = 0;

  for (let i = 0; i < a1.length; i++) {
    for (let j = 0; j < a2.length; j++) {
      lisays += a1[i] + a2[j];
    }
    ans.push(lisays);
    lisays = 0;
  }
  return ans;
}
document.getElementById("answer").innerHTML = laskeTaulukko(a1, a2);
