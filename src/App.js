import React from 'react';
//import logo from './logo.svg';

import Board from './Board'

class App extends React.Component {
  render(){
    return(
      <div className="game">
        <div className="game-board">
        <Board/>
        </div>
        <div className="game-info">
          <div>{/*status*/}</div>
          <ol>{/*TODO*/}</ol>
        </div>
        </div>      
    )
  }
}

export default App;
