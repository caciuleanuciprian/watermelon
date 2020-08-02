// Animations

const animation1 = bodymovin.loadAnimation({
    container: document.getElementById('anim1'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 01/watermelon-pack-animation-01.json'
})

const animation2 = bodymovin.loadAnimation({
    container: document.getElementById('anim2'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 02/watermelon-pack-animation-02.json'
})

const animation3 = bodymovin.loadAnimation({
    container: document.getElementById('anim3'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 03/watermelon-pack-animation-03.json'
})

const animation4 = bodymovin.loadAnimation({
    container: document.getElementById('anim4'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 04/watermelon-pack-animation-04.json'
})

const animation5 = bodymovin.loadAnimation({
    container: document.getElementById('anim5'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 05/watermelon-pack-animation-05.json'
})

const animation6 = bodymovin.loadAnimation({
    container: document.getElementById('anim6'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 06/watermelon-pack-animation-06.json'
})
const animation8 = bodymovin.loadAnimation({
    container: document.getElementById('anim8'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 08/watermelon-pack-animation-08.json'
})

const animation9 = bodymovin.loadAnimation({
    container: document.getElementById('anim9'),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: 'animations/Animation 09/watermelon-pack-animation-09.json'
})


// Sticky navbar

window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// Contact
document.getElementById("contact").onclick = function(){
    document.querySelector(".contact").classList.toggle("active");
}
