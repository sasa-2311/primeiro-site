'use strict'
const switcher=document.querySelector('.btn');
switcher.addEventListener('click',function(){
    document.body.classlist.toggle('dark-theme')
    var classname=document.body.classname;
    if(classname="light-theme"){
        this.textcontente="dark-theme";
    }
    else{
        this.textcontent="light";
    }
});