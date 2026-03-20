import { sendEmail } from '@/app/lib/email'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { fullName, phone, email, reason } = body

    if (!phone || typeof phone !== 'string' || phone.trim() === '') {
      return NextResponse.json(
        { error: 'Registered phone number is required' },
        { status: 400 }
      )
    }

    const submittedAt = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'long',
      timeStyle: 'short',
    })

    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Account Deletion Request</title>
</head>
<body style="font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #0F0F0F; max-width: 600px; margin: 0 auto; padding: 20px; background: #f0f7ff;">
  <div style="background: #ffffff; border-radius: 16px; padding: 36px 32px; box-shadow: 0 4px 24px rgba(15,139,255,0.08);">

    <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 28px;">
      <img src="cid:logo" alt="PG MASTER" height="36" style="display:block;" />
    </div>

    <h1 style="font-size: 22px; font-weight: 700; color: #E53935; margin: 0 0 6px 0; letter-spacing: -0.5px;">
      Account Deletion Request
    </h1>
    <p style="font-size: 14px; color: #5D5B63; margin: 0 0 28px 0;">
      Received on ${submittedAt}
    </p>

    <table style="width: 100%; border-collapse: collapse; margin-bottom: 24px;">
      <tbody>
        <tr>
          <td style="padding: 10px 12px; background: #f8fbff; border-radius: 8px; font-size: 13px; font-weight: 600; color: #5D5B63; width: 40%; vertical-align: top;">Full Name</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #0F0F0F; vertical-align: top;">${fullName?.trim() || '—'}</td>
        </tr>
        <tr><td colspan="2" style="height: 6px;"></td></tr>
        <tr>
          <td style="padding: 10px 12px; background: #f8fbff; border-radius: 8px; font-size: 13px; font-weight: 600; color: #5D5B63; vertical-align: top;">Phone Number</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #0F0F0F; font-weight: 600; vertical-align: top;">${phone.trim()}</td>
        </tr>
        <tr><td colspan="2" style="height: 6px;"></td></tr>
        <tr>
          <td style="padding: 10px 12px; background: #f8fbff; border-radius: 8px; font-size: 13px; font-weight: 600; color: #5D5B63; vertical-align: top;">Email</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #0F0F0F; vertical-align: top;">${email?.trim() || '—'}</td>
        </tr>
        <tr><td colspan="2" style="height: 6px;"></td></tr>
        <tr>
          <td style="padding: 10px 12px; background: #f8fbff; border-radius: 8px; font-size: 13px; font-weight: 600; color: #5D5B63; vertical-align: top;">Reason</td>
          <td style="padding: 10px 12px; font-size: 14px; color: #0F0F0F; vertical-align: top;">${reason?.trim() || '—'}</td>
        </tr>
      </tbody>
    </table>

    <div style="background: #fff3f3; border-left: 4px solid #E53935; border-radius: 8px; padding: 14px 16px; margin-bottom: 24px;">
      <p style="margin: 0; font-size: 14px; color: #c62828; font-weight: 600;">Action Required</p>
      <p style="margin: 6px 0 0 0; font-size: 13px; color: #5D5B63;">
        Please verify the user's identity and process this deletion request within 48 hours as per your policy.
      </p>
    </div>

    <p style="font-size: 12px; color: #9CA3AF; margin: 0;">
      This email was generated automatically from the account deletion form at pgmaster.in
    </p>
  </div>
</body>
</html>
`

    const sent = await sendEmail({
      to: 'info@pgmaster.in',
      subject: `Account Deletion Request — ${phone.trim()}`,
      html,
    })

    if (!sent) {
      return NextResponse.json(
        { error: 'Failed to send request. Please try emailing us directly.' },
        { status: 500 }
      )
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    )
  }
}
