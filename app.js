let value
let dice = []
class Die {
    constructor() {
        this.value = $("<h1></h1>");
        this.div = $(`<div class='die'></div>`);
        this.roll()
        $("#container").append(this.div);
        this.value.appendTo(this.div)
        this.change()
        this.delete()
    }
    roll() {
        value = (Math.floor(Math.random() * 6) + 1)
        this.value.text(value)
    }
    change(){
        this.div.click(()=>{
            this.roll()
        })
    }
    delete(){
        this.div.dblclick(()=>{
            let position = dice.indexOf(this)
            this.div.remove()
            dice.splice(position,1)
        })
    }
}

$("#makeDie").click(function () {
    let die = new Die
    dice.push(die)
    $("#container").append(die);
})

$("#rollDie").click(function () {
    dice.forEach(die => {
        die.roll()
    })
})

$("#sumDice").click(() => {
    let diceValue = []
    for(let i = 0; i<dice.length; i++){
        diceValue.push(Number(dice[i].value[0].textContent))
    }
    function sum(a, b) {
        return a + b
    }
    let total = diceValue.reduce(sum)
    alert(`The total is ${total}`)
})