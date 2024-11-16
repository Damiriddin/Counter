// Делаем расчеты
const currYear = new Date().getFullYear();
const nextYear = new Date(`January 01 ${currYear+1} 00:00:00` );
const currTime = new Date();
// console.log(currTime)
const diff = nextYear -currTime;
const fulldays =Math.floor( diff/1000/60/60/24);
const fullhours =Math.floor( diff/1000/60/60) % 24;
const fullminutes =Math.floor( diff/1000/60) %60;
const fullseconds =Math.floor( diff/1000)%60;
// end of math
const year = document.body.querySelector('#year');
const days = document.body.querySelector('#days');
const hours = document.body.querySelector('#hours');
const minutes = document.body.querySelector('#minutes');
const seconds = document.body.querySelector('#seconds');

year.innerText = currYear+1;
days.innerText = fulldays < 10? '0' + fulldays:fulldays;
hours.innerText = fullhours < 10? '0' + fullhours: fullhours;
minutes.innerText = fullminutes < 10? '0' + fullminutes: fullminutes;
seconds.innerText = fullseconds < 10 ? '0' + fullseconds: fullseconds;



function updateCounter()
{
    const currTime = new Date();
// console.log(currTime)
const diff = nextYear -currTime;
const fulldays =Math.floor( diff/1000/60/60/24);
const fullhours =Math.floor( diff/1000/60/60) % 24;
const fullminutes =Math.floor( diff/1000/60) %60;
const fullseconds =Math.floor( diff/1000)%60;
// end of math
const year = document.body.querySelector('#year');
const days = document.body.querySelector('#days');
const hours = document.body.querySelector('#hours');
const minutes = document.body.querySelector('#minutes');
const seconds = document.body.querySelector('#seconds');

year.innerText = currYear+1;
days.innerText = fulldays < 10? '0' + fulldays:fulldays;
hours.innerText = fullhours < 10? '0' + fullhours: fullhours;
minutes.innerText = fullminutes < 10? '0' + fullminutes: fullminutes;
seconds.innerText = fullseconds < 10 ? '0' + fullseconds: fullseconds;
}
updateCounter();
setInterval(updateCounter,1000)


