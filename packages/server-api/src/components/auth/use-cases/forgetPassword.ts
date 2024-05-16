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
    port: 587,
    secure: false,
    auth: {
      user: 'moneykeeperdev@gmail.com',
      pass: 'cwlldrpyeuiaekbt',
    },
  });

  const mailOptions = {
    from: 'moneykeeperdev@gmail.com',
    to: email,
    subject: 'Password Reset',
    html: `<p>You have requested a password reset. Click <a href="https://moneykeeper-dev.netlify.app/change-passord}">here</a> to reset your password. with password: <strong> ${password}</strong> </p>`,
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
