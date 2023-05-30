function State(){

    this.modal = null;
    this.paragraphDate = null;
    this.paragraphType = null;
    this.paragraphDistance = null;
    this.paragraphDuration = null;
    this.paragraphAvarageSpeed = null;
    this.paragraphCaloriesBurned = null;
    this.btnClose = null;
}

const state = new State();

export function init(){

    state.modal = document.querySelector('#modal-general-informations');
    state.title = document.querySelector('#activity-name');
    state.paragraphDate = document.querySelector('#paragraph-modal-date');
    state.paragraphType = document.querySelector('#paragraph-modal-type');
    state.paragraphDistance = document.querySelector('#paragraph-modal-distance');
    state.paragraphDuration = document.querySelector('#paragraph-modal-duration');
    state.paragraphAvarageSpeed = document.querySelector('#paragraph-modal-avarage-speed');
    state.paragraphCaloriesBurned = document.querySelector('#paragraph-modal-calories-burned');
    state.btnClose = document.querySelector('#btn-close-modal');

    // const fastestActivityDistance = localStorage.getItem('distance-from-fastes-activity');
    // state.paragraphDistance.innerText = fastestActivityDistance;

    state.btnClose.addEventListener('click', (event) => {
        event.preventDefault();

        closeModal();
    });
}

export function closeModal(){
    state.modal.classList.remove('active');
}

export function showModal(){
    state.modal.classList.add('active');
}

export function getInformations(title, date, type, distance, duration, avarageSpeed, caloriesBurned){
    state.title.innerText = title;
    state.paragraphDate.innerText = date;
    state.paragraphType.innerText = type;
    state.paragraphDistance.innerText = distance;
    state.paragraphDuration.innerText = duration;
    state.paragraphAvarageSpeed.innerText = avarageSpeed;
    state.paragraphCaloriesBurned.innerText = caloriesBurned;
}