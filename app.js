let intentosMaximos=3;
let numeroSecreto=Math.floor(Math.random()*10);
let numeroUsuario=0;
let numeroIntentos=0;
//let palabraVeces="vez"
while(numeroUsuario!=numeroSecreto){
    numeroUsuario=parseInt(prompt("Escriba un numero del 1 al 10"));
    numeroIntentos=numeroIntentos+1;
    if(numeroUsuario==numeroSecreto){
        alert(`Felicidades, el numero es: ${numeroUsuario}. lo hiciste en ${numeroIntentos} ${numeroIntentos>1 ? `veces` : `vez`}`);
    }else{
        if(numeroSecreto>numeroUsuario){
            alert("no el numero es mayor");
        }else{
            alert("no, el numero es menor");
        }
       // palabraVeces="veces";
        if(numeroIntentos==intentosMaximos){
            alert(`llegaste al numero maximos de: ${intentosMaximos} intentos`);
            break;
        }
    }
}



