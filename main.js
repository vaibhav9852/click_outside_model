async function fetchPhotos(){

    try{

        let responce = await fetch(`https://fakestoreapi.com/products`)
        let data = await responce.json()
        const cards = document.querySelector('.cards')
        
        data.map((item,ind) =>{
            const div = document.createElement('div')
            div.setAttribute('class','card')
            const img = document.createElement('img')
            img.src = `${item.image}`
            img.alt = `image`
            div.appendChild(img)
            const h2 = document.createElement('h2')
            h2.innerText = `${item.category}` 
            div.appendChild(h2)
            const btn = document.createElement('button')
            btn.innerText = 'Learn more  ->'
            btn.setAttribute('class',`${ind}-${item.description?.slice(0,15)}`)
            div.appendChild(btn)
            cards.appendChild(div)
        })

        // hanle model logic 

        const modelOuter = document.querySelector('.model-outer')
        const modelInner = document.querySelector('.model-inner')
       function handleButtonClick(event) {
          event.preventDefault();
        const button = event.currentTarget;
        
        const card = button.closest('.card')
  
         const imgSrc = card.querySelector('img').src
         const info = button.getAttribute('class').split('-')[1]
         const name = card.querySelector('h2').textContent;
   
         // populate the model 
         modelInner.innerHTML = `
         <img src="${imgSrc.replace('400','400')}" alt="${name}"/>
         <p>${name}</p>
         `
         modelOuter.classList.add('open')
  
         modelOuter.addEventListener('click',function(event){
          const isOutside = !event.target.closest('.inner-model') // it will give null value every time
          if(isOutside){
              closeModel()
          }
         })  
      }
  
      function closeModel(){
          modelOuter.classList.remove('open');
      }
      
      const cardButton =  document.querySelectorAll('.card button') // querySelectorAll('.card button')
      cardButton.forEach((btn) =>{
           btn.addEventListener('click',handleButtonClick)
      })

    }catch(error){
        console.log('error while fetch data',error)   
    }
}

fetchPhotos() ; 





