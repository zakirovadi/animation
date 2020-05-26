document.addEventListener('DOMContentLoaded', () => {

    const popupBtn = document.getElementById('pop-up'),
        containerPopup = document.getElementById('overlay-pop-up'),
        formPopup = document.forms.sendMessage;


    // открыть окно
    const showPopup = () => {
        containerPopup.style.display = 'flex';
    }

    // закрыть окно
    const closePopup = () => {
        containerPopup.style.display = 'none';
        if(formPopup.style.display === 'none'){
            const alert = document.getElementsByClassName('alert')[0];
            alert.parentNode.removeChild(alert);

            formPopup.style.display = 'flex';
        }
    }


    popupBtn.addEventListener('click', showPopup);
    containerPopup.addEventListener('click', closePopup);
    formPopup.addEventListener('click', e => e.stopPropagation())


    // валидация имени
    formPopup.elements.name.addEventListener('change', e => validateName(e.target));
    formPopup.elements.name.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateName(e.target) : null);

    const validateName = input => {
        input.dataset.touched = 'true';

        if(input.value.trim().length < 2){
            input.classList.add('error');
            return;
        }else if(!/^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$/g.test(input.value)){
            input.classList.add('error');
            return;
        }

        input.classList.remove('error');
    }

    // валидация почты
    formPopup.elements.email.addEventListener('change', e => validateEmail(e.target));
    formPopup.elements.email.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateEmail(e.target) : null);

    const validateEmail = input => {
        input.dataset.touched = 'true';

        const reg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

        if(!reg.test(input.value) || input.value === ''){
            input.classList.add('error');
            return;
        }

        input.classList.remove('error');
    }

    // валидация сообщения
    formPopup.elements.message.addEventListener('change', e => validateComment(e.target));
    formPopup.elements.message.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateComment(e.target) : null);

    const validateComment = comment => {
        comment.dataset.touched = 'true';

        if(comment.value.trim().length < 2){
            input.classList.add('error');
            return;
        }

        comment.classList.remove('error');
    }


    // отправка формы
    formPopup.elements.submit.addEventListener('click', e => {
        e.preventDefault();
        if(formPopup.elements.name.classList.contains('error') || formPopup.elements.name.dataset.touched === 'false'){
            formPopup.elements.name.classList.add('error');
            formPopup.elements.name.dataset.touched = 'true';
            return
        }else if(formPopup.elements.email.classList.contains('error') || formPopup.elements.email.dataset.touched === 'false'){
            formPopup.elements.email.classList.add('error');
            formPopup.elements.email.dataset.touched = 'true';
            return
        }if(formPopup.elements.message.classList.contains('error') || formPopup.elements.message.dataset.touched === 'false'){
            formPopup.elements.message.classList.add('error');
            formPopup.elements.message.dataset.touched = 'true';
            return
        }

        formPopup.elements.name.value = '';
        formPopup.elements.email.value = '';
        formPopup.elements.message.value = '';

        formPopup.style.display = 'none';

        const alert = document.createElement('div');
        alert.classList.add('alert');
        alert.innerHTML = 'Thank you!';

        formPopup.parentNode.appendChild(alert);
    })

})
