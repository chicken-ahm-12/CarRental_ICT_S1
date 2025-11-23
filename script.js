/*#BF1A1A -- red
    #132440 -- black
    #CF0F47 -- red
    #09122C -- black
    #E8E8E8 -- white */


const home_btn = document.getElementById('home_btn');
const contact_btn = document.getElementById('contact_btn');

home_btn.addEventListener('click', function(){
    window.location.href = 'index.html';
})

contact_btn.addEventListener('click', function(){
    window.location.href = 'contactus.html';
})
