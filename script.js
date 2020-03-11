function showDate() {
    var today = new Date();
    var months = String(today.getMonth() + 1).padStart(2, '0');
    var days = String(today.getDate()).padStart(2, '0')
    var years = today.getFullYear();

    today = `${months} / ${days} / ${years}`;
    document.getElementById('date').innerHTML = today;

}

function showTime() {

    let date = new Date();
    let hours = date.getHours();// 0-23
    let minutes = date.getMinutes();//0-59
    let seconds = date.getSeconds(); // 0-60

    hours = addZero(hours);
    minutes = addZero(minutes);
    seconds = addZero(seconds);

    document.getElementById('clock').innerHTML = `${hours} : ${minutes} : ${seconds}`;

}

function addZero(time) {
    if (time < 10) {
        time = '0' + time;
    }
    return time;
}

showDate()
showTime()
setInterval(showTime, 1000)