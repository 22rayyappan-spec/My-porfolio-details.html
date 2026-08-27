
const contactForm = document.getElementById("contactForm");

if (contactForm) {

    contactForm.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("Message sent successfully!");

        contactForm.reset();

    });

}


/* ============================= */
/* CERTIFICATE SLIDER */
/* ============================= */

const slider = document.querySelector(".slider");
const track = document.querySelector(".track");

if (slider && track) {

    slider.addEventListener("mouseenter", function() {
        track.style.animationPlayState = "paused";
    });

    slider.addEventListener("mouseleave", function() {
        track.style.animationPlayState = "running";
    });

}
