const persona = {
    edad:"14",
    nombre:"luis",
    clave:"ironamn",
    latlng:{
        Lat:113112,
        Lng:12312231,
    }
}

const funcion = ({edad , nombre , rango="10cm"}) => {
    
    console.log(nombre,edad,rango)
    return {
        nombreclave:nombre,
        edadclave:edad
    }

    

}

const {edadclave,nombreclave,latlng} = funcion(persona)
const {Lat,Lng} = latlng
console.log(edadclave,nombreclave)
console.log(Lat,Lng)