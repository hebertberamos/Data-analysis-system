import * as fileController from '../controller/file-controller.js';

function State() {
    this.cardEnterFileMainPage = null;
    this.fileNameMainPage = null;
    this.inputFileMainPage = null;

    this.cardShowAllInformationsMainPage = null;

    this.cardShowInformationPerIntervalMainPage = null;

    this.cardFormIntervalMainPage = null;
    this.inputStartingDistanceMainPage = null;
    this.inputFinalDistanceMainPage = null;
    this.btnConfirmMainPage = null
}


const state = new State();

state.cardEnterFileMainPage = document.querySelector('#entrance-card-enter-file');
state.fileNameMainPage = document.querySelector('#file-name');
state.inputFileMainPage = document.querySelector('#file-input');

state.cardShowAllInformationsMainPage = document.querySelector("#entrance-card-general-informations");

state.cardShowInformationPerIntervalMainPage = document.querySelector("#entrance-card-information-time-interval");

state.cardFormIntervalMainPage = document.querySelector("#span-card-form");
state.inputStartingDistanceMainPage = document.querySelector('#starting-distance');
state.inputFinalDistanceMainPage = document.querySelector('#final-distance');
state. btnConfirmMainPage = document.querySelector('#btn-confirm');

export function init(){
    // Ao clicar no card de seleção de arquivo, abre a aba de seleção
// Quando estiver selecionado manda para o arquivo js que é responsável por administrar os dados da tabela
state.cardEnterFileMainPage.addEventListener('click', () => {
    state.inputFileMainPage.click();
}); 

// Quando o arquivo é selecionado o título do carde recebe o nome do arquivo selecionado
state.inputFileMainPage.addEventListener('change', async() => {
    const nameFile = state.inputFileMainPage.value.split('\\').pop();
    state.fileNameMainPage.innerText = nameFile;

    await fileController.getDataFromFile(state.inputFileMainPage);
});

//Quando o card for clicado ele vai abri a janela de informações gerais das atividades
//Abrir apenas se o arquivo já tiver sido enviado
state.cardShowAllInformationsMainPage.addEventListener('click', async() => {
    
    //Verificação de arquivo
    if(state.inputFileMainPage.value == ""){
        console.log("vazio");
    }
    else{
        //Atividade mais rápida
        const fastestActiviteDate = fileController.catchingDateFromTheFastesActivity();
        const fastestActivityType = fileController.catchingTypeFromTheFastesActivity();
        const fastestActivityDistance = fileController.catchingDistanceFromTheFastesActivity();
        const fastestActivityDuration = fileController.catchingDurationFromTheFastesActivity();
        const fastestActivityAvarageSpeed = fileController.catchingAvarageSpeedFromTheFastesActivity();
        const fastestActivityBurnedCalories = fileController.catchingBurnedCaloriesFromTheFastesActivity();

        localStorage.setItem('date-from-fastes-activity', `${fastestActiviteDate}`);
        localStorage.setItem('type-from-fastes-activity', `${fastestActivityType}`);
        localStorage.setItem('distance-from-fastes-activity', `${fastestActivityDistance} km`);
        localStorage.setItem('duration-from-fastes-activity', `${fastestActivityDuration}`);
        localStorage.setItem('avarage-speed-from-fastes-activity', `${fastestActivityAvarageSpeed} km/h`);
        localStorage.setItem('calories-burned-from-fastes-activity', `${fastestActivityBurnedCalories}`);

        //Atividade mais longa
        const longestActivityDate = fileController.catchingDateFromTheLongerActivity();
        const longestActivityType = fileController.catchingTypeFromTheLongerActivity();
        const longestActivityDistante = fileController.catchingDistanceFromTheLongerActivity();
        const longestActivityDuration = fileController.catchingDurationFromTheLongerActivity();
        const longestActivityAvarageSpeed = fileController.catchingAvarageSpeedFromTheLongerActivity();
        const longestActivityCaloriesBurned = fileController.catchingBurnedCaloriesFromTheLongerActivity();

        const object = fileController.catchingObjectGreaterDistance();
        console.log(object);
        console.log("data", longestActivityDate);
        console.log(longestActivityType)
        console.log(longestActivityDistante);
        console.log(longestActivityDuration);
        console.log(longestActivityAvarageSpeed);
        console.log(longestActivityCaloriesBurned);

        localStorage.setItem('date-from-longest-activity', `${longestActivityDate}`);
        localStorage.setItem('type-from-longest-activity', `${longestActivityType}`);
        localStorage.setItem('distance-from-longest-activity', `${longestActivityDistante} km`);
        localStorage.setItem('duration-from-longest-activity', `${longestActivityDuration}`);
        localStorage.setItem(`avarage-speed-from-longest-activity`, `${longestActivityAvarageSpeed} km/h`);
        localStorage.setItem('calories-burned-from-longest-activity', `${longestActivityCaloriesBurned}`);

        //Corrida mais rapida 
        const speedFromFastestRun = fileController.catchingAvarageSpeedFromTheFastestRun();
        const distanceFromFastestRun = fileController.catchingDistanceFromTheFastestRun();

        localStorage.setItem('distance-from-fastes-activity-race', `${distanceFromFastestRun} km`);
        localStorage.setItem('avarage-speed-from-fastes-activity-race', `${speedFromFastestRun} km/h`);

        //Corrida mais longa
        const avarageSpeedFarthesRun = fileController.catchingAvarageSpeedFromFarthesRun();
        const distanceFarthesRun = fileController.catchingDistanceFromFarthesRun();

        localStorage.setItem('distance-from-longest-activity-race', `${distanceFarthesRun} km`);
        localStorage.setItem('avarage-speed-from-longest-activity-race', `${avarageSpeedFarthesRun} km/h`);
        
        //Ciclismo mais rápido
        const avarageSpeedFromFastestCiclism = fileController.catchingAvarageSpeedFromFastesCiclism();
        const distanceFromFastestCiclism = fileController.catchingDistanceFromFastesCiclism();

        localStorage.setItem('avarage-speed-from-fastes-activity-ciclism', `${avarageSpeedFromFastestCiclism} km/h`);
        localStorage.setItem('distance-from-fastes-activity-ciclism', `${distanceFromFastestCiclism} km`);

        // Ciclismo mais longo
        const avarageSpeedFromFarthesCiclism = fileController.catchingAvarageSpeedFromFarthesCiclism();
        const distanceFromFarthesCiclism = fileController.catchingDistanceFromFarthesCiclism();

        localStorage.setItem('distance-from-longest-activity-ciclism', `${distanceFromFarthesCiclism} km`);
        localStorage.setItem('avarage-speed-from-longest-activity-ciclism', `${avarageSpeedFromFarthesCiclism} km/h`);

        
        window.location.href = 'pages/pg-informacoes-gerais.html';
    }
});

//Quando o card for clicado irá aparecer um formulário para ser preenchido pelo usuário
state.cardShowInformationPerIntervalMainPage.addEventListener('click', () => {
    if(state.cardFormIntervalMainPage.style.display == "none"){
        state.cardFormIntervalMainPage.style.display = 'flex';
    }else{
        state.cardFormIntervalMainPage.style.display = 'none';
    }
});

    var startDistance = null;
    var finalDistance = null;

// FORMULARIO
//Input de entrada da distância inicial
state.inputStartingDistanceMainPage.addEventListener('change', (event) => {
    const resultInputStartDistante = event.target.value;
    state.inputStartingDistanceMainPage.value = resultInputStartDistante;
    startDistance = parseFloat(state.inputStartingDistanceMainPage.value);
});

//Input de entrada da distância final
state.inputFinalDistanceMainPage.addEventListener('change', (event) => {
    const resultInputFinalDistante = event.target.value;
    state.inputFinalDistanceMainPage.value = resultInputFinalDistante;
    finalDistance = parseFloat(state.inputFinalDistanceMainPage.value);
});

//Funcionalidade do botão de envio das informações do formulário 
//Dar a ele a funcionalidade apenas quando os inputs estiverem devidamente informados
state.btnConfirmMainPage.addEventListener('click', (event) => {
    event.preventDefault();

    if(!state.inputFileMainPage.value == ""){
        if(!state.inputStartingDistanceMainPage.value == "" && !state.inputFinalDistanceMainPage.value == ""){

            const startDistanceNumber = parseFloat(startDistance);
            const finalDistanceNumber = parseFloat(finalDistance);

            localStorage.setItem('start-distance', `${startDistanceNumber} km`);
            localStorage.setItem('final-distance', `${finalDistanceNumber} km`);

            const avarageSpeedFastestActivite = fileController.catchinAvaraSpeedFasterActiviteInterval(startDistance, finalDistance);
            const distanceFastestActivite = fileController.catchingDistanceSpeedFasterActiviteInterval(startDistance, finalDistance);

            localStorage.setItem('avarage-speed-fastes-activity-per-interval', `${avarageSpeedFastestActivite} km/h`);
            localStorage.setItem('distance-faster-activity-per-interval', `${distanceFastestActivite} km`);

            const avarageSpeedFarthesActivite = fileController.catchinAvaraSpeedFarthestActiviteInterval(startDistance, finalDistance);
            const distanceFarthesActivite = fileController.catchinDistanceFarthestActiviteInterval(startDistance, finalDistance);

            localStorage.setItem('avarage-speed-longest-actvity-per-interval', `${avarageSpeedFarthesActivite} km/h`);
            localStorage.setItem('distance-longest-activity-per-interval', `${distanceFarthesActivite} km`);

            window.location.href = 'pages/pg-informacoes-intervalo.html';
        }
    }
});
}

