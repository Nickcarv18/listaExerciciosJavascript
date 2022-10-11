document.addEventListener("DOMContentLoaded", function(event) {
  document.getElementById("exercicio1-tab").click();
})

function getExercicio(exercicio){

    switch (exercicio) {
        case "exercicio1":
            let valor1 = 10;
            let valor2 = 100;

            let soma  = valor1 + valor2;
            let subtracao  = valor1 - valor2;
            let divisao  = valor1 / valor2;
            let multiplicacao  = valor1 * valor2;

            alert("Valor 1: " + valor1 + ", valor 2: " + valor2 + 
            "\n1. Soma: " + soma +
            "\n2. Subtração:  " + subtracao +
            "\n3. Divisão:  " + divisao +
            "\n4. Multiplicação:  " + multiplicacao
            );
            
            break;
        case "exercicio2":
            let exe2 = document.getElementById("exe2");

            for (let i = 10; i <= 100; i++) {
                let numeros = document.createElement('span');

                numeros.innerHTML = i + " ";

                exe2.appendChild(numeros);
            }

            break;
        case "exercicio3":
            let valor = 5;
            let exe3 = document.getElementById("exe3");

            for (let i = 1; i <= 10; i++) {
                let tabuada = document.createElement('p');

                tabuada.innerHTML =  "5 X " + i + "= " +  valor * i;

                exe3.appendChild(tabuada);
            }
            
            break;
        case "exercicio4":
            break;
        case "exercicio5":
            break;
        case "exercicio6":
            let exe6 = document.getElementById("exe6");
            let array = [1,2,3,4,5,6,7,8,9,10];

            array.forEach(element => {
                if(element % 2 === 0){
                    let pares = document.createElement('span');

                    pares.innerHTML = element + " ";
                    exe6.appendChild(pares);
                }
            });
            break;
        case "exercicio7":
            break;
    
        default:
            break;
    }
}

function tabuada(){
     let valorTabuada = document.getElementById("valorTabuada").value;
     let exe4 = document.getElementById("exe4");
     let tabuadas = document.createElement("div");
     tabuadas.setAttribute('class', "col-md-3 col-12 mt-4");
     let aviso = document.createElement("div");

     if(valorTabuada > 0){
        aviso.style.display = "none";
         for (let i = 1; i <= 10; i++) {
             var tabuada = document.createElement('p');
            
             tabuada.innerHTML = valorTabuada + " X " + i + "= " +  valorTabuada * i;
    
             tabuadas.appendChild(tabuada);
             exe4.appendChild(tabuadas);
         }
     }else{
        aviso.innerHTML = "O valor precisa ser válido";

        exe4.appendChild(aviso);
     }
     
 }

function calculoCarro(){
     let custoFabrica = parseFloat(document.getElementById("custoFabrica").value);
     let percDistribuidor = parseFloat(document.getElementById("percDistribuidor").value);
     let percImpostos = parseFloat(document.getElementById("percImpostos").value);
     let valorfinal = document.getElementById("valorfinal");
     let calculo = 0;
     
     calculo =  (custoFabrica + (custoFabrica * percDistribuidor) + (custoFabrica * percImpostos));

     valorfinal.value = calculo;
 }

 /* CALCULADORA */ 

var input_box = document.getElementById("calculation");
var expressionData = "";
var resultData = "";

  function UserClickButton(input) {
    var oldinput = input_box.value;
    var newinput = oldinput + input;
    expressionData = newinput;
    input_box.value = newinput;
  }

  function CalculateValue() {
    var input = input_box.value;
    input = input.replace('"', "").replace("'", "");
    var result = eval(input);
    resultData = result;
    resultData = "";
    expressionData = "";
    input_box.value = result;
  }

 function ClearData() {
    input_box.value = "";
}