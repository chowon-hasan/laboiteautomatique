// pages/api/contactForm.js
import nodemailer from "nodemailer";

const ContactForm = async (req, res) => {
  try {
    const { email, phone, name, message, category } = req.body;

    const transporter = nodemailer.createTransport({
      host: "mail.laboiteautomatique.com",
      port: 587,
      secure: false,
      auth: {
        user: "contact@laboiteautomatique.com",
        pass: "Brice008//@@",
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "contact@laboiteautomatique.com",
      subject: "New Contact Form Submission",
      text: `
Un utilisateur à rempli le formulaire de contact sur le site https://laboiteautomatique.com :\n\nEmail: ${email}\n\nTéléphone: ${phone}\n\nNom et prénom: ${name}\n\nCatégorie: ${category}\n\nMessage: ${message}
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to Send Email" });
  }
};
export default ContactForm;
