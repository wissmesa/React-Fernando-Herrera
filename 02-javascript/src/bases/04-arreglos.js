
const arreglo = [1,2,3,4,5];
// arreglo.push(1)
// arreglo.push(2)
// arreglo.push(3)
// arreglo.push(4)
// arreglo.push(5)
const arregloprueba=['edificio','prueba','zapatos','teclado']

let arreglo2 = [...arreglo,6]
console.log(arreglo2)

const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
})

console.log(arreglo3)