# Email Setup Guide for README Generator

This guide will help you set up EmailJS to receive email notifications when users generate or copy READMEs.

## Step 1: Create EmailJS Account

1. Go to [EmailJS](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Create Email Service

1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID**

## Step 3: Create Email Template

1. Go to "Email Templates" in EmailJS dashboard
2. Click "Create New Template"
3. Use this template content:

```html
<!DOCTYPE html>
<html>
<head>
    <title>New README Generated</title>
</head>
<body>
    <h2>New README Generated/Copied</h2>
    
    <div style="margin: 20px 0;">
        <strong>User Name:</strong> {{from_name}}<br>
        <strong>GitHub Username:</strong> {{github_username}}<br>
        <strong>Action:</strong> {{action_type}}<br>
        <strong>Timestamp:</strong> {{timestamp}}
    </div>
    
    <h3>README Content:</h3>
    <div style="background: #f5f5f5; padding: 15px; border-radius: 5px; font-family: monospace; white-space: pre-wrap; max-height: 500px; overflow-y: auto;">
        {{readme_content}}
    </div>
    
    <div style="margin-top: 20px; padding: 10px; background: #e8f4fd; border-radius: 5px;">
        <p><strong>Note:</strong> This README was generated using your README Generator tool. 
        You can review it and add the user to your showcase section if appropriate.</p>
    </div>
</body>
</html>
```

4. Save the template and note down your **Template ID**

## Step 4: Get Your User ID

1. In EmailJS dashboard, go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

## Step 5: Update Configuration

1. Open `src/App.jsx`
2. Find the `EMAIL_CONFIG` object (around line 315)
3. Replace the placeholder values and add your admin emails:

```javascript
const EMAIL_CONFIG = {
  serviceId: 'YOUR_ACTUAL_SERVICE_ID', // From Step 2
  templateId: 'YOUR_ACTUAL_TEMPLATE_ID', // From Step 3
  userId: 'YOUR_ACTUAL_USER_ID', // From Step 4
  adminEmails: [
    'abhijeetbhale7@gmail.com', // Your main email
    'team@yourcompany.com', // Team email (optional)
    'showcase@yourcompany.com', // Showcase review email (optional)
    'admin@yourcompany.com' // Admin email (optional)
    // Add as many email addresses as you need
  ]
};
```

## Step 6: Install Dependencies

Run this command in your project directory:

```bash
npm install
```

## Step 7: Test the Setup

1. Start your development server: `npm run dev`
2. Fill out the README form
3. Check the "Send my README to the showcase review team" checkbox
4. Click "Generate README" or "Copy to Clipboard"
5. Check all your configured email addresses for the notification

## Features

- **Multiple Admin Emails**: Send notifications to multiple team members
- **Automatic Email Notifications**: Every time a user generates or copies a README, all admin emails will receive it
- **User Information**: Includes the user's name and GitHub username
- **Full README Content**: The complete generated README is included in the email
- **Action Tracking**: Shows whether the README was "generated" or "copied"
- **Timestamp**: Records when the action occurred
- **User Consent**: Users can opt-in/opt-out of email notifications

## Email Content

Each email will include:
- User's name (if provided)
- GitHub username (if provided)
- Action type (generated/copied)
- Timestamp
- Complete README content
- Instructions for showcase review

## Recommended Email Addresses

You might want to add these types of email addresses:

1. **Primary Admin**: `abhijeetbhale7@gmail.com` (your main email)
2. **Team Lead**: `team@yourcompany.com` (for team coordination)
3. **Showcase Manager**: `showcase@yourcompany.com` (for showcase decisions)
4. **Technical Lead**: `tech@yourcompany.com` (for technical review)
5. **Marketing**: `marketing@yourcompany.com` (for content review)

## Troubleshooting

1. **Email not sending**: Check your EmailJS credentials in the configuration
2. **Template not working**: Verify your template variables match the code
3. **Service connection issues**: Re-authenticate your email service in EmailJS
4. **Multiple emails not working**: Ensure all email addresses are valid and properly formatted

## Security Notes

- EmailJS credentials are visible in the frontend code
- For production, consider using a backend service for email handling
- The free EmailJS plan has monthly limits
- Be careful with email addresses in public repositories

## Customization

You can modify the email template to include:
- Additional user information
- Different formatting
- Links to user profiles
- Custom branding
- Team-specific instructions 