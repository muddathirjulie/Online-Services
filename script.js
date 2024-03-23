

const bookingForm = document.getElementById('bookingForm');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault();


    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;

    if (name === '' || email === '' || phone === '' || address === '' || date === '' || time === '') {
        alert('Please fill in all fields.');
    } else {
        this.submit();
    }
});

const urlParams = new URLSearchParams(window.location.search);
      const serviceName = urlParams.get("service");

      const serviceNameElement = document.getElementById("serviceName");
      if (serviceName) {
        serviceNameElement.textContent = serviceName;
      }
