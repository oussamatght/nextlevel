import { Resend } from 'resend';

const resend = new Resend('re_jLjLSzrU_Chh6ueCnRfv65APG3JBifp75');

resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'oussamatght6@gmail.com',
    subject: 'Hello World',
    html: '<p>Congrats on sending your <strong>first email</strong>!</p>'
});