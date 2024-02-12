console.log("connected");
console.dir(document);  // document er vitore browser window er shob property dkhabe 
console.log(document.URL) // URL dkhabe 
const title = document.getElementById('title') //getelementbyId hocche akta method. function jokhn kono object er vitor thake tokhn takey method bole 
title.innerText = 'My Js Power';
title.style.color = "red";
console.log(title.innerText);


// single element dhora
const title2 = document.querySelector('#title');
title2.textContent = " I am done by selector";

const title3 = document.querySelector("li") //sudhu first li tag dkhabe 

// single element select korte  pari - getElementById() and querySelector()


// multiple selector 
const items = document.getElementsByClassName("li-items") //jeta array like html collect object dibe

console.log(items.length) // 4 dibe cz aita array like object

// ai html collection k fully array korte chaile 
const myArr = Array.from(items);
console.log(myArr); //[li.li-items, li.li-items, li.li-items, li.li-items]

for(let i = 0; i < items.length; i++){
    const element = items[i];
    console.log(element);
 // 4 ta li alada alada dkhte chaile loop
 element.style.color = "green";
 element.innerText = "amar khushi"
}

const items2 = document.getElementsByTagName("li");
console.log(items2)
for (const iterator of items2) {
    console.log(iterator);
    iterator.style.fontSize = "40px";
    iterator.style.backgroundColor = "yellow";
}

const item3 = document.querySelectorAll("li");
console.log(item3); // node list collection dibe


// Difference between Nodes and HTML Elements ***

const bodyName = document.querySelector("body");
console.log(bodyName.childNodes); // aita node dibe , no koita oitao bolbe
// NodeList(14) [text, h2#title, text, ul#li-container.lists, text, h2, text, p, text, p, text, p, text, script]

// html a space, comment joto kisu ase sobai akta Node. but sobai element na. space , comment agula kintu node na Important** space gula text node hishebe count hoy; 

console.log(bodyName.children); // aita element dibe sudhu , no koita oitao bolbe
// HTMLCollection(7) [h2#title, ul#li-container.lists, h2, p, p, p, script, title: h2#title, li-container: ul#li-container.lists]


// parent child relationship 
const ul = document.getElementById("li-container");
console.log(ul.parentElement); //child diye parrent k acces kora 
console.log(ul.children); // ul er child shob k paite pari 
console.log(ul.previousElementSibling); // previous element k dkhabe 
console.log(ul.previousSibling); // text dkhabe as node wise 


console.log(ul.nextElementSibling); 
console.log(ul.nextSibling); 
// amra always elementSibling use korbo

// Manipulation by DOM
const li = document.querySelector("li");
console.log(li.innerText);
console.log(li.textContent); // same output dibe;
// browser a ja dkhte partesi ta dkhte parbo innerText diye 
// kintu hide kora jinish main html a thakle oita textContent diye dkhte parbo 


// kono tag add kori innterHTML diye 
const ull = document.querySelector("ul");
ull.innerHTML = '<p>Hello</p>'

// dynamic value dite chaile `` ai quotaion use korbo 


// kono element a attribute add/remove korte chaile 
document.querySelector("h2").removeAttribute("id");
document.querySelector("h2").setAttribute("class","first-heading"); // class add korbe r tar name hobe first-heading 
document.querySelector("h2").setAttribute("id","heading-first") 

// kono attribute khuje paite chaile and attribute a ki set kora ta dkhte chaile 
const attri = document.querySelector("h2").getAttribute("class");
console.log(attri);

// kono element create korte chaile 
const lii = document.createElement("li");
console.log(lii); // blank li tag dkhabe
// li er vitore kisu set korte chaile 
lii.innerText = "added by js";
console.log(lii)

// lii ta ke add korte chaile 
ul.appendChild(lii);

// multiple class name adding 
const h2 = document.querySelector("h2");
h2.classList.add("first", "second" , "third");
// kono class name remove korte chaile 
h2.classList.remove("second"); // sudhu .remove diye pura tag keo remove kora jay

// kono tag er age kono element  insert korte chaile  
const adding = document.getElementById("unorder");
console.log(adding)
const second = document.getElementById("second");
const ly = document.createElement("li");
ly.innerText = "kire vai ";
adding.insertBefore(ly, second) //first parameter hobe kon element dibo, second parameter hobe kar age dibo

adding.remove() // second ul ta remove kore dilam














































