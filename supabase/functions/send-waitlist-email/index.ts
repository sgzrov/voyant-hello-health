import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }

  try {
    const { email } = await req.json()

    if (!email) {
      return new Response(
        JSON.stringify({ error: 'Email is required' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 400,
        }
      )
    }

    // You'll need to add RESEND_API_KEY to your Supabase Edge Function Secrets
    const resendApiKey = Deno.env.get('RESEND_API_KEY')
    
    if (!resendApiKey) {
      return new Response(
        JSON.stringify({ error: 'Email service not configured' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    const emailData = {
      from: 'Voyant <onboarding@resend.dev>',
      to: [email],
      subject: 'Welcome to the Voyant Waitlist! 🚀',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Voyant Waitlist</title>
          </head>
          <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 40px 20px;">
            <div style="text-align: center; margin-bottom: 40px;">
              <h1 style="color: #2563eb; font-size: 32px; margin-bottom: 8px;">Welcome to Voyant! 🎉</h1>
              <p style="font-size: 18px; color: #64748b; margin: 0;">You're officially on the waitlist</p>
            </div>
            
            <div style="background: linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%); border-radius: 12px; padding: 32px; margin-bottom: 32px; border: 1px solid #e2e8f0;">
              <h2 style="color: #1e293b; font-size: 24px; margin-bottom: 16px;">What happens next?</h2>
              <ul style="list-style: none; padding: 0; margin: 0;">
                <li style="display: flex; align-items: flex-start; margin-bottom: 16px;">
                  <span style="background: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">1</span>
                  <div>
                    <strong style="color: #1e293b;">You'll be first to know</strong><br>
                    <span style="color: #64748b;">Get exclusive early access when we launch</span>
                  </div>
                </li>
                <li style="display: flex; align-items: flex-start; margin-bottom: 16px;">
                  <span style="background: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">2</span>
                  <div>
                    <strong style="color: #1e293b;">Behind-the-scenes updates</strong><br>
                    <span style="color: #64748b;">Exclusive development insights and sneak peeks</span>
                  </div>
                </li>
                <li style="display: flex; align-items: flex-start;">
                  <span style="background: #2563eb; color: white; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 12px; font-weight: bold; margin-right: 12px; flex-shrink: 0;">3</span>
                  <div>
                    <strong style="color: #1e293b;">Special launch pricing</strong><br>
                    <span style="color: #64748b;">Waitlist members get exclusive discounts</span>
                  </div>
                </li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-bottom: 32px;">
              <p style="font-size: 16px; color: #64748b; margin-bottom: 24px;">
                We're working hard to transform health conversations with AI. 
                Your spot is secured and we can't wait to show you what we're building!
              </p>
              <div style="background: #2563eb; color: white; padding: 16px 24px; border-radius: 8px; display: inline-block; font-weight: 600;">
                🎯 You're on the list!
              </div>
            </div>
            
            <div style="border-top: 1px solid #e2e8f0; padding-top: 32px; text-align: center;">
              <p style="font-size: 14px; color: #94a3b8; margin: 0;">
                Thanks for your interest in Voyant.<br>
                Have questions? Just reply to this email - we'd love to hear from you!
              </p>
            </div>
          </body>
        </html>
      `
    }

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${resendApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(emailData),
    })

    if (!response.ok) {
      const error = await response.text()
      console.error('Resend API error:', error)
      return new Response(
        JSON.stringify({ error: 'Failed to send email' }),
        {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
          status: 500,
        }
      )
    }

    const result = await response.json()
    
    return new Response(
      JSON.stringify({ success: true, messageId: result.id }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    )

  } catch (error) {
    console.error('Error sending email:', error)
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    )
  }
})