import { hozzaad, atlag } from "./lista.js";
function katt() {
    let ertek = document.getElementById('bekertszam').value;
    console.log(hozzaad);
    console.log(atlag);
}
document.getElementById('gomb').addEventListener('click', katt);