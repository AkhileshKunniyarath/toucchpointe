const axios = require("axios");
const { ContactMessage } = require("../../../models/contact-message.model.cjs");

async function createContactMessage(req, res) {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Name, email, and message are required" });
  }

  const created = await ContactMessage.create({ name, email, message });

  if (process.env.RESEND_API_KEY) {
    await axios.post(
      "https://api.resend.com/emails",
      {
        from: "no-reply@updates.touchpointe.digital",
        to: "contact@touchpointe.digital",
        subject: `New contact from ${name}`,
        html: `<p><strong>Email:</strong> ${email}</p><p>${message}</p>`,
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
  }

  res.json({
    message: "Message sent successfully",
    submission: created.toJSON(),
  });
}

async function getContactMessages(req, res) {
  const limit = Math.min(parseInt(req.query.limit, 10) || 100, 250);
  const messages = await ContactMessage.find({})
    .sort({ createdAt: -1 })
    .limit(limit);

  res.json(messages.map((message) => message.toJSON()));
}

module.exports = { createContactMessage, getContactMessages };
