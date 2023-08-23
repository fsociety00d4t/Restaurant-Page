import {initialLoad} from './pageLoad';
import createMenu from './menu';
import createHeader from './header';
import createFooter from './footer';
import createContact from './Contact';

init ();

function addEvent () {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contact = document.querySelector('.contact');
    home.addEventListener('click',function(){
        remove();
        initialLoad();
        callListener();
    });
    menu.addEventListener('click',function(){
        remove();
        createHeader();
        createMenu(); 
        createFooter();
        callListener();
    });

    contact.addEventListener('click',function(){
        remove();
        createHeader();
        createContact();
        createFooter();
        callListener();
    })
}

let remove = () => {
    const content = document.getElementById('content');
   content.innerHTML = '';
}

let callListener = () => {
    addEvent();
}

function init() {
    initialLoad();
    addEvent();
}

