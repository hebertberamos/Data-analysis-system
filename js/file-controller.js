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

export async function gettingArrayData(filePath){
    await getDataFromFile(filePath);

    return fileData;
}

//Informação da velocidade média do primeiro objeto do array

// export async function getSpeedObjectOne(){
//     const objectOne = fileData[0];
//     const objectOneAvarageSpeed = objectOne['Average Speed (km/h)'];

//     return objectOneAvarageSpeed;
// }