import React from 'react';
import axios from 'axios';

class GameList extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      gameList:[],
      rules:"",
      url:"",
      buttonText:"OK"
    };
  }

  selectGame = (data)=>{
      if(data.url === "/ticTacToe"){
        this.setState({url:data.url,buttonText:"Proceed to Play",rules:"i) The game is played on a grid that's 3 squares by 3 squares. ii) You are O, your friend is X. Players take turns putting their marks in empty squares. iii) The first player to get 3 of his/her marks in a row (up, down, across, or diagonally) is the winner. iv) When all 9 squares are full, the game is over. If no player has 3 marks in a row, the game ends in a tie."},()=>{
          document.getElementById("rulesModalButton").click();
        });
      }else{
        this.setState({url:data.url,buttonText:"Go to Dashboard",rules:"The Game is not yet Released. Kindly check the other Games. Sorry for the inconvenience!"},()=>{
          document.getElementById("rulesModalButton").click();
        });
      }
  }

  componentDidMount(){
    axios.get('./miniGames.json').then((response)=>{
      this.setState({gameList:response.data});
    }).catch((error)=>{
      console.log("error details",error);
    });
  }

  gameAction = ()=>{
    if(this.state.url === "/comingSoon"){
      this.props.history.push("/");
    }else{
      this.props.history.push("/ticTacToe");
    }
  }

  render(){
    return (<React.Fragment>
        <div style={{textAlign:'center',marginTop:'50px'}}>
          <table className="table">
            <tbody>
              {
                this.state.gameList.map((element,index)=>{
                  return (<tr key={index}><td style={{cursor:"pointer",color:"blue"}} onClick={()=>{this.selectGame(element)}}>{element.name}</td></tr>)
                })
              }
            </tbody>
          </table>
        </div>
        <button id="rulesModalButton" hidden type="button" className="btn btn-primary" data-toggle="modal" data-target="#rulesModal"></button>
        <div style={{textAlign:'center'}} className="modal fade" id="rulesModal" tabIndex="-1" role="dialog" aria-labelledby="rulesModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="rulesModalLabel">Game Information</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.state.rules}
            </div>
            <div className="modal-footer">
            <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.gameAction}>{this.state.buttonText}</button>
            </div>
          </div>
        </div>
      </div>
      </React.Fragment>
    )
  }
}

export default GameList;
