import * as elements from '../elements.js';
import * as fileController from '../file-controller.js';

console.log(elements.cardEnterFileMainPage);

// Ao clicar no card de seleção de arquivo, abre a aba de seleção
// Quando estiver selecionado manda para o arquivo js que é responsável por administrar os dados da tabela
elements.cardEnterFileMainPage.addEventListener('click', () => {
    elements.inputFileMainPage.click();
}); 

// Quando o arquivo é selecionado o título do carde recebe o nome do arquivo selecionado
elements.inputFileMainPage.addEventListener('change', async() => {
    const nameFile = elements.inputFileMainPage.value.split('\\').pop();
    elements.fileNameMainPage.innerText = nameFile;

    const result = await fileController.gettingArrayData(elements.inputFileMainPage);

    console.log(result);


    // const resultSpeed = fileController.getSpeedObjectOne();
});

//Quando o card for clicado ele vai abri a janela de informações gerais das atividades
//Abrir apenas se o arquivo já tiver sido enviado
elements.cardShowAllInformationsMainPage.addEventListener('click', () => {
    
    //Verificação de arquivo
    if(elements.inputFileMainPage.value == ""){
        console.log("vazio");
    }
    else{
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

//Alterando valor do input do formulário
elements.inputStartingDistanceMainPage.addEventListener('change', (event) => {
    const resultInputStartDistante = event.target.value;
    elements.inputStartingDistanceMainPage.value = resultInputStartDistante;
});

elements.inputFinalDistanceMainPage.addEventListener('change', (event) => {
    const resultInputFinalDistante = event.target.value;
    elements.inputFinalDistanceMainPage.value = resultInputFinalDistante;
})

//Funcionalidade do botão de envio das informações do formulário 
//Far a ele a funcionalidade apenas quando os inputs estiverem devidamente informados
elements.btnConfirmMainPage.addEventListener('click', (event) => {
    event.preventDefault();

    if(!elements.inputFileMainPage.value == ""){
        if(!elements.inputStartingDistanceMainPage.value == "" && !elements.inputFinalDistanceMainPage.value == ""){
            window.location.href = 'pg-informacoes-intervalo.html';
        }
    }
});