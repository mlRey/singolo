let navlink = document.getElementById('navlink')
let portfolionav = document.getElementById('portfolio-nav')
let slider_elm = document.getElementById('slider_phone')
let mixportfolioimg = document.getElementById('mixeimg')
let _scrine1 = document.getElementById('scrine1')
let btn1 =false;
let _scrine2 = document.getElementById('scrine2')
let btn2 =false;
let _scrine3 = document.getElementById('scrine3')
let btn3 =false;
let okButton=document.getElementById('okButton');
let get_a_quote_form = document.getElementById('get-a-quote-form');

document.addEventListener('scroll', onScroll);

function btn1_click() {
    if (btn1 == false) {
        _scrine1.classList.add('screen_vertical' );
        btn1 = true;
    }
    else{
    _scrine1.classList.remove('screen_vertical');
    btn1 = false;
    }
}
function btn2_click() {
    if (btn2 == false) {
        _scrine2.classList.add('screen_horizontal' );
        btn2 = true;
    }
    else{
    _scrine2.classList.remove('screen_horizontal');
    btn2 = false;
    }
}
function btn3_click() {
    if (btn3 == false) {
        _scrine3.classList.add('screen_vertical2' );
        btn3 = true;
    }
    else{
    _scrine3.classList.remove('screen_vertical2');
    btn3 = false;
    }
}
navlink.addEventListener('click', (e) => {
    navlink.querySelectorAll('a').forEach(function (item) {
        item.classList.remove('active-link');
        e.target.classList.add('active-link');
    });
})

portfolionav.addEventListener('click', (e) => {
    portfolionav.querySelectorAll('a').forEach(function (item) {
        item.classList.remove('active');
        e.target.classList.add('active');
    });
})

mixportfolioimg.addEventListener('click', (e) => {
    mixportfolioimg.querySelectorAll('img').forEach(function (item) {
        item.classList.remove('selected-img');
        e.target.classList.add('selected-img');
    })
})

function mixPortfolio() {
    let parent = mixportfolioimg;
    let frag = document.createDocumentFragment();
    while (parent.children.length) {
        frag.appendChild(parent.children[Math.floor(Math.random() * parent.children.length)]);
    }
    parent.appendChild(frag);
}


function onScroll(event){
   const curntPos = window.scrollY;
   document.querySelectorAll('#body>a').forEach((el) =>{
    if(el.offsetTop <= curntPos ){
           document.querySelectorAll("#navlink a").forEach((a) =>{
               a.classList.remove('active-link');
               if(el.getAttribute('id') === a.getAttribute('href').substring(1)){
                   a.classList.add('active-link');  
               }
           })
       }
   })

}

// slider

let items = document.querySelectorAll('.item');
let currentitem = 0;
let isEnabled = true;

function chengeCurentitem(n){
    currentitem = (n + items.length) % items.length;
}

function hideitem(direction){
    isEnabled = false;
    items[currentitem].classList.add(direction);
    items[currentitem].addEventListener('animationend', function(){
        this.classList.remove('active_sli',direction);
    })
}

function showitem(direction){
    items[currentitem].classList.add('next_sli',direction);
    items[currentitem].addEventListener('animationend', function(){
        this.classList.remove('next_sli',direction);
        this.classList.add('active_sli');
        isEnabled = true;
    })
}

function priviousitem(n){
    hideitem('to-right');
    chengeCurentitem(n-1);
    showitem('from-left');
}

function nextitems(n){
    hideitem('to-left');
    chengeCurentitem(n+1);
    showitem('from-right');
}

document.querySelector('.control.left').addEventListener('click', function(){
    if(isEnabled){
        priviousitem(currentitem);
    }
});

document.querySelector('.control.right').addEventListener('click', function(){
    if(isEnabled){
        nextitems(currentitem);
    }
});


function showMessagemModal() {
    event.preventDefault();
    let name=document.getElementById('Name').value.toString();
    let subject=document.getElementById('Subject').value.toString();
    let describe=document.getElementById('text-detail').value.toString();
    document.getElementById('nameValue').innerHTML= Boolean(name)?'Имя: '+name:'Без названия';
    document.getElementById('subjectValue').innerHTML=Boolean(subject)?'Тема: '+subject:'Без темы';
    document.getElementById('describeValue').innerHTML=Boolean(describe)?'Описание: '+describe:'Без описания';
    document.getElementById('resultWindow').classList.remove('hidden');
}

okButton.addEventListener('click', () => {
    document.getElementById('nameValue').innerHTML='';
    document.getElementById('subjectValue').innerHTML='';
    document.getElementById('describeValue').innerHTML='';
    get_a_quote_form.reset();
    document.getElementById('resultWindow').classList.add('hidden');
});