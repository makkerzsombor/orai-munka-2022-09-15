let t=[];
export function hozzaad(szam) {    
    if (szam<0) {
        console.log("Hibás számot adott meg");
    }else{
        t.push(szam);
    }
}

export function atlag() {
    let ossz = 0;
    for (let index = 0; index < t.length; index++) {        
        ossz += t[i];
    }
    return "Az átlag: "+ossz/t-length;
}