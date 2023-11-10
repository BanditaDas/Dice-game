

function move(){
    let random1 = Math.floor((Math.random()*6 ) + 1);

    let random2 = Math.floor((Math.random()*6 ) + 1);

    document.querySelector(".img1").setAttribute("src",`./images/dice${random1}.png`);

    document.querySelector(".img2").setAttribute("src",`./images/dice${random2}.png`);

    if(random1>random2){
        document.querySelector("h1").innerHTML="player1 wins";
    }
    else if(random1<random2){
        document.querySelector("h1").innerHTML="player2 wins";
    }
    else{
        document.querySelector("h1").innerHTML="draw";
    }


}


document.querySelector("body").addEventListener("click",()=>{
    move();
});