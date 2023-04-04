/**
 * El usuario ingresa 3 notas.Por consola o alerta le mostramos el promedio y el mensaje si esta aprobado o desaprobado;
 */

let cantidad_notas = parseInt(prompt('Ingrese Cantidad de Materias'));
if(!isNaN(cantidad_notas)  && cantidad_notas !== 0 ){
    let suma = 0 , resultado =0; 
    for (let i = 0; i < cantidad_notas; i++) {
        let nota = Number(prompt(`Ingrese Nota N°${i+1}`)); 
        if (! isNaN(nota) && nota >= 1 && nota <= 10){
            suma = suma + nota;
        }else{
            alert('Ingrese una nota valida, Numeros entre 1 y 10'); 
            break; 
        }
    }
    resultado = (suma / cantidad_notas).toFixed(2); 
    if(resultado >= 6){
        alert(`Esta Aprobado!. Promedio: ${resultado}`);
    }else{
        alert(`Esta Desaprobado!. Promedio: ${resultado}`);
    }
}else{
    alert('Ingrese un numero correcto!!'); 
}
