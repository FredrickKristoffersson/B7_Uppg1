/* 
Pseudokod:
Genom att skriva in ord i inputfältet kan vi kolla om ordet vi skriver in,
matchar på något sätt det "hemliga" ordet vi försöker lista ut. När vi skrivit in
våran gissning så kommer vi få ett resultat där vi ser om vi matchar på något
sätt det hemliga ordet. Detta visar om bokstäverna står rätt, eller om de finns
med i det hemliga ordet, men står på en annan plats.
Svar får vi också om bokstäverna inte finns med i det hemliga ordet.

Algoritm
1.  Användare skriver in ord som ska vara lika långt som hemligt ord.
2.  Användare trycker på knapp när användare är klar
3.  Inmatade värdet sparas som variabel
4.  Sparad variabel förändrar värden till små bokstäver
5.  Det hemliga ordet görs om till array (H)
6.  Det gissande ordet görs om till array (G)
7.  Arrayer kontrolleras, om deras indexvärden matchar varandra.
8.  Är indexvärde i båda arrayer lika, visas ordet: CORRECT
9.  Är indexvärde olika, visas ordet: INCORRECT
10. Finns indexvärde (G) på annat indexnummber i (H), visas ordet MISPLACED
11a.Användare får nu börja om och gissa igen
11b.Har användare gissat rätt ord, får användare ett grattis på skärmen
*/ 
export const secretWord = "leksak";
export const guessWord = "TESTAR";

export default function lowCase(input) {
    return input.toLowerCase();
}

export function createArray(input) {
    return input.split("");
}
console.log(createArray((lowCase(guessWord))));
console.log(typeof(createArray(guessWord)));