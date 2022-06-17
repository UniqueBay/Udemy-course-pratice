import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

export default class App extends Component {
  state = {
    persons: [
      { name: "Pamela", age: 28 },
      { name: "Pam", age: 29 },
      { name: "Unique", age: 26 },
    ],
    otherState: "some other value",
  };

  switchNameHandler = (newName) => {
    // console.log("Was clicked!");

    // Don't change state by mutating (changing) it directly.
    // DON'T DO THIS: this.state.person[0].name = "Mon Cheri";

    // Do This
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: "Pam", age: 29 },
        { name: "Unique", age: 27 },
      ],
    });
  };

  // Handler that gets it name from an input value
  nameChangeHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Pamela', age: 28 },
        { name: event.target.value , age: 29 },
        { name: "Unique", age: 26 },
      ],
    });
  }

  render() {

    // Inline styling
    const button = {
      backgroundColor: "white",
      font: 'inherit',
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>
        {/* We can pass methods as props for multiple access to our state in or outside the stateful component */}
        {/* ONE by using the arrow function call. FYI: Not efficient so DO NOT USE. */}
        <button
          style={button}
          onClick={() => this.switchNameHandler("Mon Cheri")}>
          Switch Name
        </button>

        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          // Passing methods(function) between component by referencing it "click"
          // TWO by using the bind method. 
          click={this.switchNameHandler.bind(this, "Ehi!")}
          // Passing the name changing handler as a reference named "changed" for access in the "Person.jsx" component
          changed={this.nameChangeHandler}
        >
          My Hobbies: Eating.
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

// Using React hook (useState) in a functional component

// const App = props => {

//   const [personsState, setPersonsState] = useState({
//     persons: [
//       { name: "Pamela", age: 28 },
//       { name: "Pam", age: 29 },
//       { name: "Unique", age: 26 },
//     ]
//   });

//   const [otherState, setOtherState] = useState('some other value')

//   // To check or see the state values.
//   console.log(personsState, otherState);

//   const switchNameHandler = () => {

//     setPersonsState({
//       persons: [
//         { name: "Mon Cheri", age: 28 },
//         { name: "Pam", age: 29 },
//         { name: "Unique", age: 27 },
//       ],

//       // Use "useState" multiple times. (Line 15)
//       // DON'T DO THIS.
//       // otherState: personsState.otherState,
//     });
//   };

//     return (
// <div className="App">
//   <h1> Hi, I'm a React App</h1>
//   <p>This is really working!</p>
//   <button onClick={switchNameHandler}>Switch Name</button>

//   <Person
//     name={personsState.persons[0].name}
//     age={personsState.persons[0].age}
//   />
//   <Person
//     name={personsState.persons[1].name}
//     age={personsState.persons[1].age}
//   > My Hobbies: Eating </Person>
//   <Person
//     name={personsState.persons[2].name}
//     age={personsState.persons[2].age}
//   />
// </div>
//     );
//   }

// export default App

// ----------------------------------------------------------------
// Class Component State Management

// state = {
//   persons: [
//     { name: "Pamela", age: 28 },
//     { name: "Pam", age: 29 },
//     { name: "Unique", age: 26 },
//   ],
//   otherState: "some other value",
// };

// switchNameHandler = () => {
//   // console.log("Was clicked!");

//   // Don't change state by mutating (changing) it directly.
//   // DON'T DO THIS: this.state.person[0].name = "Mon Cheri";

//   // Do This
//   this.setState({
//     persons: [
//       { name: "Mon Cheri", age: 28 },
//       { name: "Pam", age: 29 },
//       { name: "Unique", age: 27 },
//     ],
//   });
// };

// NOTE: The setState used in class based component merge two state together while the react hook (useState()) replace the new state with the old one.
