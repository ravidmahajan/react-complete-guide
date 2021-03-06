// CLASS BASED COMPONENT
// =================================================================================
import { buildQueries } from '@testing-library/dom';
import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {

    state = {
        persons : [
            { name: 'Ravi', surname: 'Mahajan' },
            { name: 'Raj', surname: 'Mahajan' }
        ],
         otherState: 'some other value',
         showPersons: false
    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    switchNameHandler = (newName) => {
    //console.log('button was clicked');
    // dont use this.state.persons[0].name = 'Maximilian';

    this.setState({
        persons : [
            { name: newName , surname: 'Mahajan' },
            { name: 'Raj', surname: 'Mahajan' }
        ]
    })
}


nameChangedHandler = (event) => {

    this.setState({
        persons : [
            { name: 'raj' , surname: 'Mahajan' },
            { name: event.target.value, surname: 'Mahajan' }
        ]
    })
}


    render() {
// inline style- scoped style not able to leverage but theres a way
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        }

        let persons = null;

        if(this.state.showPersons){
            persons = (
                <div>
         <Person 
        click={this.switchNameHandler.bind(this, 'Rahul')}
        name = { this.state.persons[0].name }
        surname = { this.state.persons[0].surname }>Hey hiii! </Person>
        <Person 
        name = { this.state.persons[1].name }
        surname = { this.state.persons[1].surname }
        changedName={this.nameChangedHandler}/> 
        </div>
            )
        }

        return ( <div className = "App">
        <h1> Hi I am React app </h1> 
        {/* <button style={style}
                onClick={ () => this.switchNameHandler('Maximilian')}>Click here</button> */}

        <button style={style}
                onClick={this.togglePersonsHandler}>Click here</button>
         {/* not run immediately here */}

{/* conditional 1st way */}
         {/* { this.state.showPersons === true ? 
        <div>
         <Person 
        click={this.switchNameHandler.bind(this, 'Rahul')}
        name = { this.state.persons[0].name }
        surname = { this.state.persons[0].surname }>Hey hiii! </Person>
        <Person 
        name = { this.state.persons[1].name }
        surname = { this.state.persons[1].surname }
        changedName={this.nameChangedHandler}/> 
        </div> : null
         } */}

         {/* conditional 2nd way */}
            {persons}
         </div>
    );
    }   
}
export default App;


// FUNCTION BASED COMPONENT
// ==============================================================================
// React Hooks always start with 'use'

// import React, { useState } from 'react';
// import './App.css';
// import Person from './Person/Person';


// const App = props => {

//    const [personsState, setPersonsState] =  useState({
//         persons : [
//             { name: 'Ravi', surname: 'Mahajan' },
//             { name: 'Raj', surname: 'Mahajan' }
//         ]
//         //,otherState: 'some other value'
//     });

//     //useState({otherState: 'some other value'});

    

//     const [otherState, setOtherState] = useState('some other value');

//     console.log(personsState, otherState);

//     //useState returns array with exactly 2 elements  
//     //1. - current state and then updated state 
//     //2. - function which will update the state, such that react is aware of it and rerender the component
//     // 2nd parameter doesnot merge whatever we pass with old state instead it replaces old state
//     //we have to manually make sure we include old  state data
//     // [1] elegant way is do not maually ,erge but use useState multiple times
//     //whereas in class based components , we have setState property which automatically merges old state 
//     //and not discard any state, here we can have multiple useState calls.

//     const switchNameHandler = () => {
//     //console.log('button was clicked');
//     // dont use this.state.persons[0].name = 'Maximilian';

//     setPersonsState({
//         persons : [
//             { name: 'Rahul', surname: 'Mahajan' },
//             { name: 'Raj', surname: 'Mahajan' }
//         ]
//         // [1], otherState : personsState.otherState
//     })
// }

//         return ( <div className = "App">
//         <h1> Hi I am React app </h1> 
//         <button onClick={switchNameHandler}>Click here</button>
//         <Person name = { personsState.persons[0].name }
//         surname = { personsState.persons[0].surname }>Hey hiii! </Person>
//         <Person name = { personsState.persons[1].name }
//         surname = { personsState.persons[1].surname }/> 
//         </div>
//     );
// }
// export default App;