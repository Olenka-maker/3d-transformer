let el1 = document.querySelector('.olena');

document.addEventListener('mousemove', function(e){
    let x = e.pageX - window.innerWidth / 2;
    let y = e.pageY - window.innerHeight / 2;

    let angleX = (20 * x) / (window.innerWidth / 2);
    let angleY = (20 * y) / (window.innerHeight / 2);

    el1.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`;
});
