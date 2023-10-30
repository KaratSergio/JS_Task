import VimeoPlayer from '@vimeo/player/dist/player.es.js';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const timeKey = 'videoplayer-current-time';
const player = new VimeoPlayer(iframe);

const saveTimeToLocalStorage = throttle(time => {
    localStorage.setItem(timeKey, time);
}, 1000);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    saveTimeToLocalStorage(currentTime);
});

window.addEventListener('load', () => {
    const storedTime = localStorage.getItem(timeKey);

    if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
    }
});
