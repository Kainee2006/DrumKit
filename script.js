
const drumSounds = {
  A: "./sounds/kick.mp3",
  S: "./sounds/snare.mp3",
  D: "./sounds/hihat.mp3",
  F: "./sounds/tom.mp3",
  G: "./sounds/crash.mp3"
};

function playSound(key) {
  const upperKey = key.toUpperCase();
  const audioSrc = drumSounds[upperKey];
  if (audioSrc) {
    const audio = new Audio(audioSrc);
    audio.play();

    const btn = document.querySelector(`.drum[data-key="${upperKey}"]`);
    if (btn) {
      btn.classList.add('playing');
      setTimeout(() => btn.classList.remove('playing'), 200);
    }
  }
}

document.addEventListener("keydown", (e) => {
  playSound(e.key);
});

document.querySelectorAll(".drum").forEach(btn => {
  btn.addEventListener("click", () => {
    const key = btn.getAttribute("data-key");
    playSound(key);
  });
});
