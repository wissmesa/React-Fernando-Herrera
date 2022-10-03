import { getHeroeById } from './bases/08-import-export';

// const promesa = new Promise( (resolve,reject) =>{
//     setTimeout( () =>{
//         // console.log("2 segundos despues")
//         const heroe = getHeroeById(2)
//         resolve(heroe);
//         // console.log(heroe)
//     },2000)

// }
// )

// promesa.then( (heroe) => {
//     console.log(heroe)
// } )

const getHeroeByIdAsync = (id) => {
    return new Promise( (resolve,reject) =>{
        setTimeout( () =>{
            // console.log("2 segundos despues")
            const p1 = getHeroeById(id);
            // resolve(p1);
            if ( p1 ) {
                resolve(p1)
            }
            else {
                reject("No se obtuvo resultados de la promesa")

            }
            console.log(p1)
        },2000)
    
    }
    )
}

getHeroeByIdAsync()
.then((heroe) => console.log(heroe)  )
.catch((err) => console.log(err)  )