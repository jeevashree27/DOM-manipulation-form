// Get the form element by its ID
        const infoForm = document.getElementById("infoForm");

        // Get the table element by its ID
        const infoTable = document.getElementById("infoTable");

        // Add a submit event listener to the form
        infoForm.addEventListener("submit", function(event) {
            event.preventDefault(); // Prevent the form from submitting

            // Get form field values
            const firstName = document.getElementById("firstName").value;
            const lastName = document.getElementById("lastName").value;
            const address = document.getElementById("address").value;
            const pincode = document.getElementById("pincode").value;
            const gender = document.querySelector('input[name="gender"]:checked').value;
            const foodOptions = document.getElementById("food").selectedOptions;
            const food = Array.from(foodOptions).map(option => option.value);
            const state = document.getElementById("state").value;
            const country = document.getElementById("country").value;

            // Create a new row in the table
            const newRow = infoTable.insertRow(-1);

            // Add cells for each field
            const cell1 = newRow.insertCell(0);
            const cell2 = newRow.insertCell(1);
            const cell3 = newRow.insertCell(2);
            const cell4 = newRow.insertCell(3);
            const cell5 = newRow.insertCell(4);
            const cell6 = newRow.insertCell(5);
            const cell7 = newRow.insertCell(6);
            const cell8 = newRow.insertCell(7);

            // Populate the cells with the form data
            cell1.innerHTML = firstName;
            cell2.innerHTML = lastName;
            cell3.innerHTML = address;
            cell4.innerHTML = pincode;
            cell5.innerHTML = gender;
            cell6.innerHTML = food.join(", ");
            cell7.innerHTML = state;
            cell8.innerHTML = country;

            // Reset the form
            infoForm.reset();
        });
