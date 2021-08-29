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
let userFinalResult = 0;
let compFinalResult = 0;
let counter = 0 ;
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
    let compMove = Math.floor(Math.random()*(3-1+1))+1;
    if (round == 0){
        window.alert("Please chose  Round Number")
    }else{
        counter = counter+1;
    if (counter > round ){
        window.alert("The Game is Over Please Press restart to play again")
    }else{
        
        write("round",counter+"/"+round)
    if (compMove == 1){
        write("res","Its a Draw you both chose Rock" )
        get("r").style.backgroundColor = "#fff" 
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult)
    }else if (compMove == 2){
        write("res","Paper beats Rock .<br><br>You lose!!" ) 
        get("r").style.backgroundColor = "red"
        compFinalResult += 1;
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult) 
    }else if (compMove == 3){
        write("res","Rock beats Scissors .<br><br>You Win!!") 
        get("r").style.backgroundColor = "yellowgreen" 
        userFinalResult +=1;
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult) 
    }
    if (round == counter){
        if(userFinalResult < compFinalResult){
            write("res","Game Over! The Computer Win" ); 
        }else if (compFinalResult < userFinalResult){
            write("res","Congratulation! you Win" );
    }else if (computerFinalResult == userFinalResult){
            write("res","Wow! It's a Draw" );
    }
    }
}
}
    
}
function paper(){
    let compMove = Math.floor(Math.random()*(3-1+1))+1;
    if (round == 0){
        window.alert("Please chose  Round Number")
    }else{
        counter = counter+1;
    if (counter > round ){
        window.alert("The Game is Over Please Press restart to play again")
    }else{
        
        write("round",counter+"/"+round)
    if (compMove == 2){
        write("res","Its a Draw you both chose Paper" )
        get("p").style.backgroundColor = "#fff" 
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult)
    }else if (compMove == 3){
        write("res"," Scissors  beats Paper .<br><br>You lose!!" ) 
        get("p").style.backgroundColor = "red"
        compFinalResult += 1;
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult) 
    }else if (compMove == 1){
        write("res","Paper beats Rock .<br><br>You Win!!") 
        get("p").style.backgroundColor = "yellowgreen" 
        userFinalResult +=1;
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult) 
    }
    if (round == counter){
        if(userFinalResult < compFinalResult){
            write("res","Game Over! The Computer Win" ); 
        }else if (compFinalResult < userFinalResult){
            write("res","Congratulation! you Win" );
    }else if (computerFinalResult == userFinalResult){
            write("res","Wow! It's a Draw" );
    }
    }
}
}
    
}
function sess(){
    let compMove = Math.floor(Math.random()*(3-1+1))+1;
    if (round == 0){
        window.alert("Please chose  Round Number")
    }else{
        counter = counter+1;
    if (counter > round ){
        window.alert("The Game is Over Please Press restart to play again")
    }else{
        
        write("round",counter+"/"+round)
    if (compMove == 3){
        write("res","Its a Draw you both chose Scissors" )
        get("s").style.backgroundColor = "#fff" 
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult)
    }else if (compMove == 1){
        write("res"," Rock  beats Scissors .<br><br>You lose!!" ) 
        get("s").style.backgroundColor = "red"
        compFinalResult += 1;
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult) 
    }else if (compMove == 2){
        write("res","Scissors beats Paper .<br><br>You Win!!") 
        get("s").style.backgroundColor = "yellowgreen" 
        userFinalResult +=1;
        write("user-point",userFinalResult);
        write("comp-point",compFinalResult) 
    }
    if (round == counter){
        if(userFinalResult < compFinalResult){
            write("res","Game Over! The Computer Win" ); 
        }else if (compFinalResult < userFinalResult){
            write("res","Congratulation! you Win" );
    }else if (computerFinalResult == userFinalResult){
            write("res","Wow! It's a Draw" );
    }
    }
}
}
    
}