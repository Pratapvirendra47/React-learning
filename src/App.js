import React from 'react';
import logo from './logo.svg';
import './App.css';
import NormalFunction from './functionDemo';
import HooksComponent from './hooksComponent';
import PureComponent from './pureComponent';
import MemoFile from './demoMemoFile';
import APIDemo from './apiDemo';

// STATEFUL CLASS COMPONENT
class App extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      count : 0,
      count2 : 5,
      count3 : 6,
      age : '',
      newCount : 0,
      arrayOfNumber : [1,2,3,4,5,6,7,8]
    }
    this.inputRef = React.createRef();
    this.inputRef1 = React.createRef();

    this.updateAge = this.updateAge.bind(this);
    this.incrementFiveTimes = this.incrementFiveTimes.bind(this);
  }


  // only callled once
  componentDidMount() {
    // console.log('consoling the input ref',this.inputRef);
    // this.inputRef.current.focus();
    // this.inputRef.current.onClick = this.InputClick();
    
    // this.incrementFiveTimes()
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return true
  }

  componentDidUpdate(prevProps, prevState) {
    // this.inputRef.current.onClick = this.InputClick();
    // console.log('hello componentidUpdate', this.state.newCount)
  }

  InputClick() {
    console.log('this input is clicked');
  }


  increment() {
    this.setState((prevState) => ({
      count3: prevState.count3 + 1
    }), 
      () => { }
    )
  }

  updateAge(e) {
    console.log(this.inputRef.current.value)
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

  
  returnHTML() {
    let button = <React.Fragment>Hi</React.Fragment>
    return button;
  }

  returnNewHTML() {
    console.log('return new html')
    let newButton = <React.Fragment> Heello </React.Fragment>
    return newButton;
  }

  demoFunction(a,b) {
    return a+b;
  }

  defineStyle() {
    let styleObj = {};
    if (this.state.count3 > 20) {
      styleObj["color"] = 'red';
    } else {
      styleObj["color"] = 'blue';
    }
    return styleObj;
  }

  render () {
    console.log('Parent Component is rendering ');
      return (
        <div>
          <APIDemo />
          
          {/* <PureComponent count3={this.state.count3} /> */}
            {/* <MemoFile count3={this.state.count3} />
            <button  onClick={this.incrementFiveTimes}> Increment the state </button>
            <h1  style={this.defineStyle()}> Hello world</h1>
            <input ref={this.inputRef} type="text" value={this.state.age} onChange={(e) =>this.updateAge(e)} />
            <input ref={this.inputRef1} type="text" /> */}

        </div>
      ) 
  }
}

export default App;
