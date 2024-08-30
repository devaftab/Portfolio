import express from "express";
import nodemailer from "nodemailer";

const contactRoute = express.Router();

contactRoute.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    if (!name || !email || !message) {
      return res.status(400).json({ message: "Please fill out all fields" });
    }

    //transporter object using SMTP
    const transporter = nodemailer.createTransport({
      service: "Gmail",
      auth: {
        user: process.env.USER_EMAIL,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.RECEIVER_EMAIL,
      subject: `Message from ${name} (devaftab)`,
      text: message,
      html: `
        <h3>Client Details</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    // Send email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error occurred:", error.message);
        return res.status(500).json({
          message: "Failed to send the message, please try again later.",
        });
      } else {
        console.log("Email sent:", info.response);
        return res.status(200).json({
          message:
            "Message sent successfully. We will get back to you shortly.",
        });
      }
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Server error, try again later." });
  }
});

export default contactRoute;
