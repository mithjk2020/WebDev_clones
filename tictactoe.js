let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgm=document.querySelector("#new");
let msgcontainer=document.querySelector(".msg");
let msg=document.querySelector("#pmsg");
let turno=true;
const winner=[[0,1,2],
[3,4,5],
[6,7,8],
[0,3,6],
[1,4,7],
[2,5,8],
[0,4,8],
[2,4,6],];

const resetgame=()=>{
  turno=true;
  enable();
  msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
  box.addEventListener("click",()=>{
    console.log("box was clicked");
    if(turno){
      box.innerText="X";
  turno=false;
    }
  else{
    box.innerText="O";
turno=true;

  }
  whowon();
  box.disabled=true;
  });
})
const disable=()=>{
  for(let box of boxes){
    box.disabled=true;
  }
}
const enable=()=>{
  for(let box of boxes){
    box.disabled=false;
    box.innerText="";
  }
}
const showWinner=(winner)=>{
  pmsg.innerText=`congrats, winner is ${winner}`;
  msgcontainer.classList.remove("hide");
  disable();
}

const whowon=()=>{
  for(let seq of winner){
    let one=boxes[seq[0]].innerText;
    let two=boxes[seq[1]].innerText;
    let three=boxes[seq[2]].innerText;
    if(one !=""&&two!=""&&three!=""){
      if(one===two && two===three){
        console.log(`winner is ${one}`);

        showWinner(one);
      }
    }
  }
};

newgm.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);