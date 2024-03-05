// Fetch company names from logo data attributes and display them
const logoDivs = document.querySelectorAll('.logo');
const companyNamesDiv = document.querySelector('.company-names');

logoDivs.forEach((logoDiv) => {
    const companyName = logoDiv.getAttribute('data-name');
    const companyNameDiv = document.createElement('div');
    companyNameDiv.innerText = companyName;
    companyNamesDiv.appendChild(companyNameDiv);
});

// Submit form data via AJAX when the form is submitted
const form = document.getElementById("contact-form");

form.addEventListener("submit", async (event) => {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;
  
    const data = {
        name,
        email,
        phone,
        message
    };
  
    try {
        const response = await fetch("https://formspree.io/f/xpzerabv", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            throw new Error("Failed to send message.");
        }
    } catch (error) {
        alert("There was a problem sending your message. Please try again.");
    }
});
