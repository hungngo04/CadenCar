const canvas = document.getElementById("myCanvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const ctx = canvas.getContext("2d");
const fish = new Fish(100, 100, 30, 50);
fish.draw(ctx);

animate();

function animate(){
    fish.update();
    fish.draw(ctx);
    requestAnimationFrame(animate);
}