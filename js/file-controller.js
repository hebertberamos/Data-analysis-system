import * as elements from './elements.js';

var fileData = [];

export async function getDataFromFile(filePath){

    const file = filePath.files[0];
    const reader = new FileReader();

    const fileReadPromise = new Promise((resolve, error) => {
        reader.addEventListener('load', () => {
            resolve(reader.result);
        });
        reader.addEventListener('error', () => {
            error(reader.error);
        })
    });

    reader.readAsText(file);  

    const fileArray = await fileReadPromise;

    const lines = fileArray.trim().split('\n');
    const header = lines[0].trim().split(',');
    const data = [];

    for(let i = 1; i < lines.length; i++){
        const values = lines[i].split(',');
        const obj = {};

        for(let j = 0; j < header.length; j++){
            const value = values[j].trim();
            obj[header[j]] = isNaN(value) ? value : parseFloat(value);
        }

        data.push(obj);
    }

    fileData = data;

}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNÇÃO DE CAPTURA DA ATIVIDADE MAIS RÁPIDA
function catchingObjectGreaterSpeed(){
    const fastestActivity = fileData.reduce((prev, current) => {
        return prev['Average Speed (km/h)'] > current['Average Speed (km/h)'] ? prev : current;
    });
    
    return fastestActivity;
}
// Capturando a distância da atividade mais rápida
export function catchingDistanceFromTheFastesActivity(){
    const fastestActivity = catchingObjectGreaterSpeed();
    const distance = fastestActivity['Distance (km)'];

    return distance;
}
// Capturando a velocidade mádia da atividade mais rápida
export function catchingAvarageSpeedFromTheFastesActivity(){
    const fastestActivity = catchingObjectGreaterSpeed();
    const avarageSpeed = fastestActivity['Average Speed (km/h)'];

    return avarageSpeed;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNÇÃO DE CAPTURA DA ATIVIDADE MAIS LONGA
function catchingObjectGreaterDistance(){
    const longestActivity = fileData.reduce((prev, current) => {
        return prev['Distance (km)'] > current['Distance (km)'] ? prev : current;
    });

    return longestActivity;
}
// Capturando distância da atividade mais longa
export function catchingDistanceFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const distance = longestActivity['Distance (km)'];

    return distance;
}
// Capturando a velocidade mádia da atividade mais longa
export function catchingAvarageSpeedFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const avarageSpeed = longestActivity['Average Speed (km/h)'];

    return avarageSpeed;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCAO DE CAPTURA DE OBJETOS DE TIPO CORRIDA
function getRaceType(){
    const raceObject = fileData.filter(obj => obj.Type == 'Running');

    return raceObject;
}
// Capturando a corrida mais rápida
function catchingFastesRun(){
    const raceObject = getRaceType();

    const fastestRun = raceObject.reduce((prev, current) => {
        return prev['Average Speed (km/h)'] > current['Average Speed (km/h)'] ? prev : current;
    });

    return fastestRun;
}
// Pegando a velocidade da corrida mais rápida
export function catchingAvarageSpeedFromTheFastestRun(){
    const fastestRun = catchingFastesRun();

    const speedFastestRun = fastestRun['Average Speed (km/h)'];

    return speedFastestRun;
}
// Pegando distancia da corrida mais rapida
export function catchingDistanceFromTheFastestRun(){
    const fastestRun = catchingFastesRun();

    const distanceFastestRun = fastestRun['Distance (km)'];

    return distanceFastestRun;
}

// Capiturando a corrida mais longa
function catchingFarthestRun(){
    const raceObject = getRaceType();

    const farthestRun = raceObject.reduce((prev, current) => {
        return prev['Distance (km)'] > current['Distance (km)'] ? prev : current;
    });

    return farthestRun;
}

export function catchingAvarageSpeedFromFarthesRun(){
    const farthestRun = catchingFarthestRun();
    const speedFarthesRun = farthestRun['Average Speed (km/h)'];

    return speedFarthesRun;
}

export function catchingDistanceFromFarthesRun(){
    const farthestRun = catchingFarthestRun();
    const distanceFarthesRun = farthestRun['Distance (km)'];

    return distanceFarthesRun;
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCAO DE CAPTURA DE OBJETOS DE TIPO CICLISMO
function getCiclismType(){
    const ciclismObject = fileData.filter(obj => obj.Type == 'Cycling');

    return ciclismObject;
}

// Capturando a tividade de ciclismo mais rápida
function catchingFastesCiclism(){
    const ciclismObjects = getCiclismType();
    const fastesCiclism = ciclismObjects.reduce((prev, current) => {
        return prev['Average Speed (km/h)'] > current['Average Speed (km/h)'] ? prev : current;
    });

    return fastesCiclism;
}
// Pegando a velocidade do ciclismo mais rapido
export function catchingAvarageSpeedFromFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const avarageSpeedFastesCiclism = fastesCiclism['Average Speed (km/h)'];

    return avarageSpeedFastesCiclism;
}
// Pegando a distancia do ciclismo mais rapido
export function catchingDistanceFromFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const distanceFastesCiclism = fastesCiclism['Distance (km)'];

    return distanceFastesCiclism;
}


// Capturando a atividade de ciclismo mais longa
function catchingFarthestCiclism(){
    const ciclismObjects = getCiclismType();
    const longestCiclism = ciclismObjects.reduce((prev, current) => {
        return prev['Distance (km)'] > current['Distance (km)'] ? prev : current;
    });

    return longestCiclism;
}
// Pegando velocidade do ciclismo mais longo
export function catchingAvarageSpeedFromFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const avarageSpeedFarthesCiclism = longestCiclism['Average Speed (km/h)'];

    return avarageSpeedFarthesCiclism;
}
// pegando a distancia do ciclismo mais longo
export function catchingDistanceFromFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const distanceFarthesCiclism = longestCiclism['Distance (km)'];

    return distanceFarthesCiclism;
}