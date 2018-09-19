import React, { Component } from 'react';

import './App.css';
import Header from '../Header';
import Container from '../CipherContainer';
import TextBox from '../TextBox';

class App extends Component {
    constructor (props) {
        super(props);
        this.state = {
            isTextBox: false,
            textBox_name: ''

        }
    }
        clicker = (name) => {
            this.setState({
                isTextBox: !this.state.isTextBox,
                textBox_name: name
            });
        };

  render() {
    return (

      <div className="App">
      <header>
          {!this.state.isTextBox ? <Header/> : <p className='back' onClick={this.clicker}>Back to the main site</p>}
        </header>
        <main>

            {this.state.isTextBox ? <TextBox cipherName = {this.state.textBox_name}/> :
            <Container clicker={this.clicker}/>}

        </main>

      </div>

    );
  }
}

export default App;
