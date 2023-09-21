import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Select an Option</h1>
        <select>
          <option
            value="option1"
            onClick={(event) =>
              console.log("Option clicked: " + event.target.value)
            }
          >
            Option 1
          </option>
          <option
            value="option2"
            onClick={(event) =>
              console.log("Option clicked: " + event.target.value)
            }
          >
            
            Option 2
          </option>
          <option
            value="option3"
            onClick={(event) =>
              console.log("Option clicked: " + event.target.value)
            }
          >
            Option 3
          </option>
        </select>
      </div>
    );
  }
}

export default App;
