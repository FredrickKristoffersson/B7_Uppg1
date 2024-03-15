const secretWord = "Leksak";
const input = document.querySelector("input");
const inputValue = document.querySelector("input").value;
const submit_button = document.querySelector("button");
const test = input.value;

input.placeholder = `Dagens ord har ${secretWord.length} bokstäver`;

input.addEventListener("input", () => {
    console.log(input.value);
    console.log(input.value.match(secretWord));
})

    submit_button.addEventListener("click", () => {
        const test = input.value;
        console.log(test);
        console.log(test.length);
        return test;
    });

    /* 
    if :
    indexvärde(bokstav) på input(sparad variabel) === secretWord indexvärde,
    säg: bokstav stämmer
    else if :
    indexvärde(bokstav) på input(sparad variabel) = secret indexvärde längd=?
    säg: bokstav finns, men inte denna plats
    else : 
    indexvärde(bokstav) = !INTE lika,
    säg: bokstav finns inte i det hemliga ordet
    */