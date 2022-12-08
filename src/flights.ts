import "./css/FlightsCSS.css";

const sendToPayment = async(type: string, id: string, price: string, number: string) => { 
  var existingFlights = await (await fetch("/js/flights.json")).json();
  for(let i = 0; i < existingFlights.length; i++) {
    let flight = existingFlights[i];
    if (flight.id == id){
      const data = {
        from: flight.from,
        to: flight.to,
        type: type, // business or economy
        date: flight.date,
        time_Start: flight.time_start,
        time_end: flight.time_end,
        stop_num: flight.stop_num,
        flight_duration: flight.flight_duration,
        price: price,
        number: number
      };
      sessionStorage.setItem('flights-to-payment', JSON.stringify(data));
      window.location.href = '/payment.html';
      return;
    }
  }
  return;  
}

const main = async () => {
  var existingFlights = await (await fetch("/js/flights.json")).json();
  const requiredFlight = JSON.parse(sessionStorage.getItem("search-query") || '[]');
  /* TEST 
  const requiredFlight = {
    "from": "tehran",
    "to": "boston",
    "date": "2022-11-29",
    "number": "2"
  }*/
  
  function query(item: { from: any; to: any; date: any; business_supply_number: number; economy_supply_number: any; }){ 
    return item.from == requiredFlight.from && 
        item.to == requiredFlight.to && 
        item.date == requiredFlight.date && 
        (item.business_supply_number >= requiredFlight.number || 
        item.economy_supply_number == requiredFlight.number);
  }

  var desiredFlights = existingFlights.filter(query);
  
  console.log(desiredFlights);
  const dataElement = document.querySelector('.data');
  desiredFlights.forEach((item: { time_start: any; from: any; stop_num: any; flight_duration: any; time_end: any; to: any; id: any; business_price: any; economy_price: any; }) => {
  dataElement?.insertAdjacentHTML('afterbegin', `
        <div class="bording-pass">
          <div class="card card-left">
            <div class="card card-top">
              <span class="">Lowest fare <span>•</span></span>
              <span class="">Qsuite <span></span></span>
            </div>
            <div class="duration-info">
              <strong class="bold-item">
                <div class="source">
                  <div class="time">${item.time_start}</div>
                  <div class="city">${item.from}</div>
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
                  <div>${item.stop_num} Stop, ${item.flight_duration}h</div>
                </div>
              </div>

              <div class="destination">
                <strong class="bold-item">
                  <div class="time">${item.time_end}</div>
                  <div class="city">${item.to}</div>
                </strong>
              </div>
            </div>
          </div>
          <div class="card card-footer">
            <div class="card card-price">
              <a id="businessClick" href="javascript:void(0);" onclick="sendToPayment('business', '${item.id}', '${item.business_price}', ${requiredFlight.number})" aria-label="Business <span class=&quot;&quot;>IRR</span>&amp;nbsp;${item.business_price}">
                <h5>
                  <span>Business</span>
                </h5>
                <h3>
                  <span> <span>IRR</span>&nbsp;1,641,100,000</span>
                </h3>
              </a>
            </div>
            <div class="card card-price">
              <a id="economyClick" href="javascript:void(0);" onclick="sendToPayment('economy', '${item.id}', '${item.economy_price}', ${requiredFlight.number})" aria-label="Economy <span class=&quot;&quot;>IRR</span>&amp;nbsp;${item.economy_price}">
                <h5><span>Economy</span></h5>
                <h3>
                  <span><span>IRR</span>&nbsp;554,297,000</span>
                </h3>
              </a>
            </div>
          </div>
        </div>
  `)});
};

main();


