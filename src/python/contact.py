from flask import Flask, request, jsonify
from flask_cors import CORS
import smtplib
from email.mime.text import MIMEText
import os
import gspread
from google.oauth2.service_account import Credentials

app = Flask(__name__)
CORS(app)

def send_email(firstName, lastName, phoneNumber, email, message):
    sender_email = os.environ.get("EMAIL_USER")
    sender_password = os.environ.get("EMAIL_PASS")
    reciever_email = sender_email

    subject = "New Contact Form Submission"

    body = f"""
    New contact form submission:

    First Name: {firstName}
    Last Name: {lastName}
    Phone Number: {phoneNumber}
    Email: {email}

    Message: 
    {message}
    """

    msg = MIMEText(body)
    msg["Subject"] = subject
    msg["From"] = sender_email
    msg["To"] = reciever_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(sender_email, sender_password)
        server.send_message(msg)




@app.route("/contact", methods=["POST"])

def contact():
    data = request.json

    firstName = data.get("firstName")
    lastName = data.get("lastName")
    phoneNumber = data.get("phoneNumber")
    email = data.get("email")
    message = data.get("message")

    send_email(firstName, lastName, phoneNumber, email, message)

    response = {
        "status": "success",
        "message": f"Thank you {firstName} for reaching out! We will get back to you at {email}."
    }
    return jsonify(response), 200