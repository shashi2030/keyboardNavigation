import React from 'react';
import KeyProcessor from '../../components/KeyProcessor/KeyProcessor';
import {Layout} from '../../components/Layout/Layout';

class Plumbing extends KeyProcessor {
    constructor(props) {
        super(props);
        this.state = {
            keycode:0
        }
    }

    keyPressEvent = (event) => {
        var keyCode = event.keyCode;
        this.setState({
            keycode:keyCode
        })
    }

    render() {
        return (
            <Layout>
    <div>{this.state.keycode}</div>
                This is a subpage
            </Layout>
           
        )
    }
}

export default Plumbing;