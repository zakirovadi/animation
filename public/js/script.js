document.addEventListener('DOMContentLoaded', () => {




    const macbook = document.getElementsByClassName('macbook')[0],
        cactus = document.getElementsByClassName('cactus')[0],
        ipad = document.getElementsByClassName('ipad')[0],
        phone = document.getElementsByClassName('phone')[0],
        coffee = document.getElementsByClassName('coffee')[0];

    const background = document.getElementById('background');




//-----------------SCROLL PAGE--------------------------------------
    // var toggleScroll = true;

    // window.addEventListener('scroll', function() {
    //     if(pageYOffset > background.scrollHeight / 3 && toggleScroll === true){
    //         // moveSliderService();
    //         toggleScroll = false;
    //     }
    // });







//-----------MOVE ELEMENTS ON BACKGROUND----------------------
    const moveElements = () => {
        const removeTransform = 'transform: none';

        macbook.style.cssText = removeTransform;
        cactus.style.cssText = removeTransform;
        ipad.style.cssText = removeTransform;
        phone.style.cssText = removeTransform;
        coffee.style.cssText = removeTransform;
    }






//--------------SHOW TIME ON IPAD------------------------------

    // const addZero = num => num < 10 ? '0' + num : num;

    // const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    //     month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // function changeOpacitySlowly(elem, func){
    //     var id = setInterval(func(elem), 100);
            
    //     setTimeout(function(){
    //         clearInterval(id);
    //     }, 1000)
    // }

    // function addOpacity(elem){
    //     var num = 0.1;

    //     return () => {
    //         if (elem.style.opacity < 1){
    //             num += 0.1;
    //             elem.style.opacity = num;
    //             return num;
    //         }
    //     }
        
    // }

    // function deleteOpacity(elem){
    //     var num = 1;

    //     return () => {
    //         if (elem.style.opacity > 0){
    //             num -= 0.1;
    //             elem.style.opacity = num;
    //             return num;
    //         }
    //     }
        
    // }    
       

    // let isShowWatch = true;

    // ipad.addEventListener('mouseover', () => {

    //     if(isShowWatch){
    //         isShowWatch = false;
    //         const date = new Date();

    //         const ipadWatch = document.getElementsByClassName('ipadWatch')[0],
    //             ipadDate = document.getElementsByClassName('ipadDate')[0];

    //         ipadWatch.style.opacity = '0.0';
    //         ipadDate.style.opacity = '0.0';
            
    //         ipadWatch.innerHTML = date.getHours() + ':' + addZero(date.getMinutes());
    //         ipadDate.innerHTML = daysOfWeek[date.getDay()] + ', ' + date.getDate() + ' ' + month[date.getMonth()];
        
            
    //         changeOpacitySlowly(ipadWatch, addOpacity);
    //         changeOpacitySlowly(ipadDate, addOpacity);
            
    //         setTimeout(function(){
    //             changeOpacitySlowly(ipadWatch, deleteOpacity);
    //             changeOpacitySlowly(ipadDate, deleteOpacity);
    //             isShowWatch = true;
    //         }, 10000)

    //     }
    // });







//-----------MENU-BURGER-----------------------------------
    const btnMenu = document.getElementsByClassName('menu-burger')[0],
        menu = document.getElementsByClassName('menu')[0],
        nav = document.getElementsByTagName('nav')[0];

    nav.addEventListener('click', () => {

        if(btnMenu.classList.contains('menu-arrow-up')){
            btnMenu.classList.remove('menu-arrow-up');
            nav.classList.remove('menu-mobile');
        }else{
            btnMenu.classList.add('menu-arrow-up');
            nav.classList.add('menu-mobile');
        }
    })









//------------LOADER------------------
    window.onload = () => {
            const spinner = document.getElementsByClassName('loader')[0],
                body = document.body;

            spinner.parentNode.removeChild(spinner);
            body.classList.remove('download');
            window.scrollTo(0,0);
            moveElements();
        }
})