document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
    
    fetch("http://localhost:5000/contact", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        firstName,
        lastName,
        phoneNumber,
        email,
        message
    })
})
.then(res => res.json())
.then(data => {
    alert(data.message);
    this.reset();
})
.catch(err => console.error("Error:", err));
});