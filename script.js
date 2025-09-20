let currentPage = 1;
const totalPages = 8;
const music = document.getElementById("bg-music");

function startMusicAndNext() {
  // browsers block autoplay, so start music on user click
  music.play();
  nextPage();
}

function nextPage() {
  document.getElementById(`page${currentPage}`).classList.add("hidden");
  currentPage++;
  document.getElementById(`page${currentPage}`).classList.remove("hidden");
}

function stopMusic() {
  music.pause();
  music.currentTime = 0;
  alert("Music stopped 💜");
}
