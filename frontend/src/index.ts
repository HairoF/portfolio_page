'use strict';
import "./style.scss";
import "./style.css";
import fromHeader from './header';
import fromMain from './main';
import fromFooter from "./footer";
import authentication from './auth';


document.addEventListener('DOMContentLoaded', contentLoaded);

function contentLoaded():void {
    fromHeader()
    fromMain()
    fromFooter()
    authentication()
}


