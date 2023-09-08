"use strict";
// taken from Bootstrap's form validation
checkFormValid();

function checkFormValid() {
  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault()
        event.stopPropagation()
      }
      // Adds .was-validated class and redirect function
      form.classList.add('was-validated')
      RedirectToHome();
    }, false)
  })
}

// Redirect function
function RedirectToHome()
{
  window.alert("Feedback submitted! Redirecting you to home page...");
  window.location.href ='index.html';
}


  



