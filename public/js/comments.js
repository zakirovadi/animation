document.addEventListener('DOMContentLoaded', () => {

    const comments = [
        [
            {
                name: "John",
                comment: "It's the best cactuses I ever seen!",
                date: "May 12, 2020"
            },
            {
                name: "Mary",
                comment: "I love them!",
                date: "April 24, 2020"
            }
        ],
        [
            {
                name: "Dan",
                comment: "So pretty)",
                date: "May 6, 2020"
            },
            {
                name: "Alice",
                comment: "Wow! Such a great plants!",
                date: "May 19, 2020"
            }
        ]
    ];

    const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // отрисовать комментарий
    const createComment = comment => {
        const commentContainer = document.createElement('div'),
            name = document.createElement('h4'),
            text = document.createElement('p'),
            time = document.createElement('span');

        name.innerHTML = comment.name;
        text.innerHTML = `"${comment.comment}"`;
        time.innerHTML = comment.date;
    
        commentContainer.classList.add('comment');
        commentContainer.appendChild(name);
        commentContainer.appendChild(text)
        commentContainer.appendChild(time);

        return commentContainer
    }

    
    const commentsForm1 = document.forms.commentFirst,
        commentsForm2 = document.forms.commentSecond;

    // отрисовать комментарии к первой картинке
    for(let i = 0; i < comments[0].length; i++){
        commentsForm1.parentElement.insertBefore(createComment(comments[0][i]), commentsForm1);
    }

    // отрисовать комментарии ко второй картинке
    for(let i = 0; i < comments[1].length; i++){
        commentsForm2.parentElement.insertBefore(createComment(comments[1][i]), commentsForm2);
    }


    // показать форму по клику и добавить коментарий
    commentsForm1.elements.btn.addEventListener('click', e => {
        e.preventDefault();
        commentsForm1.classList.contains('card-form-close') 
        ? showForm(commentsForm1)
        : sendComment(commentsForm1)
    });
    commentsForm2.elements.btn.addEventListener('click', e => {
        e.preventDefault();
        commentsForm2.classList.contains('card-form-close') 
        ? showForm(commentsForm2)
        : sendComment(commentsForm2)
    });

    const showForm = form => {
        form.classList.remove('card-form-close');
    }

    // показать подсказку к имени
    const help1 = document.getElementsByClassName('name-tooltip')[0],
        help2 = document.getElementsByClassName('name-tooltip')[1];

    help1.addEventListener('mouseover', () => 
        document.querySelector('#comment-name-1').style.display = 'block'
    );
    help2.addEventListener('mouseover', () => 
        document.querySelector('#comment-name-2').style.display = 'block'
    );

    help1.addEventListener('mouseout', () =>
        document.querySelector('#comment-name-1').style.display = 'none'
    );
    help2.addEventListener('mouseout', () =>
        document.querySelector('#comment-name-2').style.display = 'none'
    );



    // валидация имени
    commentsForm1.elements.name.addEventListener('change', e => validateName(e.target));
    commentsForm2.elements.name.addEventListener('change', e => validateName(e.target));
    commentsForm1.elements.name.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateName(e.target) : null);
    commentsForm2.elements.name.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateName(e.target) : null);

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

    // валидация коментария
    commentsForm1.elements.comment.addEventListener('change', e => validateComment(e.target));
    commentsForm2.elements.comment.addEventListener('change', e => validateComment(e.target));
    commentsForm1.elements.comment.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateName(e.target) : null);
    commentsForm2.elements.comment.addEventListener('input', e => e.target.dataset.touched === 'true' ? validateName(e.target) : null);

    const validateComment = comment => {
        comment.dataset.touched = 'true';

        if(comment.value.trim().length < 1){
            input.classList.add('error');
            return;
        }

        comment.classList.remove('error');
    }

    // отправить коментарий
    const sendComment = form => {
        if(form.elements.name.classList.contains('error') || form.elements.name.dataset.touched === 'false'){
            form.elements.name.classList.add('error');
            return
        }else if(form.elements.comment.classList.contains('error') || form.elements.comment.dataset.touched === 'false'){
            form.elements.comment.classList.add('error');
            return
        }

        const date = new Date();
        const comment = {
            name: form.elements.name.value,
            comment: form.elements.comment.value,
            date: month[date.getMonth()] + ' ' + date.getDate() + ', ' + date.getFullYear()
        }

        if(form.id === 'comment-1'){
            comments[0].push(comment);
        }else if(form.id === 'comment-2'){
            comments[1].push(comment);
        }

        form.parentElement.insertBefore(createComment(comment), form);

        form.classList.add('card-form-close');
        form.elements.name.value = '';
        form.elements.name.dataset.touched = 'false';
        form.elements.comment.value = '';
        form.elements.comment.dataset.touched = 'false';
    }
})