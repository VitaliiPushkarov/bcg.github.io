$(function () {
  /* Navbar offset */
  const navbar = document.getElementById('navbar');

  document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);

      const navbarHeight = navbar.offsetHeight;


      window.scrollTo({
        top: targetSection.offsetTop - navbarHeight - 110,
        behavior: 'smooth'
      });
    });
    
  });
})
const submit = document.querySelector('#submit')

submit.addEventListener('click', () => {
    event.preventDefault()
})

function sendForm() {
    const newPath = 'thanks.html';
    
    // Get the input value
    const emailInput = document.getElementById('email').value;

    // Regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Test the input against the regular expression
    if (emailRegex.test(emailInput)) {
        document.getElementById('result').textContent = '';
        window.location.href = newPath;
    } else {
        document.getElementById('result').textContent = 'Invalid E-mail. Please enter a valid email address.';
    }
}
const cookieBox = document.querySelector(".cookie-wrapper"),
  buttons = document.querySelectorAll(".cookie-button");

  cookieBox.classList.add("show");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      cookieBox.classList.remove("show");
      cookieBox.classList.add("hidden");

      //if button has acceptBtn id
      if (button.id == "acceptBtn") {
        //set cookies for 1 month. 60 = 1 min, 60 = 1 hours, 24 = 1 day, 30 = 30 days
        document.cookie = "cookieBy= codinglab; max-age=" + 60 * 60 * 24 * 30;
      }
    });
  });
