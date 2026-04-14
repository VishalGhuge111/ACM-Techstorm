// Mobile Menu Script
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");
const closeMobileMenu = document.getElementById("close-mobile-menu");

mobileMenuButton.addEventListener("click", () => {
  mobileMenu.classList.remove("-translate-y-full");
});

closeMobileMenu.addEventListener("click", () => {
  mobileMenu.classList.add("-translate-y-full");
});

// Profile Menu Script
const profileButton = document.getElementById('profile-icon');
const popup = document.getElementById('popup');
let popupVisible = false;

profileButton.addEventListener('mouseover', () => {
  if (!popupVisible) {
    popup.classList.remove('hidden');
    popup.classList.remove('scale-95');
  }
});

profileButton.addEventListener('mouseout', (event) => {
  if (!popupVisible && !popup.contains(event.relatedTarget)) {
    popup.classList.add('hidden');
    popup.classList.add('scale-95');
  }
});

profileButton.addEventListener('click', () => {
  popupVisible = !popupVisible;
  if (popupVisible) {
    popup.classList.remove('hidden');
    popup.classList.remove('scale-95');
  } else {
    popup.classList.add('hidden');
    popup.classList.add('scale-95');
  }
});

document.addEventListener('click', (event) => {
  if (!profileButton.contains(event.target) && !popup.contains(event.target)) {
    popupVisible = false;
    popup.classList.add('hidden');
    popup.classList.add('scale-95');
  }
});

// AOS Initialization
AOS.init({
  duration: 1200,
  once: true,
});

// Particles.js Config
particlesJS('particles-js', {
  particles: {
    number: { value: 80 },
    color: { value: '#00ffff' },
    shape: { type: 'circle' },
    opacity: { value: 0.5 },
    size: { value: 3 },
    move: {
      enable: true,
      speed: 1.5,
      direction: 'none',
      random: true,
      straight: false,
      out_mode: 'out',
      bounce: false
    }
  },
  interactivity: {
    detect_on: 'canvas',
    events: {
      onhover: { enable: true, mode: 'repulse' },
      resize: true
    }
  }
});

// Countdown Timer
const countDownDate = new Date("Apr 7, 2025 00:00:00").getTime();
const timer = setInterval(function() {
  const now = new Date().getTime();
  const distance = countDownDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").textContent = days.toString().padStart(2, '0');
  document.getElementById("hours").textContent = hours.toString().padStart(2, '0');
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, '0');
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, '0');

  if (distance < 0) {
    clearInterval(timer);
    document.querySelectorAll('.countdown-box').forEach(box => {
      box.innerHTML = '<div class="text-2xl text-cyan-400">EVENT STARTED!</div>';
    });
  }
}, 1000);

// Prize Counter Animation
document.addEventListener('DOMContentLoaded', function() {
  const counter = document.getElementById('prizeCounter');
  const target = 2000;
  const duration = 1000;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let start = null;
        
        function animate(timestamp) {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const value = Math.floor(progress * target);
          counter.textContent = value.toLocaleString('en-IN');
          
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        }
        
        requestAnimationFrame(animate);
        observer.unobserve(counter);
      }
    });
  });

  observer.observe(counter);
});