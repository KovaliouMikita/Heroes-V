import {unitData} from "./modules/object.js";

let div = document.querySelectorAll("div")
let name = document.querySelector('.name')
let att = document.querySelector('.att')
let def = document.querySelector('.def')
let dmg = document.querySelector('.dmg')
let hp = document.querySelector('.hp')
let spd = document.querySelector('.spd')
let int = document.querySelector('.int')
let shot = document.querySelector('.shot')
let mana = document.querySelector('.mana')
let spell = document.querySelector('.spell')


document.addEventListener('click', (event) => {   
    const type = event.target.dataset.type
    console.log (event.target)
        for (let img of div){
        if (img.id ){
            if (!(unitData[img.id])[type]) continue
    
            name.textContent = ((unitData[img.id])[type])['name']
            att.children[1].textContent = ((unitData[img.id])[type])['att'] 
            def.children[1].textContent = ((unitData[img.id])[type])['def']

            dmg.children[1].textContent = ((unitData[img.id])[type])['dmg'][0] + '-' + ((unitData[img.id])[type])['dmg'][1] 
            hp.children[1].textContent =  ((unitData[img.id])[type])['hp']
            spd.children[1].textContent =  ((unitData[img.id])[type])['spd']
            int.children[1].textContent =  ((unitData[img.id])[type])['int']
            shot.children[1].textContent =  ((unitData[img.id])[type])['shot']
            mana.children[1].textContent =  ((unitData[img.id])[type])['mana']
            spell.children[1].textContent =  ((unitData[img.id])[type])['spell']

            break
        }

    } 
  })