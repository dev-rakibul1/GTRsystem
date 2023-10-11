// Form validation
const form = document.getElementById("contact-form");
const submitButton = document.getElementById("submit-button");
const usernamePattern = /^[a-zA-Z]+[a-zA-Z0-9_ ]*$/;


// const userFName = document.getElementById("firstName")
// const userLName = document.getElementById("lastName")
// const userEmail = document.getElementById("email")
// const userPhone = document.getElementById("phone")
// // const userCompany = document.getElementById("company-name")
// // const userCountry = document.getElementById("country")
// const userMessage = document.getElementById("message")
// const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;





// form.addEventListener("submit", (event) => {
//     event.preventDefault()
//     // validateInput()






//     // form.reset()

// })


// // set error message
// const setErrorMeg = (element, message) => {
//     const inputControl = element.parentElement;
//     const errorDisplay = inputControl.querySelector(".error-message")

//     errorDisplay.innerText = message
//     inputControl.classList.add("error")
//     inputControl.classList.remove("success")
// }

// // set success message
// const setSuccessMeg = (element) => {
//     const inputControl = element.parentElement
//     const errorDisplay = inputControl.querySelector(".error-message");

//     errorDisplay.innerText = ""
//     inputControl.classList.add("success")
//     inputControl.classList.remove("error")
// }

// const validateInput = () => {
//     const userFNameValue = userFName.value.trim();
//     const userLNameValue = userLName.value.trim();
//     const userEmailValue = userEmail.value.trim();
//     const userPhoneValue = userPhone.value.trim();
//     // const userCompanyValue = userCompany.value.trim();
//     // const userCountryValue = userCountry.value.trim();
//     const userMessageValue = userMessage.value.trim();

//     // name
//     if (userFNameValue === "") {
//         setErrorMeg(userFName, "Name is required!")

//     } else if (!usernamePattern.test(userFNameValue)) {
//         setErrorMeg(userFName, "Name is not valid!")

//     } else {
//         setSuccessMeg(userFName)
//     }

//     // email
//     if (userEmailValue === "") {
//         setErrorMeg(userEmail, "Email is required!")

//     } else if (!emailRegex.test(userEmailValue)) {
//         setErrorMeg(userEmail, "Email is not valid!")

//     } else {
//         setSuccessMeg(userEmail)
//     }

//     // phone
//     if (userPhoneValue === "") {
//         setErrorMeg(userPhone, "Phone number is required!")

//     } else {
//         setSuccessMeg(userPhone)

//     }

//     // company Name
//     // if (userCompanyValue === "") {
//     //     setErrorMeg(userCompany, "Company name is required!")

//     // } else {
//     //     setSuccessMeg(userCompany)
//     // }

//     // // company Name
//     // if (userCountryValue === "") {
//     //     setErrorMeg(userCountry, "Company name is required!")

//     // } else {
//     //     setSuccessMeg(userCountry)
//     // }

//     // // country Name
//     // if (userCountryValue === "") {
//     //     setErrorMeg(userCountry, "Country name is required!")

//     // } else {
//     //     setSuccessMeg(userCountry)
//     // }

//     // Message
//     if (userMessageValue === "") {
//         setErrorMeg(userMessage, "Message is required!")

//     } else {
//         setSuccessMeg(userMessage)
//     }

//     console.log(userNameValue);

//     if (
//         !userFNameValue === false ||
//         !userEmailValue === false ||
//         !userPhoneValue === false ||
//         // !userCompanyValue === false ||
//         // !userCountryValue === false ||
//         // !userCountryValue === false ||
//         !userMessageValue === false

//     ) {



//     }







// When the document is ready
$(document).ready(function () {
    console.log("Welcome");
    // Function to show the success modal and overlay
    function showSuccessModal() {
        const successModalOverlay = document.getElementById("success-modal-overlay");
        const successModal = document.getElementById("success-modal");
        successModalOverlay.classList.remove("hidden");
        successModal.classList.remove("hidden");
    }

    // Function to show the error modal and overlay
    function showErrorModal() {
        const errorModalOverlay = document.getElementById("error-modal-overlay");
        const errorModal = document.getElementById("error-modal");
        errorModalOverlay.classList.remove("hidden");
        errorModal.classList.remove("hidden");
    }

    // Function to hide modals and overlays
    function hideModals() {
        const successModalOverlay = document.getElementById("success-modal-overlay");
        const errorModalOverlay = document.getElementById("error-modal-overlay");
        const successModal = document.getElementById("success-modal");
        const errorModal = document.getElementById("error-modal");
        successModalOverlay.classList.add("hidden");
        errorModalOverlay.classList.add("hidden");
        successModal.classList.add("hidden");
        errorModal.classList.add("hidden");
    }
    submitButton.addEventListener("click", function (e) {
        e.preventDefault()
        const formData = {

            firstName: $("#firstName").val(),
            lastName: $("#lastName").val(),
            email: $("#email").val(),
            phone: $("#phone").val(),
            company: $("#company-name").val(),
            country: $("#country").val(),
            message: $("#message").val(),

            // firstName: userNameValue,
            // lastName: userNameValue,
            // email: userEmailValue,
            // phone: userPhoneValue,
            // // company: userCompanyValue,
            // // country: userCountryValue,
            // message: userMessageValue,
        };
        console.log("object", formData);

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
             <p><strong>Name:</strong> ${formData.firstName ? formData.firstName : "Empty"}</p>
             <p><strong>Name:</strong> ${formData.lastName ? formData.lastName : "Empty"}</p>
             <p><strong>Email:</strong> <a href="mailto:${formData.email ? formData.email : "xyz@gmail.com"}">${formData.email ? formData.email : "Empty"}</a></p>
             <p><strong>Phone:</strong> ${formData.phone ? formData.phone : "Empty"}</p>
             <div class="contact-info">
                 <p><strong>Message:</strong> ${formData.message ? formData.message : "Empty"}</p>
             </div>
         </div>
     </body>
     </html>
 `;

        console.log("Formatted Data:", emailBodyHtml);

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
                        email_addresss: "tanveer11245@innovatesolution.com",
                    },
                    {
                        full_name: "Rakibul Islam",
                        email_addresss: "rakibul@innovatesolution.com",
                    },
                ],
                email_bcc: [
                    {
                        full_name: "Abdus Samad",
                        email_addresss: "samad145781@innovatesolution.com",
                    },
                ],
            }),
            success: function (response) {
                console.log(response);
                if (response.status === "failed") {

                    return showErrorModal()
                } else {

                    showSuccessModal();
                }


            },
            error: function (error) {
                console.error(error);
                if (error.status === "failed") {

                    return showErrorModal()
                }
                alert("Fail")
            },
        });
    });


    $(".modal-close").on("click", function () {
        hideModals();
    });
});

