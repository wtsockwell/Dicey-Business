value=0;
class Die{
    constructor(){
        this.value = $("<h1></h1>").text(value);
        this.div = $("<div class='die'></div>");
        $("#container").append(this.div);
        this.value.appendTo(this.div)
    }
    roll(){
        value = (Math.floor(Math.random()*6)+1)
    }
}

$("#makeDie").click(function (){
    let die = new Die
    die.roll();
    $("#container").append(die);
})