// Contact form submission handler
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
      
    const name = this.querySelector('input[name="name"]').value;
    const phone = this.querySelector('input[name="phone"]').value;
    const email = this.querySelector('input[name="email"]').value;
    const message = this.querySelector('textarea[name="message"]').value;
      
    const emailTo = "barrossuperiorassetsolutions@gmail.com";
    const subject = encodeURIComponent(`Interior Detailing Quote Request - ${name}`);
      
    const bodyMessage = `Name: ${name}\n` +
                        `Phone: ${phone}\n` +
                        `Email: ${email}\n\n` +
                        `Vehicle & Detailing Details:\n${message}`;
                          
    const body = encodeURIComponent(bodyMessage);
      
    window.location.href = `mailto:${emailTo}?subject=${subject}&body=${body}`;
});
