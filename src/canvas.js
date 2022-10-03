const canvas = document.getElementById("headerBackground");
const ctx = canvas.getContext('2d');
const width = window.innerWidth;
const height = window.innerHeight;

let particleArray;

// get mouse postion
let mouse = {
    x: null,
    y: null,
    radius: (canvas.height / 80) * (canvas.width / 80)

}
window.addEventListener('mousemove',

    function(event) {
        mouse.x = event.x;
        mouse.y = event.y;
    }




);

// create particles

class Particle {
    constructor(x, y, dirx, diry, size, color) {
        this.x = x;
        this.y = y;
        this.dirx = dirx;
        this.diry = diry;
        this.size = size;
        this.color = color;
    }

    // draw??

    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
            ctx.fillStyle = "#219ebcff";
            ctx.fill();
        }
        // check particle postion , check mosue positin, move the particle, drawa the particle. 

    update() {
        // check if the particle is in canvas\
        if (this.x > canvas.width || this.x < 0) {
            this.dirx = -this.dirx;

        }
        if (this.y > canvas.width || this.y < 0) {
            this.diry = -this.diry;

        }
        // Collision detection = 
        // position/particale postion
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius + this.size) {
            if (mouse.x < this.x && this.x < canvas.width - this.size * 10) {

                this.x += 10;


            }
            if (mouse.x > this.x && this.x > canvas.width - this.size * 10) {

                this.x -= 10;


            }
            if (mouse.y < this.y && this.y < canvas.height - this.size * 10) {

                this.y += 10;

            }
            if (mouse.x > this.y && this.y > canvas.height - this.size * 10) {

                this.y -= 10;

            }
        }
        this.x += this.dirx;
        this.y += this.y;
        // Drawin
        this.draw();
        // Constantly running forever


    }


}

function init() {
    particleArray = []

    let numberOfParticles = (canvas.height * canvas.width) / 9000;

    for (let i = 0; i < numberOfParticles; i++) {
        let size = (Math.random() * 6) + 1;
        let x = (Math.random() * ((innerWidth - size * 2) - (size * 2)) + size * 2);

    }

}