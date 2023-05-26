function updateTime() {
  let brasilElement = document.querySelector("#idbrasil");
  let brasilDateElement = document.querySelector("#date-brasil");
  let brasilTimeElement = document.querySelector("#time-brasil");
  let brasilZone = moment().tz("America/Sao_Paulo");
  brasilDateElement.innerHTML = moment().format("MMMM Do YYYY");
  brasilTimeElement.innerHTML = brasilZone.format(
    `H:m:SS [<small>]A[</small>]`
  );

  let tokyoElement = document.querySelector("#idtokyo");
  let tokyoDateElement = document.querySelector("#date-tokyo");
  let tokyoTimeElement = document.querySelector("#time-tokyo");
  let tokyoZone = moment().tz("Asia/Tokyo");
  tokyoDateElement.innerHTML = moment().format("MMMM Do YYYY");
  tokyoTimeElement.innerHTML = tokyoZone.format(`H:m:SS [<small>]A[</small>]`);

  let sydneyElement = document.querySelector("#idsydney");
  let sydneyDateElement = document.querySelector("#date-sydney");
  let sydneyTimeElement = document.querySelector("#time-sydney");
  let sydneyZone = moment().tz("Australia/Sydney");
  sydneyDateElement.innerHTML = moment().format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyZone.format(
    `H:m:SS [<small>]A[</small>]`
  );
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");
  citiesElement.innerHTML = `<div class="citiesonshow" >
          <div>
            <h2>${cityName}</h2>
            <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
          </div>
          <div class="time">${cityTime.format(
            "H:m:SS"
          )} <small>${cityTime.format("A")}</small></div>
        </div>`;
}

updateTime();
setInterval(updateTime, 100);

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);
