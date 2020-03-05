

function initMap() {
    // Styles a map in night mode.
let shop = {lat: 37.977800, lng: -122.035250}
let map = new google.maps.Map(document.getElementById('map'), {
    center: shop,
    zoom: 19,
    styles: [
    {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
    {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
    {
        featureType: 'administrative.locality',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'geometry',
        stylers: [{color: '#263c3f'}]
    },
    {
        featureType: 'poi.park',
        elementType: 'labels.text.fill',
        stylers: [{color: '#6b9a76'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry',
        stylers: [{color: '#38414e'}]
    },
    {
        featureType: 'road',
        elementType: 'geometry.stroke',
        stylers: [{color: '#212a37'}]
    },
    {
        featureType: 'road',
        elementType: 'labels.text.fill',
        stylers: [{color: '#9ca5b3'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry',
        stylers: [{color: '#746855'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'geometry.stroke',
        stylers: [{color: '#1f2835'}]
    },
    {
        featureType: 'road.highway',
        elementType: 'labels.text.fill',
        stylers: [{color: '#f3d19c'}]
    },
    {
        featureType: 'transit',
        elementType: 'geometry',
        stylers: [{color: '#2f3948'}]
    },
    {
        featureType: 'transit.station',
        elementType: 'labels.text.fill',
        stylers: [{color: '#d59563'}]
    },
    {
        featureType: 'water',
        elementType: 'geometry',
        stylers: [{color: '#17263c'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.fill',
        stylers: [{color: '#515c6d'}]
    },
    {
        featureType: 'water',
        elementType: 'labels.text.stroke',
        stylers: [{color: '#17263c'}]
    }
    ],
});
    let marker = new google.maps.Marker({
    position: shop,
    map: map,
    title: "1920 Barbershop"
    });

    let contentString = '<div id="content">'+
        '<div id="siteNotice">'+
        '</div>'+
        '<h1 id="firstHeading" class="firstHeading">1920 Barbershop</h1>'+
        '<img src="https://1920-barbershop.s3-us-west-1.amazonaws.com/logo.png" style="height: 50px; width: 50px; display: block; margin-left: auto; margin-right: auto;" alt="barbershop"/>' +
        '<div id="bodyContent">'+
        '</div>'+
        '</div>';

    let infowindow = new google.maps.InfoWindow({
        content: contentString
    });

    marker.addListener('click', function() {
        infowindow.open(map, marker);
    })
}

const services = document.getElementById('services');

services.addEventListener('click', function() {
    window.location.href = '../html/services.html';
});


const locationPage = document.getElementById('locationPage');

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

