/* ======================================
   STARFIELD ANIMATION
====================================== */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = [];

for(let i=0;i<250;i++){

    stars.push({

        x:Math.random()*canvas.width,

        y:Math.random()*canvas.height,

        radius:Math.random()*2,

        alpha:Math.random(),

        speed:Math.random()*0.02

    });

}

function animate(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        star.alpha+=star.speed;

        if(star.alpha>=1 || star.alpha<=0){

            star.speed*=-1;

        }

        ctx.beginPath();

        ctx.arc(star.x,star.y,star.radius,0,Math.PI*2);

        ctx.fillStyle=`rgba(255,255,255,${star.alpha})`;

        ctx.fill();

    });

    requestAnimationFrame(animate);

}

animate();

/* ======================================
   SHOOTING STAR
====================================== */

function shootingStar(){

    let x=Math.random()*canvas.width;

    let y=Math.random()*canvas.height/2;

    let length=250;

    let progress=0;

    function draw(){

        ctx.beginPath();

        ctx.moveTo(x+progress,y+progress);

        ctx.lineTo(x+progress-length,y+progress-length);

        ctx.strokeStyle="white";

        ctx.lineWidth=2;

        ctx.stroke();

        progress+=12;

        if(progress<450){

            requestAnimationFrame(draw);

        }

    }

    draw();

}

setInterval(shootingStar,6000);

/* ======================================
   CONTINUE BUTTON
====================================== */

document.getElementById("continueBtn").addEventListener("click",()=>{

    document.body.style.transition="1.5s";

    document.body.style.opacity="0";

    setTimeout(()=>{

        alert("Password screen coming in Part 2 ❤️");

        document.body.style.opacity="1";

    },1500);

});

/* ======================================
   RESPONSIVE
====================================== */

window.addEventListener("resize",()=>{

canvas.width=window.innerWidth;

canvas.height=window.innerHeight;

});
