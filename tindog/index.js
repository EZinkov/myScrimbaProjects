import Dog from './Dog.js'
import data from './data.js'

document.getElementById('accept-button').addEventListener('click', liked)
document.getElementById('reject-button').addEventListener('click', dislike)

function liked() {
    document.getElementById('badge-like').classList.toggle('hidden')
    setTimeout( () => {
        getNewDog()
    }, 1000)
}

function dislike() {
    document.getElementById('badge-dislike').classList.toggle('hidden')
    setTimeout( () => {
        getNewDog()
    }, 1000)
}

function noMoreDogsHtml() {
    return document.getElementById('card').innerHTML = `<div class="game-over">Your swipes are over</div>`
}


function getNewDog() {
    if (data.length > 0) {
        dog = new Dog(data.shift())
        render()
    } else {
        noMoreDogsHtml()
    }
}

function render() {
    document.getElementById('card').innerHTML = dog.getDogHtml()
}

let dog = new Dog(data.shift())

render()


