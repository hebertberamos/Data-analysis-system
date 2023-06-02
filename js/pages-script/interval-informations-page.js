import * as modalController from '../controller/modal-controller.js';

function State() {
    this.cardFastestActivity = null
    this.cardLongestActivity = null;
}

const state = new State();

export function initIntervalInformationsPage(){

    state.cardFastestActivity = document.querySelector('#fast-activity-interval');
    state.cardLongestActivity = document.querySelector('#longes-activity-interval');

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
    
    const fastestActiviteDate = localStorage.getItem('date-fastes-activity-per-interval');
    const fastestActiviteType = localStorage.getItem('type-fastes-activity-per-interval');
    const fastestActiviteAvarageSpeed = localStorage.getItem('avarage-speed-fastes-activity-per-interval');
    const fastestActiviteDuration = localStorage.getItem('duration-fastes-activity-per-interval');
    const fastestActiviteDistance = localStorage.getItem('distance-faster-activity-per-interval');
    const fastestActiviteBurnedCalories = localStorage.getItem('burned-calories-fastes-activity-per-interval');

    const paragraphAvarageSpeedFastestActivite = document.querySelector('#avarage-speed-fastes-activity-per-interval');
    const paragraphDistanceFastestActivite = document.querySelector('#distance-faster-activity-per-interval');

    paragraphAvarageSpeedFastestActivite.innerText = fastestActiviteAvarageSpeed;
    paragraphDistanceFastestActivite.innerText = fastestActiviteDistance;

    const farthestActivityDate = localStorage.getItem('date-longest-activity-per-interval');
    const farthestActivityType = localStorage.getItem('type-longest-activity-per-interval');
    const farthestActivityAvarageSpeed = localStorage.getItem('avarage-speed-longest-actvity-per-interval');
    const farthestActivityDuration = localStorage.getItem('duration-longest-activity-per-interval');
    const farthestActivityDistance = localStorage.getItem('distance-longest-activity-per-interval');
    const farthestActivityBurnedCalories = localStorage.getItem('burned-calories-longest-activity-per-interval');

    const paragraphAvarageSpeedFarthestActivity = document.querySelector('#avarage-speed-longest-actvity-per-interval');
    const paragraphDistanceFarthestActivity = document.querySelector('#distance-longest-activity-per-interval');

    paragraphAvarageSpeedFarthestActivity.innerText = farthestActivityAvarageSpeed;
    paragraphDistanceFarthestActivity.innerText = farthestActivityDistance;

    document.addEventListener('click', (event) => {
        var targetElement = event.target;
        if(state.cardFastestActivity.contains(targetElement)){

            const title = "Atividade mais rápida"

            modalController.showModal();
            modalController.chageImg(fastestActiviteType);
            modalController.getInformations(title, fastestActiviteDate, fastestActiviteType, fastestActiviteDistance, fastestActiviteDuration, fastestActiviteAvarageSpeed, fastestActiviteBurnedCalories);
        }
        else if(state.cardLongestActivity.contains(targetElement)){

            const title = "Atividade mais longa"
            
            modalController.showModal();
            modalController.chageImg(farthestActivityType);
            modalController.getInformations(title, farthestActivityDate, farthestActivityType, farthestActivityDistance, farthestActivityDuration, farthestActivityAvarageSpeed, farthestActivityBurnedCalories);
        }
    });
    
}