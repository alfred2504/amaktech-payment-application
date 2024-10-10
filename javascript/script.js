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