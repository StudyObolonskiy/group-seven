window.addEventListener('DOMContentLoaded', () =>{

    'use strict';

    let tab = document.querySelectorAll('.info-header-tab'), // получаем кнопки
        info = document.querySelector('.info-header'), //получаем родителя кнопок
        tabContent = document.querySelectorAll('.info-tabcontent'); // получаем сам контент

    // скрываем весь контент кроме первого
    function hideTabcontent(a){
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabcontent(1);

    function showTabcontent(b) {
        if(tabContent[b].classList.contains('hide')) {

            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }

    info.addEventListener('click', function(event){
        let target = event.target;
        if (target && target.classList.contains('info-header-tab')){
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]){
                    hideTabcontent(0);
                    showTabcontent(i);
                    break;
                }
            }
        }
    });
    
});