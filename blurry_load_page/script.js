const bg = document.querySelector('.bg');
const text = document.querySelector('.text');

let load = 0;

let int = setInterval(blur, 30);


function blur() {
    load++;

    if(load>99){
        clearInterval(int);
    }
    text.innerText = `${load}%`
    bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`
    text.style.opacity = scale(load, 0, 100, 1, 0)

}

function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}