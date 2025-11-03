import nodemailer from 'nodemailer';

const RECIPIENT_EMAIL = 'veluxeinteriors1@gmail.com';

// Create a transporter - you'll need to configure this with your email service
// For Gmail, you'll need to use an App Password
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.error('Email transporter verification failed:', error);
  } else {
    console.log('Email server is ready to send messages');
  }
});

export async function sendConsultationEmail(data: {
  name: string;
  email: string;
  phone: string;
  city: string;
  homeType: string;
  service: string;
  notes?: string;
}) {
  const mailOptions = {
    from: `"${data.name}" <${process.env.EMAIL_USER}>`,
    replyTo: data.email,
    to: RECIPIENT_EMAIL,
    subject: `New Consultation Booking - ${data.name}`,
    html: `
      <h2>New Consultation Booking Request</h2>
      <p>You have received a new consultation booking request with the following details:</p>
      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">City:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.city}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Home Type:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.homeType}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Service:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.service}</td>
        </tr>
        ${data.notes ? `
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Additional Notes:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.notes}</td>
        </tr>
        ` : ''}
      </table>
      
      <p style="margin-top: 20px; color: #666;">
        This email was sent from the Veluxe Interiors website consultation form.
      </p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Consultation email sent successfully:', info.messageId);
    return info;
  } catch (error: any) {
    console.error('Error sending consultation email:', error.message);
    throw error;
  }
}

export async function sendContactEmail(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
  const mailOptions = {
    from: `"${data.name}" <${process.env.EMAIL_USER}>`,
    replyTo: data.email,
    to: RECIPIENT_EMAIL,
    subject: `New Contact Message - ${data.name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p>You have received a new message from your website contact form:</p>
      
      <table style="border-collapse: collapse; width: 100%; max-width: 600px;">
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Name:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Email:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.email}</td>
        </tr>
        <tr style="background-color: #f5f5f5;">
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Phone:</td>
          <td style="padding: 10px; border: 1px solid #ddd;">${data.phone}</td>
        </tr>
        <tr>
          <td style="padding: 10px; border: 1px solid #ddd; font-weight: bold;">Message:</td>
          <td style="padding: 10px; border: 1px solid #ddd; white-space: pre-wrap;">${data.message}</td>
        </tr>
      </table>
      
      <p style="margin-top: 20px; color: #666;">
        This email was sent from the Veluxe Interiors website contact form.
      </p>
    `
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('Contact email sent successfully:', info.messageId);
    return info;
  } catch (error: any) {
    console.error('Error sending contact email:', error.message);
    throw error;
  }
}
