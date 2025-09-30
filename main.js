const input = ["7", "8", "9", "/", "4", "5", "6", "-", 
    "1", "2", "3", "X", ".", "0", "+", "="];

const buttons = document.getElementById("buttons");
const display = document.getElementById("display");
const clear = document.getElementById("clear");
console.log(clear);


for (let i = 0; i < 16; i++) {
    const btn = document.createElement("button");
    btn.textContent = input[i];
    btn.className = "button-text";

    btn.addEventListener("click", () => {
        display.textContent += btn.textContent;
    })

    buttons.appendChild(btn);
}

clear.textContent = "CLEAR";
clear.addEventListener("click", () => {
    console.log("clear!!");
    display.textContent = "";
})


