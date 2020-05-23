document.addEventListener('DOMContentLoaded', () => {


    const slider = [
        {
            image: 'image/service/Cactus Plant in Pot.jpg',
            name: 'Cactus',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: 'image/service/Four Cactuses.jpg',
            name: 'Cactuses',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: 'image/service/From the Land.jpg',
            name: 'Cactus 2',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        },
        {
            image: 'image/service/Succulents.jpg',
            name: 'Succulents',
            comment: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
        }
    ];

    let sliderCounter = 0,
        pagId = -1,
        sliderTimeout;

    const containerSlider = document.getElementById('slider'),
        pag = document.getElementsByClassName('slider-pag')[0],
        containerImg = document.getElementsByClassName('slider-img')[0],
        imgSlide = document.getElementById('slide-img'),
        containerText = document.getElementsByClassName('slider-info')[0],
        nameSlide = document.getElementById('slide-name'),
        commentSlide = document.getElementById('slide-comment');
    

    // слайдер работает только если виден
    const maxHeightScreen = document.documentElement.clientHeight / 4 * 3,
        minHeightScreen = document.documentElement.clientHeight / 4 * 3;
        
    let allowMove = false;
    
    window.onscroll = function() {clientSee()};

    const clientSee = () => {
        if (maxHeightScreen  > containerSlider.getBoundingClientRect().top &&
            minHeightScreen < containerSlider.getBoundingClientRect().bottom) {
            return allowMove = true;
        } else {
            return allowMove = false;
        }
    }

    

    // создать paginator
    for(let i = 0; i < slider.length; i++){
        const pagItem = document.createElement('div');
        pagItem.addEventListener('click', (e) => pagChangeSlide(e.target.id));

        pagItem.id = i + '-pag';
        pag.appendChild(pagItem);
    }

    // найти активный pag
    const activePag = num => {
        const pagItems = pag.children;
        for(let i = 0; i < pagItems.length; i++){
            i === num 
            ? pagItems[i].classList.add('active-pag') 
            : pagItems[i].classList.remove('active-pag');
        }
    }

    activePag(sliderCounter);





    // подвинуть картинку с лева
    const showImg = () => {
        setTimeout(() => {
            containerImg.classList.remove('slider-left');
            containerText.classList.remove('slider-right');
        }, 1000);
    }

    // подвинуть картинку на право
    const hideImg = () => {
        containerImg.classList.add('slider-right');
        containerText.classList.add('slider-left');
    }

    // вернуть в изначальное положение
    const returnImgInitialState = () => {
        containerImg.classList.remove('slider-right');
        containerText.classList.remove('slider-left');

        containerImg.classList.add('slider-left');
        containerText.classList.add('slider-right');
    }



    // создать слайд
    const createSlide = id => {
        imgSlide.src = slider[id].image;
        nameSlide.innerHTML = slider[id].name;
        commentSlide.innerHTML = slider[id].comment;

        if(allowMove){
            showImg();
            moveSlider();
        }else{
            const idInterval = setInterval(() => {
                if(allowMove){
                    showImg();
                    moveSlider();
                    clearInterval(idInterval);
                }
            }, 10);
        }
    }

    
    // спрятать слайд
    const moveSlider = () => {
        sliderTimeout = setTimeout(() => {
            hideImg();
        }, 5000);
        return sliderTimeout;
    }
    

    createSlide(sliderCounter);


    containerImg.addEventListener('transitionend', (e) => changeSlide(e.target));
    
    // поменять слайд
    const changeSlide = elem => {
        if(elem.classList.contains('slider-right')){
            returnImgInitialState();

            checkCounter();
            createSlide(sliderCounter);
            activePag(sliderCounter);
    
            return pagId = -1;
        }
    }

    // изменить слайд через paginator
    function pagChangeSlide(str) {
        const id = parseInt(str);
        clearTimeout(sliderTimeout);

        hideImg();

        return pagId = id;
    }

    // номер слайда
    const checkCounter = () => {
        sliderCounter++;

        pagId !== -1 
        ? sliderCounter = pagId 
        : sliderCounter === slider.length ? sliderCounter = 0 : sliderCounter;
    }
});