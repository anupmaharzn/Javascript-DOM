
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

var titles = document.querySelectorAll('.title');
console.log(titles);

titles[1].textContent = "hello ";

var odd = document.querySelectorAll('li:nth-child(odd)');
var even = document.querySelectorAll('li:nth-child(even)');
// for(var i=0;i<odd.length; i++) {
//     odd[i].style.backgroundColor = '#f4f4f4';
//     even[i].style.backgroundColor = "#ccc"
// }

odd.forEach(element => {
   element.style.backgroundColor = '#f4f4f4';
});