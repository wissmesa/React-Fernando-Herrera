const persona = {
    nombre:"tony",
    apellido:"stark",
    edad:"24",
    direccion:{
        ciudad:"Nueva York",
        zip:12312331,
        lat:13.123,
        lat:12.12312
    }
}


console.log(persona)

// const persona2 = persona  MALO PORQUE ES ASIGNACION POR REFERENCIAS
const persona2 = {...persona}
persona2.nombre = 'peter'

console.log(persona2)