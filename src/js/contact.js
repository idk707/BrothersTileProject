document.getElementById("submitButton").addEventListener("click", () => {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const phoneNumber = document.getElementById("phoneNumber").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    fetch("/contact", {
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
        console.log(data.message);
    });
});