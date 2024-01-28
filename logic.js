let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let msgCon = document.querySelector(".msg-con");
let msg = document.querySelector(".msg");
let newGame = document.querySelector(".newGame");
let turnO = true;

const winPattern = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box) => {
    box.addEventListener("click",()=>{
        if(turnO){
            box.innerText = "O";
            turnO = false;
        }
        else{
            box.innerText = "X";
            turnO = true ; 
        }
        box.disabled = true;
        checkWinner();
    })
});
const disableBtn = ()=>{
    for (const box of boxes) {
        box.disabled = true;
    }
}
const enableBtn = ()=>{
    for (const box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}
const resetGame = ()=>{
    turnO = true;
    enableBtn();
    msgCon.classList.add("hide");
}



const showWinner = (winner)=>{
    msg.innerText = `Congratulation , Winner is ${winner}`;
    msgCon.classList.remove("hide");
    disableBtn();
}
const checkWinner = ()=>{
    for (const pattern of winPattern) {
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos1 != "" && pos1 != "" ){
            if(pos1==pos2 && pos2==pos3){
                console.log("Winner" ,pos1);
                showWinner(pos1);
            }
        }

    }
}
newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);


