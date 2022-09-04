const menu = document.querySelector('.menu');
let menuShow = false;
menu.addEventListener('click',() => {
    if(!menuShow) {
        menu.classList.add('menuShow');
        menuShow = true;
    } else {
        menu.classList.remove('menuShow');
        menuShow = false;
    }
});
var menuList = document.querySelector('.menuList');
menu.addEventListener('click',function(){
    menuList.classList.toggle('menuShow');
})