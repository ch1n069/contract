const nodemailer = require("nodemailer");
const hbs = require("nodemailer-express-handlebars");
const path = require("path");
const dotenv = require("dotenv");
dotenv.config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  // host: "smtp.gmail.com",
  // port: 587,
  // secure: false,
  auth: {
    user: process.env.NODE_MAILER_EMAIL,
    pass: process.env.NODE_MAILER_EMAIL_PASSWORD,
  },
});

// point to the template folder
const handlebarOptions = {
  viewEngine: {
    partialsDir: path.resolve("../views"),
    defaultLayout: false,
  },
  viewPath: path.resolve("./views/"),
};
transporter.use("compile", hbs(handlebarOptions));

const mailOptions = {
  from: {
    name: "SIEC Contract Visualizer",
    address: process.env.NODE_MAILER_EMAIL,
  },
  to: [
    "brunolalpachino@gmail.com",
    "brunogatiba@siecindia.com",
    // "guru@siecindia.com",
  ],
  template: "email",
  subject: "Template testing ",
  context: { name: "Test users", company: "SIEC Contract Visualizer" },
};

const sendMail = async (transporter, mailOptions) => {
  try {
    await transporter.sendMail(mailOptions);
    console.log("email was sent");
  } catch (error) {
    console.log(error.message);
  }
};

sendMail(transporter, mailOptions);
