// DOM
const myName = document.querySelector("#myName");
const myClock = document.querySelector("#myClock");

// variable for username
let username;
username = prompt("Adınız: ");

// check username and assign myName
if(username.trim().length > 0){
    myName.innerHTML = username;
}else{
    myName.innerHTML = "Misafir";
}

// get the day name by day number
function getDayString(dayNumber){
    const days = ['Pazar', 'Pazartesi', 'Salı', 'Çarşamba', 'Perşembe', 'Cuma' , 'Cumartesi'];
    return days[dayNumber];
}

// get current time , day
function getTimeAndDay(){
    const date = new Date();
    let currentTimeAndDate;

    const options = { hour12: false }
    currentTimeAndDate = `${date.toLocaleTimeString('tr-TR', options)} ${getDayString(date.getDay())}`;
    return currentTimeAndDate;

}

// assign it into myclock dom
function showTime(){
    myClock.innerHTML = getTimeAndDay();
}

// run and refresh every time
setInterval(showTime);
