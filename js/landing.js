const logo = document.querySelectorAll('#logo path');

for (let i = 0; i<logo.length; i++) {
    console.log(`letter ${i} is ${logo[i].getTotalLength()}`);
};

$(document).ready(function() {
    $('.myBtn').hide().delay(3500).fadeIn(2200);
});

function fadeOut() {

    TweenMax.to(".myBtn", 1, {
        y: -100,
        opacity: 0,
    });

    TweenMax.to(".screen", 2, {
        y: -400,
        opacity: 0,
        ease: Power2.easeInOut,
        delay: 3
    });

    TweenMax.from(".overlay", 2, {
        ease: Power2.easeInOut
    });

    TweenMax.to(".overlay", 2, {
        delay: 2,
        top: "-110%",
        ease: Expo.easeInOut
    });

    TweenMax.to(".overlay-2", 2, {
        delay: 2.5,
        top: "-110%",
        ease: Expo.easeInOut
    })


}