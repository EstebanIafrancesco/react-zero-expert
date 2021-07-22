
const nombre = 'Esteban';
const apellido = 'Iafrancesco';
// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre} 
${apellido}
${1 + 1}
`;
console.log(nombreCompleto);

const saludo = (nombre) =>{
    return 'Hola ' + nombre;
}

console.log(`${saludo( nombre )} tu apellido es ${ apellido}`);
