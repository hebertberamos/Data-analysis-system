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

    sayArray();
}

function sayArray(){
    console.log(fileData);
}


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