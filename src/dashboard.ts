import { post } from "./network";

type Ticket = {
    passengers: Passenger[],
};

type Passenger = {
    name: string,
    code: string,
    flightDate: string,
};

type UserId = {
    userId: string
}

const di = document.getElementById('dashboard-items')!;

////////////////////////////////////////////////////////////////////////
// user Id must get from parsa 
const data: UserId = {
    userId: "123"
};
const r = post("/getAllPurchases", data);
console.log(r);
////////////////////////////////////////////////////////////////////////

const tickets: Ticket[] = JSON.parse(localStorage.getItem('bought-tickets') || '[]');
console.log(tickets);
tickets.forEach((ticket, i) => {
    const [main, ...rest] = ticket.passengers;
    const mainElement = document.createElement('tr');
    mainElement.className = 'collapsible';
    mainElement.innerHTML = `
    <th scope="row">${i+1}</th>
    <td>${main.name}</td>
    <td>${main.code}</td>
    <td>${main.flightDate}</td>
    <td><btn class="btn btn-success btn-pill">موفق</btn></td>
    `;
    di.appendChild(mainElement);
    const mainBody = document.createElement('div');
    mainBody.style.display = "none";
    console.log(rest);
    rest.forEach((p) => {
        const pElement = document.createElement('tr');
        pElement.innerHTML = `
        <th scope="row">-</th>
        <td>${p.name}</td>
        <td>${p.code}</td>
        <td>${p.flightDate}</td>
        <td></td>
        `;
        mainBody.appendChild(pElement);
    });
    di.appendChild(mainBody);
    (mainElement.children[4].children[0] as HTMLButtonElement).onclick = () => {
        if (mainBody.style.display === "contents") {
            mainBody.style.display = "none";
        } else {
            mainBody.style.display = "contents";
        }
    };
});

document.getElementById("dash-username")!.innerHTML = localStorage.getItem("username")!;
