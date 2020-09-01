import React from 'react';
import NewPureComponent from './newPureComponent';

class PureComponent extends React.PureComponent {
    constructor(props) {
        super(props);
    }

    // shouldComponentUpdate(nextProps, nextState) {
    //     // console.log('should component update', nextProps)
    //     return true;
    // }
    
    render() {
        console.log('child component is rendering ', this.props);
        return (
            <div>
                hello world = {this.props.count3}
                <NewPureComponent newCount={this.props.count3} />

            </div>
        )
    }
}

export default PureComponent;