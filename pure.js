var test = document.querySelector('.test');

function multiStyles(ele, styles){
    for( var css in styles ){
        ele.style[css] = styles[css];
    }
}

// function slideUp( ele, duration = 500 ){
//     // var elem = document.querySelector('.'+ele);
//     multiStyles(ele,{
//         'transition' : `all ${duration}ms ease-in-out`,
//         'height' : '0px'
//     });
// }
// test.onclick =()=>slideUp(test);
// test.onclick = function(){
//     slideUp(this, 2000);
// };
class uiLib{

    constructor(selector){
        this.selector=selector;
        // this.ele = document.querySelector(selector);
    // let slidedHeight = this.selector.height;

    }
    slideUp(){
        multiStyles(this.selector,{
            'transition' : `all 500ms ease-in-out`,
            'height' : '0px'
        });
    }

    // slideDown(){
    //     multiStyles(this.selector,{
    //         'transition': `all 500ms ease-in-out`,
    //         'height':`${slidedHeight}`
    //     });
    // }
}
// function uiLib(ele){
//     this.element=document.querySelector(ele);
//     this.log = function(){
//         this
//     }
// }

function $(selector){
    return new uiLib(selector);
}
console.log($(test));
test.onclick=function(){$(this).slideUp();};
// test.addEventListener('click', slideUp(test));


// function javaScriptUi(selector){

//     this.slideUp = function(){
//         // multiStyles(selector, {
//         //     'transtion':`all ${duration} ease-in-out`,
//         //     'height': '0px'
//         // });
//         selector.setAttribute('style', 'transition: all 400ms ease-in-out;height:0');
//     };
// }


multiStyles(test, {
    'width':'500px',
    'height': '300px',
    'margin': 'auto',
    'background-color': '#f00',
    // 'transition':'all 2s ease-in-out'    
});
// var t = new javaScriptUi(test);
// t.onclick = () => this.slideUp();


console.log(document.querySelector('.lists')); // the dom element
console.log(document.querySelectorAll('.list')); // nodeList
console.log(document.getElementsByClassName('list')); //htmlCollection
console.log(document.getElementsByTagName('li')); //htmlCollection
let t0 = document.querySelector('.lists');
let t1 = document.querySelectorAll('.list');
let t2 = document.getElementsByClassName('list');
let t1Arr = [...t1]; // array
let t2Arr = [...t2]; // array
let chain1 = document.querySelector('.list .class1 .class2 div'); //work good
let chain2 = document.getElementsByClassName('list1 class1 class2'); //don't work good
// let chain3 = document.getElementsByClassName('list1')[0].getElementsByClassName('class1')[0].getElementsByClassName('class2')[0]; //error
let chain4 = document.getElementById('test-lists').getElementsByClassName('list1')[0]; //don't work good
console.log(chain4);

for(let i = 0; i<t1.length; i++){
    console.log('jj');
}

console.log(t1[1].textContent);
// console.log(t1.protoType + 'querySelectorAll');
// let tt = t1Arr.reduce((a, b) => a+b);
// console.log(tt);
// console.log(t1Arr);
t1.forEach((e,i) => console.log(`this ${e.textContent} is ${i}`)); //convert nodeList into array and loop it
t2Arr.forEach((e,i) => console.log(`this ${e.textContent} is ${i}`)); //DON'T convert htmlCollection into array  but i must convert it to array to loop it
t1Arr.map((e, i) => console.log(`this ${e.textContent} is ${i}`));


//correct ==> as query* is static not live node as itrate on it is possible with the regular loop or forEach() as the length is known
let ul = document.querySelectorAll('ul')[0],
    li = ul.querySelectorAll('li');
for (let index = 0; index < li.length; index++) {
    ul.appendChild(document.createElement('li'));    
}    

// wrong ==> as GE* ==> live node as the length is unknown
// let uls = document.getElementsByTagName('ul')[0],
//     lis = ul.getElementsByTagName('li');
// for (let index = 0; index < lis.length; index++) {
//     uls.appendChild(document.createElement('li'));    
// }  

 //also correct as it an array 
let uls = document.getElementsByTagName('ul')[0],
    lis = ul.getElementsByTagName('li');
    let = liArr = [...lis];
for (let index = 0; liArr < lis.length; index++) {
    uls.appendChild(document.createElement('li'));    
}

let sty0 = t1[2].innerText;
let sty1 = t1[3].textContent;
let tt0 = document.querySelector('.test');
let tt1 = document.querySelector('.test1');
tt0.innerText = sty0; // save the style
tt1.innerText = sty1; // don't save the style
tt1.style.color = 'red'; // but i can reset it 

t1[2].onclick = () => alert('1 is not worked'); // not work as the element has  the same event on it 
t1[2].onclick = () => alert('2 is worked'); //it override the first event on the same element and it is  run only 
t1[2].addEventListener('click', ()=>alert('3 is worked')); //will work
t1[2].addEventListener('click', ()=>alert('4 is worked')); // also will work and not override the last bervious 
