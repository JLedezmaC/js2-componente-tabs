function clickHandler(event) {
    event.preventDefault();
    const id = event.currentTarget.getAttribute('href').substring(1);
    for(let i = 0; i < contentido.length; i++){
        contentido[i].style.display = 'none';
        if (contentido[i].getAttribute('id') == id){
            contentido[i].style.display = 'block';
        }
    }
}

const enlaces = document.querySelectorAll('.tabs-tablist-item');

const contentido = document.querySelectorAll('.tabs-content-item');

for(let i = 0; i < contentido.length; i++){
    contentido[i].style.display = 'none';
}

contentido[0].style.display = 'block';

for(let i = 0; i < enlaces.length; i++){
    enlaces[i].addEventListener('click' , clickHandler);
}