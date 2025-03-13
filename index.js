
//game constans and variables
let inputDir ={x:0, y:0};
const foodSound = new Audio('food.mp3');
const gameOverSound = new Audio('gameover.mp3');
// const moveSound = new Audio('move.mp3');
let score=0;
let speed =5;
let lastPaintTime =0;
let snakeArr = [
    {x:13, y:15}
]
food ={x:6,y:7};



//game functions
function main(ctime){
    window.requestAnimationFrame(main);
    if((ctime - lastPaintTime)/1000 < 1/speed){
        return;
    }
    lastPaintTime = ctime;
    gameEngine();
    // console.log(ctime);
}

function isCollide(snake){
    // if you bupm in yourself
    for(let i = 1; i<snakeArr.length;i++){
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
        
        }
        // if you bump into wall
        if(snake[0].x >= 18 || snake[0].x <=0 || snake[0].y >= 18 || snake[0].y <=0){
            return true;
            
    }
}

function gameEngine(){
   // part 1: updating the snake array and food
   if(isCollide(snakeArr)){
    // gameOverSound.play();
    // musicSound.pause();
    inputDir = {x:0, y:0};
    alert("game over press any key to play again");
    snakeArr =[{x:13,y:15}];
    // musicSound.play();
    score = 0;
   }

 // if you eaten food increase the score and regenerate food
 if(snakeArr[0].y === food.y && snakeArr[0].x === food.x){
    foodSound.play();
    score += 1;
    // if(score> higscoreval){
    //     higscoreval = score;
    //     localStorage.setItem("higscore", JSON.stringify(higscoreval));
    //     scoreBox.innerHTML ="higscoreBox" + higscoreval;
    // }
    scoreBox.innerHTML = "score:" + score;
    snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y})
    let a= 2;
    let b= 16;
    food = {x: Math.round(a + (b-a)* Math.random()),y: Math.round(a + (b-a)* Math.random())}
 }

 // moving  the snake
  for (let i =snakeArr.length -2; i>=0;i--){
    // const element = array[i];
    snakeArr[i+1] = {...snakeArr[i]};   
  }
  snakeArr[0].x += inputDir.x;
  snakeArr[0].y += inputDir.y;
   //part 2: dispay the snake and food
   //display snake
   board.innerHTML = '';
   snakeArr.forEach((e, index)=>{
    snaeElement = document.createElement('div');
    snaeElement.style.gridRowStart = e.y;
    snaeElement.style.gridColumnStart = e.x;
   
    if(index===0){
        snaeElement.classList.add('head')
    }else{
        snaeElement.classList.add('snake')
    }
    board.appendChild(snaeElement);
   });

   //display food

   
   foodElement = document.createElement('div');
   foodElement.style.gridRowStart = food.y;
   foodElement.style.gridColumnStart = food.x;
   foodElement.classList.add('food')
   board.appendChild(foodElement);
}



//main ogic starrts here

// let higscore = localStorage.getItem("higscore");
// if(higscore === null){
//     higscoreval = 0;
//     localStorage.setItem("higscore", JSON.stringify(higscoreval))
// }else{
//     higscoreval = JSON.parse(higscore);
//     scoreBox.innerHTML = "higScore : "  + higscore;
// }

window.requestAnimationFrame(main);
window.addEventListener('keydown',e=>{
    inputDir = {x:0,y:1}  //start the game
    

    switch(e.key){
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        case "ArrowDown":
            console.log("arrowDown") ;
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x =1 ;
            inputDir.y = 0;    
            break;
        default:
            break;   
    }
});











































































































































