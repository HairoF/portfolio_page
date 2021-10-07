'use strict';
import "./style.scss";
import "./style.css";
import fromHeader from './header';
import fromMain from './main';

document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded():void {
    fromHeader()
    fromMain()


    // fetch('http://www.filltext.com/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}')
    //     .then(response => response.json() )
    //     .then(data => console.log(data) )
    //     .catch( err => console.log(err) );
}


