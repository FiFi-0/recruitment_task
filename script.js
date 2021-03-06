'use strict';

//click to open have much bigger hitbox to easy opening
const closeBtn = document.querySelector('.side-menu__arrow');
const openBtn = document.querySelector('.closed-side-menu');

const closeMenu = function () {
    document.getElementById("side-menu").style.marginLeft = "-190px";
    document.getElementById("side-menu__arrow").style.transform = "rotate(-180deg)";
};

const openMenu = function () {
    document.getElementById("side-menu").style.marginLeft = "0px";
    document.getElementById("side-menu__arrow").style.transform = "rotate(0deg)";
};

closeBtn.addEventListener('click', closeMenu);
openBtn.addEventListener('click', openMenu);




const loupe = document.querySelector('.top-menu__search-button');
const input = document.querySelector('.top-menu__search-input');

loupe.addEventListener('click', function () {
    let isOpened = document.getElementsByClassName("opened");
    if (isOpened.length > 0) {
        document.getElementById("top-menu__search-input").style.visibility = "hidden";
        input.classList.remove("opened");
    } else {
        document.getElementById("top-menu__search-input").style.visibility = "visible";
        input.classList.add("opened");
    }
});