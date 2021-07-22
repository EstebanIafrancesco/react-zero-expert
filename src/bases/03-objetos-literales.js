// Objetos literales

const persona = {
    nombre: 'Esteban',
    apellido: 'Iafrancesco',
    edad: 38,
    direccion: {
        ciudad: 'New York',
        calle: 54,
        carrera: 88,
        barrio: 'Tutancamon',
        coordenadas:{
            lat: 40.7481300,
            lon: -73.9849500
        }
    }
};

// de estea forma imprimimos una tabla en la consola
// console.table( persona ); 

console.log(persona);
console.table( persona.direccion );
console.table(persona.direccion.coordenadas);

// podemos clonar un objeto usando el operador spread

const personaClon = {...persona};
personaClon.direccion.coordenadas = {lat: 45, lon: 55};
console.log(personaClon);