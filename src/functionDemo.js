import React from 'react';

// Stateless Functional Component

// Statefull class Component
class normalFunction extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log('component did mount is called')
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('should Component update ', nextProps, nextState)
        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        console.log('componentDId update', prevProps, prevState)
    }

    render() {
        return (
            <div>
               here is the value :  {this.props.count}
            </div>
        )
    }
}


// function normalFunction(props) {
//     console.log(props)
//     return (
//         <div>
//            <h1>hello I am the child component :   {props.demoFunc(3,5)} </h1>
//         </div>
//     )
//     // if (props.count < 20) {
//     //     return (
//     //         <div>
//     //             {/* <div>
//     //                 {this.returnHTML()}
//     //             </div> */}
//     //             {
//     //                 props.count === 10 ? <div> HI </div> : 
//     //                     props.count === 15 ? <div> hello </div> : null
//     //             }
//     //         </div>
//     //     )
//     // } else {
//     //     return (
//     //         <div>
//     //             {props.demoFunc(3,4)}
//     //         </div>
//     //     )
//     // }
    

// }
export default normalFunction;