window.addEventListener('click', (e) => {
    console.log(e);
    const circl = document.createElement('div');
    circl.className = 'clickCircl';
    circl.style.top = `${e.pageY - 50}px`;
    circl.style.lefet = `${e.pageX - 50}px`;
    document.body.appendChild(circl);
})