import * as elements from '../elements.js';
import * as fileController from '../file-controller.js';

//FASTES ACTIVITY
const fastestActivityDistance = localStorage.getItem('distance-from-fastes-activity');
const fastestActivityAvarageSpeed = localStorage.getItem('avarage-speed-from-fastes-activity');

const distanceFromFastActivity = document.querySelector('#distance-from-fastes-activity');
const avarageSpeedFromFastActivity = document.querySelector('#avarage-speed-from-fastes-activity');

distanceFromFastActivity.innerText = fastestActivityDistance;
avarageSpeedFromFastActivity.innerText = fastestActivityAvarageSpeed;

// LONGER ACTIVITY
const longestActivityDistante = localStorage.getItem('distance-from-longest-activity');
const longestActivityAvarageSpeed = localStorage.getItem('avarage-speed-from-longest-activity');

const distanteFromLongestActivity = document.querySelector('#distance-from-longest-activity');
const avarageSpeedFromLongestActivity = document.querySelector('#avarage-speed-from-longest-activity');

distanteFromLongestActivity.innerText = longestActivityDistante;
avarageSpeedFromLongestActivity.innerText = longestActivityAvarageSpeed;