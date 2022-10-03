const apikey = "G8DVQhziAnR34gj4UQ933XfWq2c7yx8b"

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

// peticion
// .then( (resp) => {resp.json()
// .then(({data}) => console.log(data.images.original.url))
// })

// .catch(console.warn)

// Segunda manera

peticion
.then(resp => resp.json )
.then(   ({data}) => {
    const {url} = data.images.original
})

.catch(console.warn)
