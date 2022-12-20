const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const sea = new seaLane(canvas.width/2, canvas.width);
const fish = new Fish(100, 100, 30, 50);
fish.draw(ctx);

animate();

function animate(){
    fish.update();
    canvas.height = window.innerHeight;
    sea.draw(ctx);
    fish.draw(ctx);
    requestAnimationFrame(animate);
}