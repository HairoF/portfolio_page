'use strict';
import "./style.scss";
import "./style.css";
import fromHeader from './header';
import fromMain from './main';

document.addEventListener('DOMContentLoaded', contentLoaded);
function contentLoaded():void {
    fromHeader()
    fromMain()
}


