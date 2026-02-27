

document.addEventListener('click', function(event){
    const pixel= document.createElement('div');
    pixel.className= 'dot';

    pixel.style.left= event.pageX + 'px';
    pixel.style.top= event.pageY + 'px';

    document.body.appendChild(pixel);
});

