// When the document is ready
$(document).ready(function () {
    // Target the submit button
    const submitButton = document.getElementById("submit-button");

    // Add a click event listener to the submit button
    submitButton.addEventListener("click", function () {
        // Create an object to hold the form data
        const formData = {
            name: $("#name").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            company: $("#company-name").val(),
            country: $("#country").val(),
            message: $("#message").val(),
        };

        // Format the form data into the desired structure
        const emailBodyHtml = `

<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Information</title>
    <style>
        /* Add your styles here */
        body {
            font-family: Arial, sans-serif;
            background-color: #f7f7f7;
            margin: 0;
            padding: 0;
        }

        .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }

        h1 {
            color: #ff5722;
        }

        p {
            color: #333;
        }

        .contact-info {
            margin-top: 20px;
            background-color: #f5f5f5;
            padding: 10px;
        }

        .contact-info p {
            margin: 0;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Contact Information</h1>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> <a href="mailto:${formData.email}">${formData.email}</a></p>
        <p><strong>Phone:</strong> ${formData.phone}</p>
        <p><strong>Company:</strong> ${formData.company}</p>
        <p><strong>Country:</strong> ${formData.country}</p>
        <div class="contact-info">
            <p><strong>Message:</strong> ${formData.message}</p>
        </div>
    </div>
</body>
</html>

        `;

        // Log the formatted data to the console
        console.log("Formatted Data:", emailBodyHtml);

        // Make an AJAX request to the API using jQuery
        $.ajax({
            type: "POST",
            url: "https://api.gtrs.travel/tools/send-email",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
                apikey: "34152112944906126",
                secretecode: "4e7m4sf3ylynmxriijxygidvtyd7qzag3ylvty74x",
            },
            data: JSON.stringify({
                email_subject: "Sample Subject",
                email_body: emailBodyHtml, // Send the formatted data as email_body
                email_to: {
                    full_name: formData.name,
                    email_addresss: formData.email,
                },
                email_from: {
                    full_name: "GTRSystem",
                    email_addresss: "noreply@gtrsystem.com",
                },
                email_cc: [
                    {
                        full_name: "Tanveer Kazi",
                        email_addresss: "tanveer@innovatesolution.com",
                    },
                ],
                email_cc: [
                    {
                        full_name: "Tanveer Kazi",
                        email_addresss: "rakibul@innovatesolution.com",
                    },
                ],
                email_bcc: [
                    {
                        full_name: "Abdus Samad",
                        email_addresss: "samad@innovatesolution.com",
                    },
                ],
            }),
            success: function (response) {
                // Handle the API response here
                console.log(response);

                // Display a success message (you can customize this)
                alert("Success: Email sent successfully.");
            },
            error: function (error) {
                // Handle errors here
                console.error(error);

                // Display an error message (you can customize this)
                alert("Error: Email could not be sent.");
            },
        });
    });
});
