import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { name, email, message } = await req.json();

    // Validate input
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Or use "smtp"
      auth: {
        user: process.env.EMAIL_USER, // your Gmail address
        pass: process.env.EMAIL_PASS, // your Gmail app password
      },
    });

    const mailOptions = {
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: "📩 New Message from Your Portfolio Contact Form",
      html: `
  <div style="background-color: #f3f4f6; padding: 20px; font-family: Arial, sans-serif;">
    <table style="max-width: 600px; margin: 0 auto; background: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 10px rgba(0,0,0,0.08);">
      
      <!-- HEADER -->
      <tr>
        <td style="background-color: #1d4ed8; text-align: center; padding: 30px 20px;">
          <img src="https://fra.cloud.appwrite.io/v1/storage/buckets/68b402df0025e6a98f79/files/68b402f40019cb8a68cb/view?project=beb-planner&mode=admin" alt="Logo" style="max-width: 80px; border-radius: 50%; margin-bottom: 10px;" />
          <h1 style="color: #ffffff; font-size: 24px; margin: 0;">New Contact Message</h1>
        </td>
      </tr>

      <!-- BODY -->
      <tr>
        <td style="padding: 30px;">
          <h2 style="color: #333333; font-size: 20px; margin-bottom: 15px;">You've got a new message!</h2>
          <p style="font-size: 16px; color: #555; margin-bottom: 20px;">
            Someone just reached out via your portfolio contact form. Here are the details:
          </p>
          
          <!-- DETAILS TABLE -->
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 10px; background: #f9fafb; border-radius: 6px; width: 120px; font-weight: bold; color: #1f2937;">Name:</td>
              <td style="padding: 10px; color: #333;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9fafb; border-radius: 6px; font-weight: bold; color: #1f2937;">Email:</td>
              <td style="padding: 10px; color: #333;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px; background: #f9fafb; border-radius: 6px; font-weight: bold; color: #1f2937;">Message:</td>
              <td style="padding: 10px; color: #333; white-space: pre-line;">${message}</td>
            </tr>
          </table>

          <!-- CTA BUTTON -->
          <div style="text-align: center; margin-top: 25px;">
            <a href="mailto:${email}" 
              style="display: inline-block; background: #1d4ed8; color: #fff; text-decoration: none; padding: 12px 24px; font-size: 16px; border-radius: 8px; font-weight: bold;">
              Reply to ${name}
            </a>
          </div>
        </td>
      </tr>

      <!-- FOOTER -->
      <tr>
        <td style="background: #f3f4f6; text-align: center; padding: 20px; font-size: 14px; color: #6b7280;">
          <p style="margin: 0;">This email was sent from your <a href="https://www.noaligpitan.site/" style="color: #1d4ed8; text-decoration: none;">Portfolio Website</a></p>
          <p style="margin: 5px 0;">&copy; ${new Date().getFullYear()} Noa Ligpitan. All rights reserved.</p>

          <!-- SOCIAL ICONS -->
          <div style="margin-top: 15px;">
            <a href="https://github.com/Noah202226" style="margin: 0 8px; display: inline-block;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733553.png" alt="GitHub" width="24" height="24" style="vertical-align: middle;" />
            </a>
            <a href="https://www.linkedin.com/in/noaligpitan26/" style="margin: 0 8px; display: inline-block;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733561.png" alt="LinkedIn" width="24" height="24" style="vertical-align: middle;" />
            </a>
            <a href="https://x.com/Xavier26_2022" style="margin: 0 8px; display: inline-block;">
              <img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" width="24" height="24" style="vertical-align: middle;" />
            </a>
          </div>
        </td>
      </tr>
    </table>
  </div>
  `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ success: true, message: "Email sent successfully!" }),
      { status: 200 }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
    });
  }
}
