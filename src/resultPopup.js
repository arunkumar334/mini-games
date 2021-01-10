import React from 'react';

class ResultPopup extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }
  resetSquares = ()=>{
    this.props.resetSquares();
  }

  render(){
    return (
      <div style={{textAlign:'center'}} className="modal fade" id="winnerModal" tabIndex="-1" role="dialog" aria-labelledby="winnerModalLabel" aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="winnerModalLabel">Yeay! Game Completed!</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.isTie ? "soooo Close! It's a Tie!!! Keep Playing to Find a Winner!" : "The Winner is "+this.props.winner+". Keep Playing!!!"}
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.resetSquares}>OK</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ResultPopup;
