import VimeoPlayer from '@vimeo/player/dist/player.es.js';
import throttle from 'lodash.throttle';

const iframe = document.getElementById('vimeo-player');

const player = new VimeoPlayer(iframe);

const saveTimeToLocalStorage = throttle(time => {
    localStorage.setItem('videoplayer-current-time', time);
}, 1000);

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    saveTimeToLocalStorage(currentTime);
});

window.addEventListener('load', () => {
    const storedTime = localStorage.getItem('videoplayer-current-time');

    if (storedTime) {
    player.setCurrentTime(parseFloat(storedTime));
    }
});
