const input = ["7", "8", "9", "/", "4", "5", "6", "-", 
    "1", "2", "3", "+", ".", "0", "+", "X"];

const buttons = document.getElementById("buttons");

for (let i = 0; i < 16; i++) {
    const btn = document.createElement("button");
    btn.textContent = input[i];
    btn.className = "button-text";
    buttons.appendChild(btn);
}

const display = document.getElementById("display");
display.textContent = "Killkulator";


