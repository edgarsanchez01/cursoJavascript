//Crear array 
const numeros = [];
console.log(numeros);
//crear valores
const colores = ["rojo", "amarillo", "verde","marron"];
colores.reverse();
console.log(colores);
//Crear con valores iguales 
const seis = new Array(4).fill(6);
console.log(seis);
//añadiendo valor
seis.push(10);
seis.push(12);
//eliminar valor
seis.shift();
//mostrar 
for (let i = 0; i<seis.length; i++){
    console.log(seis[i]);
}
//muestra parte del aaray 
console.log(seis.slice(2,4));

//Recorrer array colores 
for(color of colores){
    console.log(color);
}
//otra forma de recorrerlo
//muestra el indice
for(i in colores){
    document.write(i);
    document.write(" : ");
    document.write(colores[i]);
    document.write("<br/>");
}