let myImage = document.querySelector('img');
myImage.onclick = function(){
    let mySrc = myImage.getAttribute('src');
    alert(mySrc)

    if(mySrc === 'src/百度.png') {
        myImage.setAttribute('src', 'src/bing.png');
    } else {
        myImage.setAttribute('src', 'src/百度.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function SetUserName(){
    let myName = prompt('请输入您的名字。');
    if(!myName || myName === null){
        SetUserName();
    }else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Mozilla 酷毙了，' + myName;
    }
}

if(!localStorage.getItem('name')){
    SetUserName();
}else{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla 酷毙了，' + storedName;
}
myButton.onclick = function(){
    SetUserName();
}