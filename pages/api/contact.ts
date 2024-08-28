import type { NextApiRequest, NextApiResponse } from "next";
import FormData from "form-data";
import Mailgun from "mailgun.js";

const API_KEY = process.env.MAILGUN_API_KEY || "";
const DOMAIN = process.env.MAILGUN_DOMAIN || "";
const EMAIL_RECIPIENT = process.env.EMAIL_RECEPIENT || "";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { name, email, message } = req.body;

  const mailgun = new Mailgun(FormData);
  const client = mailgun.client({
    username: "api",
    key: API_KEY,
  });

  const messageData = {
    from: "No Reply <noreply@mg.chrisgardiner.org>",
    to: EMAIL_RECIPIENT,
    subject: "New message from Chris Gardiner's Portfolio",
    text: `Hello,
    
    You have a new message from ${name} (${email}):
    
    ${message}`,
  };

  try {
    const emailRes = await client.messages.create(DOMAIN, messageData);
  } catch (err: any) {
    console.error("Error seding email", err);
  }

  res.status(200).json({ submitted: true });
}
