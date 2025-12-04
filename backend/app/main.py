from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os
from dotenv import load_dotenv

load_dotenv()

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def require_env(name: str) -> str:
    v = os.getenv(name)
    if v is None:
        raise RuntimeError(f"Missing env var: {name}")
    return v

SMTP_HOST = require_env("SMTP_HOST")
SMTP_PORT = int(require_env("SMTP_PORT"))
SMTP_USER = require_env("SMTP_USERNAME")
SMTP_PASS = require_env("SMTP_PASSWORD")
SMTP_FROM = require_env("SMTP_FROM")
SMTP_TO = require_env("SMTP_TO")

class Application(BaseModel):
    name: str
    email: EmailStr
    position: str
    why: str
    experience: str = ""
    availability: str = ""

@app.get("/health")
async def health_check():
    return {"status": "healthy"}

@app.post("/api/careers/apply")
async def apply(app_data: Application):
    msg1 = MIMEMultipart()
    msg1['From'] = SMTP_FROM
    msg1['To'] = SMTP_TO
    msg1['Subject'] = f"Career Application: {app_data.position}"
    body1 = f"""
Name: {app_data.name}
Email: {app_data.email}
Position: {app_data.position}

Why: {app_data.why}
Experience: {app_data.experience}
Availability: {app_data.availability}
"""
    msg1.attach(MIMEText(body1, 'plain'))

    msg2 = MIMEMultipart('alternative')
    msg2['From'] = SMTP_FROM
    msg2['To'] = app_data.email
    msg2['Subject'] = "Application Received - Sono"

    html_body = f"""
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <style>
        body {{
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', sans-serif;
            background-color: #f5f5f5;
        }}
        .container {{
            max-width: 600px;
            margin: 40px auto;
            background-color: #ffffff;
            border-radius: 12px;
            overflow: hidden;
            box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }}
        .header {{
            background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
            padding: 40px 32px;
            text-align: center;
        }}
        .logo {{
            width: 48px;
            height: 48px;
            margin: 0 auto 16px;
        }}
        .header h1 {{
            margin: 0;
            font-size: 28px;
            font-weight: 600;
            color: #ffffff;
            letter-spacing: 1px;
        }}
        .content {{
            padding: 40px 32px;
            color: #333333;
            line-height: 1.6;
        }}
        .greeting {{
            font-size: 18px;
            font-weight: 600;
            color: #1a1a1a;
            margin-bottom: 20px;
        }}
        .message {{
            font-size: 15px;
            color: #555555;
            margin-bottom: 24px;
        }}
        .highlight {{
            background-color: #f8f9fa;
            border-left: 4px solid #1a1a1a;
            padding: 16px;
            margin: 24px 0;
            border-radius: 4px;
        }}
        .signature {{
            margin-top: 32px;
            font-size: 15px;
            color: #333333;
            font-weight: 500;
        }}
        .footer {{
            background-color: #f8f9fa;
            padding: 24px 32px;
            text-align: center;
            border-top: 1px solid #e5e5e5;
        }}
        .footer-links {{
            margin-bottom: 12px;
        }}
        .footer-links a {{
            color: #666666;
            text-decoration: none;
            font-size: 13px;
            margin: 0 12px;
        }}
        .footer-links a:hover {{
            color: #1a1a1a;
        }}
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <svg width="250" xmlns="http://www.w3.org/2000/svg" height="250" class="logo" viewBox="0 0 250 250" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1"><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d18" rx="0" ry="0"><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d19"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d19"><rect rx="0" ry="0" x="0" y="0" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" width="250" height="250" style="fill: rgb(255, 72, 147); fill-opacity: 0;"/></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d1a"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d1a"><ellipse cx="125" cy="125" rx="125" ry="125" transform="matrix(1.000000, 0.000000, 0.000000, 1.000000, 0.000000, 0.000000)" style="fill: rgb(255, 72, 147); fill-opacity: 0;"/></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d1b" rx="0" ry="0"><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d1c" rx="0" ry="0" style="display: none;"><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d1e"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d1e"><ellipse cx="92.22197697703723" cy="151.2031939778688" rx="45" ry="44.99999999999994" transform="matrix(0.866025, 0.500000, -0.500000, 0.866025, 87.956999, -25.853602)" style="fill: rgb(233, 59, 130); fill-opacity: 1;"/></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d1f"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d1f"><path d="M86.96012595025832,95.76442841485016 h116.00000000000011 a22.999999999999886,22.999999999999886 0 0 1 22.999999999999886,22.999999999999886 v0 a0,0 0 0 1 0,0 h-139 a0,0 0 0 1 0,0 v-22.999999999999886 a0,0 0 0 1 0,0 z" x="86.96012595025832" y="95.76442841485016" transform="matrix(0.500000, -0.866025, 0.866025, 0.500000, -14.663657, 189.130658)" width="139" height="22.999999999999886" style="fill: rgb(233, 59, 130); fill-opacity: 1;"/></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d20"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d20"><path d="M186.18500000000017,61.101212042215025 h37.13000000000011 a0,0 0 0 1 0,0 v11.934999999999718 a18.565000000000055,18.565000000000055 0 0 1 -18.565000000000055,18.565000000000055 h0 a18.565000000000055,18.565000000000055 0 0 1 -18.565000000000055,-18.565000000000055 v-11.934999999999718 a0,0 0 0 1 0,0 z" x="186.18500000000017" y="61.101212042215025" transform="matrix(0.501003, -0.865445, 0.865445, 0.501003, 36.091804, 215.298983)" width="37.13000000000011" height="30.499999999999773" style="fill: rgb(233, 59, 130); fill-opacity: 1;"/></g></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d1d" rx="0" ry="0"><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d21"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d21"><ellipse cx="88.22197697703723" cy="149.2031939778688" rx="45" ry="44.99999999999994" transform="matrix(0.866025, 0.500000, -0.500000, 0.866025, 86.421101, -24.121551)" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d22"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d22"><path d="M82.96012595025832,93.76442841485016 h116.00000000000011 a22.999999999999886,22.999999999999886 0 0 1 22.999999999999886,22.999999999999886 v0 a0,0 0 0 1 0,0 h-139 a0,0 0 0 1 0,0 v-22.999999999999886 a0,0 0 0 1 0,0 z" x="82.96012595025832" y="93.76442841485016" transform="matrix(0.500000, -0.866025, 0.866025, 0.500000, -14.931606, 184.666556)" width="139" height="22.999999999999886" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/></g></g><g id="shape-51d457f2-f03e-8034-8006-09a04a8d8d23"><g class="fills" id="fills-51d457f2-f03e-8034-8006-09a04a8d8d23"><path d="M182.18500000000017,59.101212042215025 h37.13000000000011 a0,0 0 0 1 0,0 v11.934999999999718 a18.565000000000055,18.565000000000055 0 0 1 -18.565000000000055,18.565000000000055 h0 a18.565000000000055,18.565000000000055 0 0 1 -18.565000000000055,-18.565000000000055 v-11.934999999999718 a0,0 0 0 1 0,0 z" x="182.18500000000017" y="59.101212042215025" transform="matrix(0.501003, -0.865445, 0.865445, 0.501003, 35.826708, 210.839207)" width="37.13000000000011" height="30.499999999999773" style="fill: rgb(255, 255, 255); fill-opacity: 1;"/></g></g></g></g></g></svg>
            <h1>Sono</h1>
        </div>

        <div class="content">
            <div class="greeting">Hi {app_data.name},</div>

            <div class="message">
                Thank you for applying to join the Sono team! We've received your application for the <strong>{app_data.position}</strong> position.
            </div>

            <div class="highlight">
                We will carefully review your application and get back to you soon. We appreciate your interest in being part of the team.
            </div>

            <div class="message">
                Check your spam folder if you don't see our reply in your inbox!
            </div>

            <div class="signature">
                Best regards,<br>
                The Sono Team
            </div>
        </div>

        <div class="footer">
            <div class="footer-links">
                <a href="https://sono.wtf/terms">Terms</a>
                <span style="color: #e5e5e5;">|</span>
                <a href="https://sono.wtf/privacy">Privacy</a>
                <span style="color: #e5e5e5;">|</span>
                <a href="https://sono.wtf">sono.wtf</a>
            </div>
        </div>
    </div>
</body>
</html>
"""

    msg2.attach(MIMEText(html_body, 'html'))


    try:
        with smtplib.SMTP(SMTP_HOST, SMTP_PORT) as server:
            server.starttls()
            server.login(SMTP_USER, SMTP_PASS)
            server.send_message(msg1)
            server.send_message(msg2)

        return {"success": True}

    except smtplib.SMTPAuthenticationError as e:
        print(f"[ERROR] SMTP Authentication failed: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Email service configuration error. Please contact support."
        )
    except Exception as e:
        print(f"[ERROR] Failed to send email: {str(e)}")
        raise HTTPException(
            status_code=500,
            detail="Failed to submit application. Please try again later or contact us directly at business@mathiiis.de"
        )