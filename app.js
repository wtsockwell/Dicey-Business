let value
let dice = []
let diceValue = []
class Die {
    constructor() {
        this.value = $("<h1></h1>");
        this.div = $("<div class='die'></div>");
        this.roll()
        $("#container").append(this.div);
        this.value.appendTo(this.div)
    }
    roll() {
        value = (Math.floor(Math.random() * 6) + 1)
        this.value.text(value)
    }
}

$("#makeDie").click(function () {
    let die = new Die
    dice.push(die)
    diceValue.push(Number(die.value[0].textContent))
    $("#container").append(die);
})

$("#rollDie").click(function () {
    dice.forEach(die => {
        die.roll()
    })
})

$("#sumDice").click(() => {
    function sum(a, b) {
        return a + b
    }
    let total = diceValue.reduce(sum)
    alert(`The total is ${total}`)
})