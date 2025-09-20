let currentPage = 1;
const totalPages = 8;
const music = document.getElementById("bg-music");

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.add("hidden");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.remove("hidden");
}

function stopMusic() {
  music.pause();
  music.currentTime = 0; // reset to start
  alert("Music stopped 💜");
}
