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
};


const services = document.getElementById('services');

services.addEventListener('click', function() {
    window.location.href = '../html/services.html';
});


const locationPage = document.getElementById('locationPage')

locationPage.addEventListener('click', function() {
    window.location.href = '../html/location.html';
});

const facebook = document.getElementById('facebook');

facebook.addEventListener('click', function() {
    window.open("https://www.facebook.com/1920-Barbershop-308153830081834/")
});

const twitter = document.getElementById('twitter');

twitter.addEventListener('click', function() {
    window.open("https://twitter.com/1920Barbershop")
});

const youtube = document.getElementById('youtube');

youtube.addEventListener('click', function() {
    window.open("https://www.youtube.com/channel/UCsgY1wAOj2-hstdkumRNzHg/featured")
});

const insta = document.getElementById('insta');

insta.addEventListener('click', function() {
    window.open("https://www.instagram.com/1920_barbershop/?igshid=71uns72vbv8f")
});

const gallery = document.getElementById('gallery');

gallery.addEventListener('click', function() {
    window.location.href = '../html/gallery.html';
});

const barbers = document.getElementById('barbers');

barbers.addEventListener('click', function() {
    window.location.href = '../html/barbers.html';
});