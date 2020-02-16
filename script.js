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
const songs = ['The truth that you leave', 'A Kind of Sorrow']

let songIndex = 1

// load songs into DOM
loadSong(songs[songIndex])

// update songs detail

function loadSong(song) {
  title.innerText = song
  audio.src = `./musics/${song}.mp3`
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
  audio.play()
}

// pause song function

function pauseSong() {
  musicContainer.classList.remove('play')
  playBtn.querySelector('i.fas').classList.remove('fa-pause')
  playBtn.querySelector('i.fas').classList.add('fa-play')
  audio.pause()
}

// change song

prevBtn.addEventListener('click', prevSong)
nextBtn.addEventListener('click', nextSong)

function prevSong() {
  songIndex--

  if (songIndex < 0) {
    songIndex = songs.length - 1
  }

  loadSong(songs[songIndex])

  playSong()
}

function nextSong() {
  songIndex++

  if (songIndex > songs.length - 1) {
    songIndex = 0
  }

  loadSong(songs[songIndex])

  playSong()
}

// time update 
audio.addEventListener('timeupdate', updateProgress)

function updateProgress(e) {
  const { duration, currentTime } = e.srcElement
  const progressPercent = (currentTime / duration) * 100
  progress.style.width = `${progressPercent}%`
}

// click on progress bar 
progressContainer.addEventListener('click', setProgress)

function setProgress(e) {
  const width = this.clientWidth
  const clickX = e.offsetX
  const duration = audio.duration
  audio.currentTime = (clickX / width) * duration
}

// songs end
audio.addEventListener('ended', nextSong)