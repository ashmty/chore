//General Variables

let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let youWinSel = document.getElementById('win');
let youLoseSel = document.getElementById('lose');
let currentstr = document.getElementById('current-streak');
let beststr = document.getElementById('best-streak');


let openDoor1 ;
let openDoor2 ;
let openDoor3 ; 
let startButton = document.getElementById('start');

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg" ;
let closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg" ; 
let numClosedDoors = 3 ;
let currentlyPlaying = true ; 
let youWin = 0 ;
let youLose = 0 ;
let currentStreak = 0;
let bestStreak = 0 ; 


// game logic
isBot = (door) => {
  if ( door.src === botDoorPath){
    return true ;
  } else {
    return false ;
  }
}


gameOver =(str)=> {
  if ( str === 'win') {
    startButton.innerHTML = 'You win! play again?';
    youWin ++ ;
    currentStreak ++ ;
} else {
  startButton.innerHTML = 'Game over! Play again?';
  youLose ++ ; 
  currentStreak = 0 ;
}
currentlyPlaying = false ;
};


isClicked = (door) =>{
  if ( door.src === closedDoorPath ){
      return false;
      }else {
        return true;
      }
}

PlayDoor=(door)=> {
  numClosedDoors--;
  if ( numClosedDoors === 0 ) {
    gameOver('win');
  } else if (isBot(door)){
    gameOver();
  }
}

// the 3 clicked doors 
door1.onclick = () => {
  if(!isClicked(doorImage1) && currentlyPlaying === true){
     doorImage1.src = openDoor1 ;
  PlayDoor(doorImage1);
  }
};
door2.onclick = () => {
  if(!isClicked(doorImage2) && currentlyPlaying === true){
  doorImage2.src = openDoor2 ;   
  PlayDoor(doorImage2);
  }
};
door3.onclick = () => {
  if(!isClicked(doorImage3)&& currentlyPlaying === true){
    doorImage3.src = openDoor3 ;
  PlayDoor(doorImage3);
  }
};

startButton.onclick = () => {
  if (!currentlyPlaying === false ){

  } else {
  startRound();
};
}




//Door logic

const randomChoreDoorGenerator =()=> {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0 ){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if (choreDoor === 1) {
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  } else if ( choreDoor === 2){
    openDoor3 = botDoorPath; 
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
  
};




startRound =()=>{
  numClosedDoors = 3 ;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  doorImage1.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  doorImage2.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  doorImage3.src = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
  youWinSel.innerHTML = `Wins = ${youWin}`;
  youLoseSel.innerHTML = `Loses = ${youLose}`;
  currentstr.innerHTML = `Current Streak = ${currentStreak}`;
  if ( currentStreak > bestStreak){
    bestStreak = currentStreak
    beststr.innerHTML = `Best Streak = ${bestStreak}`;
  } else {
    bestStreak
  }





  randomChoreDoorGenerator();

}








startRound();