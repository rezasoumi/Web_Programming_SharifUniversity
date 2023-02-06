import { type } from "os";
import { json } from "stream/consumers";
import { post } from "./network";

type Ticket = {
    passengers: Passenger[],
};

type Passenger = {
    name: string,
    code: string,
    flightDate: string,
};

type TransactionData = {
    amount: number;
};

type TransactionPage = {
    url: string;
};

let desireFlight = JSON.parse(sessionStorage.getItem("flights-to-payment") || '{}');

document.getElementById('button-payment')!.onclick = async () => {
    const prevTickets: Ticket[] = JSON.parse(localStorage.getItem('bought-tickets') || '[]');
    const currentTicket: Ticket = {
        passengers: Array.from(document.querySelectorAll('.input-row')).map((e) => {
            const name = (e.children[0] as HTMLInputElement).value;
            const code = (e.children[1] as HTMLInputElement).value;
            const flightDate = desireFlight;
            return { name, code, flightDate };
        })
    };
    var amount;
    if (desireFlight.type == "business")
        amount = currentTicket.passengers.length * +(desireFlight.y_price);
    else
        amount = currentTicket.passengers.length * +(desireFlight.j_price);

    const data: TransactionData = {
        amount: amount
    };

    localStorage.setItem('bought-tickets',JSON.stringify([...prevTickets, currentTicket]));

    const r:TransactionPage = await post("/transaction", data);
    console.log(r);
    window.location.href = r.url;
    alert("hey");
    // window.location.href = "/dashboard.html";
};


var sourceCity = desireFlight.from;
var destCity = desireFlight.to;

