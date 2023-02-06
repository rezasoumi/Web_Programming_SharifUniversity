import { post } from "./network";

type Ticket = {
    passengers: Passenger[],
};

type Passenger = {
    name: string,
    code: string,
    flightDate: string,
};

let desireFlight = JSON.parse(sessionStorage.getItem("flights-to-payment") || '{}');

document.getElementById('button-payment')!.onclick = () => {
    const prevTickets: Ticket[] = JSON.parse(localStorage.getItem('bought-tickets') || '[]');
    const currentTicket: Ticket = {
        passengers: Array.from(document.querySelectorAll('.input-row')).map((e) => {
            const name = (e.children[0] as HTMLInputElement).value;
            const code = (e.children[1] as HTMLInputElement).value;
            const flightDate = desireFlight;
            return { name, code, flightDate };
        })
    };
    localStorage.setItem('bought-tickets',JSON.stringify([...prevTickets, currentTicket]));
    window.location.href = "/dashboard.html";
};


var sourceCity = desireFlight.from;
var destCity = desireFlight.to;

