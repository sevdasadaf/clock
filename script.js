const sec_hand = document.querySelector('.sec-hand');
const min_hand = document.querySelector('.min-hand');
const hour_hand = document.querySelector('.hour-hand')

function setDate() {
    // console.log('hi');
const  now = new Date();
const seconds = now.getSeconds();
const seconds_degrees = ((seconds/60)*360) + 90;
sec_hand.style.transform = `rotate(${seconds_degrees}deg)`
// console.log(seconds);

const minutes = now.getMinutes();
const minutes_degrees = ((minutes/60)*360) + 90;
min_hand.style.transform = `rotate(${minutes_degrees}deg)`
// console.log(minutes);

const hours = now.getHours();
const hours_degrees = ((hours/12)*360)+90;
hour_hand.style.transform = `rotate(${hours_degrees}deg)`
// console.log(hours);

}

setInterval(setDate, 1000)
setDate()