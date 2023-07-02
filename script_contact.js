function sendEmail() {
    var name = document.querySelector('input[type="text"][placeholder="Your name please"]').value;
    var email = document.querySelector('input[type="email"][placeholder="A contact email"]').value;
    var country = document.querySelector('.country-menu').value;
    var help = document.querySelector('.help').value;
    var subject = "Contact Form Submission from " + name;
    var body = `Name: ${name}
                Email: ${email} 
                Country: ${country} 
                Help: ${help}`;
    window.location.href = "mailto:yxw7416@gmail.com?subject=" + subject + "&body=" + body;
}
