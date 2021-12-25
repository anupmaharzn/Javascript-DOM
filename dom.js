
//Examine the document object




//console.dir(document);

// console.log(document.title);

// //document.title = 123;

// console.log(document.head);
// console.log(document.body);
// console.log(document.all);

// //not a right way to access
// console.log(document.all[7]);

// document.all[14].textContent = 'heelo';

// console.log(document.links);
//console.log(document.imgaes);



//SELECTORS to Query the DOM

//GETELEMETBYID //


//console.log(document.getElementById('header-title'));

//var headerTitle =document.getElementById('header-title');
//console.log(headerTitle);

// headerTitle.textContent = "hello";
// headerTitle.innerText = "good bye";
//headerTitle.innerHTML = '<h3>hello</h3>'; //put inside the id wala element vitra ,doesnt change it 

//headerTitle.style.borderBottom = " solid 3px #000";


//GetElementsByClassName //

// var items = document.getElementsByClassName("list-group-item");
// console.log(items);

// console.log(items[1]);

// items[1].textContent = "hello 2";

// items[1].style.fontWeight = "bold";

// items[1].style.backgroundColor = "yellow";

// // items.style.backgroundColor = '#f4f4f4'; //errror
// //to style all its and htmlcollection array so loop it 

// for (var i = 0; i<items.length; i++){
//  items[i].style.backgroundColor = '#f4f4f4';
// }



//GetElemtsByTagName //



// var li = document.getElementsByTagName("li");
// console.log(li);

// console.log(li[1]);

// li[1].textContent = "hello 2";

// li[1].style.fontWeight = "bold";

// li[1].style.backgroundColor = "yellow";

// //li.style.backgroundColor = '#f4f4f4'; //errror
// //to style all its and htmlcollection array so loop it 

// for (var i = 0; i<li.length; i++){
//  li[i].style.backgroundColor = '#f4f4f4';
// }



//QuerySelector

// var header = document.querySelector('#header-title');

// header.style.borderBottom = "solid 4px #ccc";


// var input  = document.querySelector("input");

// input.value = "hello world";

// // var sumbit = document.querySelector('input[type ="submit"]');

// // submit.value = 'Send';

// var item = document.querySelector('.list-group-item');

// item.style.color = "red";


// var lastitem = document.querySelector('.list-group-item:last-child');

// lastitem.style.color = 'blue';

// var seconditem = document.querySelector('.list-group-item:nth-child(2)');

// seconditem.style.color = "coral";


//Query Selector all //

// var titles = document.querySelectorAll('.title');
// console.log(titles);

// titles[1].textContent = "hello ";

// var odd = document.querySelectorAll('li:nth-child(odd)');
// var even = document.querySelectorAll('li:nth-child(even)');
// // for(var i=0;i<odd.length; i++) {
// //     odd[i].style.backgroundColor = '#f4f4f4';
// //     even[i].style.backgroundColor = "#ccc"
// // }

// odd.forEach(element => {
//    element.style.backgroundColor = '#f4f4f4';
// });




//Traversing The DOM //

// var itemList = document.querySelector("#items");
//parentnode
// console.log(itemList.parentNode);

// itemList.parentNode.style.backgroundColor = "#f4f4f4";

// //parentnode ko ni parnetnode

// console.log(itemList.parentNode.parentNode.parentNode);


//parentElement

// console.log(itemList.parentElement);
// itemList.parentElement.style.backgroundColor = "#f4f4f4";
// console.log(itemList.parentElement.parentElement.parentElement);


//childNodes

// console.log(itemList.childNodes);


//children

// console.log(itemList.children);

// console.log(itemList.children[1]);

// itemList.children[1].style.backgroundColor = "yellow";

// //firstchild

// console.log(itemList.firstChild);//include whitespace //useless
// //so use this instead
// //firstelementchild 

// console.log(itemList.firstElementChild);

// itemList.firstElementChild.textContent = "hello 1";


// //lastchild

// console.log(itemList.lastChild);//include whitespace //useless
// //so use this instead
// //lastelementchild 

// console.log(itemList.lastElementChild);

// itemList.lastElementChild.textContent = "hello 4";


// //nextsibling

// console.log(itemList.nextSibling);

// //nextelementsibling

// console.log(itemList.nextElementSibling);

// //previoussibling

// console.log(itemList.previousSibling);

// //previouselementsibling

// console.log(itemList.previousElementSibling);



// createelement

//create a div

// var newDiv  = document.createElement('div');
// //add class
// newDiv.className ='hello';
// //add id
// newDiv.id = "hello1";
// //add attribute
// newDiv.setAttribute("title",'hello div');

// //create text node
// var newdivText = document.createTextNode("hello world");

// //add text to div
// newDiv.appendChild(newdivText);

// //now decided and put inside dom

// var container = document.querySelector('.container');
// var anotherdiv = document.querySelector('#main');



// console.log(newDiv);

// container.insertBefore(newDiv,anotherdiv);



//events

//var button = document.getElementById('button').addEventListener('click',buttonclick); //euta chai inbulit parameter event ani rako chai fucntionname


// function buttonclick(e) {
//     //console.log("button clicked");
//     // document.getElementById('header-title').textContent = "changed";
//     // document.querySelector("#main").style.backgroundColor = "#f4f4f4";
//     //console.log(e);
//     // console.log(e.target);
//     // console.log(e.target.id);
//     // console.log(e.target.className);
//     // console.log(e.target.classList);
//     // var output = document.getElementById('output');
//     // output.innerHTML = '<h3>'+ e.target.id +'</h3>'

//     // console.log(e.type);
   
//     // console.log(e.clientX);
//     // console.log(e.clientY);

//     // console.log(e.offsetX);
//     // console.log(e.offsetY);
    
//     //  console.log(e.altKey);
//     //  console.log(e.ctrKey);
//     //  console.log(e.shiftKey);
// }

//mouse events
// var button = document.getElementById('button');

// var box = document.getElementById("box");

// button.addEventListener('click',runEvent);
// button.addEventListener('dblclick',runEvent); //type double click
// button.addEventListener('mousedown',runEvent);
//button.addEventListener('mouseup',runEvent);


// box.addEventListener("mouseenter",runEvent); //parent ko lagi matra
// box.addEventListener("mouseleave",runEvent);
// box.addEventListener("mouseover",runEvent); //also for innner elements 
// box.addEventListener("mouseout",runEvent);
//box.addEventListener("mousemove",runEvent);



//keyboardevents

var iteminput = document.querySelector('input[type="text"]');
var form = document.querySelector('form');
var select = document.querySelector('select');


// iteminput.addEventListener('keydown',runEvent);
// iteminput.addEventListener('keyup',runEvent);
// iteminput.addEventListener('keypress',runEvent);

// iteminput.addEventListener('focus',runEvent);
// iteminput.addEventListener('blur',runEvent);
// iteminput.addEventListener('cut',runEvent);
// iteminput.addEventListener('paste',runEvent);

// iteminput.addEventListener('input',runEvent);

// select.addEventListener('change',runEvent);
// select.addEventListener('input',runEvent);


form.addEventListener("submit",runEvent);
function runEvent(e){
 
    console.log("event type :" + e.type);
    //output.innerHTML = '<h3> MouseX: '+e.offsetX +'</h3><h3>MouseY: '+e.offsetY +'</h3>';

   // box.style.backgroundColor = "rgb("+e.offsetX+","+e.offsetY+",40)";
   // console.log(e.target.value);
   //document.getElementById('output').innerHTML = '<h3>'+e.target.value+'</h3>'
  
  e.preventDefault(); //for submit 
}