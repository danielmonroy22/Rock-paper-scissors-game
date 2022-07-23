
// function to calculate the angle for the button

let calculateAngle = function (e, item, parent) {
    let dropShadowColor = `rgba(0, 0, 0, 0.3)`
    // If the button has a data-filter-color attribute, then use this for the shadow's color
    if (parent.getAttribute('data-filter-color') !== null) {
        dropShadowColor = parent.getAttribute('data-filter-color');
    }

    // If the button has a data-custom-perspective attribute, then use this as the perspective.
    if (parent.getAttribute('data-custom-perspective') !== null) {
        parent.style.perspective = `${parent.getAttribute('data-custom-perspective')}`
    }

    // Get the x position of the users mouse, relative to the button itself
    let x = Math.abs(item.getBoundingClientRect().x - e.clientX);
    // Get the y position relative to the button
    let y = Math.abs(item.getBoundingClientRect().y - e.clientY);

    // Calculate half the width and height
    let halfWidth = item.getBoundingClientRect().width / 2;
    let halfHeight = item.getBoundingClientRect().height / 2;

    // Use this to create an angle. I have divided by 6 and 4 respectively so the effect looks good.
    // Changing these numbers will change the depth of the effect.
    let calcAngleX = (x - halfWidth) / 6;
    let calcAngleY = (y - halfHeight) / 4;

    // Set the items transform CSS property
    item.style.transform = `rotateY(${calcAngleX}deg) rotateX(${calcAngleY}deg) scale(1.15)`;

    // And set its container's perspective.
    parent.style.perspective = `${halfWidth * 2}px`
    item.style.perspective = `${halfWidth * 3}px`

    // Reapply this to the shadow, with different dividers
    let calcShadowX = (x - halfWidth) / 3;
    let calcShadowY = (y - halfHeight) / 3;

    // Add a filter shadow - this is more performant to animate than a regular box shadow.
    item.style.filter = `drop-shadow(${-calcShadowX}px ${calcShadowY}px 15px ${dropShadowColor})`;
}

document.querySelectorAll('.button').forEach(function (item) {
    // Add on mouseenter
    item.addEventListener('mouseenter', function (e) {
        calculateAngle(e, this.querySelector('span'), this);
    });
    // Add on mousemove
    item.addEventListener('mousemove', function (e) {
        calculateAngle(e, this.querySelector('span'), this);
    });

    // Reset everything on mouse leave
    item.addEventListener('mouseleave', function (e) {
        let dropShadowColor = `rgba(0, 0, 0, 0.3)`
        if (item.getAttribute('data-filter-color') !== null) {
            dropShadowColor = item.getAttribute('data-filter-color')
        }
        item.querySelector('span').style.transform = `rotateY(0deg) rotateX(0deg) scale(1)`;
        item.querySelector('span').style.filter = `drop-shadow(0 10px 15px ${dropShadowColor})`;
    });
})


// EVENT LISTENER FOR BUTTON START GAME

document.querySelector("button").addEventListener("click", myFunction);

function myFunction() {
    document.querySelector("button").style.display = "none";
}
//


// change containers from start-container to end-container

let startContainer = document.getElementById('start-section');
let endContainer = document.getElementById('end-section');
let btn = document.querySelector("button");

btn.addEventListener('click', function () {
    startContainer.style.opacity = 0;
    startContainer.style.transform = 'scale(0)';
    endContainer.style.display = 'flex';

    // Add timeout with length matching animation-duration 
    window.setTimeout(function () {
        startContainer.style.display = 'none';
    }, 100);
    setTimeout(() => { typeWriter(); }, 500);

    // Add event listener to all of the game buttons
    // gameButtons = document.querySelectorAll(".gameselection").forEach(item => {
    //     item.addEventListener("click", playSound);
    // })
});

// headings in the end-section typewriter

let i = 0;
let i2 = 0;
let txt = 'Rock, Paper, Scissors?';
let txt2 = 'You Only Have 5 Clicks!'
let speed = 50;
let speed2 = 10;

function typeWriter() {
    if (i < txt.length) {
        document.getElementById("gameh1").innerHTML += txt.charAt(i);


        i++;
        if (i === txt.length - 1) {

            for (var j = 0; j < txt2.length; j++) {

                typeWriter2();


            }
        }
        setTimeout(typeWriter, speed);
    }
}
function typeWriter2() {
    if (i2 < txt2.length) {
        document.getElementById("gameh2").innerHTML += txt2.charAt(i2);
        i2++;





    }
    setTimeout(typeWriter2, speed2);
}


