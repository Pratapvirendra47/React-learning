import React from 'react';
import axios from 'axios';
import {getAPIdata} from './restApi';

class ApiDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            apiData:[]
        }
    }
    
    componentDidMount() {
        let apidataResponse = getAPIdata().then(response => {
            console.log('consoling respose', response)
        });
        // console.log('getting api data',apidataResponse)
    }

    render() {
        return (
            <div>
                {
                    this.state.apiData.map((value, index) => (
                        <div>
                            {value.title}
                        </div>
                    ))
                }
            </div>
        )
    }
}

export default ApiDemo;