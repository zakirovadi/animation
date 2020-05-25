document.addEventListener('DOMContentLoaded', function () {

    var gallery = [
        'image/gallery/1.jpg',
        'image/gallery/2.jpg',
        'image/gallery/3.jpg',
        'image/gallery/4.jpg',
        'image/gallery/5.jpg',
        'image/gallery/6.jpg',
        'image/gallery/7.jpg',
        'image/gallery/8.jpg',
        'image/gallery/9.jpg'
    ]

    const galleryContainer = document.getElementById('gallery');

    // отрисовать галерею
    for(let i = 0; i < gallery.length; i++){
        const pictureContainer = document.createElement('div'),
            picture = document.createElement('img'),
            zoom = document.createElement('div'),
            text = document.createElement('span');
        
        text.innerHTML = 'See more';
        zoom.addEventListener('mouseover', () => text.style.opacity = 1);
        
        zoom.classList.add('gallery-zoom');
        zoom.id = (i) + '-gallery-zoom';
        zoom.appendChild(text);
        
        zoom.addEventListener('transitionend', e => e.target.classList.contains('gallery-zoom-show') ? text.style.opacity = 1 : null);
        zoom.addEventListener('click', () => getComputedStyle(text).opacity == 1 ? openGallery(i) : null);

        picture.src = gallery[i];

        pictureContainer.classList.add('gallery-img');
        pictureContainer.id = (i) + '-gallery-img';

        pictureContainer.appendChild(picture);
        pictureContainer.appendChild(zoom);
        pictureContainer.addEventListener('mouseover', () => showZoom(i));
        pictureContainer.addEventListener('mouseout', () => hideZoom(i));

        galleryContainer.appendChild(pictureContainer);
    }


    //показать/скрыть текст над картинкой 
    function showZoom (id){
        const comment = document.getElementById(id + '-gallery-zoom');
        comment.classList.add('gallery-zoom-show');
    }

    function hideZoom (id){
        const comment = document.getElementById(id + '-gallery-zoom');
        comment.firstChild.style.opacity = 0;
        comment.classList.remove('gallery-zoom-show');
    }






    //----------- слайлер с галереей

    const overlayGallery = document.getElementById('overlay-gallery'),
        sliderGallery = document.getElementById('open-gallery');

    // закрыть галерею
    overlayGallery.addEventListener('click', () => {
        overlayGallery.style.display = 'none';

        while(sliderGallery.firstChild){
            sliderGallery.removeChild(sliderGallery.firstChild);
        }
    });

    // открыть галерею
    const openGallery = id => {
        overlayGallery.style.display = 'flex';
        createSliderGallery(id);
    }

    // проверить замкнутость
    const checkId = num => {
        const length = gallery.length - 1;

        switch(num){
            case -3:
                return length - 2;
            case -2:
                return length - 1;
            case -1:
                return length;
            case length + 1:
                return 0;
            case length + 2:
                return 1;
            case length + 3:
                return 2;
            default:
                return num;
        }
    }

    // создать все слайды
    const createSliderGallery = id => {
        const listImgsId = [id-3, id-2, id-1, id, id+1, id+2, id+3];

        for(let i = 0; i < 7; i++){
            sliderGallery.appendChild(createSlideGallery(listImgsId[i], i));
        }
    }

    // создать один слайд
    const createSlideGallery = (idImg, position) => {
        const checkedIdImg = checkId(idImg);

        const divImg = document.createElement('div'),
        imgGallery = document.createElement('img');

        imgGallery.src = gallery[checkedIdImg];

        // анимация при появлении
        if(position > 3){
            divImg.classList.add('gallery-img-6');
            setTimeout(() => {
                divImg.classList.remove('gallery-img-6');
                divImg.classList.add('gallery-img-' + position);
            }, 0);
        }else if(position < 3){
            divImg.classList.add('gallery-img-0');
            setTimeout(() => {
                divImg.classList.remove('gallery-img-0');
                divImg.classList.add('gallery-img-' + position);
            }, 0);
        }else if(position === 3){
            divImg.classList.add('gallery-img-' + position);
        }
        
        imgGallery.addEventListener('click', (e) => {changeSlide(checkedIdImg, +/\d+/.exec(divImg.classList[0])); e.stopPropagation()});

        divImg.appendChild(imgGallery);
        return divImg;
    }



    const changeSlide = (idImg, position) => {
    // idImg - порядковый номер картики по которой кликнули в галерее
    // position - место, где эта картинка находится

        switch (position) {
            case 0:
                nextImg(idImg-1);                
                break;
            case 1:
                nextImg(idImg-2);
                break;
            case 2:
                nextImg(idImg-3);
                break;
            case 3:
                break;
            case 4:
                prevImg(idImg+3);
                break;
            case 5:
                prevImg(idImg+2);
                break;
            case 6:
                prevImg(idImg+1);
                break;
        }
    }

    // подвинуть на одну картинку влево
    const nextImg = idImg => {
        const divsImg = document.querySelectorAll('#open-gallery div');

        sliderGallery.removeChild(sliderGallery.lastChild);

        for(let i = 0; i < 6; i++){
            divsImg[i].className = '';
            divsImg[i].classList.add('gallery-img-' + (i+1));
        }

        sliderGallery.insertBefore(createSlideGallery(idImg, 0), divsImg[0]);
    }    
    
    // подвинуть на одну картинку вправо
    const prevImg = idImg => {
        const divsImg = document.querySelectorAll('#open-gallery div');

        sliderGallery.removeChild(sliderGallery.firstElementChild);

        for(let i = 1; i < 7; i++){
            divsImg[i].className = '';
            divsImg[i].classList.add('gallery-img-' + (i-1));
        }

        sliderGallery.appendChild(createSlideGallery(idImg, 6));
    }

})