import React, {Component} from 'react';
import './style.css';

class CipherBox extends Component {

    render() {
        return (
            <div onClick={ ()=>this.props.clicker(this.props.name)} className="CipherBox">
                <span className="cipherName">{this.props.name}</span>
            </div>
        )
    }
}

export default CipherBox;