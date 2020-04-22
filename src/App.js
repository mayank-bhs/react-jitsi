import React from 'react';
import logo from './logo.svg';
import './App.css';
import JitsiMeetComponent from './JitsiVideo';

function App() {
  return (
    <div style={{ width: "100%", height: "100%" }} className="App">
      <header className="App-header">
        <JitsiMeetComponent></JitsiMeetComponent>
      </header>
    </div>
  );
}

export default App;
