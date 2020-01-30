import React from 'react';

class KeyProcessor extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    componentDidMount(){
        document.addEventListener('keydown', this.keyPressEvent);
    } 
}

export default KeyProcessor;