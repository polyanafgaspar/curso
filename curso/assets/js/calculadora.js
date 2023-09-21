function Calculadora(){
    
        this.display = document.querySelector('.display-calculadora');

        this.iniciar = () => {
            this.clickBotoes();
            this.pressionaEnter();
        }
        
        this.pressionaEnter = () =>{
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13){
                    this.realizarConta();                
                }
            })
        }

        this.clearDisplay = () =>{
            this.display.value = ''
        }
    
        this.deleteOne = () =>{
            this.display.value = this.display.value.slice(0, -1)
        }

        this.realizarConta = () =>{
            let conta = this.display.value;

            try{
                conta = eval(conta)
                
                if(!conta){
                    alert('Conta inválida!');
                    return;
                }

                this.display.value = String(conta);
            } catch(e) {
                alert('Conta inválida!');
                return;
            }
        }

        
        this.clickBotoes = () =>{
            document.addEventListener('click', event => {
                const el = event.target;
                if(el.classList.contains('button-num')){
                    this.btnParaDisplay(el);
                }
                if(el.classList.contains('button-clear')){
                    this.clearDisplay();
                }
                if(el.classList.contains('button-del')){
                    this.deleteOne();
                }
                if(el.classList.contains('button-eq')){
                    this.realizarConta();
                }
            });
        }

        this.btnParaDisplay = el => {
            this.display.value += el.innerText;
            this.display.focus();
        }

    }; 


const calculadora = new Calculadora();
calculadora.iniciar();