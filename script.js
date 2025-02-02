document.addEventListener("DOMContentLoaded", function () {
    const title = document.getElementById("main-title");
    const text = "Hi! I am Alvaro Z. Maldonado!";
    let index = 0;
    let isDeleting = false;

    function typeEffect() {
        if (!isDeleting) {
            if (index < text.length) {
                title.innerHTML = text.substring(0, index + 1) + '<span class="glitch-symbol">|</span>';
                index++;
                setTimeout(typeEffect, 100);
            } else {
                title.innerHTML = text + '<span class="glitch-symbol">|</span>';
                setTimeout(() => {
                    isDeleting = true;
                    typeEffect();
                }, 5000);
            }
        } else {
            if (index > 0) {
                title.innerHTML = text.substring(0, index - 1) + '<span class="glitch-symbol">|</span>';
                index--;
                setTimeout(typeEffect, 50);
            } else {
                title.innerHTML = '<span class="glitch-symbol">|</span>';
                isDeleting = false;
                setTimeout(typeEffect, 2000);
            }
        }
    }

    typeEffect();

    const redirectButtons = document.querySelectorAll('.redirect-button');
    redirectButtons.forEach(button => {
        button.style.backgroundColor = "#808080";
        button.style.color = "white";
    });
});

window.onscroll = function () {
    let button = document.getElementById("back-to-top");
    let scrollPosition = window.scrollY || document.documentElement.scrollTop;
    let cssTasks = document.getElementById("css-tasks");

    if (scrollPosition > cssTasks.offsetTop - window.innerHeight / 2) { 
        button.style.opacity = "1";
        button.style.visibility = "visible";
    } else {
        button.style.opacity = "0";
        button.style.visibility = "hidden";
    }
};

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop - 60,
        behavior: 'smooth'
    });
}

