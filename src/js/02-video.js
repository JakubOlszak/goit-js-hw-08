import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');

const save = (key, value) => {
 
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  
};

const load = key => {
 
    const serializedState = localStorage.getItem(key);
    return serializedState === null ? undefined : JSON.parse(serializedState);
  
};

const player = new Player(iframe);

const currentTime = load('videoplayer-current-time');

const onPlay = ({ seconds }) => {
  save('videoplayer-current-time', seconds);
};


player.setCurrentTime(!currentTime ? 0 : currentTime);
player.on('timeupdate', throttle(onPlay, 1000));