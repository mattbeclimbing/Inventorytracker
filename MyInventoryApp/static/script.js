const form = document.querySelector("form");
const tableBody = document.querySelector("#inventory tbody");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // Stop page refresh

    const itemName = document.getElementById("item-name").value;
    const quantity = document.getElementById("quantity").value;
    const threshold = document.getElementById("threshold").value;
    const purchaseLink = document.getElementById("purchase-link").value;

    // Check if item already exists
    let existingRow = null;
    document.querySelectorAll("#inventory tbody tr").forEach(row => {
        if (row.cells[0].innerText === itemName) {
            existingRow = row;
        }
    });

    if (existingRow) {
        // Update existing row
        existingRow.cells[1].innerText = quantity;
        existingRow.cells[2].innerText = threshold;
        existingRow.cells[3].innerHTML = purchaseLink ? `<a href="${purchaseLink}" target="_blank">Buy</a>` : '';
    } else {
        // Create a new row
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${itemName}</td>
            <td>${quantity}</td>
            <td>${threshold}</td>
            <td>${purchaseLink ? `<a href="${purchaseLink}" target="_blank">Buy</a>` : ''}</td>
        `;
        tableBody.appendChild(row);
    }

    form.reset();
});
