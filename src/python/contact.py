from os import name
from flask import Flask, request, jsonify

app = Flask(__name__)

@app.route("/contact", methods=["POST"])

def contact():
    data = request.json
    Firstname = data.get("firstName")
    Lastname = data.get("lastName")
    email = data.get("email")
    message = data.get("message")

    # Here you would typically process the contact form data,
    # such as saving it to a database or sending an email.

    response = {
        "status": "success",
        "message": f"Thank you {name} for reaching out! We will get back to you at {email}."
    }
    return jsonify(response), 200