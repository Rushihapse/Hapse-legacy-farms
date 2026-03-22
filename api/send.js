import { Resend } from 'resend';

const resend = new Resend('re_Vyc4fcvk_Az1MCvQfMCah2b5TfqtyiwyC');

export default async (req, res) => {
  const { firstName, lastName, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: 'Hapse Farm <onboarding@resend.dev>', // You'll need to verify your domain to change this
      to: ['hapselegacyfarms@gmail.com'],
      subject: `New Message from ${firstName} ${lastName}`,
      html: `<p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong> ${message}</p>`,
    });

    res.status(200).json(data);
  } catch (error) {
    res.status(400).json(error);
  }
};