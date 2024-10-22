// pages/api/contactForm.js
import nodemailer from "nodemailer";

const InstallForm = async (req, res) => {
  try {
    const { vehicle, fuel, service, region, name, phone, email, message } =
      req.body;

    const transporter = nodemailer.createTransport({
      host: "gallo.o2switch.net",
      port: 465,
      secure: true,
      auth: {
        user: "contact@laboiteautomatique.com",
        pass: "Brice008//@@",
      },
    });

    const mailOptions = {
      from: `${email}`,
      to: "contact@laboiteautomatique.com",
      subject: "New Installation Form Submission",
      text: `
            Vehicle: ${vehicle}
            Fuel: ${fuel}
            Service: ${service}
            Region: ${region}
            Name: ${name}
            Phone: ${phone}
            Email: ${email}
            Message: ${message}
          `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Email Sent Successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ message: "Failed to Send Email" });
  }
};

export default InstallForm;
