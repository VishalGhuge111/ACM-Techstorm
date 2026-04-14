// Scroll Animation for Timeline
document.addEventListener("DOMContentLoaded", function () {
    const events = document.querySelectorAll(".event");

    function revealEvents() {
        let triggerBottom = window.innerHeight * 0.9;
        events.forEach(event => {
            let eventTop = event.getBoundingClientRect().top;
            if (eventTop < triggerBottom) {
                event.classList.add("show");
            }
        });
    }

    window.addEventListener("scroll", revealEvents);
    revealEvents();
});