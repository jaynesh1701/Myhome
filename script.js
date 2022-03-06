const cards = document.querySelectorAll('.game-card');

let cardFliped=false;
let card01, card02;
let lockBoard=false;
// let player01, player02 = false;
let score = 0;

// document.getElementsByClassName('.gameScore').html("score",score);
// function playGame()
// {
//     if(player01 == true)
//     {
//         flipcard();
//     }

// }
function flipcard()
{
    if (lockBoard == true) return;
    if (this === card01) return;

    this.classList.toggle('flip');

    if(!cardFliped)
    {
        // first click----
        cardFliped=true; 
        card01=this;
    }
    else
    {
        // sec clic----
        cardFliped=false;
        card02=this;

        // console.log(card01,card02);
        // console.log(card01.dataset.name);
        // console.log(card02.dataset.name);
        //---check matching cards ----

        matchCard();
        
    }  
    // document.getElementById("gameScore").value = score;
    // document.getElementById('gameScore').html(score);
    document.getElementById('gameScore').innerHTML = "Score: " + score;  
   
}
function matchCard()
{
    if(card01.dataset.name === card02.dataset.name)
    {
        //---------disabled-card-----
        card01.removeEventListener('click',flipcard);
        card02.removeEventListener('click',flipcard);
        score=score+10;

    }
    else
    {
        lockBoard = true;
        //----unflip nonmatching card----
        setTimeout(()=>{
        card01.classList.remove('flip');
        card02.classList.remove('flip');
        lockBoard = false;
        },1500);
        score=score-5;
    }
    return score;
    
}

(function suffle()
{
    cards.forEach(card => {
        let renOrd = Math.floor(Math.random()*12);
        card.style.order = renOrd;
    });
});
cards.forEach(card => card.addEventListener('click',flipcard));

// -----------------------------------------------------//

var turn = "X";
const cells = document.querySelectorAll('.xoHolder');



function xoShow()
{
    // alert('clickled');
    
    this.innerHTML= turn;    
    
    changeTurn();
    // document.getElementById('xoHolder').innerHTML = "";
    // this.style.display="none";
}

function changeTurn()
{
    if(turn == "X")
    {
        turn = "O";
        // alert('turned');
        document.getElementById('PlayerO').add
    }
    else
    {
        turn = "X";
    }

}

cells.forEach(cell => cell.addEventListener('click',xoShow));