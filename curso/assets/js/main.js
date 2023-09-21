function escolher(){

    document.addEventListener('click', function(e) {
        const el = e.target;
        if(el.classList.contains('button-relogio')){
            //window.location.replace('relogio.html')
        }
        if(el.classList.contains('button-lista')){
            //window.location.replace('lista.html')
        }
        if(el.classList.contains('button-calculadora')){
            //window.location.replace('lista.html')
        }
    });
}
escolher();

