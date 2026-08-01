// ----------------------
// Loading Screen
// ----------------------
window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loader").style.display = "none";
    }, 2800);
});

// ----------------------
// Smooth Scroll
// ----------------------
document.getElementById("enterBtn").addEventListener("click", () => {
    document.querySelector(".intro").scrollIntoView({
        behavior: "smooth"
    });
});

// ----------------------
// Background Music
// ----------------------
const music = document.getElementById("music");
let playing = false;

function toggleMusic() {

    if (playing) {
        music.pause();
        playing = false;
    } else {
        music.play();
        playing = true;
    }

}

// ----------------------
// Fade In Animation
// ----------------------

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.style.opacity = "1";
            entry.target.style.transform = "translateY(0px)";

        }

    });

}, {
    threshold: 0.2
});

document.querySelectorAll(".card").forEach(card => {

    card.style.opacity = "0";
    card.style.transform = "translateY(50px)";
    card.style.transition = "1s";

    observer.observe(card);

});

// ----------------------
// Heart Effect
// ----------------------

document.addEventListener("click", function(e) {

    for (let i = 0; i < 10; i++) {

        let heart = document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";

        heart.style.pointerEvents = "none";
        heart.style.fontSize = (15 + Math.random() * 15) + "px";

        heart.style.transition = "1.5s linear";

        document.body.appendChild(heart);

        setTimeout(() => {

            heart.style.transform =
                `translate(${(Math.random()-0.5)*200}px,-${150+Math.random()*100}px) rotate(${Math.random()*360}deg)`;

            heart.style.opacity = "0";

        }, 20);

        setTimeout(() => {
            heart.remove();
        }, 1600);

    }

});

// ----------------------
// Typing Cursor
// ----------------------

const typing = document.querySelector(".typing");

setInterval(() => {

    typing.style.borderRight = "2px solid white";

    setTimeout(() => {
        typing.style.borderRight = "none";
    }, 500);

}, 1000);
function openLetter(){

document.querySelector(".envelope").classList.toggle("open");

}
/* ===========================
   PREMIUM LOVE ENVELOPE
=========================== */

const envelope = document.getElementById("envelope");
const letter = document.getElementById("letterText");

const message = `Happy Girlfriend's Day, my beautiful Akshuuu ❤️

Every day with you feels like a dream I never want to wake up from.

You have filled my life with happiness, love and countless beautiful memories.

Thank you for believing in me, standing beside me, making me smile, and loving me even on my worst days.

You are my peace.
You are my comfort.
You are my biggest blessing.

If life gave me another chance,
I'd still choose you.

Again...
and again...
and again.

Forever Yours,
❤️`;

let opened = false;
let typing = false;

function typeLetter(){

letter.innerHTML="";

let i=0;

typing=true;

const interval=setInterval(()=>{

letter.innerHTML+=message.charAt(i);

i++;

if(i>=message.length){

clearInterval(interval);

typing=false;

}

},35);

}

envelope.addEventListener("click",()=>{

if(opened || typing) return;

opened=true;

envelope.classList.add("open");

setTimeout(()=>{

typeLetter();

},1000);

});
