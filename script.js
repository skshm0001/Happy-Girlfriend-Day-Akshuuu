/* ==========================================
   STARRY BACKGROUND
========================================== */

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

resizeCanvas();
window.addEventListener("resize", resizeCanvas);

const stars = [];

for (let i = 0; i < 250; i++) {

    stars.push({

        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 2,
        alpha: Math.random(),
        speed: (Math.random() * 0.02) + 0.005

    });

}

function animateStars() {

    ctx.clearRect(0,0,canvas.width,canvas.height);

    stars.forEach(star=>{

        star.alpha += star.speed;

        if(star.alpha >= 1 || star.alpha <= 0){

            star.speed *= -1;

        }

        ctx.beginPath();
        ctx.arc(star.x,star.y,star.r,0,Math.PI*2);

        ctx.fillStyle = `rgba(255,255,255,${star.alpha})`;

        ctx.fill();

    });

    requestAnimationFrame(animateStars);

}

animateStars();

/* ==========================================
   PASSWORD
========================================== */

const PASSWORD = "1083";

const passwordInput = document.getElementById("password");

const unlockBtn = document.getElementById("unlockBtn");

const error = document.getElementById("error");

const passwordScreen = document.querySelector(".password-screen");

const website = document.querySelector(".website");

unlockBtn.addEventListener("click", unlock);

passwordInput.addEventListener("keydown", function(e){

    if(e.key==="Enter"){

        unlock();

    }

});

function unlock(){

    if(passwordInput.value===PASSWORD){

        error.innerHTML="";

        passwordScreen.style.opacity="0";

        passwordScreen.style.pointerEvents="none";

        setTimeout(()=>{

            passwordScreen.style.display="none";

            website.classList.add("show");

            document.body.style.overflowY="auto";

        },1000);

    }

    else{

        passwordInput.classList.add("shake");

        error.innerHTML="Wrong Password ❤️";

        passwordInput.value="";

        setTimeout(()=>{

            passwordInput.classList.remove("shake");

        },500);

    }

}
const storyBtn = document.getElementById("storyBtn");
if (storyBtn) {

    storyBtn.addEventListener("click", () => {

        document.querySelector(".cinematic-intro").style.display = "none";

        const story = document.getElementById("story");
        const letter = document.getElementById("letterSection");

        story.style.display = "none";

        letter.classList.remove("hidden");
        letter.style.display = "block";

        window.scrollTo({
            top:0,
            behavior:"smooth"
        });

    });

}
