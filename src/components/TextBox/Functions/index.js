import React, {Component} from 'react';

class Functions extends Component {
    static rot13() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');


        let val = text_area.value;
        let arr = [];
        for (let i = 0; i < val.length; i++) {
            if ((val.charCodeAt(i)>=97 && val.charCodeAt(i) <=109) ||
                (val.charCodeAt(i)>=65 && val.charCodeAt(i) <=77)) {
                arr.push(val.charCodeAt(i) + 13);
            } else if ((val.charCodeAt(i) >=110 && val.charCodeAt(i) <=122) ||
                (val.charCodeAt(i)>=78 && val.charCodeAt(i) <=90)) {
                arr.push(val.charCodeAt(i) - 13);
            } else {
                arr.push(val.charCodeAt(i));
            }
        }

        let result = String.fromCharCode(...arr);
        output.innerText = result;
    }


    static numbersToLettersEn() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value;
        let arr = [];

        for (let i=0; i < val.length; i++) {
            if (val.charCodeAt(i)>=65 && val.charCodeAt(i) <=90) {
                arr.push(val.charCodeAt(i) - 54);
            } else if (val.charCodeAt(i)>=97 && val.charCodeAt(i) <=122) {
                arr.push(val.charCodeAt(i) - 86);
            } else if (val.charCodeAt(i) === 32) {
                arr.push(0);
            } else {
                arr.push(val.charCodeAt(i))
            }
        }

        let result = arr.join(' ');
        output.innerText = result;
    }

    static numbersToLetterDe() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value;
        let arr = val.split(' ');
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
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value.toLowerCase();
        let arr = [];

        let key = {
            a : "AAAAA", b : "AAAAB", c : "AAABA", d : "AAABB", e : "AABAA",
            f : "AABAB", g : "AABBA", h : "AABBB", i : "ABAAA", j : "ABAAB",
            k : "ABABA", l : "ABABB", m : "ABBAA", n : "ABBAB", o : "ABBBA",
            p : "ABBBB", q : "BAAAA", r : "BAAAB", s : "BAABA", t : "BAABB",
            u : "BABAA", v : "BABAB", w : "BABBA", x : "BABBB", y : "BBAAA",
            z : "BBAAB"

        };



        for (let i = 0; i < val.length; i++) {
            arr.push(key[val[i]])
        }
        output.innerText = arr.join('');

    }

    static BaconDe() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value;
        let arr = [];

        let key = {
            a : "AAAAA", b : "AAAAB", c : "AAABA", d : "AAABB", e : "AABAA",
            f : "AABAB", g : "AABBA", h : "AABBB", i : "ABAAA", j : "ABAAB",
            k : "ABABA", l : "ABABB", m : "ABBAA", n : "ABBAB", o : "ABBBA",
            p : "ABBBB", q : "BAAAA", r : "BAAAB", s : "BAABA", t : "BAABB",
            u : "BABAA", v : "BABAB", w : "BABBA", x : "BABBB", y : "BBAAA",
            z : "BBAAB"

        };

        arr = val.match(/.{1,5}/g);

        function getKeyByValue(object, value) {
            return Object.keys(object).find(key => object[key] === value);
        }

        let new_arr = arr.map(item => getKeyByValue(key,item));

        output.innerHTML = new_arr.join('');
    }

    static Kamasutra() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value.toLowerCase();
        let arr = [];
        let key = document.getElementById('yourKey');
        let key_value = key.value.toLowerCase();

        for (let i = 0; i < key_value.length; i++) {
            arr.push(key_value[i]);
        }

        let new_arr =[];

        if (val === '69') {
            // alert("Ty świntuchu!");
            let person = prompt("Podaj swoje imię, świntuchu");
            output.innerText = "Byś się wstydził, " + person;
        } else {

        for (let i=0; i < val.length; i++) {
            if (val.charCodeAt(i) === 32) {
                new_arr.push(String.fromCharCode(32))
            }
            else if (arr.indexOf(val[i]) < 13) {
                new_arr.push(arr[arr.indexOf(val[i]) + 13])
            }
            else {
                new_arr.push(arr[arr.indexOf(val[i]) - 13])
            }
        } output.innerText = new_arr.join("");}

    }

    static TomatoEn() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value;
        let arr = [];
        let key = document.getElementById('yourKey');
        let key_value = key.value;

        for (let i = 0; i < key_value.length; i++) {
            arr.push(key_value[i]);
        }

        let new_arr =[];
        let counter = 0;


        for (let i=0; i < val.length; i++) {
            if (counter === 4) {
                counter = 0
            }
            if (val.charCodeAt(i) < 114) {
                new_arr.push(Number(val.charCodeAt(i)) + Number(arr[counter]))
            } else {
                new_arr.push(val.charCodeAt(i) - 65)
            }
            counter ++;
        }
        output.innerText = String.fromCharCode(...new_arr);
    }

    static TomatoDe() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value;
        let arr = [];
        let key = document.getElementById('yourKey');
        let key_value = key.value;
        let new_arr =[];
        let counter = 0;

        for (let i = 0; i < key_value.length; i++) {
            arr.push(key_value[i]);
        }

        for (let i=0; i < val.length; i++) {
            if (counter === 4) {
                counter = 0
            }
            if (val.charCodeAt(i) > 48 && val.charCodeAt(i) < 58) {
                new_arr.push(val.charCodeAt(i) + 65)
            } else {
                new_arr.push(val.charCodeAt(i) - Number(arr[counter]))
            }
            counter++;
        }

        output.innerText = String.fromCharCode(...new_arr);
    }

    static gadery() {
        let text_area = document.getElementById('ciph');
        let output = document.querySelector('.result');
        let val = text_area.value.toLowerCase();


        let key = {
            g: 'a', d: 'e', r: 'y', p: 'o', l: 'u',
            k: 'i', a: 'g', e: 'd', y: 'r', o: 'p', u: 'l', i: 'k'
        };


        let replaced = val.replace(/[gaderypoluki]/gi, c => key[c] || key[c.toLowerCase()].toUpperCase());


        output.innerHTML = replaced;
    }

}

export default Functions;