const images = [
    'img/img-1.jpg',
    'img/img-2.jpg',
    'img/img-3.jpg'
]

let imgIndex = 0;

const sliderImg = document.getElementById('slider');
setInterval(() => {

    if (imgIndex >= images.length) {
        imgIndex = 0;
    }

    const imgUrl = images[imgIndex];
    imgIndex++;
    sliderImg.setAttribute('src', imgUrl);
}, 1000)