
window.addEventListener("scroll", function(){
    var navbar = document.querySelector(".nav-container");
    navbar.classList.toggle("fixed", window.scrollY > 0);
})
const cloudbudget =$('.name')
const overview = $(".overview");
const features = $(".features");
const technology = $(".tech");
const contact = $(".contact");
const signup = $(".sign");
const lang = $('.lang')
const arrowD = $('.arrow-d')
lang.on('click', () => {
    arrowD.toggleClass("active")
    lang.toggleClass("active")
})
cloudbudget.on('click', () => {
    window.scrollTo(0, 0)
})
overview.on('click', () => {
    window.scrollTo(0, 670)
})
features.on('click', () => {
    window.scrollTo(0, 1270)
})
technology.on('click', () => {
    window.scrollTo(0, 1900)
})
contact.on('click', () => {
    window.scrollTo(0, 2900)
})

$(document).ready(function() {
    $(".nav-item").click(function () {
        $(this).addClass("active").siblings().removeClass("active");
    });
});
// $(document).ready(function() {
//     $(".lang").click(function () {
//         $(".lang").addClass("active");
//     })

// });
// $(".lang").click(function() {
//     $(".lang").removeClass('active')
// })