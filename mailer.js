const nodemailer = require("nodemailer");

// إعدادات Gmail
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your_email@gmail.com", // بريدك الإلكتروني
    pass: "your_app_password" // كلمة مرور التطبيق
  }
});

const mailOptions = {
  from: "your_email@gmail.com",
  to: "recipient_email@gmail.com",
  subject: "رسالة من الموقع",
  text: "هذه رسالة تجريبية باستخدام Node.js"
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    return console.log("خطأ:", error);
  }
  console.log("تم الإرسال:", info.response);
});
