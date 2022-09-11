const clock = document.querySelector("h1#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`
}

getClock(); //시작하자마 호출
setInterval(getClock, 1000) //인자1: 호출하려는 함수, 인자2: 호출되는 f의 간격. 5초마다 호출
