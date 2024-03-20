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

const beispiel2 = document.querySelector("#beispiel2");
beispiel2.addEventListener("click", executeExample2);

function executeExample2() {

    let c = document.getElementById("myCanvas");
    let ctx = c.getContext("2d");

    ctx.fillStyle = "lightblue";
    ctx.fillRect(20, 20, 75, 50);
    ctx.globalAlpha = 0.2;

    ctx.fillStyle = "blue";
    ctx.fillRect(50, 50, 75, 50);

    ctx.fillStyle = "darkblue";
    ctx.fillRect(80, 80, 75, 50);

    document.body.appendChild(myCanvas);
}






