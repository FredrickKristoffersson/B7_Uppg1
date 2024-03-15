const secretWord = "Leksak";
const input = document.querySelector("input");
input.addEventListener("input", () => {
    console.log(input.value);
    console.log(input.value.match(secretWord));
})