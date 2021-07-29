import React, { Component } from "react"

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: {text: ''},
      tasks: [],
    };
  }

  render() {
    const { task, tasks } = thisstate;

    return (
      <div>
        <form>
          <label htmlFor="taskInput">Enter task</label>
          <input type="text" id="taskInput"/>
          <button type="submit">
            Add Task
          </button>
        </form>
      </div>
    );
  }
}

export default App;









































































// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
