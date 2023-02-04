interface Window {
  sendToPayment: any
}

if (
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches
) {
  document.getElementsByTagName("html")[0].classList.add("dark");
}
const main = async () => {
  const requiredFlight = JSON.parse(
    sessionStorage.getItem("search-query") || "[]"
  );
  const desiredFlights = JSON.parse(
    sessionStorage.getItem("search-result") || "[]"
  );
  console.log(desiredFlights);

  const dataElement = document.querySelector(".data");
  desiredFlights.forEach((item: any) => {
    insertHtmlFlights(item);
  });

  function insertHtmlFlights(item: any) {
    let str = "";
    str += `<div class="bording-pass"> `;
    console.log(str);
    // console.log(lessFlightSeat[item.id]);
    // if (lessFlightSeat[item.id] == true) {
    //   str += `<div class="card card-top">
    //         <span>ظرفیت محدود است</span>
    //       </div>`;
    // }
    str += `<div class="card card-left"> 
          <div class="duration-info">
            <strong class="bold-item">
              <div class="source">
                <div class="time">${new Date(item.departure_utc)}</div>
                <div class="city">مبدأ: ${item.origin}</div>
              </div>
            </strong>
            
            <div class="flight-median">
              <div>
                <div class="mx-1">
                  <img
                    class="op-logo-space"
                    src="https://www.qatarairways.com/content/dam/images/icons/flight/ic_nav_qatar_airways.svg"
                    alt="QR"
                  />
                </div>
                <div>${0} توقف، ${item.duration.hours}ساعت</div>
              </div>
            </div>
            
            <div class="destination">
              <strong class="bold-item">
                <div class="time">${item.time_end}</div>
                <div class="city">مقصد: ${item.destination}</div>
              </strong>
            </div>
          </div>
        </div>
        <div class="card card-footer">
          <div class="card card-price">
            <a href="javascript:void(0);" onclick="sendToPayment('business', '${item.flight_id}', '${item.f_price}', ${requiredFlight.number})">
              <h5>
                <span>Business</span>
              </h5>
              <h3>
                <span> ${item.f_price}<span>$</span></span>
              </h3>
            </a>
          </div>
          <div class="card card-price">
            <a href="javascript:void(0);" onclick="sendToPayment('economy', '${item.flight_id}', '${item.j_price}', ${requiredFlight.number})">
              <h5><span>Economy</span></h5>
              <h3>
                <span>${item.j_price}<span>$</span></span>
              </h3>
            </a>
          </div>
        </div>
      </div>`;

    dataElement?.insertAdjacentHTML("afterbegin", str);
  }
};
// eslint-disable-next-line @typescript-eslint/no-unused-vars
window.sendToPayment = async (type: string, id: string, price: number, count: number) => {
  alert(`${type} - ${id} - ${price} - ${count}`);
  // let isLogin = JSON.parse(localStorage.getItem("userlogin") || "[]");
  // var existingFlights = await (await fetch("/js/flights.json")).json();
  // for (let i = 0; i < existingFlights.length; i++) {
  //   let flight = existingFlights[i];
  //   if (flight.id == id) {
  //     let data = {
  //       from: flight.from,
  //       to: flight.to,
  //       type: type, // business or economy
  //       date: flight.date,
  //       time_start: flight.time_start,
  //       time_end: flight.time_end,
  //       stop_num: flight.stop_num,
  //       flight_duration: flight.flight_duration,
  //       price: price,
  //       number: number,
  //     };
  //     sessionStorage.setItem("flights-to-payment", JSON.stringify(data));
  //     if (isLogin == false) {
  //       localStorage.setItem("redirectToPayment", true);
  //       window.location.href = "/login.html";
  //       return;
  //     }
  //     window.location.href = "/payment.html";
  //     return;
  //   }
  // }
  // return;
};

main();
