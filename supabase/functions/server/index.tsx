import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-2821aa23/health", (c) => {
  return c.json({ status: "ok" });
});

// Contact form submission endpoint
app.post("/make-server-2821aa23/contact", async (c) => {
  try {
    const body = await c.req.json();
    const { firstName, lastName, email, topic, phone, message, company } = body;

    // Get Resend API key from environment
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    
    if (!resendApiKey) {
      console.log("Error: RESEND_API_KEY not found in environment variables");
      return c.json({ error: "Email service not configured" }, 500);
    }

    // Format the email content
    const emailContent = `
New Contact Form Submission

From: ${firstName} ${lastName}
Email: ${email}
${phone ? `Phone: ${phone}` : ''}
${company ? `Company/Organization: ${company}` : ''}

Topic: ${topic}

Message:
${message}
    `.trim();

    // Send email using Resend
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${resendApiKey}`,
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
      console.log("Resend API error:", data);
      return c.json({ error: "Failed to send email", details: data }, 500);
    }

    console.log("Email sent successfully:", data);
    return c.json({ success: true, message: "Email sent successfully" });
  } catch (error) {
    console.log("Error processing contact form:", error);
    return c.json({ error: "Internal server error" }, 500);
  }
});

Deno.serve(app.fetch);