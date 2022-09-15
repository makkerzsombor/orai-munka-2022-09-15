let t=[];
function hozzaad(szam) {
    if (szam<0) {
        console.log("Hibás számot adott meg");
    }else{
        t.push(szam);
    }
}

function atlag(t) {
    let ossz = 0;
    for (let index = 0; index < t.length; index++) {        
        ossz += t[i];
    }
    console.log("Az átlag: "+ossz/t-length);
}