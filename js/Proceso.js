// Declaramos la clase
function Proceso(id, nombre, tiempoEstimado, operacion){
    //Operacion resultado operacion y resultado

    this.resultado;
    this.operador;
    this.operandos = [];

    //Atributos 
    this.id = id;
    this.nombre = nombre;
    this.tiempoEstimado = tiempoEstimado;
    this.operacion = operacion;


    this.ToString = function(){
        return `Datos del Proceso: ${this.id}, ${this.nombre}, ${this.tiempoEstimado}, ${this.operacion} = ${this.resultado}`;
    }

    this.ObtenerOperador = function(){
        this.operador = this.operacion.match('[+-/%\*x]{1,1}');
    }

    this.ObtenerOperandos = function(){
        const operando =  this.operacion.split(this.operador);
        for(let i=0 ; i<2; i++){
            this.operandos[i] = parseInt(operando[i]);
        }
    }

    this.RealizarOperacion =  function(){
        this.ObtenerOperador();
        this.ObtenerOperandos();

        switch(this.operador[0]){
            case '+':
                    this.resultado = this.operandos[0] + this.operandos[1];
                break;
            case '-':
                    this.resultado = this.operandos[0] - this.operandos[1];
                break;
            case '/':
                try{
                    this.resultado = Math.round((this.operandos[0] / this.operandos[1]) * 100) /100;
                }catch(error){
                    alert('Agregaste una division entre 0')
                    console.log(error);
                }
                break;
            case '*':
                    this.resultado = this.operandos[0] * this.operandos[1];
                break;
            case 'x':
                    this.resultado = this.operandos[0] * this.operandos[1];
                break;
            case '%':
                    this.resultado =  Math.round((this.operandos[0] % this.operandos[1]) * 100) /100
                break;
        }
    }
}