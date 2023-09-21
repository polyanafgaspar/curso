const inputTarefas = document.querySelector('.input-tarefa')
const btnTarefas = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

function criarLista(){
    const li = document.createElement('li')
    return li;
}

function criarTarefa(textoImput){
    const li = criarLista();
    li.innerText = textoImput;
    tarefas.appendChild(li)
    limparInput();
    addBotaoApagar(li);
    salvarTarefas();
}

function addBotaoApagar(li){
    li.innerText += ' ';
    const botaoApagar = document.createElement('button');
    botaoApagar.innerText = 'Apagar'
    botaoApagar.setAttribute('class', 'btn-apagar')
    li.appendChild(botaoApagar)
}

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaTarefas = []

    for(let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText;
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim();
        listaTarefas.push(tarefaTexto);
    }

    const tarefasJSON = JSON.stringify(listaTarefas);
    localStorage.setItem('tarefas', tarefasJSON)
}

function limparInput(){
    inputTarefas.value = '';
    inputTarefas.focus();
}

function addTarefasSalvas(){
    const tarefasSalvas = localStorage.getItem('tarefas');
    const listaTarefasSalvas = JSON.parse(tarefasSalvas);

    for(let tarefa of listaTarefasSalvas){
        criarTarefa(tarefa)
    }
}
addTarefasSalvas();

inputTarefas.addEventListener('keypress', function(e){
    if(e.keyCode === 13){
        if(!inputTarefas.value) return;
        criarTarefa(inputTarefas.value)
    }
})

document.addEventListener('click', function(e) {
    const el = e.target;
    if(el.classList.contains('btn-tarefa')){
        if(!inputTarefas.value) return;
        criarTarefa(inputTarefas.value)
    }
    if(el.classList.contains('btn-apagar')){
        el.parentElement.remove()
        salvarTarefas();
    }
});