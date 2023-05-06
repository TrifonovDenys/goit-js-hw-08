import Player from '@vimeo/player';
const throttle = require('lodash.throttle');

const CURRENT_TIME_KEY = 'videoplayer-current-time'

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

function recordCurrentTime({ seconds, ...other }) {
  localStorage.setItem(CURRENT_TIME_KEY, seconds);
}

player.on('timeupdate', throttle((recordCurrentTime), 1000))
player.setCurrentTime(localStorage.getItem(CURRENT_TIME_KEY))