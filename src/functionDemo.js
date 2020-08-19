import React from 'react';

// Stateless Functional Component
function normalFunction(props) {
    // console.log("normal function props", props);
    return (
        <div>
            {props.count}
            <button onClick={() => {props.incrementValue(5)}}> Click me </button>
        </div>
    )

}

// class normalFunction extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {

//         }
//     }

//     render () {
//         console.log("class based componen",this.props)
//         return (
//             <div> {this.props.count} </div>
//         )
//     }
// }

export default normalFunction;