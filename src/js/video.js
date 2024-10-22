import VimeoPlayer from '@vimeo/player/dist/player.es.js';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const TIME_KEY = 'videoplayer-current-time';
const player = new VimeoPlayer(iframe);

const saveTimeToLocalStorage = throttle(time => {
    localStorage.setItem(TIME_KEY, time);
}, 1000);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    saveTimeToLocalStorage(currentTime);
});

window.addEventListener('load', () => {
    const storedTime = localStorage.getItem(TIME_KEY);

    if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
    }
});
