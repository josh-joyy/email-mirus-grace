import hbs from 'nodemailer-express-handlebars';
import express from 'express'
import cors from 'cors'
import nodemailer from 'nodemailer'

// Nodemailer Transporter
const transporter = nodemailer.createTransport({
    host: 'mail.privateemail.com',
    port: 465,
    secure: true,
    auth: {
        user: 'info@mirusgrace.com', // Replace with your email
        pass: 'MirusGrace@27', // Replace with your email password
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

    try {
        await transporter.sendMail({
            from: email,
            to: `info@mirusgrace.com`,
            subject: `Message from Mirus Grace`,
            template: 'company',
            context: {
                message
            }
        });

        res.status(200).json({ message: 'Company email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send company email.' });
    }
});

// Send Mg-Seedlings Email
app.post('/mg-seedlings', async (req, res) => {
    const { message, email, firstName, lastName, phone } = req.body;

    try {
        await transporter.sendMail({
            from: `info@mirusgrace.com`,
            to: `info@mirusgrace.com`,
            subject: `Customer From MG-Seedlings`,
            template: 'company',
            context: {message, email, firstName, lastName, phone}
        });

        res.status(200).json({ message: 'Company email sent successfully!' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to send company email.' });
    }
});


const PORT = 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
