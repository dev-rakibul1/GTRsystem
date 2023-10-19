// Form validation
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const usernamePattern = /^[A-Za-z\s]+$/;

const firstNameError = document.querySelector(".firstName")
const lastNameError = document.querySelector(".lastName")
const emailError = document.querySelector(".email")
const phoneError = document.querySelector(".phone")
const errorMessage = document.querySelector(".errorMessage")
const companyError = document.querySelector(".company-name")
const countryError = document.querySelector(".country-name")
const businessError = document.querySelector(".checkbox-error-meg")

const generalQuery = document.getElementById("contact-checkbox-4")
console.log(generalQuery);


const userFName = document.getElementById("firstName")
const userLName = document.getElementById("lastName")
const userEmail = document.getElementById("email")
const userPhone = document.getElementById("phone")
const userMessage = document.getElementById("message")
const companyName = document.getElementById("company-name")
const countryName = document.getElementById("country-name")

console.log(countryError);
console.log(countryName);

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const checkBox1 = document.getElementById("contact-checkbox-1");
const checkBox2 = document.getElementById("contact-checkbox-2");
const checkBox3 = document.getElementById("contact-checkbox-3");
const checkBox4 = document.getElementById("contact-checkbox-4");


let collectedValues = [];

const checkboxes = document.querySelectorAll('.checkbox');
function collectCheckboxValues() {
    collectedValues = [];

    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            collectedValues.push(checkbox.value);
        }
    });
    console.log(collectedValues);
}



form.addEventListener(("submit"), (event) => {
    event.preventDefault()

    // First name
    if (userFName.value === "") {
        firstNameError.innerText = "First name is required!"
        return
    } else {
        firstNameError.innerText = ""
    }
    // Last name
    if (userLName.value === "") {
        lastNameError.innerText = "Last name is required!"
        return
    } else {
        lastNameError.innerText = ""
    }

    // Email
    if (userEmail.value === "") {

        emailError.innerText = "Email is required!"
        return
    } else if (!emailRegex.test(userEmail.value)) {
        emailError.innerText = "Email is not valid!"
        return
    } else {
        emailError.innerText = ""
    }

    // Phone
    if (userPhone.value === "") {
        phoneError.innerText = "Phone is required!"
        return
    } else {
        phoneError.innerText = ""
    }

    // company name
    if (companyName.value === "") {
        companyError.innerText = "Company name is required!"
        return
    } else {
        companyError.innerText = ""
    }

    // country name
    if (countryName.value === "") {
        console.log("Not fond");
        countryError.innerText = "Country name is required!"
        return
    } else {
        countryError.innerText = ""
    }

    if (collectedValues.length === 0) {
        businessError.innerText = "Business policy is required!"
        return
    } else {
        businessError.innerText = ""
    }

    // Message
    const searchTerm = "General Inquiry";
    if (collectedValues.includes(searchTerm)) {
        errorMessage.innerText = "Message is required!"
        return
    } else {
        errorMessage.innerText = ""
    }


    // When the document is ready
    $(document).ready(function () {
        const formData = {

            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            company: $("#company-name").val(),
            country: $("#country").val(),
            message: $("#message").val(),
            company: $("#company-name").val(),
            country: $("#country-name").val(),
            value: collectedValues.map((data) => data)

            // firstName: userNameValue,
            // lastName: userNameValue,
            // email: userEmailValue,
            // phone: userPhoneValue,
            // // company: userCompanyValue,
            // // country: userCountryValue,
            // message: userMessageValue,
        };

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
             <p><strong>First name:</strong> ${formData.firstName ? formData.firstName : "Empty"}</p>
             <p><strong>Last name:</strong> ${formData.lastName ? formData.lastName : "Empty"}</p>
             <p><strong>Email:</strong> <a href="mailto:${formData.email ? formData.email : "xyz@gmail.com"}">${formData.email ? formData.email : "Empty"}</a></p>
             <p><strong>Phone:</strong> ${formData.phone ? formData.phone : "Empty"}</p>
             <p><strong>Company Name:</strong> ${formData.company ? formData.company : "Empty"}</p>
             <p><strong>Country Name:</strong> ${formData.country ? formData.country : "Empty"}</p>
             <p><strong>Inquiry For:</strong> ${formData.value ? formData.value : "Empty"}</p>
             <div class="contact-info">
                 <p><strong>Message:</strong> ${formData.message ? formData.message : "Empty"}</p>
             </div>
         </div>
     </body>
     </html>
 `;



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
                email_subject: `${formData?.firstName + formData?.lastName}`,
                email_body: emailBodyHtml,
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
                    {
                        full_name: "Rakibul Islam",
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

                if (response.status === "failed") {

                    return window.location.href = "../pages/message/fail.html";
                } else {
                    return window.location.href = "../pages/message/success.html";
                }


            },
            error: function (error) {

                if (error.status === "failed") {
                    return window.location.href = "../pages/message/fail.html";
                }
                return window.location.href = "../pages/message/fail.html";
            },
        });




    });


    form.reset()

})






