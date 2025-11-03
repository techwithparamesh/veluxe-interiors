# Email Configuration Setup

Your forms now send emails directly to **veluxeinteriors1@gmail.com** instead of storing data in memory or database.

## Setup Instructions

### Step 1: Generate Gmail App Password

1. Go to your Google Account: https://myaccount.google.com/
2. Navigate to **Security**
3. Enable **2-Step Verification** (if not already enabled)
4. Go to **App Passwords**: https://myaccount.google.com/apppasswords
5. Select **Mail** and **Other (Custom name)**
6. Name it "Veluxe Interiors Website"
7. Click **Generate**
8. Copy the 16-character password (it will look like: `abcd efgh ijkl mnop`)

### Step 2: Update .env File

Open `.env` file and replace `your-gmail-app-password-here` with the app password you generated:

```
EMAIL_USER=veluxeinteriors1@gmail.com
EMAIL_PASSWORD=abcd efgh ijkl mnop
```

(Remove the spaces when pasting: `abcdefghijklmnop`)

### Step 3: Restart the Server

After updating the .env file, restart your development server:

```bash
npm run dev
```

## How It Works

When users submit:
- **Consultation Booking Form** - You receive an email with all their details (name, email, phone, city, home type, service, notes)
- **Contact Form** - You receive an email with their message and contact information

All emails are sent to: **veluxeinteriors1@gmail.com**

## Email Format

The emails include:
- Professional formatting
- All form details in an organized table
- Clear subject lines indicating the form type
- Customer contact information for easy follow-up

No data is stored in memory or database - everything is sent directly via email!
