function toggleMenu() {
    var navbarDropdown = document.getElementById("navbar-dropdown");
    var menuIcon = document.querySelector(".menu-icon");
    
    menuIcon.classList.toggle("open");
    
    if (navbarDropdown.style.display === "block") {
        navbarDropdown.style.display = "none";
    } else {
        navbarDropdown.style.display = "block";
    }
}

document.addEventListener("DOMContentLoaded", function() {
    const navbarMenu = document.querySelector('.navbar-menu');
    const underline = document.querySelector('.underline');
    const navItems = document.querySelectorAll('.navbar-menu ul li a:not(.contact-button)');
    const dropdownMenu = document.querySelector('.navbar-dropdown');
    const dropdownUnderline = document.querySelector('.underline-dropdown');
    const dropdownNavItems = document.querySelectorAll('.navbar-dropdown nav ul li a');

    const currentPage = window.location.pathname.split('/').pop();

    function setUnderline(item, underlineElement) {
        const itemRect = item.getBoundingClientRect();
        const parentRect = item.closest('nav').getBoundingClientRect();
        underlineElement.style.width = `${itemRect.width}px`;
        underlineElement.style.left = `${itemRect.left - parentRect.left}px`;
    }

    const currentNavItem = Array.from(navItems).find(item => {
        const itemPath = item.getAttribute('href').split('/').pop();
        return itemPath === currentPage || (currentPage === '' && itemPath === '#about');
    });

    const currentDropdownNavItem = Array.from(dropdownNavItems).find(item => {
        const itemPath = item.getAttribute('href').split('/').pop();
        return itemPath === currentPage || (currentPage === '' && itemPath === '#about');
    });

    if (currentNavItem) {
        setUnderline(currentNavItem, underline);
    } else if (currentDropdownNavItem) {
        setUnderline(currentDropdownNavItem, dropdownUnderline);
    }
    
    navItems.forEach(item => {
        item.addEventListener('mouseover', function() {
            setUnderline(item, underline);
        });

        item.addEventListener('mouseleave', function() {
            if (currentNavItem) {
                setUnderline(currentNavItem, underline);
            } else {
                underline.style.width = '0';
            }
        });

        item.addEventListener('click', function() {
            setUnderline(item, underline);
            // Do not prevent default behavior to ensure the page navigates
        });
    });
});

const express = require('express');
const multer = require('multer');
const nodemailer = require('nodemailer');
const app = express();

const upload = multer({ dest: 'uploads/' });

app.post('/submit-application', upload.single('cv'), (req, res) => {
    const { name, email, role, qualification, location, coverLetter } = req.body;
    const cv = req.file;

    // Configure nodemailer with your email service
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'your-email@gmail.com',
            pass: 'your-email-password'
        }
    });

    let mailOptions = {
        from: 'your-email@gmail.com',
        to: 'owner@example.com',
        subject: `New Job Application: ${role}`,
        text: `
            Name: ${name}
            Email: ${email}
            Role: ${role}
            Qualification: ${qualification}
            Location: ${location}
            Cover Letter: ${coverLetter}
        `,
        attachments: [
            {
                filename: cv.originalname,
                path: cv.path
            }
        ]
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
            res.status(500).send('Error sending email');
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200).send('Application submitted successfully');
        }
    });
});

app.listen(3000, () => console.log('Server running on port 3000'));