import React from 'react';

class NewPureComponent extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log('rendering from new Pure component', this.props)
        return (
            <div> Hello from new Pure Component = {this.props.newCount} </div>     
        )
    }
}


export default NewPureComponent;