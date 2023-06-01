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

// FUNCA DE CAPTURA DE ATIVIDADE MAIS RÁPIDA
function catchingActivityGreaterSpeed(array){
    const fastesActivity = array.reduce((prev, current) => {
        return prev['Average Speed (km/h)'] > current['Average Speed (km/h)'] ? prev : current;
    });

    return fastesActivity;
}

function catchingActivityGreaterDistance(array){
    const longestActivity = array.reduce((prev, current) => {
        return prev['Distance (km)'] > current['Distance (km)'] ? prev : current;
    });

    return longestActivity;
}

function getDate(element){
    const date = element['Date'];

    return date;
}

function getType(element){
    const type = element['Type'];

    return type;
}

function getDuration(element){
    const duration = element['Duration'];

    return duration;
}

function getCaloriesBurned(element){
    const calories = element['Calories Burned'];

    return calories;
}

function getAvarageSpeed(element){
    const avarageSpeed = element['Average Speed (km/h)'];

    return avarageSpeed;
}

function getDistance(element){
    const distance = element['Distance (km)'];

    return distance;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNÇÃO DE CAPTURA DA ATIVIDADE MAIS RÁPIDA
export function catchingObjectGreaterSpeed(){
    const fastestActivity = catchingActivityGreaterSpeed(fileData);
    
    return fastestActivity;
}

// Capturando a data da atividade mais rápida
export function catchingDateFromTheFastesActivity(){
    const fastesActivity = catchingObjectGreaterSpeed();
    const date = getDate(fastesActivity);

    return date;
}
// Capturando o tipo de atividade 
export function catchingTypeFromTheFastesActivity(){
    const fastesActivity = catchingObjectGreaterSpeed();
    const type = getType(fastesActivity);

    return type;
}
// Capturando a distância da atividade mais rápida
export function catchingDistanceFromTheFastesActivity(){
    const fastestActivity = catchingObjectGreaterSpeed();
    const distance = getDistance(fastestActivity);

    return distance;
}
// Capturando a duração da atividade mais rápida
export function catchingDurationFromTheFastesActivity(){
    const fastestActivity = catchingObjectGreaterSpeed();
    const duration = getDuration(fastestActivity);

    return duration;
}
// Capturando a velocidade mádia da atividade mais rápida
export function catchingAvarageSpeedFromTheFastesActivity(){
    const fastestActivity = catchingObjectGreaterSpeed();
    const avarageSpeed = getAvarageSpeed(fastestActivity);

    return avarageSpeed;
}
// Capturando a quantidade de calorias queimadas 
export function catchingBurnedCaloriesFromTheFastesActivity(){
    const fastestActivity = catchingObjectGreaterSpeed();
    const caloriesBurned = getCaloriesBurned(fastestActivity);

    return caloriesBurned;
}

//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNÇÃO DE CAPTURA DA ATIVIDADE MAIS LONGA
export function catchingObjectGreaterDistance(){
    const longestActivity = catchingActivityGreaterDistance(fileData);

    return longestActivity;
}
// Capturando data da atividade mais longa
export function catchingDateFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const date = getDate(longestActivity);

    return date;
}

export function catchingTypeFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const type = getType(longestActivity);

    return type;
}

// Capturando distância da atividade mais longa
export function catchingDistanceFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const distance = getDistance(longestActivity);

    return distance;
}

// Capturando a duração da atividade
export function catchingDurationFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const duration = getDuration(longestActivity);

    return duration;
}

// Capturando a velocidade mádia da atividade mais longa
export function catchingAvarageSpeedFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const avarageSpeed = getAvarageSpeed(longestActivity);

    return avarageSpeed;
}
// Capturando as calorias quimadas durante a atividade
export function catchingBurnedCaloriesFromTheLongerActivity(){
    const longestActivity = catchingObjectGreaterDistance();
    const burnedCalories = getCaloriesBurned(longestActivity);

    return burnedCalories;
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

    const fastestRun = catchingActivityGreaterSpeed(raceObject);

    return fastestRun;
}
//Pegando o data da corrida mais rápida 
export function catchingDateFromTheFastestRun(){
    const fastestRun = catchingFastesRun();
    const date = getDate(fastestRun);

    return date;
}
//Pegando o tipo da corrida mais rápida
export function catchingTypeFromTheFastestRun(){
    const fastestRun = catchingFastesRun();
    const type = getType(fastestRun);

    return type;
}
//Pegando a duração da atividade
export function catchingDurationFromTheFastestRun(){
    const fastestRun = catchingFastesRun();
    const duration = getDuration(fastestRun);

    return duration;
}
//Pegando as calorias queimadas durante a atividade
export function catchingBurnedCaloriesFromTheFastestRun(){
    const fastestRun = catchingFastesRun();
    const burnedCalories = getCaloriesBurned(fastestRun);

    return burnedCalories;
}
// Pegando a velocidade da corrida mais rápida
export function catchingAvarageSpeedFromTheFastestRun(){
    const fastestRun = catchingFastesRun();

    const speedFastestRun = getAvarageSpeed(fastestRun);

    return speedFastestRun;
}
// Pegando distancia da corrida mais rapida
export function catchingDistanceFromTheFastestRun(){
    const fastestRun = catchingFastesRun();

    const distanceFastestRun = getDistance(fastestRun);

    return distanceFastestRun;
}

// Capiturando a corrida mais longa
function catchingFarthestRun(){
    const raceObject = getRaceType();

    const farthestRun = catchingActivityGreaterDistance(raceObject);

    return farthestRun;
}

//Pegando o data da corrida mais rápida 
export function catchingDateFromTheLongestRun(){
    const farthestRun = catchingFarthestRun();
    const date = getDate(farthestRun);

    return date;
}
//Pegando o tipo da corrida mais rápida
export function catchingTypeFromTheLongestRun(){
    const farthestRun = catchingFarthestRun();
    const type = getType(farthestRun);

    return type;
}
//Pegando a duração da atividade
export function catchingDurationFromTheLongesttRun(){
    const farthestRun = catchingFarthestRun();
    const duration = getDuration(farthestRun);

    return duration;
}
//Pegando as calorias queimadas durante a atividade
export function catchingBurnedCaloriesFromTheLongesttRun(){
    const farthestRun = catchingFarthestRun();
    const burnedCalories = getCaloriesBurned(farthestRun);

    return burnedCalories;
}

export function catchingAvarageSpeedFromFarthesRun(){
    const farthestRun = catchingFarthestRun();
    const speedFarthesRun = getAvarageSpeed(farthestRun);

    return speedFarthesRun;
}

export function catchingDistanceFromFarthesRun(){
    const farthestRun = catchingFarthestRun();
    const distanceFarthesRun = getDistance(farthestRun);

    return distanceFarthesRun;
}


//---------------------------------------------------------------------------------------------------------------------------------------------------------
// FUNCAO DE CAPTURA DE OBJETOS DE TIPO CICLISMO
export function getCiclismType(){
    const ciclismObject = fileData.filter(obj => obj.Type == 'Cycling');

    return ciclismObject;
}

// Capturando a tividade de ciclismo mais rápida
function catchingFastesCiclism(){
    const ciclismObjects = getCiclismType();
    const fastesCiclism = catchingActivityGreaterSpeed(ciclismObjects);

    return fastesCiclism;
}
//Pegando o data da corrida mais rápida 
export function catchingDateFromTheFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const date = getDate(fastesCiclism);

    return date;
}
//Pegando o tipo da corrida mais rápida
export function catchingTypeFromTheFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const type = getType(fastesCiclism);

    return type;
}
//Pegando a duração da atividade
export function catchingDurationFromTheFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const duration = getDuration(fastesCiclism);

    return duration;
}
//Pegando as calorias queimadas durante a atividade
export function catchingBurnedCaloriesFromTheFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const burnedCalories = getCaloriesBurned(fastesCiclism);

    return burnedCalories;
}

// Pegando a velocidade do ciclismo mais rapido
export function catchingAvarageSpeedFromFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const avarageSpeedFastesCiclism = getAvarageSpeed(fastesCiclism);

    return avarageSpeedFastesCiclism;
}
// Pegando a distancia do ciclismo mais rapido
export function catchingDistanceFromFastesCiclism(){
    const fastesCiclism = catchingFastesCiclism();
    const distanceFastesCiclism = getDistance(fastesCiclism);

    return distanceFastesCiclism;
}


// Capturando a atividade de ciclismo mais longa
export function catchingFarthestCiclism(){
    const ciclismObjects = getCiclismType();
    const longestCiclism = catchingActivityGreaterDistance(ciclismObjects);

    return longestCiclism;
}
// Pegando velocidade do ciclismo mais longo
export function catchingAvarageSpeedFromFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const avarageSpeedFarthesCiclism = getAvarageSpeed(longestCiclism);

    return avarageSpeedFarthesCiclism;
}
// pegando a distancia do ciclismo mais longo
export function catchingDistanceFromFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const distanceFarthesCiclism = getDistance(longestCiclism);

    return distanceFarthesCiclism;
}
//Pegando o data da corrida mais rápida 
export function catchingDateFromTheFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const date = getDate(longestCiclism);

    return date;
}
//Pegando o tipo da corrida mais rápida
export function catchingTypeFromTheFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const type = getType(longestCiclism);

    return type;
}
//Pegando a duração da atividade
export function catchingDurationFromTheFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const duration = getDuration(longestCiclism);

    return duration;
}
//Pegando as calorias queimadas durante a atividade
export function catchingBurnedCaloriesFromTheFarthesCiclism(){
    const longestCiclism = catchingFarthestCiclism();
    const burnedCalories = getCaloriesBurned(longestCiclism);

    return burnedCalories;
}


//FUNÇÃO DE CAPTURA DOS OBJETOS A PARTIR DAS DISTANCIAS SELECIONADAS
function getObjectsInsideParameter(inicialDistance, finalDistance){

    return fileData.filter(obj => {
        obj.Distance = obj['Distance (km)'];
        return obj.Distance >= inicialDistance && obj.Distance <= finalDistance;
    });
}
//Pegando atividade mais rápida entre os objetos selecionados
function getFasterActiviteInterval(inicialDistance, finalDistance){
    const objects = getObjectsInsideParameter(inicialDistance, finalDistance);

    const fastestActivityInterval = catchingActivityGreaterSpeed(objects);

    return fastestActivityInterval;
}
//pegando velocidade 
export function catchinAvaraSpeedFasterActiviteInterval(inicialDistance, finalDistance){
    const fastestActiviteInterval = getFasterActiviteInterval(inicialDistance, finalDistance);

    const avarageSpeed = getAvarageSpeed(fastestActiviteInterval);

    return avarageSpeed;
}
//pegando distancia
export function catchingDistanceSpeedFasterActiviteInterval(inicialDistance, finalDistance){
    const fastestActiviteInterval = getFasterActiviteInterval(inicialDistance, finalDistance);

    const distance = getDistance(fastestActiviteInterval);

    return distance;
}

//Pegando atividade mais longa entre os objetos selecionados
//retirar export
function getFarthestActiviteInterval(inicialDistance, finalDistance){
    const objects = getObjectsInsideParameter(inicialDistance, finalDistance);

    const farthestActivityInterval = catchingActivityGreaterDistance(objects);

    return farthestActivityInterval;
}
//pegando velocidade 
export function catchinAvaraSpeedFarthestActiviteInterval(inicialDistance, finalDistance){
    const farthestActivityInterval = getFarthestActiviteInterval(inicialDistance, finalDistance);

    const avarageSpeed = getAvarageSpeed(farthestActivityInterval);

    return avarageSpeed;    
}

export function catchinDistanceFarthestActiviteInterval(inicialDistance, finalDistance){
    const farthestActivityInterval = getFarthestActiviteInterval(inicialDistance, finalDistance);

    const distance = getDistance(farthestActivityInterval);

    return distance;
}