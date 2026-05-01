// EmailJS
emailjs.init("yJuTDMkxuuw94LM8b");

function openPopup() {
  document.getElementById("popup-overlay").classList.add("active");
}

function closePopup() {
  document.getElementById("popup-overlay").classList.remove("active");
}

function sendEmail() {
  const btn = document.getElementById("send-btn");
  const status = document.getElementById("form-status");

  const name = document.getElementById("from_name").value;
  const email = document.getElementById("from_email").value;
  const message = document.getElementById("message").value;

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    return;
  }

  btn.textContent = "Sending...";
  btn.disabled = true;

  emailjs.send("service_9sm4ylf", "template_2mdr5hu", {
    from_name: name,
    from_email: email,
    message: message

    }).then(() => {
    status.textContent = "Message sent successfully 🎉";
    btn.textContent = "Send Message";
    btn.disabled = false;
    document.getElementById("from_name").value = "";
    document.getElementById("from_email").value = "";
    document.getElementById("message").value = "";
    setTimeout(() => {
      closePopup();
      status.textContent = "";
    }, 2000);
  
//   }).then(() => {
//     status.textContent = "Message sent successfully 🎉";
//     btn.textContent = "Send Message";
//     btn.disabled = false;
//     document.getElementById("from_name").value = "";
//     document.getElementById("from_email").value = "";
//     document.getElementById("message").value = "";


  }).catch(() => {
    status.textContent = "Something went wrong. Please try again.";
    btn.textContent = "Send Message";
    btn.disabled = false;
  });
}

// Scroll animation
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


// const observer = new IntersectionObserver((entries) => {
// entries.forEach(e => {
// if (e.isIntersecting) e.target.classList.add('visible');
// });
// }, { threshold: 0.12 });

// document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));


