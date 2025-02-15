window.onload = function () {
    emailjs.init("yd5vwBKZZwWMgh1Tv"); // Your EmailJS User ID
};

document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let contact = document.getElementById("contact").value;
    let plan = document.getElementById("plan").value;

    let userMessage = `Dear ${name},\n\nThank you for placing your order! Your selected plan: ${plan}\nWe will contact you shortly.\n\nRegards,\nNetflix Accounts Team`;

    let adminMessage = `New Order Received!\n\nName: ${name}\nEmail: ${email}\nWhatsApp Contact: ${contact}\nSelected Plan: ${plan}`;

    emailjs.send("service_cfex3m4", "template_vyan3op", {
        from_name: "Netflix Accounts Team",
        to_name: name,
        to_email: email,
        message: userMessage
    }).then(response => {
        console.log("User Email sent successfully:", response);
    }).catch(error => {
        console.error("Error sending email to user:", error);
    });

    emailjs.send("service_cfex3m4", "template_vyan3op", {
        from_name: "Netflix Orders",
        to_name: "Admin",
        to_email: "mhussnainzardari34@gmail.com",
        message: adminMessage
    }).then(response => {
        console.log("Admin Email sent successfully:", response);
    }).catch(error => {
        console.error("Error sending email to admin:", error);
    });

    alert(`Thank you, ${name}! Your order for ${plan} Plan has been received.`);

    document.getElementById("orderForm").reset();
});
