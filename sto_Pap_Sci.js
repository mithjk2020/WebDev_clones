let choices=document.querySelectorAll('.buttons');
let userscore=0;
let compscore=0;
const userpara=document.querySelector("#user");
const compara=document.querySelector("#comp");

const msg=document.querySelector("#msg");

const randomgen = () => {
    const varieties=["rock","paper","scissor"];
    const p=Math.floor(Math.random()*3);
    return varieties[p];
};

const drawgame=()=>{
    console.log("the game was a draw");
    msg.innerText="The game is draw!";
    msg.style.backgroundColor="#664e47";
}
const showWinner=(userwin)=>{
    if(userwin){
        userscore++;
        userpara.innerText=userscore;
        console.log("you win");
        msg.innerText="You win!";
        msg.style.backgroundColor="green";
    }
    else{
        compscore++;
        compara.innerText=compscore;
        console.log("you loose");
        msg.innerText="You loose!";
        msg.style.backgroundColor="red";
    }
}
const play=(userchoice)=>{
    console.log("user choice=", userchoice);
    const lapchoice = randomgen();
    console.log("comp choice=",lapchoice);
    if(userchoice===lapchoice){
    drawgame();
    }
    else{
        let userwin=true;
        if(userchoice==="rock"){
            userwin=lapchoice==="paper"?false:true;
        }
        else if(userchoice==="paper"){
            userwin=lapchoice==="scissor"?false:true;
        }
        else{
            userwin=lapchoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        play(userchoice);
    });
});