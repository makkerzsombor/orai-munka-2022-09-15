import { hozzaad, atlag } from "./lista.js";
function katt() {
    hozzaad(parseFloat(document.getElementById("bekertszam").value));
    alert(atlag());
}

document.getElementById('gomb').addEventListener('click', katt);