function relogio(){

    function criarHoraDosSegundos(segundos){
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pt-BR', {
            hour12: false,
            timeZone: 'GMT'
        })
    }
    
    console.log(criarHoraDosSegundos(10))
    
    const relogio = document.querySelector('.relogio');
    
    let segundos = 0;
    let timer;
    function iniciarRelogio(){
        timer = setInterval(function() {
            segundos++;
            relogio.innerHTML = criarHoraDosSegundos(segundos);
        }, 1000);
    }
    
    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('zerar')){
            clearInterval(timer);
            relogio.innerHTML = '00.00.00'
            relogio.classList.remove('pausado')
            segundos = 0
        }
        if(el.classList.contains('pausar')){
            relogio.classList.add('pausado')
            clearInterval(timer);
        }
        if(el.classList.contains('iniciar')){
            relogio.classList.remove('pausado')
            clearInterval(timer);
            iniciarRelogio();
        }
    });
}

relogio();