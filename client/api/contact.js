import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      error: "Method not allowed",
    });
  }

  try {
    const {
      name,
      phone,
      email,
      course,
      center,
      pageUrl,
      turnstileToken,
      traffic_source,
      traffic_medium,
      traffic_type,
      landing_page,
      referrer,
      timestamp,
      current_page,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      gclid,
      fbclid,
      msclkid
    } = req.body;

    if (!turnstileToken) {
      return res.status(400).json({ error: "Captcha token missing" });
    }

    const verifyEndpoint = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
    const verifyRes = await fetch(verifyEndpoint, {
      method: 'POST',
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY)}&response=${encodeURIComponent(turnstileToken)}`,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const verifyData = await verifyRes.json();
    if (!verifyData.success) {
      return res.status(400).json({ error: "Captcha verification failed" });
    }

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "hello@catalysthub.in",
      subject: `New Lead: ${name} (${traffic_type || 'Unknown Source'})`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; padding: 20px;">
          <h2 style="color: #2563eb; margin-top: 0;">New Lead Details</h2>
          
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Name:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${name}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${phone}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${email}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Course:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${course}</td></tr>
            <tr><td style="padding: 8px 0; border-bottom: 1px solid #eee;"><strong>Center:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #eee;">${center}</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Submission Time:</strong></td><td style="padding: 8px 0;">${new Date().toLocaleString()}</td></tr>
          </table>

          <h2 style="color: #2563eb; margin-top: 30px;">Traffic Summary</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #555; width: 120px;">Traffic Type</td><td style="padding: 6px 0;"><strong>${traffic_type || 'N/A'}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Source</td><td style="padding: 6px 0;"><strong>${traffic_source || 'N/A'}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Medium</td><td style="padding: 6px 0;"><strong>${traffic_medium || 'N/A'}</strong></td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Landing Page</td><td style="padding: 6px 0; word-break: break-all;">${landing_page || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Current Page</td><td style="padding: 6px 0; word-break: break-all;">${current_page || pageUrl || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Referrer</td><td style="padding: 6px 0; word-break: break-all;">${referrer || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">First Visit</td><td style="padding: 6px 0;">${timestamp ? new Date(timestamp).toLocaleString() : 'N/A'}</td></tr>
          </table>

          <h2 style="color: #2563eb; margin-top: 30px;">Marketing Attribution</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr>
              <td style="padding: 6px 0; color: #555; width: 33%;">Source: <strong>${utm_source || 'N/A'}</strong></td>
              <td style="padding: 6px 0; color: #555; width: 33%;">Medium: <strong>${utm_medium || 'N/A'}</strong></td>
              <td style="padding: 6px 0; color: #555; width: 33%;">Campaign: <strong>${utm_campaign || 'N/A'}</strong></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #555;" colspan="3">Term: <strong>${utm_term || 'N/A'}</strong></td>
            </tr>
            <tr>
              <td style="padding: 6px 0; color: #555;" colspan="3">Content: <strong>${utm_content || 'N/A'}</strong></td>
            </tr>
          </table>

          <h2 style="color: #2563eb; margin-top: 30px;">Click IDs</h2>
          <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
            <tr><td style="padding: 6px 0; color: #555; width: 120px;">Google (gclid)</td><td style="padding: 6px 0; word-break: break-all;">${gclid || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Facebook (fbclid)</td><td style="padding: 6px 0; word-break: break-all;">${fbclid || 'N/A'}</td></tr>
            <tr><td style="padding: 6px 0; color: #555;">Bing (msclkid)</td><td style="padding: 6px 0; word-break: break-all;">${msclkid || 'N/A'}</td></tr>
          </table>
        </div>
      `,
    });

    return res.status(200).json({
      success: true,
    });

  } catch (error) {
    return res.status(500).json({
      error: "Failed to send email",
    });
  }
}