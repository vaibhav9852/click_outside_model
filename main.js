async function fetchPhotos(){

    try{

        let responce = await fetch(`https://fakestoreapi.com/products`)
        let data = await responce.json()
        console.log('data',data)
        const card = document.querySelector('.card')
        data.map((item) =>{
             const img = document.createElement('img')
             img.src = `${item.image}`
             img.alt = `image`
             card.appendChild(img)
            const p = document.createElement('p')
            p.innerText = `${item.category}` 
            card.appendChild(p)
            const btn = document.createElement('button')
            btn.innerText = 'Learn more  ->'
            card.appendChild(btn)
        })

    }catch(err){
        console.log('error',err)
    }
}

fetchPhotos() 