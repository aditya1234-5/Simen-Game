let h2 =document.querySelector('h2');
let btnCliked = document.querySelectorAll('.btn');
let scoreBox=document.querySelector('.score')
let score =document.querySelector('.score p')
let body=document.querySelector('body');
let gameSeq =[];
let userSeq=[];
let started =false;
let level=0;
let btns =["yellow",'pink','purpul','green'];




document.addEventListener('keypress',function(){
    if(started==false){
        started=true;

        levelUp();
        scoreBox.style.display="none";
    }
    
});
 function btnFlash(btn){
    btn.classList.add('flash');
    setTimeout(()=>{
        btn.classList.remove('flash');
    },500);
}

function userFlash(btn){
    btn.classList.add('userFlash');
    setTimeout(()=>{
        btn.classList.remove('userFlash');
    },250);
}

function levelUp(){
    userSeq=[];
    level++;
    h2.innerHTML=`Level ${level}`;
    
    let num =Math.floor(Math.random()*4);
    let randColor= btns[num];
    let randbtn= document.querySelector(`.${randColor}`);
    btnFlash(randbtn);
    gameSeq.push(randColor);
    
}
function checkAns(idx){
    if (userSeq[idx]==gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
           setTimeout(levelUp(), 1500);
        }
    }
    else{
        h2.innerHTML='Game Over! Press anykey to start';
        body.style.backgroundColor="red";
        scoreBox.style.display="flex";
        score.innerHTML=`${level}`;
        setTimeout(()=>{
            body.style.backgroundColor="#121212";
        },1000);
        reset();

    }

}
function btnPressed(e){
    let btn =e.target;   // you can use "this"  also :)
    userSeq.push(`${btn.classList[1]}`)
    userFlash(btn);
    checkAns(userSeq.length-1);
    
    
}
for(btn of btnCliked){
    btn.addEventListener('click',btnPressed);
   
}

function reset(){
    started=false;
    gameSeq=[];
    userSeq=[];
    level=0
}




