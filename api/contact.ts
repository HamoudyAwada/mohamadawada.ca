export const config = { runtime: "edge" };

interface ContactBody {
  firstName: string;
  lastName: string;
  email: string;
  topic: string;
  phone?: string;
  message: string;
  company?: string;
}

export default async function handler(request: Request): Promise<Response> {
  if (request.method !== "POST") {
    return Response.json({ error: "Method not allowed" }, { status: 405 });
  }

  const body = (await request.json()) as ContactBody;
  const { firstName, lastName, email, topic, phone, message, company } = body;

  if (!firstName || !lastName || !email || !topic || !message) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  const resendApiKey = process.env.RESEND_API_KEY;

  if (!resendApiKey) {
    console.error("Error: RESEND_API_KEY not found in environment variables");
    return Response.json({ error: "Email service not configured" }, { status: 500 });
  }

  const emailContent = `
New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
${phone ? `Phone: ${phone}` : ""}
${company ? `Company/Organization: ${company}` : ""}

Topic: ${topic}

Message:
${message}
  `.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Contact Form <onboarding@resend.dev>",
      to: "moeawada04@gmail.com",
      subject: `New Contact Form: ${topic} - ${firstName} ${lastName}`,
      text: emailContent,
      reply_to: email,
    }),
  });

  const data = await response.json();

  if (!response.ok) {
    console.error("Resend API error:", data);
    return Response.json({ error: "Failed to send email", details: data }, { status: 500 });
  }

  return Response.json({ success: true, message: "Email sent successfully" });
}
