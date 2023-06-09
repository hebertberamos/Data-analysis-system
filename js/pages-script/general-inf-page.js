import * as modalController from '../controller/modal-controller.js';
import * as fileController from '../controller/file-controller.js';

function State(){
    this.cardFastesActivity = null;
    this.cardLongestActivity = null;

    this.cardFastestRace = null;
    this.cardLongestRace = null;

    this.cardFastestCiclism = null;
    this.cardLongestCiclism = null;
}

const state = new State();

export function init(){

    state.cardFastesActivity = document.querySelector('#fastes-activity');
    state.cardLongestActivity = document.querySelector('#longest-activity');
    state.cardFastestRace = document.querySelector('#fastes-activity-run');
    state.cardLongestRace = document.querySelector('#longest-activity-run');
    state.cardFastestCiclism = document.querySelector('#fastes-activity-cycling');
    state.cardLongestCiclism = document.querySelector('#longest-activity-cycling');

    //FASTES ACTIVITY
    const titleFastestActivity = document.querySelector('#activity-name-fastest-activity'); 
    const titleFastestActivityText = titleFastestActivity.innerText;
    const fastestActivityDate = localStorage.getItem('date-from-fastes-activity');
    const fastestActivityType = localStorage.getItem('type-from-fastes-activity');
    const fastestActivityDistance = localStorage.getItem('distance-from-fastes-activity');
    const fastestActivityDuration = localStorage.getItem('duration-from-fastes-activity');
    const fastestActivityAvarageSpeed = localStorage.getItem('avarage-speed-from-fastes-activity');
    const fastestActivityCaloriesBurned = localStorage.getItem('calories-burned-from-fastes-activity');

    const distanceFromFastActivity = document.querySelector('#distance-from-fastes-activity');
    const avarageSpeedFromFastActivity = document.querySelector('#avarage-speed-from-fastes-activity');

    distanceFromFastActivity.innerText = fastestActivityDistance;
    avarageSpeedFromFastActivity.innerText = fastestActivityAvarageSpeed;

    state.cardFastesActivity.addEventListener('click', (event) => {
        event.preventDefault();

        modalController.showModal();
        modalController.chageImg(fastestActivityType);
        modalController.getInformations(titleFastestActivityText, fastestActivityDate, fastestActivityType, fastestActivityDistance, fastestActivityDuration, fastestActivityAvarageSpeed, fastestActivityCaloriesBurned);
    });

    // LONGER ACTIVITY
    const titleLongestActivityDistance = document.querySelector('#activity-name-longest-activity');
    const titleLongestActivityDistanceText = titleLongestActivityDistance.innerText;
    const longestActivityDate = localStorage.getItem('date-from-longest-activity');
    const longestActivityType = localStorage.getItem('type-from-longest-activity');
    const longestActivityDistante = localStorage.getItem('distance-from-longest-activity');
    const longestActivityDuration = localStorage.getItem('duration-from-longest-activity');
    const longestActivityAvarageSpeed = localStorage.getItem('avarage-speed-from-longest-activity');
    const longestActivityBurnedCalories = localStorage.getItem('calories-burned-from-longest-activity');

    const distanteFromLongestActivity = document.querySelector('#distance-from-longest-activity');
    const avarageSpeedFromLongestActivity = document.querySelector('#avarage-speed-from-longest-activity');

    distanteFromLongestActivity.innerText = longestActivityDistante;
    avarageSpeedFromLongestActivity.innerText = longestActivityAvarageSpeed;


    state.cardLongestActivity.addEventListener('click', (event) => {
        event.preventDefault();

        modalController.showModal();
        modalController.chageImg(longestActivityType);
        modalController.getInformations(titleLongestActivityDistanceText, longestActivityDate, longestActivityType, longestActivityDistante, longestActivityDuration, longestActivityAvarageSpeed, longestActivityBurnedCalories);
    })

    // FASTES RACE
    const titleFastestRace = document.querySelector('#activity-name-speed-race');
    const titleFastestRaceText = titleFastestRace.innerText;
    const fastestRaceDate = localStorage.getItem('date-from-fastes-activity-race');
    const fastestRaceType = localStorage.getItem('type-from-fastes-activity-race');
    const fastestRaceDistance = localStorage.getItem('distance-from-fastes-activity-race');
    const fastestRaceDuration = localStorage.getItem('duration-from-fastes-activity-race');
    const fastestRaceAvarageSpeed = localStorage.getItem('avarage-speed-from-fastes-activity-race');
    const fastestRaceBurnedCalories = localStorage.getItem('burned-calories-from-fastes-activity-run');

    const distanceFromFastestRace = document.querySelector('#distance-from-fastes-activity-race');
    const avarageSpeedFromFastRace = document.querySelector('#avarage-speed-from-fastes-activity-race');

    distanceFromFastestRace.innerText = fastestRaceDistance;
    avarageSpeedFromFastRace.innerText = fastestRaceAvarageSpeed;

    state.cardFastestRace.addEventListener('click', (event) => {
        event.preventDefault();

        modalController.showModal();
        modalController.chageImg(fastestRaceType);
        modalController.getInformations(titleFastestRaceText, fastestRaceDate, fastestRaceType, fastestRaceDistance, fastestRaceDuration, fastestRaceAvarageSpeed, fastestRaceBurnedCalories);
    })

    // LONGEST RUN
    const titleLongestRace = document.querySelector('#activity-name-longest-race');
    const titleLongestRaceText = titleLongestRace.innerText;
    const longestRaceDate = localStorage.getItem('date-from-longest-activity-race');
    const longestRaceType = localStorage.getItem('type-from-longest-activity-race');
    const longestRaceDistance = localStorage.getItem('distance-from-longest-activity-race');
    const longestRaceDuration = localStorage.getItem('duration-from-longest-activity-race');
    const longestRaceAvarageSpeed = localStorage.getItem('avarage-speed-from-longest-activity-race');
    const longestRaceBurnedCalories = localStorage.getItem('burned-calories-from-longest-activity-race');

    const distanceLongestRace = document.querySelector('#distance-from-longest-activity-race');
    const avarageSpeedLongestRace = document.querySelector('#avarage-speed-from-longest-activity-race');

    distanceLongestRace.innerText = longestRaceDistance;
    avarageSpeedLongestRace.innerText = longestRaceAvarageSpeed


    state.cardLongestRace.addEventListener('click', (event) => {
        event.preventDefault();

        modalController.showModal();
        modalController.chageImg(longestRaceType);
        modalController.getInformations(titleLongestRaceText, longestRaceDate, longestRaceType, longestRaceDistance, longestRaceDuration, longestRaceAvarageSpeed, longestRaceBurnedCalories);
    });

    // FASTES CICLISM
    const fastestCiclismTitle = document.querySelector('#activity-name-fastest-cyclism');
    const fastestCiclismTitleText = fastestCiclismTitle.innerText;
    const fastestCiclismDate = localStorage.getItem('date-from-fastes-activity-ciclism'); 
    const fastestCiclismType = localStorage.getItem('type-from-fastes-activity-ciclism'); 
    const fastestCiclismDistance = localStorage.getItem('distance-from-fastes-activity-ciclism');
    const fastestCiclismDuration = localStorage.getItem('duration-from-fastes-activity-ciclism'); 
    const fastestCiclismAvarageSpeed = localStorage.getItem('avarage-speed-from-fastes-activity-ciclism');
    const fastestCiclismBurnedCalories = localStorage.getItem('burned-calories-from-fastes-activity-ciclism'); 

    const distanceFromFastesCiclism = document.querySelector('#distance-from-fastes-activity-ciclism');
    const avarageSpeedFromFastestCiclism = document.querySelector('#avarage-speed-from-fastes-activity-ciclism');

    distanceFromFastesCiclism.innerText = fastestCiclismDistance;
    avarageSpeedFromFastestCiclism.innerText = fastestCiclismAvarageSpeed;

    state.cardFastestCiclism.addEventListener('click', (event) => {
        event.preventDefault();

        modalController.showModal();
        modalController.chageImg(fastestCiclismType);
        modalController.getInformations(fastestCiclismTitleText, fastestCiclismDate, fastestCiclismType, fastestCiclismDistance, fastestCiclismDuration, fastestCiclismAvarageSpeed, fastestCiclismBurnedCalories);
    });

    //LONGEST CICLISM
    const longestCiclisTitle = document.querySelector('#activity-name-fastest-cyclism');
    const longestCiclisTitleText = longestCiclisTitle.innerText;
    const longestCiclismDate = localStorage.getItem('date-from-longest-activity-ciclism');
    const longestCiclismType = localStorage.getItem('type-from-longest-activity-ciclism');
    const longestCiclismDistance = localStorage.getItem('distance-from-longest-activity-ciclism');
    const longestCiclismDuration = localStorage.getItem('duration-from-longest-activity-ciclism');
    const longestCiclismAvarageSpeed = localStorage.getItem('avarage-speed-from-longest-activity-ciclism');
    const longestCiclismBurnedCalories = localStorage.getItem('burned-calories-from-longest-activity-ciclism');

    const distanceFromFarthesCiclism = document.querySelector('#distance-from-longest-activity-ciclism');
    const avarageSpeedFromFarthesCiclism = document.querySelector('#avarage-speed-from-longest-activity-ciclism');

    distanceFromFarthesCiclism.innerText = longestCiclismDistance;
    avarageSpeedFromFarthesCiclism.innerText = longestCiclismAvarageSpeed;

    state.cardLongestCiclism.addEventListener('click', (event) => {
        event.preventDefault();
        
        modalController.showModal();
        modalController.chageImg(longestCiclismType);
        modalController.getInformations(longestCiclisTitleText, longestCiclismDate, longestCiclismType, longestCiclismDistance, longestCiclismDuration, longestCiclismAvarageSpeed, longestCiclismBurnedCalories);
    });
    
}