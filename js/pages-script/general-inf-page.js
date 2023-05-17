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

// FASTES RACE
const fastestRaceDistance = localStorage.getItem('distance-from-fastes-activity-race');
const fastestRaceAvarageSpeed = localStorage.getItem('avarage-speed-from-fastes-activity-race');

const distanceFromFastestRace = document.querySelector('#distance-from-fastes-activity-race');
const avarageSpeedFromFastRace = document.querySelector('#avarage-speed-from-fastes-activity-race');

distanceFromFastestRace.innerText = fastestRaceDistance;
avarageSpeedFromFastRace.innerText = fastestRaceAvarageSpeed;

// LONGEST RUN
const longestRaceDistance = localStorage.getItem('distance-from-longest-activity-race');
const longestRaceAvarageSpeed = localStorage.getItem('avarage-speed-from-longest-activity-race');

const distanceLongestRace = document.querySelector('#distance-from-longest-activity-race');
const avarageSpeedLongestRace = document.querySelector('#avarage-speed-from-longest-activity-race');

distanceLongestRace.innerText = longestRaceDistance;
avarageSpeedLongestRace.innerText = longestRaceAvarageSpeed

// FASTES CICLISM
const fastestCiclismDistance = localStorage.getItem('distance-from-fastes-activity-ciclism');
const fastestCiclismAvarageSpeed = localStorage.getItem('avarage-speed-from-fastes-activity-ciclism');

const distanceFromFastesCiclism = document.querySelector('#distance-from-fastes-activity-ciclism');
const avarageSpeedFromFastestCiclism = document.querySelector('#avarage-speed-from-fastes-activity-ciclism');

distanceFromFastesCiclism.innerText = fastestCiclismDistance;
avarageSpeedFromFastestCiclism.innerText = fastestCiclismAvarageSpeed;

//LONGEST CICLISM
const longestCiclismDistance = localStorage.getItem('distance-from-longest-activity-ciclism');
const longestCiclismAvarageSpeed = localStorage.getItem('avarage-speed-from-longest-activity-ciclism');

const distanceFromFarthesCiclism = document.querySelector('#distance-from-longest-activity-ciclism');
const avarageSpeedFromFarthesCiclism = document.querySelector('#avarage-speed-from-longest-activity-ciclism');

distanceFromFarthesCiclism.innerText = longestCiclismDistance;
avarageSpeedFromFarthesCiclism.innerText = longestCiclismAvarageSpeed;