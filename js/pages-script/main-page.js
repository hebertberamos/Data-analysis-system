import * as elements from '../elements.js';
import * as fileController from '../file-controller.js';


// Ao clicar no card de seleção de arquivo, abre a aba de seleção
// Quando estiver selecionado manda para o arquivo js que é responsável por administrar os dados da tabela
elements.cardEnterFileMainPage.addEventListener('click', () => {
    elements.inputFileMainPage.click();
}); 

// Quando o arquivo é selecionado o título do carde recebe o nome do arquivo selecionado
elements.inputFileMainPage.addEventListener('change', async() => {
    const nameFile = elements.inputFileMainPage.value.split('\\').pop();
    elements.fileNameMainPage.innerText = nameFile;

    await fileController.getDataFromFile(elements.inputFileMainPage);
});

//Quando o card for clicado ele vai abri a janela de informações gerais das atividades
//Abrir apenas se o arquivo já tiver sido enviado
elements.cardShowAllInformationsMainPage.addEventListener('click', async() => {
    
    //Verificação de arquivo
    if(elements.inputFileMainPage.value == ""){
        console.log("vazio");
    }
    else{
        //Atividade mais rápida
        const fastestActivityDistance = fileController.catchingDistanceFromTheFastesActivity();
        const fastestActivityAvarageSpeed = fileController.catchingAvarageSpeedFromTheFastesActivity();

        localStorage.setItem('distance-from-fastes-activity', `${fastestActivityDistance} km`);
        localStorage.setItem('avarage-speed-from-fastes-activity', `${fastestActivityAvarageSpeed} km/h`);

        //Atividade mais longa
        const longestActivityDistante = fileController.catchingDistanceFromTheLongerActivity();
        const longestActivityAvarageSpeed = fileController.catchingAvarageSpeedFromTheLongerActivity();

        localStorage.setItem('distance-from-longest-activity', `${longestActivityDistante} km`);
        localStorage.setItem(`avarage-speed-from-longest-activity`, `${longestActivityAvarageSpeed} km/h`)

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

        
        window.location.href = 'pg-informacoes-gerais.html';
    }
});

//Quando o card for clicado irá aparecer um formulário para ser preenchido pelo usuário
elements.cardShowInformationPerIntervalMainPage.addEventListener('click', () => {
    if(elements.cardFormIntervalMainPage.style.display == "none"){
        elements.cardFormIntervalMainPage.style.display = 'flex';
    }else{
        elements.cardFormIntervalMainPage.style.display = 'none';
    }
});

    var startDistance = null;
    var finalDistance = null;

// FORMULARIO
//Input de entrada da distância inicial
elements.inputStartingDistanceMainPage.addEventListener('change', (event) => {
    const resultInputStartDistante = event.target.value;
    elements.inputStartingDistanceMainPage.value = resultInputStartDistante;
    startDistance = parseFloat(elements.inputStartingDistanceMainPage.value);
});

//Input de entrada da distância final
elements.inputFinalDistanceMainPage.addEventListener('change', (event) => {
    const resultInputFinalDistante = event.target.value;
    elements.inputFinalDistanceMainPage.value = resultInputFinalDistante;
    finalDistance = parseFloat(elements.inputFinalDistanceMainPage.value);
});

//Funcionalidade do botão de envio das informações do formulário 
//Dar a ele a funcionalidade apenas quando os inputs estiverem devidamente informados
elements.btnConfirmMainPage.addEventListener('click', (event) => {
    event.preventDefault();

    if(!elements.inputFileMainPage.value == ""){
        if(!elements.inputStartingDistanceMainPage.value == "" && !elements.inputFinalDistanceMainPage.value == ""){

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

            window.location.href = 'pg-informacoes-intervalo.html';
        }
    }
});