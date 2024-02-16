import homeLayout from "./home.js";
import menuLayout from "./menu.js";
import localLayout from "./location.js";
import './style.css';

const clearContent = function() {
    const content = document.getElementById('content');
    return content.innerHTML = ""
}

// nav Layout
const nav = document.getElementsByTagName('nav')[0];

const homeBtn = document.createElement('button');
homeBtn.textContent = 'Home';
homeBtn.addEventListener('click', function () {
    clearContent()
    homeLayout()
})

const menuBtn = document.createElement('button');
menuBtn.textContent = 'Menu';
menuBtn.addEventListener('click', function () {
    clearContent()
    menuLayout()
})

const locBtn = document.createElement('button');
locBtn.textContent = 'Locations';
locBtn.addEventListener('click', function () {
    clearContent()
    localLayout()
})

nav.appendChild(homeBtn)
nav.appendChild(menuBtn)
nav.appendChild(locBtn)

// Title Bar Banner
const banner = document.getElementById('title-bar');
const catLogo = document.createElement('img');
catLogo.src = "/imgs/Pngtree7262502.png"
const bannerContent = document.createElement('h1');
bannerContent.textContent = "The Catfish Grill";

banner.appendChild(catLogo);
banner.appendChild(bannerContent);

homeLayout()