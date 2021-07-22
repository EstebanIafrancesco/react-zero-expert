console.log('Hi there');

// Arreglos en js

// const arreglo = new Array(100); es posible generar un arreglo de esta forma 
const arreglo = [1,2,3,4];
let arreglo2 = [...arreglo, 7 ];

console.log(arreglo);
console.log(arreglo2);

const arreglo3 = arreglo2.map(function(valor){
    return valor * 3;
});

console.log(arreglo3);