//helping Function
//1-get me id 
function get(id){
   let val = document.getElementById(id);
   return val
}
//2- get me Radio checkvalue as boolean
function check(id){
    let val =document.getElementById(id).checked;
    return Boolean(val);
}
//3- write to the html element
function write(id,doc){
 document.getElementById(id).innerHTML = doc;
}
//Geting some Values define some Variables
let five,ten,fifteen,tweny;
let round = 0;
let userInput = 0;
let i = 0 ;
//calling checkme function  Action onchange 
function checkme(){
    five = check("five");
    ten = check("ten");
    fifteen = check("fifteen");
    tweny = check("twenty");   
//Using switch  to test values
switch (true) {
    case five == true:
        round = 5 ;
        break ;
    case ten == true:
        round = 10 ;
        break ;
    case fifteen == true:
        round = 15 ;
        break ;
    case tweny == true:
        round = 20 ;
        break ;    
}
}
function rock(){
    userInput = 1;
    i = i+1;
    let compMove = Math.floor(Math.random()*(3-1+1))+1;
    if (compMove == 1){
        write("res","Its a Draw you both chose Rock" )
        get("r").style.backgroundColor = "#fff" 
    }else if (compMove == 2){
        write("res","Paper beats Rock .<br><br>You lose!!" ) 
        get("r").style.backgroundColor = "red" 
    }else if (compMove == 3){
        write("res","Rock beats Scissors .<br><br>You Win!!") 
        get("r").style.backgroundColor = "yellowgreen"  
    }
    console.log(compMove);
}