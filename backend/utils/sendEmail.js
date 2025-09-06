
// import nodemailer from "nodemailer";

// export const sendEmail = async (to, subject, htmlContent) => {
//   try {
//     const transporter = nodemailer.createTransport({
//       service: "gmail",
//       auth: {
//         user: process.env.EMAIL_USER,
//         pass: process.env.APP_PASS,
//       },
//     });

//     const mailOptions = {
//       from: process.env.EMAIL_USER,
//       to,
//       subject,
//       html: htmlContent,
//     };

//     await transporter.sendMail(mailOptions);
//   } catch (error) {
//     throw new Error("Failed to send email: " + error.message);
//   }
// };
import { Resend } from "resend";

const resend = new Resend("re_YMgJmGxL_4YVaKvYxcBrGAEx6keCokQzk");

export const sendEmail = async (to, subject, htmlContent) => {
  try {
    const { data, error } = await resend.emails.send({
      from: "MedPredict@insightops.in",  // Must match your verified domain
      to,
      subject,
      html: htmlContent,
    });

    if (error) {
      throw new Error("Resend error: " + error.message);
    }

    // console.log("Email sent:", data);
    return data;
  } catch (err) {
    throw new Error("Failed to send email: " + err.message);
  }
};
