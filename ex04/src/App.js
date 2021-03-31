import React, { Component } from 'react';
 
class App extends React.Component {
setLocalStorage = () => {
var myLocalStorageDate = localStorage.setItem('Arena', 'Selection Month'); 
}

getLocalStorage = () => {
localStorage.getItem( myLocalStorageDate );

}

  render() {
    return (
      <div className="App">
        <button
        type="button"
        onClick={this.setLocalStorage}>
        Click me1!
        </button>
        <button
        type="button"
        onClick={this.getLocalStorage}>
        Click me2!
        </button>
      </div>
    )
  }
}

export default App;

