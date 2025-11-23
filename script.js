/*#BF1A1A -- red
    #132440 -- black
    #CF0F47 -- red
    #09122C -- black
    #E8E8E8 -- white */

import $ from 'jquery'

const home_btn = document.getElementById('home_btn');
const contact_btn = document.getElementById('contact_btn');
const submit_btn = document.getElementById('submit');
const cont_area = document.getElementById('contArea');
const cont_name = document.getElementById('contName');
const navbarplaceholder = document.getElementById('navbar-placeholder')

home_btn.addEventListener('click', function(){
    window.location.href = 'index.html';
})

contact_btn.addEventListener('click', function(){
    window.location.href = 'contactus.html';
})
submit_btn.addEventListener('click', function(){
    cont_name.value = '';
    cont_area.value = '';
})
