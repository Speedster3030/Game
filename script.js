

document.addEventListener('click', function(event){
    const pixel= document.createElement('div');
    pixel.className= 'dot';

    let x= parseInt(event.pageX)/10;
    let y=parseInt(event.pageY)/10;

    pixel.style.left= String(x) + 'px';
    pixel.style.top= String(y) + 'px';

    document.body.appendChild(pixel);
});

