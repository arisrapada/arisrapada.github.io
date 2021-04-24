function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  let form = document.querySelector('#form-obs');
  let submitBtn = document.querySelector('#submit');
  submitBtn.onclick = (event)=>{
    form.classList.add('was-validated');
  }
  
  form["latitude"].oninput('event',()=>{
    let lat = form["latitude"].value;
    console.log(lat);
    if(90 < lat || lat < -90 ){
      event.preventDefault();
      form["latitude"].setCustomValidity('must be a valid Latitude (-90 to 90)');
    }else{
      email.setCustomValidity('');
    }
});
}

// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};
