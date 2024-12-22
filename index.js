import hbs from 'nodemailer-express-handlebars';
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

// Import email templates
// const companyTemplate = require('./templates/company');

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'joshod27@gmail.com', // Replace with your email
        pass: 'hlgq bmwk gppk dqyi', // Replace with your email password
    },
});

const handlebarOptions = {
    viewEngine: {
        extName: ".handlebars",
        partialsDir: './templates',
        defaultLayout: false
    },
    viewPath: './templates',
    extName: ".handlebars"
}

const app = express();
app.use(express.json());
app.use(cors({ origin: 'http://localhost:3001', methods: ['GET', 'POST'] }));
transporter.use('compile', hbs(handlebarOptions));



// Send Company Email
app.post('/send-company', async (req, res) => {
    const { message, email } = req.body;
    console.log('Called send-company api')
    try {
        await transporter.sendMail({
            from: 'joshod27@gmail.com',
            to: email,
            subject: `Message from Mirus Grace`,
            template: 'company',
            context: {
                message
            }
            // html: companyTemplate({ message }),
        });

        res.status(200).json({ message: 'Company email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send company email.' });
    }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
