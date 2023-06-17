import Swiper, {Navigation, Pagination} from 'swiper';

let blockInfo, bigSlider;

const fraction = document.getElementById("pagination-control-fraction");

initInfoBlockSlider();
initBigSlider();

window.addEventListener('resize', function (event) {
    initInfoBlockSlider();
    initBigSlider();
}, true);

function initBigSlider() {

    if (document.querySelectorAll(".big-slider").length <= 0) {
        return false;
    }

    if (bigSlider && bigSlider.destroy && typeof bigSlider.destroy === 'function') {
        bigSlider.destroy(false);
    }

    if (windowWidth() > 990) {
        bigSlider = new Swiper(".big-slider", {
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".custom-slider-pagination",
                type: "bullets",
            },
            on: {
                init: (swiper) => {
                    fraction.innerHTML = renderFraction(swiper);
                },
                slideChange: (swiper) => {
                    fraction.innerHTML = renderFraction(swiper);
                }
            }
        });
    } else {
        bigSlider = new Swiper(".big-slider", {
            modules: [Navigation, Pagination],
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
            pagination: {
                el: ".big-slider-mobile-progress-pagination",
                type: "progressbar",
            },
            on: {
                init: (swiper) => {
                    fraction.innerHTML = renderFraction(swiper);
                },
                slideChange: (swiper) => {
                    fraction.innerHTML = renderFraction(swiper);
                }
            }
        });
    }

}

function initInfoBlockSlider() {
    if (document.querySelectorAll(".block-info").length <= 0) {
        return false;
    }

    if (windowWidth() > 650) {
        if (blockInfo && blockInfo.destroy && typeof blockInfo.destroy === 'function') {
            blockInfo.destroy(false);
        }
        return false;
    }

    blockInfo = new Swiper(".block-info", {
        slidesPerView: 1.7,
        spaceBetween: 20,
    });
}

function windowWidth() {
    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
}


function renderFraction(swiper) {

    let all = swiper.slides.length;
    let pos = swiper.realIndex + 1;
    let htmlPos = pos;
    let htmlAll = all;

    if (pos < 10) {
        // htmlPos = `0${pos}`;
    }

    if (all < 10) {
        // htmlAll = `0${all}`;
    }
    return `<span class="current">${htmlPos}</span><span class="split"> из </span><span class="all">${htmlAll}</span>`;
}

new Swiper(".product-detail-slider", {
    modules: [Navigation, Pagination],
    pagination: {
        el: ".swiper-pagination",
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

