import React, { Component } from 'react';

class App extends React.Component {
setLocalStorage = () => {
localStorage.setItem('Arena', 'Selection Month'); 
}
  render() {
    return (
      <div className="App">
        <button
        type="button"
        onClick={this.setLocalStorage}>
          Click me!
        </button>
      </div>
    )
  }
}

export default App;
