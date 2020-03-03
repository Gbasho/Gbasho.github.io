// This is a comment
/* This is also a comment and everything between here is a comment
it is useful for comments with more than one lines
*/

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/train.png') {
      myImage.setAttribute ('src', 'images/train2.jpeg');
    } else {
        myImage.setAttribute ('src', 'images/train.png');
    }
}

let myButton = document.querySelector ('button');
let myHeading = document.querySelector ('h2');


function setUserName() {
 let myName = prompt('Please enter your name.');
 if(!myName || myName === null) {
     setUserName ();
 } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'It Begins Here, ' + myName;
 }
}
if(!localStorage.getItem('name ')) {
    setUserName();
   } else {
     let storedName = localStorage.getItem('name');
     myHeading.textContent = 'It Begins Here, ' + storedName;
   }
   

myButton.onclick = function() {
    setUserName();
}