import {data} from './users.js'

let ListEl = document.getElementById('blok')

function render(list){

    ListEl.innerHTML = ''

    for(let i = 0; i < data.length; i++){

        let cardEl = document.createElement('div')
        cardEl.className = 'card'

        let imgEl = document.createElement('img')
        imgEl.className = 'card-img'
        imgEl.src = data[i].ava

        let titleEl = document.createElement('h3')
        titleEl.textContent = data[i].text

        let nameEl = document.createElement('h3')
        nameEl.textContent = data[i].name

        let dayEl = document.createElement('h3')
        dayEl.textContent = data[i].time

        let btnEl = document.createElement('button')
        btnEl.textContent = data[i].priority

        cardEl.append(imgEl, titleEl, nameEl, dayEl)
        list.append(cardEl)
    }
}

render(ListEl)
