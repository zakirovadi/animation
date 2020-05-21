document.addEventListener('DOMContentLoaded', function () {

    var gallery = [
        {
            image: 'image/gallery/1.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/2.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/3.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/4.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/5.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/6.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/7.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/8.jpg',
            comment: 'some text about this picture',
        },
        {
            image: 'image/gallery/9.jpg',
            comment: 'some text about this picture',
        }
    ]

    const galleryContainer = document.getElementById('gallery');

    // отрисовать галерею
    for(let i = 0; i < gallery.length; i++){
        const pictureContainer = document.createElement('div'),
            picture = document.createElement('img'),
            comment = document.createElement('span');
        
        comment.classList.add('gallery-comment');
        comment.id = (i) + '-gallery-comment';
        comment.innerHTML = gallery[i].comment;

        picture.src = gallery[i].image;

        pictureContainer.classList.add('gallery-img');
        pictureContainer.id = (i) + '-gallery-img';

        pictureContainer.appendChild(picture);
        pictureContainer.appendChild(comment);
        pictureContainer.addEventListener('mouseover', () => showComment(pictureContainer.id));
        pictureContainer.addEventListener('mouseout', () => hideComment(pictureContainer.id));
        // pictureContainer.addEventListener('click', openGallery);

        galleryContainer.appendChild(pictureContainer);
    }



    function showComment (id){
        const comment = document.getElementById(`${parseInt(id)}-gallery-comment`);
        comment.classList.add('gallery-comment-show');
    }

    function hideComment (id){
        const comment = document.getElementById(`${parseInt(id)}-gallery-comment`);
        comment.classList.remove('gallery-comment-show');
    }

//     var galleryContainer = document.getElementById('gallery');
//     var containerOpenGallery = document.getElementById('open-gallery');
//     var showOpenGallery = document.getElementsByClassName('open-gallery')[0];




//     // создать один новый слайд
//     function createImgGallery(id, newId, place, prevElem){

//         prevElem = prevElem || null;

//         var divImg = document.createElement('div'),
//             img = document.createElement("img");
            
//         // замкнутость галереи
//         if(id + newId < 0){
//                 id = gallery.length;
//                 img.src = gallery[id + newId].image;
//                 divImg.id = (id + newId) + '-gallery-open';

//         }else if(id + newId >= gallery.length){
//                 id = -1;
//                 img.src = gallery[id + newId].image;
//                 divImg.id = (id + newId) + '-gallery-open';

//         }else{
//                 img.src = gallery[id + newId].image;
//                 divImg.id = (id + newId) + '-gallery-open';
//         }
        
//         divImg.appendChild(img);
//         divImg.addEventListener('click', moveGallery);

//         containerOpenGallery.insertBefore(divImg, prevElem);

//         // новые слайды при создании получают класс для анимации
//         if(place === -1 || place === -2){
//             divImg.classList.add('gallery-img-3');
//             setTimeout(function(){
//                 divImg.classList.add('gallery-img' + place);
//                 divImg.classList.remove('gallery-img-3');
//             }, 10)
//         }else if(place === 1 || place === 2){
//             divImg.classList.add('gallery-img3');
//             setTimeout(function(){
//                 divImg.classList.add('gallery-img' + place);
//                 divImg.classList.remove('gallery-img3');
//             }, 10)
//         }else{
//             divImg.classList.add('gallery-img' + place);
//         }
//     }

//     // пролистывание слайдов (с удалением, без создания новых)
//     function moveImgGallery(num, place){

//         if(num < 0){
//             for(var i = 0; i < Math.abs(num); i++){
//                 containerOpenGallery.removeChild(containerOpenGallery.lastChild);
//             }
//         }else if(num > 0){
//             for(var i = 0; i < Math.abs(num); i++){
//                 containerOpenGallery.removeChild(containerOpenGallery.firstChild);
//             }
//         }

//         for(var i = 0; i < containerOpenGallery.children.length; i++){

//             containerOpenGallery.children[i].classList.add('gallery-img' + place);
//             containerOpenGallery.children[i].classList.remove(containerOpenGallery.children[i].classList[0]);

//             place++;
//         }

//     }

//     // создать галерею при клике на картинку
//     function openGallery(){
//         // по неизвестной причине работатет только через timeOut
//         window.setTimeout(function(){
//             showOpenGallery.focus();
//         }, 0);  

//         // сделать видимой и листаемой
//         showOpenGallery.addEventListener('keydown', function(e){
//             if(e.repeat){
//                 return
//             }
    
//             if(e.key === 'ArrowRight'){
//                 nextImg();
                
//             }else if(e.key === 'ArrowLeft'){
//                 prevImg();
//             }
//         });
//         showOpenGallery.style.display = 'flex';
//         showOpenGallery.addEventListener('click', closeGallery);

//         // создать саму галерею
//         for(var i = -3; i <= 3; i++){
//             var imgNum = parseInt(this.id);

//             createImgGallery(imgNum, i, i);
//         }
//     }

//     // пролистывание галереи общая 
//     function moveGallery(e){
//         // чтоб не закрылась
//         e.stopPropagation();

//         if(this.classList.contains('gallery-img' + 0)){
//             return
//         }

//         // проверка по классам
//         // в зависимости от класса двигать определенным образом
//         if(this.classList.contains('gallery-img' + -3)){
//             moveImgGallery(-3, 0);

//             var idFirstImg = parseInt(containerOpenGallery.firstChild.id);
//             createImgGallery(idFirstImg, -1, -1, containerOpenGallery.firstChild);
//             createImgGallery(idFirstImg, -2, -2, containerOpenGallery.firstChild);
//             createImgGallery(idFirstImg, -3, -3, containerOpenGallery.firstChild);
     
//         }else if(this.classList.contains('gallery-img' + -2)){
//             moveImgGallery(-2, -1);

//             var idFirstImg = parseInt(containerOpenGallery.firstChild.id);
//             createImgGallery(idFirstImg, -1, -2, containerOpenGallery.firstChild);
//             createImgGallery(idFirstImg, -2, -3, containerOpenGallery.firstChild);

//         }else if(this.classList.contains('gallery-img' + -1)){
//             prevImg();

//         }else if(this.classList.contains('gallery-img' + 1)){
//             nextImg();
            
//         }else if(this.classList.contains('gallery-img' + 2)){
//             moveImgGallery(2, -3);

//             var idLastImg = parseInt(containerOpenGallery.lastChild.id);
//             createImgGallery(idLastImg, 1, 2);
//             createImgGallery(idLastImg, 2, 3);
            
//         }else if(this.classList.contains('gallery-img' + 3)){
//             moveImgGallery(3, -3);

//             var idLastImg = parseInt(containerOpenGallery.lastChild.id);
//             createImgGallery(idLastImg, 1, 1);
//             createImgGallery(idLastImg, 2, 2);
//             createImgGallery(idLastImg, 3, 3);
            
//         }
//     }

//     function prevImg(){
//         moveImgGallery(-1, -2);
                
//         var idFirstImg = parseInt(containerOpenGallery.firstChild.id);
//         createImgGallery(idFirstImg, -1, -3, containerOpenGallery.firstChild);
//     }

//     function nextImg(){
//         moveImgGallery(1, -3);
    
//         var idLastImg = parseInt(containerOpenGallery.lastChild.id);
//         createImgGallery(idLastImg, 1, 3);
//     }

//     // закрыть галерею
//     function closeGallery(){
//         var showOpenGallery = document.getElementsByClassName('open-gallery')[0];
//         showOpenGallery.style.display = 'none';


//         while(containerOpenGallery.firstChild){
//             containerOpenGallery.removeChild(containerOpenGallery.firstChild);
//         }
//     }

})