let nombre = 'luis'
let apellido = 'apellido'

const nombrecompleto =  ` Mi nombre es: ${nombre}  ${apellido}`;


console.log(nombrecompleto )

function getSaludo(nombre){
    return 'hola mundo' + ' ' + nombre
}

console.log(`colocando funcion para : ${getSaludo(nombre)}`)