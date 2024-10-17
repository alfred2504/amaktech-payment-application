// Function to start a new transaction
function startTransaction() {
    console.log("Starting a new transaction...");
    document.getElementById('transaction-form').style.display = 'block'; // Show transaction form
    document.getElementById('transactionForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const product = document.getElementById('product').value;
        const quantity = document.getElementById('quantity').value;
        const price = document.getElementById('price').value;

        console.log(`Transaction for ${product} submitted with quantity ${quantity} at price ${price}.`);
        alert(`Transaction for ${product} added!`);
        // After transaction, hide form
        document.getElementById('transaction-form').style.display = 'none';
    });
}

// Function to view customers
function viewCustomers() {
    console.log("Viewing customers...");
    document.getElementById('customers-table').style.display = 'block'; // Show customers table

    // Sample customer data
    const customers = [
        { name: "John Doe", email: "john@example.com", phone: "123-456-7890" },
        { name: "Jane Smith", email: "jane@example.com", phone: "987-654-3210" },
        { name: "Bob Johnson", email: "bob@example.com", phone: "555-123-4567" }
    ];

    // Insert customer data into table
    const customerTable = document.getElementById('customerData');
    customerTable.innerHTML = ''; // Clear any existing data
    customers.forEach(customer => {
        const row = `<tr>
                        <td>${customer.name}</td>
                        <td>${customer.email}</td>
                        <td>${customer.phone}</td>
                     </tr>`;
        customerTable.innerHTML += row;
    });
}

// Function to view vendors
function viewVendors() {
    console.log("Viewing vendors...");
    document.getElementById('vendors-table').style.display = 'block'; // Show vendors table

    // Sample vendor data
    const vendors = [
        { vendorName: "Tech Supplies Co", contactPerson: "Alice", email: "alice@techsupplies.com" },
        { vendorName: "Office World", contactPerson: "Bob", email: "bob@officeworld.com" },
        { vendorName: "Gadget Pro", contactPerson: "Charlie", email: "charlie@gadgetpro.com" }
    ];

    // Insert vendor data into table
    const vendorTable = document.getElementById('vendorData');
    vendorTable.innerHTML = ''; // Clear any existing data
    vendors.forEach(vendor => {
        const row = `<tr>
                        <td>${vendor.vendorName}</td>
                        <td>${vendor.contactPerson}</td>
                        <td>${vendor.email}</td>
                     </tr>`;
        vendorTable.innerHTML += row;
    });
}

document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Get form data
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    const responseDiv = document.getElementById('signup-response');

    // Check if passwords match
    if (password !== confirmPassword) {
        responseDiv.innerText = 'Passwords do not match!';
        return;
    }

    // Fetch the correct endpoint
    fetch('/process-signup', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            username: username,
            email: email,
            password: password
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        if (data.success) {
            responseDiv.innerText = 'Sign up successful!';
            window.location.href = 'login.html';
        } else {
            responseDiv.innerText = 'Sign up failed: ' + data.message;
        }
    })
    .catch(error => {
        responseDiv.innerText = 'An error occurred: ' + error.message;
    });
});