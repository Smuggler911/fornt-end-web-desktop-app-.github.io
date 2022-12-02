
///search input wide///


const searchElement=document.getElementsByClassName("search-input")[0];
const navbarElement=document.getElementsByClassName("navbar")[0];

function focusSearch(){
    navbarElement.classList.toggle("active");       
}
searchElement.addEventListener("focusin",focusSearch);
searchElement.addEventListener("focusout",focusSearch);



///clock prog////

const myLabel=document.getElementById("asidebx__time");
update();
setInterval(update, 1000)

function update(){
   let date=new Date();
   asidebx__time.innerHTML=formatTime(date);

   function formatTime(){
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let amOrPm=hours>=12? "pm":"am";

    hours=(hours % 12) || 12;
    return `${hours} : ${minutes}: ${seconds}  ${amOrPm}`
   }
}


///login form//


 
let loginForm=document.getElementsByClassName("login__form")[0];
let mainBox =  document.getElementsByClassName("box")[0];
let button=document.getElementsByClassName("navbar__login")[0];



 function popUp() {
     
    loginForm.classList.toggle("click");
    mainBox .classList.toggle("click");    
   
   
   
 } 

 let username;

loginButton=document.getElementsByClassName("submitButton");
function login(){
username=document.getElementById("inputText").value;
loginForm.classList.toggle("click");
mainBox .classList.toggle("click");
button.classList.toggle("click")

document.getElementById("userName").innerHTML= username;        
console.log(username);
 }         




 ///links

 let buttonMobile=document.getElementsByClassName("mobile")[0];
 let buttonWeb=document.getElementsByClassName("web")[0]
 let container = document.getElementsByClassName("container")[0];

 function display(){
   container.classList.add("click");
 }

 let buttonDesktop=document.getElementsByClassName("desktop")[0];

 function display2(){
   container.classList.remove("click");
   onWork.classList.remove("click");
   

 }

let onWork=document.getElementsByClassName("mobileWeb")[0];

function display3(){
  onWork.classList.add("click");
}

 
 



 ///shopping cart:count///
let count=0;                                                            
function increaseCount(){
  count=+1;
  document.getElementById("count__bar").innerHTML= count;
                                                                             
}

//update form//
let updateButton=document.getElementsByClassName("column__app__button")[0];
let formUpdate = document.getElementsByClassName("update__form")[0];

function onUpdate(){
  formUpdate.classList.add("click");
  mainBox.classList.toggle("click");
}

let upTodate=document.getElementById("column__app__uptodate");
let tripledot=document.getElementsByClassName("column__app__dots");

let doneButton=document.getElementById("doneButton").onclick=function deleteIt(){
  formUpdate.classList.remove("click");
  mainBox.classList.toggle("click");
  updateButton.classList.add("click");

  upTodate.innerHTML="The app is up to date";
  
  
}

let update1Button=document.getElementById("updateButton")[0];
let whiteLine= document.getElementsByClassName("whiteLinne")[0];
let imgspin=document.getElementsByClassName("upadteImg")[0];


function updatingApp(){

    new Promise(function(resolve,reject){
      imgspin.classList.add("click");
      whiteLine.classList.add("click");
      setTimeout(() => resolve(1), 10000); 
    }).then(function(result)
    {
      imgspin.classList.remove("click");
      whiteLine.classList.remove("click");
    })

    
 }

