import nodemailer from 'nodemailer'
import path from 'path'
import fs from 'fs'

const transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_APP_PASSWORD 
  }
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  text?: string
  attachments?: any[]
}

export const sendEmail = async ({ to, subject, html, text, attachments }: EmailOptions): Promise<boolean> => {
  try {
    const logoPath = path.join(process.cwd(), 'public', 'logo.png')
    const logoExists = fs.existsSync(logoPath)
    
    const emailAttachments = attachments || []
    
    // Add logo as inline attachment if it exists
    if (logoExists) {
      emailAttachments.push({
        filename: 'logo.png',
        path: logoPath,
        cid: 'logo' // Same CID referenced in the email HTML
      })
    }

    await transporter.sendMail({
      from: {
        name: 'PG MASTER',
        address: process.env.EMAIL_USER || 'noreply@pgmaster.com'
      },
      to,
      subject,
      html,
      text: text || html.replace(/<[^>]*>/g, ''),
      attachments: emailAttachments
    })
    
    return true
  } catch (error) {
    console.error('Email sending failed:', error)
    return false
  }
}

// Email templates
export const getWaitlistConfirmationEmail = (name: string, pgName: string): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Welcome to PG MASTER Waitlist</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
          line-height: 1.6;
          color: #0F0F0F;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: linear-gradient(180deg, #B4DEFF 0%, #D3ECFF 50%, #FFFFFF 100%);
        }
        .container {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(20px);
          border-radius: 24px;
          padding: 40px;
          box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15);
          border: 1px solid rgba(255, 255, 255, 0.4);
        }
        .header {
          text-align: center;
          margin-bottom: 30px;
        }
        .logo {
          width: 80px;
          height: 80px;
          margin: 0 auto 20px;
          display: block;
        }
        .brand-name {
          color: #0F0F0F;
          font-size: 24px;
          font-weight: 700;
          margin: 10px 0;
          letter-spacing: -0.5px;
        }
        .title {
          color: #0F0F0F;
          font-size: 28px;
          font-weight: 700;
          margin: 20px 0 10px;
          letter-spacing: -1px;
        }
        .subtitle {
          color: #5D5B63;
          font-size: 16px;
          margin: 0;
          letter-spacing: -0.5px;
        }
        .content {
          margin: 30px 0;
        }
        .highlight-box {
          background: linear-gradient(135deg, rgba(15, 139, 255, 0.1), rgba(15, 139, 255, 0.05));
          border-radius: 16px;
          padding: 25px;
          margin: 25px 0;
          border: 1px solid rgba(15, 139, 255, 0.2);
        }
        .pg-details {
          background: rgba(243, 250, 255, 0.6);
          border-radius: 12px;
          padding: 20px;
          margin: 20px 0;
          border: 1px solid rgba(15, 139, 255, 0.1);
        }
        .pg-details h3 {
          color: #0F0F0F;
          margin: 0 0 15px;
          font-size: 18px;
          font-weight: 600;
        }
        .detail-item {
          margin: 10px 0;
          font-size: 15px;
          color: #0F0F0F;
        }
        .detail-label {
          font-weight: 600;
          color: #5D5B63;
        }
        .cta-button {
          display: inline-block;
          background: #0F8BFF;
          color: white;
          padding: 14px 28px;
          border-radius: 12px;
          text-decoration: none;
          font-weight: 500;
          margin: 20px 0;
          transition: all 0.3s ease;
          letter-spacing: -0.5px;
          box-shadow: 0 4px 4px rgba(255, 255, 255, 0.35) inset;
        }
        .features {
          margin: 30px 0;
        }
        .feature-item {
          display: flex;
          align-items: flex-start;
          margin: 15px 0;
          font-size: 15px;
          color: #0F0F0F;
        }
        .feature-check {
          width: 24px;
          height: 24px;
          background: #0F0F0F;
          border-radius: 50%;
          margin-right: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 14px;
          font-weight: bold;
          flex-shrink: 0;rgba(15, 139, 255, 0.1);
          color: #5D5B63;
          font-size: 14px;
        }
        .social-links {
          margin: 20px 0;
        }
        .social-links a {
          color: #0F8BFF;
          text-decoration: none;
          margin: 0 10px;
          font-weight: 500;
        }
        @media (max-width: 480px) {
          body { padding: 10px; }
          .container { padding: 24px; }
          .title { font-size: 24px; }
          .logo { width: 60px; height: 60px; }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="cid:logo" alt="PG MASTER Logo" class="logo" />
          <div class="brand-name">PG MASTER</div>
          <h1 class="title">Welcome to the Waitlist!</h1>
          <p class="subtitle">You're now on the waitlist for India's #1 Renting Super App</p>
        </div>

        <div class="content">
          <div class="highlight-box">
            <h2 style="color: #0F0F0F; margin: 0 0 15px; font-size: 20px; font-weight: 700; letter-spacing: -0.5px;">🎉 Congratulations ${name}!</h2>
            <p style="margin: 0; font-size: 16px; color: #0F0F0F; letter-spacing: -0.5px;">
              You've successfully joined the PG MASTERist for India's easiest PG management app</p>
        </div>

        <div class="content">
          <div class="highlight-box">
            <h2 style="color: #240029; margin: 0 0 15px; <strong>${pgName}</strong>
            </div>
            <div class="detail-item">
              <span class="detail-label">Owner/Manager:</span> <strong>${name}</strong>
            </div>
            <div class="detail-item">
              <span class="detail-label">Status:</span> <span style="color: #0F8BFF; font-weight: 600;">Confirmed ✓</span>
            </div>
          </div>

          <h3 style="color: #0F0F0F; margin: 25px 0 15px; font-weight: 700; letter-spacing: -0.5px;">🚀 What's Next?</h3>
          <div class="features">
            <div class="feature-item">
              <div class="feature-check">1</div>
              <span>Our team will contact you within 2-3 business days</span>
            </div>
            <div class="feature-item">
              <div class="feature-check">2</div>
              <span>Get exclusive early access to PGMASTER</span>
            </div>
            <div class="feature-item">
              <div class="feature-check">3</div>
              <span>Free onboarding and setup assistance</span>
            </div>
            <div class="feature-item">
              <div class="feature-check">4</div>
              <span>Priority support and feature requests</span>
            </div>
          </div>

          <h3 style="color: #0F0F0F; margin: 25px 0 15px; font-weight: 700; letter-spacing: -0.5px;">💡 Why You'll Love PGMASTER</h3>
          <div class="features">
            <div class="feature-item">
              <div class="feature-check">✓</div>
              <span><strong>Effortless Smart Rent Automation:</strong> Never chase tenants again</span>
            </div>
            <div class="feature-item">
              <div class="feature-check">✓</div>
              <span><strong>Complete Tenant & Accounting:</strong> All in one dashboard</span>
            </div>
            <div class="feature-item">
              <div class="feature-check">✓</div>
              <span><strong>Properties, Rooms & Complaints:</strong> Digital management</span>
            </div>
            <div class="feature-item">
              <div class="feature-check">✓</div>
              <span><strong>Real-time Updates:</strong> Know everything instantly</span>
            </div>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <a href="${process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'}" class="cta-button" style="color: white;">
              Learn More About PGMASTER
            </a>
          </div>
        </div>

        <div class="footer">
          <p style="color: #0F0F0F; font-weight: 600;">Questions? We're here to help!</p>
          <div class="social-links">
            <a href="mailto:support@pgmaster.com">📧 support@pgmaster.com</a>
            <a href="tel:+919876543210">📞 +91 98765 43210</a>
          </div>
          <p style="margin-top: 20px; font-size: 12px; color: #5D5B63;">
            © 2026 PG MASTER. All rights reserved.<br>
            You received this email because you signed up for our waitlist.
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

// Owner notification email template
export const getOwnerNotificationEmail = (waitlistData: {
  name: string
  email: string
  phone: string
  pgName: string
  beds: string
  location: string
  role: string
  category: string
}): string => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Waitlist Registration</title>
      <style>
        body {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
          line-height: 1.6;
          color: #0F0F0F;
          max-width: 600px;
          margin: 0 auto;
          padding: 20px;
          background: #f5f5f5;
        }
        .container {
          background: white;
          border-radius: 16px;
          padding: 32px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          text-align: center;
          margin-bottom: 24px;
          padding-bottom: 24px;
          border-bottom: 2px solid #0F8BFF;
        }
        .logo {
          width: 60px;
          height: 60px;
          margin: 0 auto 16px;
          display: block;
        }
        .title {
          color: #0F0F0F;
          font-size: 24px;
          font-weight: 700;
          margin: 0;
        }
        .alert-badge {
          display: inline-block;
          background: #0F8BFF;
          color: white;
          padding: 6px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: 600;
          margin-top: 12px;
        }
        .info-grid {
          display: grid;
          gap: 16px;
          margin: 24px 0;
        }
        .info-item {
          background: rgba(15, 139, 255, 0.05);
          padding: 16px;
          border-radius: 8px;
          border-left: 3px solid #0F8BFF;
        }
        .info-label {
          color: #5D5B63;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          margin-bottom: 4px;
        }
        .info-value {
          color: #0F0F0F;
          font-size: 16px;
          font-weight: 500;
        }
        .action-button {
          display: inline-block;
          background: #0F8BFF;
          color: white;
          padding: 12px 24px;
          border-radius: 8px;
          text-decoration: none;
          font-weight: 600;
          margin-top: 20px;
        }
        .footer {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid #eee;
          text-align: center;
          color: #5D5B63;
          font-size: 14px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="cid:logo" alt="PG MASTER Logo" class="logo" />
          <h1 class="title">🔔 New Waitlist Registration</h1>
          <span class="alert-badge">Action Required</span>
        </div>

        <p style="font-size: 16px; color: #0F0F0F; margin: 20px 0;">
          A new PG owner has joined the waitlist. Here are their details:
        </p>

        <div class="info-grid">
          <div class="info-item">
            <div class="info-label">👤 Name</div>
            <div class="info-value">${waitlistData.name}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">📧 Email</div>
            <div class="info-value"><a href="mailto:${waitlistData.email}" style="color: #0F8BFF; text-decoration: none;">${waitlistData.email}</a></div>
          </div>
          
          <div class="info-item">
            <div class="info-label">📱 Phone</div>
            <div class="info-value"><a href="tel:${waitlistData.phone}" style="color: #0F8BFF; text-decoration: none;">${waitlistData.phone}</a></div>
          </div>
          
          <div class="info-item">
            <div class="info-label">🏢 PG Name</div>
            <div class="info-value">${waitlistData.pgName}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">🛏️ Number of Beds</div>
            <div class="info-value">${waitlistData.beds}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">📍 Location</div>
            <div class="info-value">${waitlistData.location}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">💼 Role</div>
            <div class="info-value">${waitlistData.role}</div>
          </div>
          
          <div class="info-item">
            <div class="info-label">🏷️ Category</div>
            <div class="info-value">${waitlistData.category}</div>
          </div>
        </div>

        <div style="background: rgba(255, 193, 7, 0.1); border-left: 3px solid #ffc107; padding: 16px; border-radius: 8px; margin: 24px 0;">
          <p style="margin: 0; color: #0F0F0F; font-weight: 600;">⏰ Next Steps:</p>
          <p style="margin: 8px 0 0 0; color: #5D5B63;">Contact this lead within 2-3 business days for the best conversion rate.</p>
        </div>

        <div class="footer">
          <p style="margin: 0; font-size: 12px;">
            Automated notification from PG MASTER Waitlist System<br>
            ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
          </p>
        </div>
      </div>
    </body>
    </html>
  `
}

export const sendWaitlistConfirmation = async (
  email: string, 
  name: string, 
  pgName: string
): Promise<boolean> => {
  const subject = `🎉 Welcome to PG MASTER Waitlist - You're In!`
  const html = getWaitlistConfirmationEmail(name, pgName)
  
  return sendEmail({
    to: email,
    subject,
    html
  })
}

export const sendOwnerNotification = async (
  waitlistData: {
    name: string
    email: string
    phone: string
    pgName: string
    beds: string
    location: string
    role: string
    category: string
  }
): Promise<boolean> => {
  const ownerEmail = process.env.OWNER_EMAIL || process.env.EMAIL_USER
  
  if (!ownerEmail) {
    console.error('Owner email not configured')
    return false
  }

  const subject = `🔔 New Waitlist Registration - ${waitlistData.pgName}`
  const html = getOwnerNotificationEmail(waitlistData)
  
  return sendEmail({
    to: ownerEmail,
    subject,
    html
  })
}