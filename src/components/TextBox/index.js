import React, {Component} from 'react';
import './style.css';
import Functions from './Functions';


class TextBox extends Component {

    cipherDispatcher = () => {
        const radio_encrypt = document.getElementById('encrypt');
        const radio_decrypt = document.getElementById('decrypt');
        if (this.props.cipherName === 'ROT13') {
            return Functions.rot13()
        } else if (this.props.cipherName === 'Letters to numbers') {
            if (radio_encrypt.checked) {
                return Functions.numbersToLettersEn()
            } else if (radio_decrypt.checked) {
                return Functions.numbersToLetterDe()
            }
        } else if (this.props.cipherName === 'Bacon') {
            if (radio_encrypt.checked) {
                return Functions.BaconEn()
            }
            else if (radio_decrypt.checked) {
                return Functions.BaconDe()
            }
        } else if (this.props.cipherName === 'Kamasutra') {
            return Functions.Kamasutra();
        } else if (this.props.cipherName === 'Tomato') {
            if (radio_encrypt.checked) {
                return Functions.TomatoEn();
            } else if (radio_decrypt.checked) {
                return Functions.TomatoDe();
            }
        } else if (this.props.cipherName === 'GA-DE-RY-PO-LU-KI') {
                return Functions.gadery();
        }
    };

    checker = () => {
        if (this.props.cipherName === 'Kamasutra' || this.props.cipherName === 'Tomato') {
            const label = document.createElement('label');
            label.setAttribute('for', 'yourKey');
            label.innerText = 'Cipher key ';
            const input = document.createElement('input');
            input.setAttribute("id", "yourKey");
            const form = document.querySelector('form');
            form.appendChild(label);
            form.appendChild(input);
        }
    };

    randomKey = (e) => {
        e.preventDefault();
        if (this.props.cipherName === 'Kamasutra') {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let input = document.querySelector('#yourKey');
            for (let i = 0; i < 26; i++) {
                let letter = possible.charAt(Math.floor(Math.random() * possible.length));
                text = text + letter;
                possible = possible.replace(letter, '')
            }
            input.value = text;
        }
        else if (this.props.cipherName === 'Tomato') {
                let numbers = "";
                let possibleNumbers = "123456789";
                let input = document.querySelector('#yourKey');
                for (let i = 0; i < 4; i++) {
                    numbers = numbers + possibleNumbers.charAt(Math.floor(Math.random() * possibleNumbers.length));
                }
                input.value = numbers;
            }

    };

    componentDidMount() {
        this.checker()
    }

    render() {
        return (
            <div>
                <h2>{this.props.cipherName}</h2>
                <textarea id='ciph'>
                </textarea>
                {this.props.cipherName === 'Kamasutra' || this.props.cipherName === 'Tomato' ?
                <form>
                        <label htmlFor="encrypt">Encrypt</label>
                        <input type = "radio" name="cipher" id="encrypt" defaultChecked="checked"/>
                        <label htmlFor="decrypt">Decrypt</label>
                        <input type="radio" name="cipher" id="decrypt" /> <br/><br/>
                        <button onClick={this.randomKey} className='random'>Generate random key</button>
                </form> : <form>
                        <label htmlFor="encrypt">Encrypt</label>
                        <input type = "radio" name="cipher" id="encrypt" defaultChecked="checked"/>
                        <label htmlFor="decrypt">Decrypt</label>
                        <input type="radio" name="cipher" id="decrypt" />
                    </form>}
                <button onClick={this.cipherDispatcher} className="btn">Encrypt/Decrypt</button>
                <p className="result">Result</p>
            </div>
        );

    }
}
export default TextBox;