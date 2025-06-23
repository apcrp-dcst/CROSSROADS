// Typing intro effect
const introText = "C:\\Users\\CST> Remembering the memories we've made together... 💙";
let i = 0;
function typeIntro() {
  const introEl = document.getElementById("intro");
  if (introEl && i < introText.length) {
    introEl.innerHTML += introText.charAt(i);
    i++;
    setTimeout(typeIntro, 50);
  }
}
window.onload = typeIntro;

// Command Terminal Logic
const cmdInput = document.getElementById("cmdInput");
const cmdOutput = document.getElementById("cmdOutput");

cmdInput?.addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    const cmd = cmdInput.value.trim().toLowerCase();
    let response = "";

    switch (cmd) {
      case "thanks":
        response = ">> Thank you for everything, seniors 💙";
        break;
      case "goodbye":
        response = ">> Logging off... We'll miss you 😢";
        break;
      case "quote":
        response = ">> \"Don’t cry because it’s over, smile because it happened.\"";
        break;
      case "clear":
        cmdOutput.innerText = "";
        cmdInput.value = "";
        return;
      default:
        response = "You will never be missed, because your memories will always be cherished. 💙";
    }

    cmdOutput.innerText = response;
    cmdInput.value = "";
  }
});

// Particle Background
tsParticles.load("particles-js", {
  background: { color: "#0d0d0d" },
  particles: {
    number: { value: 90 },
    color: { value: "#00ff00" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      anim: { enable: true, speed: 1, opacity_min: 0.5, sync: false }
    },
    size: {
      value: 3,
      anim: { enable: true, speed: 2, size_min: 1, sync: false }
    },
    move: {
      enable: true,
      speed: 1.5,
      direction: "none",
      outModes: { default: "bounce" }
    }
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "repulse" },
      resize: true
    },
    modes: { repulse: { distance: 100, duration: 0.4 } }
  },
  detectRetina: true
});

// Lightbox for full-size event images
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

document.querySelectorAll(".event-images img").forEach(img => {
  img.addEventListener("click", () => {
    const fullSrc = img.getAttribute("data-full") || img.src;
    lightboxImg.src = fullSrc;
    lightbox.style.display = "flex";
  });
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    lightboxImg.src = "";
  }
});
