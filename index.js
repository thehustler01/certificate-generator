const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON requests
app.use(express.json());

// CORS middleware
app.use(cors());

app.use(express.static('public'));

// Define a route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Define a sample route
// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});




// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// // Middleware to parse JSON requests
// app.use(express.json());


// app.use(express.static('public'));

// // Define a route to serve index.html
// app.get('/', (req, res) => {
//     // res.sendFile(path.join(__dirname, 'public', 'index.html'));
//     const teamID = req.query.teamID; 
//     const memberName = req.query.member;
//     // res.send(`Team ID: ${teamID}, Member Name: ${memberName}`);
//     res.send(generateCertificate(teamID, memberName));


    
//     function generateCertificate(teamID, memberName) {
//       const { jsPDF } = window.jspdf;
//       const imgUrl = 'public/certificate-template.png'; // Path to your certificate image
    
//       const img = new Image();
//       img.src = imgUrl;
    
//       img.onload = function () {
//         // Get the image dimensions in pixels
//         const imgWidthPx = img.width;
//         const imgHeightPx = img.height;
    
//         // Convert pixels to millimeters (1 px = 0.264583 mm)
//         const imgWidthMm = imgWidthPx * 0.264583;
//         const imgHeightMm = imgHeightPx * 0.264583;
    
//         // Create a new PDF with dimensions matching the image
//         const doc = new jsPDF({
//           orientation: 'landscape',
//           unit: 'mm',
//           compressPdf: true,
//           format: [imgWidthMm, imgHeightMm] // Set page size to the image size
//         });
    
//         // Add the image to the PDF without scaling
//         doc.addImage(img, 'PNG', 0, 0, imgWidthMm, imgHeightMm);
    
//          // Set font style, size, and color
//          doc.setFont('helvetica','Bold'); // Font: helvetica, Style: bold
//          doc.setFontSize(28); // Set font size to 28
//          doc.setTextColor(0, 0, 0); // Set text color to blue (RGB)
    
//          // Center the text horizontally
//         // const teamIDText = `${teamID}`;
//         // const memberNameText = `${memberName}`;
//         const teamIDText = teamID ;
//         const memberNameText = memberName ;
    
//         const teamIDTextWidth = doc.getTextWidth(teamIDText);
//         const memberNameTextWidth = doc.getTextWidth(memberNameText);
    
//         // Position the text at the center of the page
//         const xPosTeamID = (imgWidthMm - teamIDTextWidth) / 2;
//         const xPosMemberName = (imgWidthMm - memberNameTextWidth) / 2;
    
//         // Add the text
//         doc.text(teamIDText, 95, imgHeightMm - 26); // 40 mm from the bottom for Team ID
//         doc.text(memberNameText, xPosMemberName, imgHeightMm - 180); // 20 mm from the bottom for Member Name
    
//         // Save the PDF
//         doc.save(`${memberName}_certificate.pdf`);
//         res.send("successful");
//       };
// });

// // Define a sample route
// // app.get('/', (req, res) => {
// //     res.send('Hello World!');
// // });

// // Start the server
// app.listen(PORT, () => {
//     console.log(`Server running on port ${PORT}`);
// });
