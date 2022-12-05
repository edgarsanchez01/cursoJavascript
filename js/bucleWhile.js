//repeticion for 
let tabla = parseInt(prompt("Digita el numero de la tabla "));
document.write(`Empezamos con la tabla ${tabla}<br/>`);
// for (let i = 1; i <=10; i++){
//     resultado = tabla * i;
//     document.write(`${tabla} * ${i} = ${resultado}<br/>`);
// }

let i=1;

//repeticion con while 
// while (i<=10) {
//     resultado = tabla*i;
//     document.write(`${tabla} * ${i} = ${resultado}<br/>`);
//     i++;
// }
//document.write("Termina el bucle while");

//repeticion don do while 
do {
    resultado = tabla*i;
    document.write(`${tabla} * ${i} = ${resultado}<br/>`);
    i++;
} while (i<=10);
document.write("Termina el bucle do while");

