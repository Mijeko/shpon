import Inputmask from "maskedinput";

function initMask() {
    let russsianPhone = document.querySelectorAll(".js-mask-ru");

    if (russsianPhone) {
        russsianPhone.forEach(el => {
            let im = new Inputmask("+7 (999) 999 99-99", {placeholder: "+7 (___) ___ __ __"});
            im.mask(el);
        });
    }
    let cardNumber = document.querySelectorAll(".js-mask-card-number");

    if (cardNumber) {
        cardNumber.forEach(el => {
            let im = new Inputmask("999 999 999 9999", {placeholder: "___ ___ ___ ____"});
            im.mask(el);
        });
    }


    let timeMask = document.querySelectorAll(".js-time-mask");
    if (timeMask) {
        timeMask.forEach(el => {
            let im = new Inputmask("99:99:99");
            im.mask(el);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    initMask();
});

window.initMask = initMask;
