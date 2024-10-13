import UserModel from '@/models/user.model';
import { BadRequestError } from '@enigma-laboratory/shared';
import { nanoid } from 'nanoid';
import nodemailer from 'nodemailer';
import { AuthValidation } from '../validation';

// Function to generate a password
function generatePassword(): string {
  return nanoid(10);
}

// Function to send email
async function sendEmail(email: string, password: string): Promise<void> {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'moneykeeperdev@gmail.com',
      pass: 'cwlldrpyeuiaekbt',
    },
  });

  const mailOptions = {
    from: 'moneykeeperdev@gmail.com',
    to: email,
    subject: '[MoneyKeeper] Reset your password',
    html: `
      <div style="font-family: 'Amazon Ember', Arial, sans-serif; background-color: #f3f4f6; padding: 20px;">
        <div style="max-width: 600px; margin: auto; background: white; padding: 20px; text-align: center; border-radius: 8px;">
          <h1 style="color: #232f3e;">Password Reset Required</h1>
          <p style="font-size: 16px; color: #666;">Hello,</p>
          <p style="font-size: 16px; color: #666;">You have requested to reset your password. Please use the following temporary password to log in:</p>
          <p style="font-size: 24px; color: #0073bb; margin: 20px;"><strong>${password}</strong></p>
          <p style="font-size: 16px; color: #666;">For your security, please update your password after logging in.</p>
          <a href="https://money-keeper-zeta.vercel.app/login" style="display: inline-block; background-color: #0073bb; color: white; padding: 10px 20px; margin: 20px auto; border-radius: 4px; text-decoration: none; font-size: 16px;">Go to login </a>
          <p style="font-size: 16px; color: #666;">If you did not request this, please ignore this email or contact support if you have concerns.</p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(mailOptions);
}

// Function to reset password by email
export async function resetPasswordByEmail(email: string): Promise<void> {
  const validate = AuthValidation.instance.forgotPasswordValidate({ email });
  if (validate.error) throw new BadRequestError(validate.error.message);

  // Check if the user exists with the provided email address
  const user = await UserModel.findOne({ email });
  if (!user) {
    throw new BadRequestError('User not found with the provided email address');
  }

  // Generate reset token
  const newPassword = generatePassword();
  user.password = newPassword;

  await user.save();

  // Send reset token to user's email
  await sendEmail(email, newPassword);
}
