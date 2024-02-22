import {unitData} from "./modules/object.js";


//.textContent = ( ((unitData[img.id])[type])['hp'] )

document.addEventListener('click', (event) => {
    let div = document.querySelectorAll("div")
    
    const type = event.target.dataset.type
        for (let img of div){
        if (img.id ){
            if (!(unitData[img.id])[type]) continue
        console.log( ((unitData[img.id])[type])['att'] )
    document.querySelector('.name').textContent = ((unitData[img.id])[type])['name']
      document.querySelector('.centralArea').children[1].children[0].children[0].children[1].textContent = ((unitData[img.id])[type])['att'] 
      document.querySelector('.centralArea').children[1].children[0].children[0].children[2].textContent = ''
      document.querySelector('.centralArea').children[1].children[0].children[1].children[1].textContent = ((unitData[img.id])[type])['def']
      document.querySelector('.centralArea').children[1].children[0].children[1].children[2].textContent = ''
      document.querySelector('.centralArea').children[1].children[0].children[2].children[1].textContent = ((unitData[img.id])[type])['dmg'][0]
      document.querySelector('.centralArea').children[1].children[0].children[2].children[2].textContent = '-'+((unitData[img.id])[type])['dmg'][1] 
      
      
        }

    } 
    let div1 = document.querySelectorAll("td[img^='m1_1']")
    div1.background = 'black' 
  })