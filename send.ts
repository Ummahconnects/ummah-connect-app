import dotenv from 'dotenv';
import sgMail from '@sendgrid/mail';

// Load environment variables from .env file
dotenv.config();

// Check if SENDGRID_API_KEY is defined
if (!process.env.SENDGRID_API_KEY) {
  throw new Error('SENDGRID_API_KEY is not defined in the environment variables.');
}

// Set the SendGrid API key
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'info@ummah-connects.com', // Replace with the recipient's email
  from: 'naasir.bruce@ummah-connects.com', // Replace with your verified sender email
  subject: 'Welcome to Ummah Connect!',
  text: 'Thank you for signing up!',
  html: '<strong>Welcome to Ummah Connect!</strong>',
};

// Send the email
sgMail
  .send(msg)
  .then(() => {
    console.log('✅ Email sent');
  })
  .catch((error) => {
    console.error('❌ Email failed:', error.response ? error.response.body : error);
  });