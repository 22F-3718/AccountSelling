// document.getElementById("orderForm").addEventListener("submit", function (event) {
//     event.preventDefault();

//     let name = document.getElementById("name").value;
//     let email = document.getElementById("email").value;
//     let contact = document.getElementById("contact").value;
//     let plan = document.getElementById("plan").value;

//     let message = `Hello, I would like to order a Netflix account.\n\n` +
//         `📌 Name: ${name}\n📧 Email: ${email}\n📱 WhatsApp Contact: ${contact}\n` +
//         `📺 Selected Plan: ${plan}\n\nPlease provide further details.`;

//     let encodedMessage = encodeURIComponent(message);

//     let whatsappNumber = "923053694346";


//     let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;


//     window.location.href = whatsappURL;
// });
