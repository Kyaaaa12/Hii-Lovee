let currentPage = 1;
const totalPages = 8;
const music = document.getElementById("bg-music");

function startMusicAndNext() {
  // browsers require user interaction for music
  music.play().catch(err => console.log("Autoplay blocked:", err));
  
  // hide page1 and show page2
  document.getElementById("page1").classList.add("hidden");
  currentPage = 2;
  document.getElementById("page2").classList.remove("hidden");
}

function nextPage() {
  if (currentPage < totalPages) {
    document.getElementById(`page${currentPage}`).classList.add("hidden");
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.remove("hidden");
  }
}

function stopMusic() {
  music.pause();
  music.currentTime = 0;
  alert("Music stopped 💜");
}
