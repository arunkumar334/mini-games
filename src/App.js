import './App.css';
import React from 'react';
import Dashboard from './dashboard';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import TicTacToe from './ticTacToe';
import gameList from './gameList';
import ErrorPage from './errorPage';
import homeImage from './images/home.png';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {};
  }

  render(){
    return (<React.Fragment>
    <Router>
      <div>
        <Switch>
          <Route exact path="/" component={Dashboard}></Route>
          <Route path="/ticTacToe" component={TicTacToe}></Route>
          <Route path="/gameList" component={gameList}></Route>
          <Route component={ErrorPage}></Route>
        </Switch>
      </div>
      <Link title="Go to Dashboard" to="/"><img className="homeButton" alt="home icon" src={homeImage}></img></Link>
    </Router>
    </React.Fragment>
    );
  }
}
export default App;
