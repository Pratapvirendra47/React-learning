import React, {useState, useEffect} from 'react';
import HooksProps from './hooksProps';

function HooksComponent (props) {
    const [count, setCountValue] = useState(0);
    const [arrayOfNumber, setArrayOfNumber] = useState([]);
    const [newCount, setNewCountValue] = useState(0);
    const [newObj, setNewObj] = useState({})
    
    // ComponentDidMount
    useEffect(()=> {
        console.log('componentDidMouunt')
    },[])

    // ComponentDidUpdate
    useEffect(() => {
        console.log('ComponentDidupdate', newObj)
    },[newObj])
    
    const incrementValue = () => {
        let newVal = count+1;
        setCountValue(newVal);
    }
    const incrementNewValue = () => {
        let demoObj = {}
        demoObj.a = 1;
        setNewObj(demoObj);
        // let newVal = newCount+1;
        // setNewCountValue(newVal);
    }
    return (
        <div id="hooksComponent">
            <h1>Count={count}</h1>
            <h2> New Count = {newCount}</h2>
            <button onClick={()=> {incrementValue()}}> click to increment</button>
            <button onClick={()=> {incrementNewValue()}}> click to increment new value </button>
            {
                arrayOfNumber.map((value, index) => {
                    return (
                        <div> {value} </div>
                    )
                })
            }
        </div>
    )

}

export default HooksComponent;