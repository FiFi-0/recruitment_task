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

