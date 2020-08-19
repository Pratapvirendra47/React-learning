import React from 'react';
import logo from './logo.svg';
import './App.css';
import NormalFunction from './functionDemo';

// STATEFUL CLASS COMPONENT
class App extends React.Component {
  count4 = 6;
  constructor(props) {
    console.log('constructor')
    super(props);
    
    this.state = {
      count : 0,
      count2 : 5,
      count3 : 6,
      age : 'abcd',
      newCount : 0
    }
    this.updateAge = this.updateAge.bind(this);
    this.incrementFiveTimes = this.incrementFiveTimes.bind(this);
  }


  // only callled once
  componentDidMount() {
    this.incrementFiveTimes()
  }



  shouldComponentUpdate(nextProps, nextState) {
    // console.log('should Component Update ths.state--->>', this.state.age)
    // console.log('nexSTatet age=====>',nextState.age)
    if (this.state.age !== nextState.age) {
      return true
    } else {
      return false;
    }
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('hello componentidUpdate', prevProps, prevState)
  }


  increment() {
    this.count4+= 1;
    this.setState((prevState) => ({
      count: prevState.count + 1
    }), 
      () => { }
    )
  }

  updateAge(e) {
    this.setState({
      age : e.target.value
    })
  }

  incrementFiveTimes() {
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
  }

  render () {
    console.log('render')
    return (
      <div>
          {/* onCLick, onChange, onBlur,  */}
          {/* Count : <NormalFunction count={this.state.count} 
                    incrementValue={(value) => {  
                      this.incrementFiveTimes(); 
                      this.setState({ newCount : value })
                    }} 
                  /> */}
          Count : {this.count4}
          <button  onClick={this.incrementFiveTimes}> Increment the state </button>
          <h1> Hello world</h1>
          <input type="text" value={this.state.age} onChange={(e) =>this.updateAge(e)} />
      </div>
    )
  }
}

export default App;
