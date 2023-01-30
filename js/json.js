const alumno = {
    nombre: "jose",
    nota: 6
};
console.log(alumno);
alumno['nota'] = 5 ;
console.log(alumno);
console.log(alumno['nombre']);
console.log(alumno.nota);
//estructura compleja JSON
const alumnos = [
    {
        nombre: "jose",
        nota : 5
    },
    {
        nombre: "lucia",
        nota  : 8
    },
    {
        nombre: "eva",
        nota: 9
    },
];
console.log(alumnos);
let alumnoNuevo = {
    nombre : "M Mar",
    nota: 7
};
alumnos.push(alumnoNuevo);
//recorrer json
for(let i = 0; i<alumnos.length;i++){
    console.log(`${alumnos[i].nombre}`);
    document.write(`${alumnos[i].nombre}<br/>`);
}
alumnos.splice(1,1);
console.log(alumnos);