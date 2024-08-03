// Initialize EmailJS with your User ID
emailjs.init("PriYq2n2RRMMH2y8E"); // Replace with your EmailJS User ID

function SendMail(event) {
    event.preventDefault(); // Prevent default form submission

    // Get form values
    var email = document.getElementById("Email").value;
    var content = document.getElementById("Area").value;

    // Define template parameters
    var templateParams = {
        to_email: "subburathinam111@gmail.com",
        from_email: email,
        message: content
    };

    // Send email using EmailJS
    emailjs.send('service_4i5i3mi', 'template_k6u177s', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Your message has been sent successfully!');
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send your message. Please try again later.');
        });
}
