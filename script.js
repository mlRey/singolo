var header = document.getElementById("_header");
var services = document.getElementById("_services")

var btn = document.querySelector('.btn');

function handleButtonClick() {
   header.scrollIntoView({block: "center", behavior: "smooth"});
}

btn.addEventListener('click', handleButtonClick);