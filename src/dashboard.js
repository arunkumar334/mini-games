import React from 'react';
import {Link} from 'react-router-dom';


class Dashboard extends React.Component{
  constructor(props){
    super(props);
    this.state = {
    };
  }

  render(){
    return (<React.Fragment>
        <div style={{textAlign:'center'}}>
          <h3 style={{color:'blue',marginBottom:'50px'}}>Welcome to the World of Mini Games! <br/> Choose a Game you would like to play!<br/>Have Fun!!</h3>
          <Link style={{color:'white'}} to="/gameList"><button className="btn btn-primary btn-large">Explore Games Library</button></Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Dashboard;
