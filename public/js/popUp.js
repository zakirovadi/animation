document.addEventListener('DOMContentLoaded', () => {

//------------SHOW POP-UP CONSULTATION----------------
    // var containerPopup = document.getElementsByClassName('pop-up-container')[0],
    //     popup = document.getElementsByClassName('pop-up')[0],
    //     btnOpenPopup = document.getElementById('free-consultation'),
    //     btnClosePopup = document.getElementsByClassName('close')[0];

    // btnOpenPopup.addEventListener('click', showContainerPopup);
    // btnClosePopup.addEventListener('click', hidePopup);



    // containerPopup.addEventListener('transitionend', function(){

    //     if(this.classList.contains('pop-show')){
    //         showPopup();
    //     }else{
    //         btnOpenPopup.style.backgroundColor = '';

    //         setTimeout(function(){
    //             containerPopup.style.display = 'none';
    //         }, 400);
    //     }

    // });

    // popup.addEventListener('transitionend', function(){

    //     if(!this.classList.contains('pop-up-show')){
    //         hideContainerPopup();
    //     }
    // });


    // function showContainerPopup(){
    //     containerPopup.style.display = 'block';
    //     btnOpenPopup.style.backgroundColor = '#5cbbbe';

    //     setTimeout(function(){
    //         containerPopup.classList.add('pop-show');
    //     }, 100);
    // }

    // function hideContainerPopup(){
    //     containerPopup.classList.remove('pop-show');
    // }

    // function showPopup(){
    //     popup.classList.add('pop-up-show');
    // }

    // function hidePopup(){
    //     popup.classList.remove('pop-up-show');
    // }





//------------Verification POP-UP-------------------------

    // var warning = document.createElement('span');
    // warning.classList.add('form-error');

    // var clientName = document.getElementById('clientName'),
    //     clientTel = document.getElementById('clientTel');

    // clientName.addEventListener('blur', function(){
    //     if(this.value.length > 10 || this.value.length < 2){
    //         warning.innerHTML = 'имя от 2х до 10 символов';
    //         this.parentNode.insertBefore(warning, this.nextSibling);
    //     }else if(/[ -?]/.test(this.value)){
    //         warning.innerHTML = 'имя не может содержать цифры или знаки';
    //         this.parentNode.insertBefore(warning, this.nextSibling);
    //     }
    // });

    // clientName.addEventListener('focus', removeError);

    // function removeError(){
        
    // }

})
