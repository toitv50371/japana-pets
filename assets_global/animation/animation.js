// scroll

// let toRight = document.querySelectorAll(".to-right");
// let toLeft = document.querySelectorAll(".to-left");
let toBottom = document.querySelectorAll(".to-bottom");
let toBottom2 = document.querySelectorAll(".to-bottom-2");
let toBottom3 = document.querySelectorAll(".to-bottom-3");
let toBottom4 = document.querySelectorAll(".to-bottom-4");
let animateShow = document.querySelectorAll(".animate-show");
// let animateShowInRotate = document.querySelectorAll(".animate-show-in-rotate");
// let animateSideLeft = document.querySelectorAll(".animate-side-left");
// let animateSideRight = document.querySelectorAll(".animate-side-right");
// let animateShowIn = document.querySelectorAll(".animate-show-in");
// let animateScale = document.querySelectorAll(".animate-scale");
let sideToTop = document.querySelectorAll(".side-to-top");
let sideToTop2 = document.querySelectorAll(".side-to-top-2");
// let sideToRightAfter = document.querySelectorAll(".side-to-right-after");
// let sideToBottomAfter = document.querySelectorAll(".side-to-bottom-after");

let isElInViewPort = (el) => {
    let rect = el.getBoundingClientRect();
    // some browsers support innerHeight, others support documentElement.clientHeight
    let viewHeight =
        window.innerHeight * 0.9 || document.documentElement.clientHeight * 0.9;
    return (
        (rect.top <= 0 && rect.bottom >= 0) ||
        (rect.bottom >= viewHeight && rect.top <= viewHeight) ||
        (rect.top >= 0 && rect.bottom <= viewHeight)
    );
};

// Scroll to top

function scrollTop() {
    let scrollTop = document.querySelector(".scroll__top");
    if (
        document.body.scrollTop > 20 ||
        document.documentElement.scrollTop > 20
    ) {
        scrollTop.classList.remove("d-none");
        scrollTop.classList.add("d-block");
    } else {
        scrollTop.classList.add("d-none");
    }
    // scroll top when clicked
    scrollTop.addEventListener("click", () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
}
// show navbar menu when scroll on top
let prevScrollpos = window.pageYOffset;
let menuSticky = document.getElementById("menu__sticky");
function showMenuScrollTop() {
    var currentScrollPos = window.pageYOffset;
    
    if (prevScrollpos >= currentScrollPos) {
        menuSticky.style.position = "fixed";
        menuSticky.style.top = "0";
    } else {
        menuSticky.style.borderBottom = "solid 1px rgba(128, 128, 128, 0.329)";
        menuSticky.style.top = "-100%";
    }
    if (currentScrollPos == 0) {
        console.log(currentScrollPos);
        menuSticky.style.borderBottom = "none";
        // menuSticky.style.position = "";
    }
    
    prevScrollpos = currentScrollPos;

}

function loop() {
    // eventScroll(toRight);
    // eventScroll(toLeft);
    eventScroll(toBottom);
    eventScroll(toBottom2);
    eventScroll(toBottom3);
    eventScroll(toBottom4);
    eventScroll(sideToTop);
    eventScroll(sideToTop2);
    eventScroll(animateShow);
    scrollTop();
    showMenuScrollTop();
    // eventScroll(animateShowInRotate);
    // eventScroll(animateSideLeft);
    // eventScroll(animateSideRight);
    // eventScroll(animateShowIn);
    // eventScroll(animateScale);

    // eventScroll(sideToRightAfter);
    // eventScroll(sideToBottomAfter);
}
function eventScroll(elm) {
    elm.forEach((item) => {
        if (isElInViewPort(item)) {
            item.classList.add("start");
        } else {
            item.classList.remove("start");
        }
    });
}
window.onscroll = loop;
setTimeout(() => {
    loop();
}, 100);
