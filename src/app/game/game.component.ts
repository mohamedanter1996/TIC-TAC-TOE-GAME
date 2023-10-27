import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit{
gameBoard:string[]=[];
playerTurn:string="X";
winningMessage:string="";
noOneWinMessage:string="";
playerOneSound:boolean=false;
playerTwoSound:boolean=false;
winningArray:number[][]=[[0,1,2],
                         [3,4,5],
                         [6,7,8],
                         [0,3,6],
                         [1,4,7],
                         [2,5,8],
                         [0,4,8],
                         [2,4,6]]

ngOnInit(): void {
    this.gameBoard.length=9;
    this.gameBoard.fill("");
}
handlePlayerTurn(index:number){
  if(this.gameBoard[index]==""){
this.gameBoard[index]=this.playerTurn;
  if(this.playerTurn==='x'){
  let audio=new Audio();
  audio.src='assets/interface-124464.mp3';
  audio.load();
  audio.play();
  }else{
   let audio=new Audio();
  audio.src='assets/interface-124464.mp3';
  audio.load();
  audio.play();
  }
  this.playerTurn=this.playerTurn=="X"?"O":"X";


  console.log(this.gameBoard);
  console.log(this.gameBoard.every((playerTurn:string)=>playerTurn!=""));
  this.winningArray.forEach((winningArrayItem:number[])=>{
    if((this.gameBoard[winningArrayItem[0]]!="")&&(this.gameBoard[winningArrayItem[1]]!="")&&(this.gameBoard[winningArrayItem[2]]!="")&&(this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]==this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[2]])){
this.winningMessage=`player of ${this.gameBoard[winningArrayItem[1]]} is win`;


    }

    else if((this.gameBoard.every((playerTurn:string)=>playerTurn!=""))&&(this.gameBoard[winningArrayItem[0]]!="")&&(this.gameBoard[winningArrayItem[1]]!="")&&(this.gameBoard[winningArrayItem[2]]!="")&&(((this.gameBoard[winningArrayItem[0]]!=this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]==this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[2]]))||((this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]!=this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[2]]))||((this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]==this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]!=this.gameBoard[winningArrayItem[2]]))||((this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]!=this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]!=this.gameBoard[winningArrayItem[2]]))||((this.gameBoard[winningArrayItem[0]]!=this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]!=this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]==this.gameBoard[winningArrayItem[2]]))||((this.gameBoard[winningArrayItem[0]]!=this.gameBoard[winningArrayItem[1]])&&(this.gameBoard[winningArrayItem[1]]!=this.gameBoard[winningArrayItem[2]])&&(this.gameBoard[winningArrayItem[0]]!=this.gameBoard[winningArrayItem[2]])))){
this.noOneWinMessage=`game is ended and there is no player win`;
    }
  })
  }
  else{}
}
playAgain(){
   this.gameBoard.fill("");
   this.winningMessage="";
   this.playerTurn="X";
   this.noOneWinMessage="";
}



}
