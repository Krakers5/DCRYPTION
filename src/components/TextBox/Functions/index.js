import React, {Component} from 'react';

class Functions extends Component {
    static rot13() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');


        let textValue = text_area.value;
        let arr = [];
        for (let i = 0; i < textValue.length; i++) {
            if ((textValue.charCodeAt(i)>=97 && textValue.charCodeAt(i) <=109) ||
                (textValue.charCodeAt(i)>=65 && textValue.charCodeAt(i) <=77)) {
                arr.push(textValue.charCodeAt(i) + 13);
            } else if ((textValue.charCodeAt(i) >=110 && textValue.charCodeAt(i) <=122) ||
                (textValue.charCodeAt(i)>=78 && textValue.charCodeAt(i) <=90)) {
                arr.push(textValue.charCodeAt(i) - 13);
            } else {
                arr.push(textValue.charCodeAt(i));
            }
        }

        const result = String.fromCharCode(...arr);
        output.innerText = result;
    }


    static numbersToLettersEn() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value;
        let arr = [];

        for (let i=0; i < textValue.length; i++) {
            if (textValue.charCodeAt(i)>=65 && textValue.charCodeAt(i) <=90) {
                arr.push(textValue.charCodeAt(i) - 54);
            } else if (textValue.charCodeAt(i)>=97 && textValue.charCodeAt(i) <=122) {
                arr.push(textValue.charCodeAt(i) - 86);
            } else if (textValue.charCodeAt(i) === 32) {
                arr.push(0);
            } else {
                arr.push(textValue.charCodeAt(i))
            }
        }

        const result = arr.join(' ');
        output.innerText = result;
    }

    static numbersToLetterDe() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value;
        let arr = textValue.split(' ');
        let new_arr =[];
        for (let i=0; i < arr.length; i++) {
            if (arr[i]==='0')  {
                new_arr.push(32);
            } else {
                new_arr.push(Number(arr[i]) + 86);
            }

        }

        output.innerHTML = String.fromCharCode(...new_arr);
    }


    static BaconEn() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value.toLowerCase();
        let arr = [];

        let key = {
            a : "AAAAA", b : "AAAAB", c : "AAABA", d : "AAABB", e : "AABAA",
            f : "AABAB", g : "AABBA", h : "AABBB", i : "ABAAA", j : "ABAAB",
            k : "ABABA", l : "ABABB", m : "ABBAA", n : "ABBAB", o : "ABBBA",
            p : "ABBBB", q : "BAAAA", r : "BAAAB", s : "BAABA", t : "BAABB",
            u : "BABAA", v : "BABAB", w : "BABBA", x : "BABBB", y : "BBAAA",
            z : "BBAAB"

        };



        for (let i = 0; i < textValue.length; i++) {
            arr.push(key[textValue[i]])
        }
        output.innerText = arr.join('');

    }

    static BaconDe() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value;
        let arr = [];

        let key = {
            a : "AAAAA", b : "AAAAB", c : "AAABA", d : "AAABB", e : "AABAA",
            f : "AABAB", g : "AABBA", h : "AABBB", i : "ABAAA", j : "ABAAB",
            k : "ABABA", l : "ABABB", m : "ABBAA", n : "ABBAB", o : "ABBBA",
            p : "ABBBB", q : "BAAAA", r : "BAAAB", s : "BAABA", t : "BAABB",
            u : "BABAA", v : "BABAB", w : "BABBA", x : "BABBB", y : "BBAAA",
            z : "BBAAB"

        };

        arr = textValue.match(/.{1,5}/g);

        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }

        let new_arr = arr.map(item => getKeyByValue(key,item));

        output.innerHTML = new_arr.join('');
    }

    static Kamasutra() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value.toLowerCase();
        let arr = [];
        let key = document.getElementById('yourKey');
        let key_value = key.value.toLowerCase();

        for (let i = 0; i < key_value.length; i++) {
            arr.push(key_value[i]);
        }

        let new_arr =[];

        if (textValue === '69') {
            let person = prompt("Podaj swoje imię, świntuchu");
            output.innerText = "Byś się wstydził, " + person;
        } else {

        for (let i=0; i < textValue.length; i++) {
            if (textValue.charCodeAt(i) === 32) {
                new_arr.push(String.fromCharCode(32))
            }
            else if (arr.indexOf(textValue[i]) < 13) {
                new_arr.push(arr[arr.indexOf(textValue[i]) + 13])
            }
            else {
                new_arr.push(arr[arr.indexOf(textValue[i]) - 13])
            }
        } output.innerText = new_arr.join("");}

    }

    static TomatoEn() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value;
        let arr = [];
        let key = document.getElementById('yourKey');
        let key_value = key.value;

        for (let i = 0; i < key_value.length; i++) {
            arr.push(key_value[i]);
        }

        let new_arr =[];
        let counter = 0;


        for (let i=0; i < textValue.length; i++) {
            if (counter === 4) {
                counter = 0
            }
            if (textValue.charCodeAt(i) < 114) {
                new_arr.push(Number(textValue.charCodeAt(i)) + Number(arr[counter]))
            } else {
                new_arr.push(textValue.charCodeAt(i) - 65)
            }
            counter ++;
        }
        output.innerText = String.fromCharCode(...new_arr);
    }

    static TomatoDe() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value;
        let arr = [];
        let key = document.getElementById('yourKey');
        let key_value = key.value;
        let new_arr =[];
        let counter = 0;

        for (let i = 0; i < key_value.length; i++) {
            arr.push(key_value[i]);
        }

        for (let i=0; i < textValue.length; i++) {
            if (counter === 4) {
                counter = 0
            }
            if (textValue.charCodeAt(i) > 48 && textValue.charCodeAt(i) < 58) {
                new_arr.push(textValue.charCodeAt(i) + 65)
            } else {
                new_arr.push(textValue.charCodeAt(i) - Number(arr[counter]))
            }
            counter++;
        }

        output.innerText = String.fromCharCode(...new_arr);
    }

    static gadery() {
        const text_area = document.getElementById('ciph');
        const output = document.querySelector('.result');
        let textValue = text_area.value.toLowerCase();


        let key = {
            g: 'a', d: 'e', r: 'y', p: 'o', l: 'u',
            k: 'i', a: 'g', e: 'd', y: 'r', o: 'p', u: 'l', i: 'k'
        };


        let replaced = textValue.replace(/[gaderypoluki]/gi, c => key[c] || key[c.toLowerCase()].toUpperCase());


        output.innerHTML = replaced;
    }

}

export default Functions;