const open = document.getElementById('about_link');
const container = document.getElementById('about_container');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    container.classList.add('show');
})

close.addEventListener('click', () => {
    container.classList.remove('show');
})
