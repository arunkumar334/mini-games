import './App.css';
import React from 'react';
import loadingGif from './images/loading.gif';
import ResultPopup from './resultPopup';

class TicTacToe extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      squareValues:Array(9).fill(null),
      currentPlayer:"O",
      prevValue:Array(9).fill(null),
      winner:null,
      isLoading:false,
      isTie:false
    };
  }

  resetSquares = ()=>{
    setTimeout(() => {
      this.setState({squareValues:Array(9).fill(null),currentPlayer:"O",prevValue:Array(9).fill(null),winner:null,isLoading:false,isTie:false});
    }, 200);
  }

  clickSquare = (index)=>{
    this.setState({isLoading:true});
    let prevValue = [...this.state.prevValue];
    let currentValue = [...this.state.squareValues];
    if(currentValue[index] !== null && currentValue[index] !== this.state.currentPlayer){
      alert("This Move is Not Allowed");
    }else if(currentValue[index] !== null && currentValue[index] === this.state.currentPlayer){
      if(currentValue[index] !== prevValue[index]){
        prevValue[index] = null;
        this.updateValue(prevValue);
      }else{
        alert("This Move is Not Allowed");
      }
    }else{
      prevValue[index] = this.state.currentPlayer;
      this.updateValue(prevValue);
    }
  }

  updateValue(valueToUpdate){
    this.setState({squareValues:valueToUpdate},this.checkStatus);
  }

  nextPlayer = ()=>{
    if(JSON.stringify(this.state.prevValue) === JSON.stringify(this.state.squareValues)){
      alert("Please complete your move before giving the turn to Next Player");
    }else{
      this.setState({currentPlayer:this.state.currentPlayer === "O" ? "X":"O",prevValue:this.state.squareValues});
    }
  }

  checkStatus = () => {
    let isCompleted = false;
    let winner = null;
    let isTie = false;
    let temp = this.state.squareValues;
    if(temp[0] !== null && temp[1] !== null && temp[2] !== null && temp[0] === temp[1] && temp[1] === temp[2])
      {isCompleted = true;winner=temp[0];}
    else if(temp[3] !== null && temp[4] !== null && temp[5] !== null && temp[3] === temp[4] && temp[4] === temp[5])
      {isCompleted = true;winner=temp[3];}
    else if(temp[6] !== null && temp[7] !== null && temp[8] !== null && temp[6] === temp[7] && temp[7] === temp[8])
      {isCompleted = true;winner=temp[6];}
    else if(temp[0] !== null && temp[3] !== null && temp[6] !== null && temp[0] === temp[3] && temp[3] === temp[6])
      {isCompleted = true;winner=temp[0];}
    else if(temp[1] !== null && temp[4] !== null && temp[7] !== null && temp[1] === temp[4] && temp[4] === temp[7])
      {isCompleted = true;winner=temp[1];}
    else if(temp[2] !== null && temp[5] !== null && temp[8] !== null && temp[2] === temp[5] && temp[5] === temp[8])
      {isCompleted = true;winner=temp[2];}
    else if(temp[0] !== null && temp[4] !== null && temp[8] !== null && temp[0] === temp[4] && temp[4] === temp[8])
      {isCompleted = true;winner=temp[0];}
    else if(temp[2] !== null && temp[4] !== null && temp[6] !== null && temp[2] === temp[4] && temp[4] === temp[6])
      {isCompleted = true;winner=temp[2];}
    else if(temp[0] !== null && temp[1] !== null && temp[2] !== null && temp[3] !== null && temp[4] !== null && temp[5] !== null && temp[6] !== null && temp[7] !== null && temp[8] !== null)
      {isCompleted = true;isTie = true;}

    if(isCompleted){
      this.setState({winner:winner,isTie:isTie,isLoading:false},()=>{
        document.getElementById("winnerModalButton").click();
      });
    }
    this.setState({isLoading:false});
  }

  render(){
    return (<React.Fragment>
      {this.state.isLoading ? <img className="loadingGif" src={loadingGif} alt="loading gif"/> : 
      <div className="outer-container">
        <h2 className="heading">Tic Tac Toe</h2>
        <h3 style={{textAlign:'center',marginBottom:'20px',marginLeft:'-25px'}}>Current Player: {this.state.currentPlayer}</h3>
        <div className="board">
          {
            this.state.squareValues.map(
              (data,index) => {
                return (
                <div key={index} className="square" onClick={(event)=>{
                  this.clickSquare(index);
                }}>
                  <div className="innerSquare">{data}</div>
                </div>
                );
              }
            )
          }
        </div>
        <div style={{textAlign:'center'}}>
          <button className="btn btn-primary" style={{marginRight:'250px'}} onClick={this.nextPlayer}>Pass to Player {this.state.currentPlayer === "O" ? " X" : " O"}</button>
          <button className="btn btn-primary" onClick={this.resetSquares}>Reset</button>
        </div>
        <button id="winnerModalButton" hidden type="button" className="btn btn-primary" data-toggle="modal" data-target="#winnerModal"></button>
        <ResultPopup winner={this.state.winner} isTie={this.state.isTie} resetSquares={this.resetSquares}></ResultPopup>
      </div>
  }</React.Fragment>
    );
  }
}
export default TicTacToe;
