console.log('Client side js');
const weatherForm = document.querySelector('form');
const searchElement = document.querySelector('input');
const errorMsg = document.querySelector('.error-msg');
const successMsg = document.querySelector('.success-msg');

errorMsg.textContent = '';
successMsg.textContent = '';

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const location = searchElement.value;
    errorMsg.textContent = 'Loading...';
    successMsg.textContent = '';

    fetch('http://localhost:3000/weather?address='+encodeURIComponent(location)).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                errorMsg.textContent = data.error;
            } else {
                errorMsg.textContent = data.location;
                successMsg.textContent = data.forecast;
            }
        })
    });
})