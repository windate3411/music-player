// select DOM Element

const musicContainer = document.getElementById('music-container')
const playBtn = document.getElementById('play')
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

const audio = document.getElementById('audio')
const progress = document.getElementById('progress')
const progressContainer = document.getElementById('progress-container')
const title = document.getElementById('title')
const cover = document.getElementById('cover')

// songs title
const songs = ['music', 'A Kind of Sorrow']

let songIndex = 1

// load songs into DOM
loadSong(songs[songIndex])

// update songs detail

function loadSong(song) {
  title.innerText = song
  audio.src = `${song}.mp3`
}

// Event listener

playBtn.addEventListener('click', () => {
  const isPlaying = musicContainer.classList.contains('play')

  if (isPlaying) {
    pauseSong()
  } else {
    playSong()
  }
})

// play song function

function playSong() {
  musicContainer.classList.add('play')
  playBtn.querySelector('i.fas').classList.remove('fa-play')
  playBtn.querySelector('i.fas').classList.add('fa-pause')
  console.log('hi')
  audio.play()
}

// pause song function

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  audio.pause()
}