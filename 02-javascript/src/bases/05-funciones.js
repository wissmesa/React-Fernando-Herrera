
//FUNCIONES NORMALES
const saludar = function(nombre){
    return `Hola mi nombre es ${nombre}`
}

// FUNCION FLECHA 
const saludar2 = (nombre) => {
    return `Hola mi nombre es ${nombre}`
}

// EN CASO DE TENER SOLO UN RETURN
const saludar3 = (nombre) => `Hola mi nombre es ${nombre}`;

//EN CASO DE NO TENER PARAMETROS
const saludar4 = () => `Hola mundo`;


// console.log(saludar('luis'))

console.log(saludar2)

// ES NECESARIO PONER PARENTESIS ANTES YA QUE SINO, DE QUE FORMA
// SABE JAVASCRIPT QUE ES UN OBJETO LO QUE DEBE RETORNAR
const getUserData = () => ({
    
        uid:'ABC123',
        username:'dsad',
})

// ESTE ES EL EQUIVALENTE A LA FUNCION DE ARRIBA
const getUserDataConReturn = () => {
    return{
        uid:'ABC123',
        username:'dsad',
    }
}

console.log(getUserData)



const getUsuarioActivo = (nombre) => ({
    
        uid:'12312',
        username:nombre
    
})

console.log(getUsuarioActivo('luis'))