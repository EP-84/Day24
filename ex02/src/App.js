import React, { Component } from 'react';

class App extends React.Component {
  getMyStorage = () => {
    var myLocalStorageData = localStorage.getItem('Paragon', 'yes, but Arena first');
    var myCookieData = document.cookie = "Year=2021"; 
    var mySessionStorage = sessionStorage.getItem('frontend', 'React');
    }
  render() {
    return (
      <div className="App">
        <button
        type="button"
        onClick={this.getMyStorage}>
          Click me!
        </button>
      </div>
    )
  }
}



export default App;

