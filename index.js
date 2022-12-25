// Menu data structure
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '/catalog'},
    {text: 'orders', href: '/orders'},
    {text: 'account', href: '/account'},
  ];

//Task 1


let mainE1 = document.querySelector("main");
mainE1.style.backgroundColor = "var(--main-bg)";
mainE1.innerHTML = "<h1>SEI Rocks!</h1>";
mainE1.classList.add('flex-ctr');




// Task 2

let topMenuE1 = document.getElementById("top-menu");  
topMenuE1.style.backgroundColor = "var(--top-menu-bg)"; 
topMenuE1.style.height='100%';
topMenuE1.classList.add('flex-around');


// Task 3

menuLinks.forEach(function(link){
    // console.log(link);
let a = document.createElement('a');
a.setAttribute('href','_link');
a.textContent= link.text
topMenuE1.appendChild(a);

});



