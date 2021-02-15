let value
let dice = []
class Die{
    constructor(){
        this.value = $("<h1 id='value'></h1>");
        this.div = $("<div class='die'></div>");
        this.roll()
        $("#container").append(this.div);
        this.value.appendTo(this.div)
    }
    roll(){
        value = (Math.floor(Math.random()*6)+1)
        this.value.text(value)
    }
}

$("#makeDie").click(function (){
    let die = new Die
    dice.push(die)
    $("#container").append(die);
})

$("#rollDie").click(function (){
    dice.forEach(die =>{
        die.roll()
    })
})