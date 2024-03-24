function drawFilledRectangle() {
const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
ctx.fillStyle = "lightblue";
ctx.fillRect(70, 50, 200, 100);
}

function drawStrokeRectangle() {
    const canvas = document.getElementById("canvas2");
    const ctx = canvas.getContext("2d");

    ctx.strokeStyle = "lightblue";
    ctx.lineWidth = 3; 
    ctx.strokeRect(70, 50, 200, 100); 
}
function drawClearRectangle() {
    const canvas = document.getElementById("canvas3");
    const ctx = canvas.getContext("2d");
   
    ctx.fillStyle = "lightblue";
    ctx.fillRect(70, 50, 200, 100);

    setTimeout(() => {
        // Löscht das Rechteck von (70, 70) bis (90, 140)
        ctx.clearRect(70, 70, 20, 70);
    
        // Wartet weitere 2 Sekunden, bevor weitere Pixel gelöscht werden
        setTimeout(() => {
            // Löscht das Rechteck von (40, 40) bis (120, 90)
            ctx.clearRect(40, 40, 80, 50);
            setTimeout(() => {
                // Löscht das Rechteck von (190, 100) bis (220, 130)
                ctx.clearRect(270, 150, 20, 20);
            }, 1000);
        }, 1000);
    }, 1000);
    
}
function drawDreieck() {
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");


// Dreieck zeichnen
ctx.beginPath();
ctx.moveTo(70, 70); // Startpunkt
ctx.lineTo(150, 50); // Linie nach (150, 50)
ctx.lineTo(100, 150); // Linie nach (100, 150)
ctx.closePath(); // Schließt den Pfad, um das Dreieck zu vervollständigen
ctx.strokeStyle = "lightblue "; // Linienfarbe
ctx.stroke(); // Zeichnet die Linien
ctx.lineWidth = 7;
}