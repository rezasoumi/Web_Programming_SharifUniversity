const di = document.getElementById('dashboard-items')!;
const tickets: Ticket[] = JSON.parse(localStorage.getItem('bought-tickets') || '[]');

tickets.forEach((ticket, i) => {
    const [main, ...rest] = ticket.passengers;
    const mainElement = document.createElement('tr');
    mainElement.className = 'collapsible';
    mainElement.innerHTML = `
    <th scope="row">${i+1}</th>
    <td>${main.name}</td>
    <td>${main.code}</td>
    <td><btn class="btn btn-success btn-pill">موفق</btn></td>
    `;
    di.appendChild(mainElement);
    const mainBody = document.createElement('div');
    mainBody.style.display = "none";
    rest.forEach((p) => {
        const pElement = document.createElement('tr');
        pElement.innerHTML = `
        <th scope="row">-</th>
        <td>${p.name}</td>
        <td>${p.code}</td>
        <td></td>
        `;
        mainBody.appendChild(pElement);
    });
    di.appendChild(mainBody);
    (mainElement.children[3].children[0] as HTMLButtonElement).onclick = () => {
        if (mainBody.style.display === "contents") {
            mainBody.style.display = "none";
        } else {
            mainBody.style.display = "contents";
        }
    };
});

document.getElementById("dash-username")!.innerHTML = localStorage.getItem("username")!;
