// import {heroes} from "../src/data/heroes"
// import {heroes} from 'first'
import  heroes , {owners}  from '../data/heroes';


export const getHeroeById = (id) => {
    return heroes.find(element => element.id === id )
}

// console.log(getHeroeById(2))

const getHeroeByOwner = (owner,id) => {
    return heroes.find(element => element.owner = owner && element.id > id)
}

// console.log(getHeroeByOwner("DC",3))

// console.log(owners)