import Mail from "../lib/Mail";

export default {
  key: 'RegistrationMail',
  async handle({ data }) {
    const { user } = data;

    await Mail.sendMail({
      from: 'Queue Test <queue@queuetest.com.br>',
      to: `${user.name} <${user.email}>`,
      subject: 'User registration',
      html: `Hello, ${user.name}, Welcome to the user registration system :D`
    });
  },
}
