import React, {Component} from 'react';
import './style.css';
import Functions from './Functions';


class TextBox extends Component {

    cipherDispatcher = () => {
        const radio_encrypt = document.getElementById('encrypt');
        const radio_decrypt = document.getElementById('decrypt');
        if (this.props.t_name === 'ROT13') {
            return Functions.rot13()
        } else if (this.props.t_name === 'Letters to numbers') {
            if (radio_encrypt.checked) {
                return Functions.numbersToLettersEn()
            } else if (radio_decrypt.checked) {
                return Functions.numbersToLetterDe()
            }
        } else if (this.props.t_name === 'Bacon') {
            if (radio_encrypt.checked) {
                return Functions.BaconEn()
            }
            else if (radio_decrypt.checked) {
                return Functions.BaconDe()
            }
        } else if (this.props.t_name === 'Kamasutra') {
            return Functions.Kamasutra();
        } else if (this.props.t_name === 'Tomato') {
            if (radio_encrypt.checked) {
                return Functions.TomatoEn();
            } else if (radio_decrypt.checked) {
                return Functions.TomatoDe();
            }
        } else if (this.props.t_name === 'GA-DE-RY-PO-LU-KI') {
                return Functions.gadery();
        }
    };

    checker = () => {
        if (this.props.t_name === 'Kamasutra' || this.props.t_name === 'Tomato') {
            let labell = document.createElement('label');
            labell.setAttribute('for', 'yourKey');
            labell.innerText = 'Cipher key ';
            let iinput = document.createElement('input');
            iinput.setAttribute("id", "yourKey");
            let formm = document.querySelector('form');
            formm.appendChild(labell);
            formm.appendChild(iinput);
        }
    };

    randomKey = (e) => {
        e.preventDefault();
        let iinput = document.querySelector('#yourKey');
        if (this.props.t_name === 'Kamasutra') {
            let text = "";
            let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            let iinput = document.querySelector('#yourKey');
            for (let i = 0; i < 26; i++) {
                let letter = possible.charAt(Math.floor(Math.random() * possible.length));
                text = text + letter;
                possible = possible.replace(letter, '')
            }
            iinput.value = text;
        }
        else if (this.props.t_name === 'Tomato') {
                let numbers = "";
                let possible_numbers = "123456789";
                let iinput = document.querySelector('#yourKey');
                for (let i = 0; i < 4; i++) {
                    numbers = numbers + possible_numbers.charAt(Math.floor(Math.random() * possible_numbers.length));
                }
                iinput.value = numbers;
            }

    };

    componentDidMount() {
        this.checker()
    }

    render() {
        return (
            <div>
                <h2>{this.props.t_name}</h2>
                <textarea id='ciph'>
                </textarea>
                {this.props.t_name === 'Kamasutra' || this.props.t_name === 'Tomato' ?
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