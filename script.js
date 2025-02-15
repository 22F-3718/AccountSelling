document.getElementById("orderForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let plan = document.getElementById("plan").value;


    if (!/^[A-Za-z\s]+$/.test(name)) {
        alert("Invalid name! Please enter only letters and spaces.");
        return;
    }

    let sanitizedName = name.replace(/[<>]/g, "");

    let message = `Hello, I would like to order a Netflix account.\n\n` +
        `📌 Name: ${sanitizedName}\n` +
        `📺 Selected Plan: ${plan}\n\nPlease provide further details.`;

    let encodedMessage = encodeURIComponent(message);
    let whatsappNumber = "923053694346";
    let whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    if (confirm("Do you want to proceed to WhatsApp?")) {
        window.location.href = whatsappURL;
    }
});
