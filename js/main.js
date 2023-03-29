function Validator(options) {

    function validate(inputElement, rule) {

        var errorElement = inputElement.parentElement.querySelector('.form-message');
        var errorMessage = rule.test(inputElement.value);
        

        if (errorMessage) {
            errorElement.innerText = errorMessage;
            inputElement.parentElement.classList.add('invalid');
        } else {
            errorElement.innerText = '';
            inputElement.parentElement.classList.remove('invalid');
        }
    }

    var formElement = document.querySelector(options.form);

    if (formElement) {
        
        options.rules.forEach(function (rule) {
            var inputElement = formElement.querySelector(rule.selector);


            if (inputElement) {
                inputElement.onblur = function() {
                    validate(inputElement, rule);
                }
            }
        });
    }
}


Validator.isEmail = function (selector) {
    return {
        selector: selector,
        test: function(value) {
            return value.trim() ? undefined : 'Please enter a valid email address.'
        }
    };
}

Validator.isPassword = function (selector) {
    return {
        selector: selector,
        test: function() {

        }
    };
}


//get the modal
var modal = document.getElementById('id01');

//when the user clicks anywhere outside of the modal, close it
window.onclick = function(even) {
    if (even.target == modal) {
        modal.style.display = "none";
    }
}


var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}
  slides[slideIndex-1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}


