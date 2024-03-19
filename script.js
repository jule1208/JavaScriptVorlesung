const beispiel1 = document.querySelector("#beispiel1");
beispiel1.addEventListener("click", executeExample);

function executeExample() {

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 80;
    canvas.height = 40;
    ctx.fillStyle = "lightblue";
    ctx.fillRect(20, 20, 80, 40);

    document.body.appendChild(canvas);
}



