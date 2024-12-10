document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
    anchor.addEventListener('click',function (e){
        e.preventDefault();

        const targetId = this.getAttribute('href');

        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sendMessageButton = document.getElementById("sendMessage");

    if (sendMessageButton) {
        sendMessageButton.addEventListener("click", function () {
            const whatsappNumber = "+254716677616";

            const name = document.getElementById("name").value;
            const number = document.getElementById("number").value;
            const message = document.getElementById("message").value;

            const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
                `Hello, my name is ${name}. My WhatsApp number is ${number}. Here is my message: ${message}`
            )}`;

            window.open(whatsappURL, "_blank");
        });
    } else {
        console.error("Send Message button not found in the DOM.");
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const buyNowButtons = document.querySelectorAll(".buy-now");
    const whatsappNumber = "+254716677616";

    buyNowButtons.forEach((button) => {
        button.addEventListener("click", function () {
            const confirmRedirect = confirm(
                "You will be redirected to WhatsApp to complete your order. Click OK to continue."
            );

            if (confirmRedirect) {
                const whatsappURL = `https://wa.me/${whatsappNumber}`;
                window.open(whatsappURL, "_blank");
            }
        });
    });
});


