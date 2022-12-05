//repeticion for 
let tabla = parseInt(prompt("Digita el numero de la tabla "));
document.write(`Empezamos con la tabla ${tabla}<br/>`);
for (let i = 1; i <=10; i++){
    resultado = tabla * i;
    document.write(`${tabla} * ${i} = ${resultado}<br/>`);
}
