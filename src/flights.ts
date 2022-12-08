const main = async () => {
    var existingFlights = await (await fetch("/flights.json")).json();
    const requiredFlight = JSON.parse(sessionStorage.getItem("search-query") || '[]');

    alert(JSON.stringify(requiredFlight));
    
    function query(item){ 
        return item.from == requiredFlight.from && 
            item.to == requiredFlight.to && 
            item.type == requiredFlight.type && 
            item.time_Start == requiredFlight.time_Start && 
            item.time_end == requiredFlight.time_end && 
            item.date_start == requiredFlight.date_start && 
            item.date_end == requiredFlight.date_end;
    }
    
    var desiredFlights = existingFlights.filter(query);

    function sendToDashbord(type, id, price){ 
      for (const flightStr in desiredFlights) {
        const flight = JSON.parse(flightStr);
        if (flight.id == id){
          const data = {
            from: flight.from,
            to: flight.to,
            type: type, // business or economy
            date_start: flight.date_start,
            date_end: flight.date_end,
            time_Start: flight.time_Start,
            time_end: flight.time_end,
            stop_num: flight.stop_num,
            flight_duration: flight.flight_duration,
            price: flight.price,
          };
          sessionStorage.setItem('flights-to-dashbord', JSON.stringify(data));
          window.location.href = '/dashboard.html';
          return;
        }
      }
      return;  
    }

    console.log(desiredFlights);
    const dataElement = document.querySelector('.data');
    desiredFlights.forEach(item => {
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
    <div class="card card-buttom">
      <div class="card-row">
        <a href="">Flight Details</a>
      </div>
    </div>
  </div>
  <div class="card card-footer">
    <div class="card card-price">
      <a href="javascript:void(0);" onclick="javascript:sendToDashbord("business", ${item.id}, ${item.business_price});" aria-label="Business <span class=&quot;&quot;>IRR</span>&amp;nbsp;${item.business_price}">

        <h5>
          <span>Business</span>
        </h5>
        <h3>
          <span> <span>IRR</span>&nbsp;1,641,100,000</span>
        </h3>
      </a>
    </div>
    <div class="card card-price">
      <a href="javascript:void(0);" onclick="javascript:sendToDashbord("economy", ${item.id}, ${item.economy_price});" aria-label="Economy <span class=&quot;&quot;>IRR</span>&amp;nbsp;${item.economy_price}">
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