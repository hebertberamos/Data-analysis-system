import * as modaController from '../controller/modal-controller.js';

function State() {
    this.cardFastestActivity = null
    this.cardLongestActivity = null;
}

const state = new State();

export function initIntervalInformationsPage(){

    state.cardFastestActivity = document.querySelector('#title-fastest-activity-per-interval');
    state.cardLongestActivity = document.querySelector('#title-longest-activity-per-interval');

    const startDistance = localStorage.getItem('start-distance');
    const finalDistance = localStorage.getItem('final-distance');

    const paragraphStartDistanceFastestActivity = document.querySelector('#start-distance-fast-activity');
    const paragraphFinalDistanceFastestActivity = document.querySelector('#final-distance-fast-activity');

    paragraphStartDistanceFastestActivity.innerText = startDistance;
    paragraphFinalDistanceFastestActivity.innerText = finalDistance;

    const paragraphStartDistanceLongestActivity = document.querySelector('#start-distance-longest-activity');
    const paragraphFinalDistanceLongestActivity = document.querySelector('#final-distance-longest-activity');

    paragraphStartDistanceLongestActivity.innerText = startDistance;
    paragraphFinalDistanceLongestActivity.innerText = finalDistance;

    const fastestActiviteAvarageSpeed = localStorage.getItem('avarage-speed-fastes-activity-per-interval');
    const fastestActiviteDistance = localStorage.getItem('distance-faster-activity-per-interval');

    const paragraphAvarageSpeedFastestActivite = document.querySelector('#avarage-speed-fastes-activity-per-interval');
    const paragraphDistanceFastestActivite = document.querySelector('#distance-faster-activity-per-interval');

    paragraphAvarageSpeedFastestActivite.innerText = fastestActiviteAvarageSpeed;
    paragraphDistanceFastestActivite.innerText = fastestActiviteDistance;

    const farthestActivityAvarageSpeed = localStorage.getItem('avarage-speed-longest-actvity-per-interval');
    const farthestActivityDistance = localStorage.getItem('distance-longest-activity-per-interval');

    const paragraphAvarageSpeedFarthestActivity = document.querySelector('#avarage-speed-longest-actvity-per-interval');
    const paragraphDistanceFarthestActivity = document.querySelector('#distance-longest-activity-per-interval');

    paragraphAvarageSpeedFarthestActivity.innerText = farthestActivityAvarageSpeed;
    paragraphDistanceFarthestActivity.innerText = farthestActivityDistance;
    
}