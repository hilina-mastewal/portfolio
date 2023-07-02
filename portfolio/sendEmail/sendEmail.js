// for a full working demo of Netlify Identity + Functions, see https://netlify-gotrue-in-react.netlify.com/

const nodemailer = require("nodemailer");

exports.handler = async (event, context) => {
  const { name, email, subject, message } = JSON.parse(event.body);

  try {
    // Set up your email transport
    const transporter = nodemailer.createTransport({
      // Replace the options with your email provider configuration
      host: "smtp.example.com",
      port: 587,
      secure: false,
      auth: {
        user: "Hilinamastewalue6602.com",
        pass: "Hilimast",
      },
    });

    // Set up email content
    const mailOptions = {
      from: "noreply@example.com", // Replace with the "from" email address
      to: "Hilinamastewalue6602@example.com", // Replace with your email address
      subject,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return {
      statusCode: 200,
      body: "Email sent successfully.",
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: error.message }),
    };
  }
};
