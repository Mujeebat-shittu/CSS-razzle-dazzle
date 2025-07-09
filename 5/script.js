const icon = document.getElementById('icon');
let menuList = document.querySelector('.nav')
menuList.style.maxHeight = '0px';

icon.addEventListener('click', toggleMenu);


function toggleMenu() {
    if (menuList.style.maxHeight == '0px') 
        {
        menuList.style.maxHeight = '500px';
    } else {
        menuList.style.maxHeight = '0px';
    }
}