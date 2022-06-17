import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

export default class App extends Component {
  state = {
    persons: [
      { id: 'aiue5',name: "Pamela", age: 28 },
      { id: 'uqte5',name: "Pam", age: 29 },
      { id: 'aeht67',name: "Unique", age: 26 },
    ],
    otherState: "some other value",
    showPersons: false,
    toggleSwitch: false
  };

  // Handler/Method that switch names
  // switchNameHandler = (newName) => {
  //   // console.log("Was clicked!");

  //   // Don't change state by mutating (changing) it directly.
  //   // DON'T DO THIS: this.state.person[0].name = "Mon Cheri";

  //   // Do This
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "Pam", age: 29 },
  //       { name: "Unique", age: 27 },
  //     ],
  //   });
  // };

  // Handler/Method that gets it name from an input value
  nameChangeHandler = (event, id) => {

    // Find the single person in the state/data using the find() or findIndex() method
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    // Store person found in the find function (personIndex) on it own
    // Do not mutate/change the state directly. create a new instance of the state.
    // 1. Using spread operator
    const person = {
      ...this.state.persons[personIndex]
    };

    // 2. Using object.assign() method.  that takes an empty object and the mutating object in the state.
    // const person = Object.assign({}, this.state.persons[personIndex])

    // Then update the person name in the new instance of the state
    person.name = event.target.value

    // Then update the array(persons) in the position it was found (personIndex).
    const persons = [...this.state.persons]; //Access
    persons[personIndex] = person;  //Update

    // Then set the state with the new updated array of persons.
    this.setState({
      persons: persons
    });
  }

  // Handler/Method that deletes persons on click.
  deletePersonHandler = (personIndex) => {
    // Two ways to update state in an array
    // ONE using the slice() method
    // const persons = this.state.persons.slice();
    
    // TWO using the spread operator
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1)
    this.setState({persons: persons})
  }

  // Handler/Method that display person component or not.
  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    const toggleOn = this.state.toggleSwitch;
    // NOTE: setState does not overwrite but merge with the state.
    this.setState({ showPersons: !doesShow });
    this.setState({ toggleSwitch: !toggleOn });
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

    // More optimizable & ETU way to display content based ona condition.
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {/* Display a list of array data from the state using the map method */}
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangeHandler(event, person.id)} />
          })}
          {/* <Person
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
          /> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p>This is really working!</p>

        {/* We can pass methods as props for multiple access to our state in or outside the stateful component */}
        {/* ONE by using the arrow function call. FYI: Not efficient so DO NOT USE. */}
        {/* Button used to switch names. */}
        {/* <button
          style={button}
          onClick={() => this.switchNameHandler("Mon Cheri")}>
          Switch Name
        </button> */}

        {/* Button used to display persons component based on a condition. */}
        <button style={button} onClick={this.togglePersonsHandler}>
          Toggle Persons
          {/* Use ternary operators to display content "Persons.jsx" based on a condition  NOTE: NOT optimazable*/}
          {this.state.toggleSwitch ? <span> OFF</span> : <span> ON</span>}
        </button>

        {/* Add reference to the conditional content  */}
        {persons}

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
