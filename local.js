let curDate= document.getElementById("date");
let weathercon= document.getElementById("weathercon");
// const tempStatus= "clouds"; 

const tempStatus = "{%tempstatus%}";

//condition to check sunny or cloudy
if (tempStatus == "Clear ") {
  weathercon.innerHTML =
    "<i class='fas  fa-sun' style='color: #eccc68;'></i>";
} else if (tempStatus == "Clouds") {
  weathercon.innerHTML =
    "<i class='fas  fa-cloud' style='color: #f1f2f6;'></i>";
} else if (tempStatus == "Rainy") {
  weathercon.innerHTML =
    "<i class='fas  fa-cloud-rain' style='color: #a4b0be;'></i>";
} else {
  weathercon.innerHTML =
    "<i class='fas  fa-cloud' style='color:#f1f2f6;'></i>";
}



const getCurrentDay=()=>{
    const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let currentTime= new Date();
    let day = weekday[currentTime.getDay()];
    return day;

    // console.log(weekday[currentTime.getDay()]);
    
}
const getCurrentTime = () => {
    var months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sept",
      "Oct",
      "Nov",
      "Dec",
    ];

    var now = new Date();
    var month = months[now.getMonth() + 1];
    var date = now.getDate();

    let hours = now.getHours();
    let mins = now.getMinutes();

    let periods = "AM";

    if (hours > 11) {
      periods = "PM";
      if (hours > 12) hours -= 12;
    }
    if (mins < 10) {
      mins = "0" + mins;
    }

    return `${month} ${date} | ${hours}:${mins}${periods}`;
  };

  curDate.innerHTML = getCurrentDay() + " | " + getCurrentTime();