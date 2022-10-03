const personajes = ["goku","vegetta","trunks"]
const [, , personaje] = personajes;

const retornaArreglo = () => {
    return ["ABC",123]
}

const arr = retornaArreglo()
const [letra,numero ] = retornaArreglo()
console.log(letra,numero)


const UseState = (valor) => {
    return [valor, ()=> {console.log("hola mundo")} ]
}

const [nombre,Setnombre] = UseState("goku")

// const arr1 = UUseState("goku")

console.log(nombre,Setnombre)

// console.log(arr1)