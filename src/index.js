import { hozzaad, atlag } from "./lista.js";
function katt() {
    let ertek = parseInt(document.getElementById('bekertszam').value);
    hozzaad(ertek);
    alert(atlag());
}

document.getElementById('gomb').addEventListener('click', katt);