const buttonEl = document.getElementById('roll-dice')
const diceEl = document.getElementById('dice')
const listEl = document.getElementById('roll-history')
let count = 0

const getDiceFace = (rollResult,count) => {
    switch (rollResult) {
        case 1:
            diceEl.innerHTML = '&#9856';
            let listItem = document.createElement('li')
            listItem.innerHTML = `Roll ${count}: <span>&#9856</span>`
            listEl.appendChild(listItem)
            break;
        case 2:
            diceEl.innerHTML = '&#9857';
            let listItem1 = document.createElement('li')
            listItem1.innerHTML = `Roll ${count}: <span>&#9857</span>`
            listEl.appendChild(listItem1)
            break;
        case 3:
            diceEl.innerHTML = '&#9858';
            let listItem2 = document.createElement('li')
            listItem2.innerHTML = `Roll ${count}: <span>&#9858</span>`
            listEl.appendChild(listItem2)
            break;
        case 4:
            diceEl.innerHTML = '&#9859';
            let listItem3 = document.createElement('li')
            listItem3.innerHTML = `Roll ${count}: <span>&#9859</span>`
            listEl.appendChild(listItem3)
            break;
        case 5:
            diceEl.innerHTML = '&#9860';
            let listItem4 = document.createElement('li')
            listItem4.innerHTML = `Roll ${count}: <span>&#9860</span>`
            listEl.appendChild(listItem4)
            break;
        case 1:
            diceEl.innerHTML ='&#9861';
            let listItem5 = document.createElement('li')
            listItem5.innerHTML = `Roll ${count}: <span>&#9861</span>`
            listEl.appendChild(listItem5)
            break;
    }
}

const rollDice = () => {
    const rollResult = Math.floor(Math.random() * 6) + 1;
    count++;
    const diceFace = getDiceFace(rollResult,count);
}

buttonEl.addEventListener('click',()=>{
    diceEl.classList.add('roll-animation');
    setTimeout(() => {diceEl.classList.remove('roll-animation');rollDice()}, 700);
})