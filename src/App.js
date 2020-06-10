import React from 'react';
import './App.css';
import './card.css'

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <h3>Hello from Shayan</h3>
      <p>This is Bootcamp 2020 class 03, and we are discussing about React Basics</p>
      <h5>Mentors</h5>
      <ul>
        <li>Sir Zia Khan</li>
        <li>Sir Zeeshan Hanif</li>
      </ul>
      <p>We discussed that if there are no <strong>brackets</strong> 2 + 2 = 22 but if we used <strong>brackets</strong> 2 + 2 = {2 + 2}</p>
      <div className="card">
        This is the <strong>CSS Magic</strong>
      </div>
    </div>
  );
}

export default App;
