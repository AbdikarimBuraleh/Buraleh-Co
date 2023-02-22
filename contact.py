Python 3.6.5 (v3.6.5:f59c0932b4, Mar 28 2018, 16:07:46) [MSC v.1900 32 bit (Intel)] on win32
Type "copyright", "credits" or "license()" for more information.
>>> import smtplib
from email.message import EmailMessage

from_email = "your_email@example.com"  # replace with your email address
to_email = "abdikarimburaleh1@gmail.com"  # replace with your email address

def send_email(name, email, message):
    # create message object
    msg = EmailMessage()
    msg.set_content(f"Name: {name}\nEmail: {email}\nMessage: {message}")

    # set the sender and recipient
    msg['From'] = from_email
    msg['To'] = to_email

    # set the subject
    msg['Subject'] = "New message from your website"

    # send the message via SMTP
    with smtplib.SMTP('localhost') as smtp:
        smtp.send_message(msg)

if request.method == "POST":
    name = request.form["name"]
    email = request.form["email"]
    message = request.form["message"]

    send_email(name, email, message)
    print("Thank you for contacting us!")
