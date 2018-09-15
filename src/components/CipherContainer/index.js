import React, {Component} from 'react';
import CipherBox from './CipherBox.js';

class Container extends Component {

    render() {
        return (
            <div className="container">
                <CipherBox clicker={this.props.clicker} name={"ROT13"}/>
                <CipherBox clicker={this.props.clicker} name={"Letters to numbers"}/>
                <CipherBox clicker={this.props.clicker} name={"GA-DE-RY-PO-LU-KI"}/>
                <CipherBox clicker={this.props.clicker} name={"Bacon"}/>
                <CipherBox clicker={this.props.clicker} name={"Kamasutra"}/>
                <CipherBox clicker={this.props.clicker} name={"Tomato"}/>

            </div>
            )
    }
}

export default Container;