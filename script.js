let navlink = document.getElementById('navlink')
let portfolionav = document.getElementById('portfolio-nav')
let slider_elm = document.getElementById('slider_phone')
let mixportfolioimg = document.getElementById('mixeimg')

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