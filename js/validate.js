function validate(event) {
  // TODO - write custom validation logic to validate the longitude and latitude
  // values. The latitude value must be a number between -90 and 90; the
  // longitude value must be a number between -180 and 180. If either/both are
  // invalid, show the appropriate error message in the form, and stop the 
  // form from being submitted. If both values are valid, allow the form to be
  // submitted.
  console.log('TODO - validate the longitude, latitude values before submitting');
  var latitude = document.getElementById("latitude").value;
  var longitude = document.getElementById("longitude").value;
  var valid = true;

  var laterror = document.getElementById("errorlat");
  var lngerror = document.getElementById("errorlng");

  if (valid == true) {
    if (latitude < -90 || latitude > 90 || isNaN(latitude)) {
      valid = false;
      laterror.innerText = " must be a valid Latitude (-90 to 90)";
    }
    else {
      laterror.innerText = "";
    }

    if (longitude < -180 || longitude > 180 || isNaN(longitude)) {
      valid = false;
      lngerror.innerText = " must be a valid longitude (-180 to 180)";
    } 
    else {
      lngerror.innerText = "";
    }
  }
  if (valid == false) {
    event.preventDefault();
  }
}


// Wait for the window to load, then set up the submit event handler for the form.
window.onload = function() {
  const form = document.querySelector('form');
  form.onsubmit = validate;
};

