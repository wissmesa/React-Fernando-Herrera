

const getimagen = async () => {
    
    try {
        const apikey = "G8DVQhziAnR34gj4UQ933XfWq2c7yx8b"
        const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apikey}`)
        const {data} = await res.json()
        const {url} = data.images.original
        console.log(url)
        const imagen = document.createElement('img')
        imagen.src = url
        document.body.append(imagen)
    } catch (error) {
        //manejo del error
        console.error(error)
    }

    
}

getimagen();





