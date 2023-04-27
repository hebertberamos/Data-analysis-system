function State(){

    this.cardEnterFileMainPage = null;
    this.cardShowAllInformationsMainPage = null;
    this.cardShowInformationPerIntervalMainPage = null;
    this.cardFormIntervalMainPage = null;

    this.fileNameMainPage = null;
    this.inputFileMainPage = null;

    this.inputStartingDistanceMainPage = null;
    this.inputFinalDistanceMainPage = null
    this.btnConfirmMainPage = null;
}

const state = new State();

state.cardEnterFileMainPage = document.querySelector('#entrance-card-enter-file');
state.cardShowAllInformationsMainPage = document.querySelector("#entrance-card-general-informations")
state.cardShowInformationPerIntervalMainPage = document.querySelector("#entrance-card-information-time-interval");
state.cardFormIntervalMainPage = document.querySelector("#span-card-form");

state.fileNameMainPage = document.querySelector('#file-name');
state.inputFileMainPage = document.querySelector('#file-input');

state.inputStartingDistanceMainPage = document.querySelector('#starting-distance');
state.inputFinalDistanceMainPage = document.querySelector('#final-distance');
state.btnConfirmMainPage = document.querySelector('#btn-confirm');

// Ao clicar no card de seleção de arquivo, abre a aba de seleção
// Quando estiver selecionado manda para o arquivo js que é responsável por administrar os dados da tabela
state.cardEnterFileMainPage.addEventListener('click', () => {
    state.inputFileMainPage.click();
}); 

// Quando o arquivo é selecionado o título do carde recebe o nome do arquivo selecionado
state.inputFileMainPage.addEventListener('change', function() {
    const nameFile = state.inputFileMainPage.value.split('\\').pop();
    state.fileNameMainPage.innerText = nameFile;
});

//Quando o card for clicado ele vai abri a janela de informações gerais das atividades
//Abrir apenas se o arquivo já tiver sido enviado
state.cardShowAllInformationsMainPage.addEventListener('click', () => {
    
    //Verificação de arquivo
    if(state.inputFileMainPage.value == ""){
        console.log("vazio");
    }
    else{
        window.location.href = 'pg-informacoes-gerais.html'; 
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

//Alterando valor do input do formulário
state.inputStartingDistanceMainPage.addEventListener('change', (event) => {
    const resultInputStartDistante = event.target.value;
    state.inputStartingDistanceMainPage.value = resultInputStartDistante;
});

state.inputFinalDistanceMainPage.addEventListener('change', (event) => {
    const resultInputFinalDistante = event.target.value;
    state.inputFinalDistanceMainPage.value = resultInputFinalDistante;
})

//Funcionalidade do botão de envio das informações do formulário 
//Far a ele a funcionalidade apenas quando os inputs estiverem devidamente informados
state.btnConfirmMainPage.addEventListener('click', (event) => {
    event.preventDefault();

    if(!state.inputFileMainPage.value == ""){
        if(!state.inputStartingDistanceMainPage.value == "" && !state.inputFinalDistanceMainPage.value == ""){
            window.location.href = 'pg-informacoes-intervalo.html';
        }
    }
});