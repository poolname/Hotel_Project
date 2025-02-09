const tabMenu = document.querySelectorAll('.admin-wrap .tab-menu > li');
const tabCont = document.querySelectorAll('.admin-wrap .tab-contents .cont');

for(let i = 0; i < tabMenu.length; i++){
    tabMenu[i].addEventListener("click",function(){
        for(let j = 0; j < tabMenu.length; j++){
            tabMenu[j].classList.remove("on");
            tabCont[j].classList.remove("on");
        }
        tabMenu[i].classList.add("on");
        tabCont[i].classList.add("on");
    });
}