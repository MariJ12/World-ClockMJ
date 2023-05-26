function updateTime() {
  let brasilDateElement = document.querySelector("#date-brasil");
  let brasilTimeElement = document.querySelector("#time-brasil");
  let brasilZone = moment().tz("America/Sao_Paulo");
  brasilDateElement.innerHTML = brasilZone.format("MMMM Do YYYY");
  brasilTimeElement.innerHTML = brasilZone.format(
    `H:m:ss [<small>]A[</small>]`
  );

  let tokyoDateElement = document.querySelector("#date-tokyo");
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  let tokyoZone = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = tokyoZone.format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoZone.format(`H:mm:ss [<small>]A[</small>]`);

  let sydneyDateElement = document.querySelector("#date-sydney");
  let sydneyTimeElement = document.querySelector("#time-sydney");
  let sydneyZone = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = sydneyZone.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyZone.format(
    `H:mm:ss [<small>]A[</small>]`
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="citiesonshow" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:mm:ss"
          )} <small>${cityTime.format("A")}</small></div>
        </div> <a href="index.html">Back to main page</a>`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
