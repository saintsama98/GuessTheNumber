'use strict';
let secretNumber= Math.trunc(Math.random()*20)+1;
let score=20;
let highscore = 0;


document.querySelector('.check').addEventListener('click',function(){
   const guess= Number(document.querySelector('.guess').value);
   console.log(guess);
   if(!guess){
        //console.log('No number input!')
        document.querySelector('.message').textContent='No Number';
    }
    //for correct guess
    else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Correct Number!';
        document.querySelector('.number').textContent=secretNumber; 
        document.querySelector('body').style.backgroundColor='#FF0000';
        document.querySelector('.number').style.width='30rem';

        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    
    }
    //for high guess
    else if( guess> secretNumber){
        if(score>1){    
            document.querySelector('.message').textContent='Too High📈'
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='Wasted!💩'
        }
    }
       
    //for low guess
    else if(guess<secretNumber){
        if(score>1){
            document.querySelector('.message').textContent='Too low📉'
            score--;
            document.querySelector('.score').textContent=score;
        }
        else{
            document.querySelector('.message').textContent='Wasted💩'
        }
        
    }
});
document.querySelector('.again').addEventListener('click',function(){
        score=20;
        secretNumber= Math.trunc(Math.random()*20)+1;
        document.querySelector('.score').textContent=score;
        document.querySelector('.number').textContent='?'; 
        document.querySelector('.message').textContent='Start guessing...';
        document.querySelector('.guess').textContent='';
        document.querySelector('body').style.backgroundColor='#222';
        document.querySelector('.number').style.width='15rem'
});


