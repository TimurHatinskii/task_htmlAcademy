let reviews = document.querySelectorAll('.review');
let submit = document.querySelector('.submit-button');
let error = document.querySelector('.error');


for (let review of reviews) {
    review.onchange = function () {
    if (review.dataset.evaluation === 'bad') {
        error.classList.add('shown');
        submit.setAttribute('disabled', true);
    } else {
        error.classList.remove('shown');
        submit.removeAttribute('disabled');
    }
  };
  }