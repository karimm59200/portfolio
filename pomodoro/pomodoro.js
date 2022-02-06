const affichageTravail = document.queryselector('.affichageT');
const affichagePause = document.queryselector('.affichageP');
const btnGo = document.querySelector('.b1');
const btnPause = document.querySelector('.b2');
const btnReset = document.querySelector('.b3');
const cycles = document.getElementsByTagName('h2');

let tempsInitial = 1800; // 30 minutes de travail
let tempsDeRepos = 300; // 5 minutes de repos
let pause = false;
let nbDeCycles = 0;
cycles.innerText = ` Nombre de cycles ${nbDeCycles}`;

affichageTravail.innerText = `${Math.trunc(tempsInitial/60)}`;