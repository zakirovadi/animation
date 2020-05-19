// document.addEventListener('DOMContentLoaded', function () {


//     var service = [
//         {
//             image: 'image/service/phone.png',
//             text: [
//                 'замена деталей',
//                 'ремонт после попадания жидкости',
//                 'програмный ремонт (прошивка)',
//                 'ремонт материнской платы'
//             ]
//         },
//         {
//             image: 'image/service/iPadPro.png',
//             text: [
//                 '! замена деталей',
//                 '! ремонт после попадания жидкости',
//                 '! програмный ремонт (прошивка)',
//             ]
//         }
//     ];

    

//     var pag = document.getElementsByClassName('paginator-slider')[0];
//     var counterSlider = 0;
//     var idIntervalSlider;

//     // создать слайды
//     for(var i = 0; i < service.length; i++){
//         var containerSlide = document.createElement('div'),
//             img = document.createElement('img'),
//             list = document.createElement('ul');

//         for(var k = 0; k < service[i].text.length; k++){
//             var listItem = document.createElement('li');
//             listItem.innerHTML = service[i].text[k];

//             list.appendChild(listItem);
//         }

//         img.src = service[i].image;

//         if(i === counterSlider){
//             containerSlide.style.display = 'flex';
//             containerSlide.classList.add('active-slide');
//         }

//         img.addEventListener('transitionend', showNextSlide);

//         containerSlide.classList.add('slide');
//         containerSlide.id = i + '-slide';

//         containerSlide.appendChild(img);
//         containerSlide.appendChild(list);

//         pag.parentNode.insertBefore(containerSlide, pag);

//         // создать переключатель
//         var pagItem = document.createElement('div');
//         pagItem.addEventListener('click', changeSlidePag);

//         if(i === 0){
//             pagItem.classList.add('active-pag');
//         }

//         pagItem.id = i + '-pag';
//         pag.appendChild(pagItem);
//     }

//     moveSliderService();

//     // вызывает слайдер
//     function moveSliderService(){
//         return idIntervalSlider = setInterval(function(){
//             changeSlide();
//         }, 7000);
//     }

//     // удаляет акивный слайд
//     function changeSlide(){
//         var slide = document.getElementsByClassName('active-slide')[0];
//         slide.classList.remove('active-slide');
//     }

//     // показывает новый слайд
//     function showNewSlide(id){

//         var nextSlide = document.getElementById(id + '-slide');
//         nextSlide.style.display = 'flex';
//         setTimeout(function(){
//             nextSlide.classList.add('active-slide');
//         });

//         changeActivePaginator(id);
//     }

//     // вызывается окончанием transition на image
//     // меняет слайд на новый
//     function showNextSlide(){
//         var slide = this.parentNode;

//         if(slide.classList.contains('active-slide')){
//             return
//         }

//         var id = 1 + parseInt(slide.id);

//         if(id > service.length - 1){
//             id = 0;
//         }

//         slide.style.display = 'none';

//         showNewSlide(id);
//     }

//     function changeSlidePag(){
//         if(this.classList.contains('active-pag')){
//             return
//         }

//         var id = parseInt(this.id);

//         var slide = document.getElementsByClassName('active-slide')[0];
//         changeSlide();

//         slide.style.display = 'none';
        
//         showNewSlide(id);

//         clearInterval(idIntervalSlider);
//         moveSliderService();
//     }

//     // меняет активный Pag
//     function changeActivePaginator(id){

//         for(var i = 0; i < pag.children.length; i++){
//             pag.children[i].classList.remove('active-pag');
//         }

//         pag.children[id].classList.add('active-pag');
//     }




























// });