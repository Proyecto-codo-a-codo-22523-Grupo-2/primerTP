function validateForm() {
  var name = document.forms["myForm"]["name"];
  var email = document.forms["myForm"]["email"];
  var message = document.forms["myForm"]["message"];

  if (name.value == "") {
    document.getElementById("errorname").innerHTML =
      "Por favor ingrese un nombre válido";
    name.focus();
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }

  if (email.value == "") {
    document.getElementById("erroremail").innerHTML =
      "Por favor ingrese un email válido";
    email.focus();
    return false;
  } else {
    document.getElementById("erroremail").innerHTML = "";
  }

  if (email.value.indexOf("@", 0) < 0) {
    document.getElementById("erroremail").innerHTML =
      "Por favor ingrese un email válido";
    email.focus();
    return false;
  }

  if (email.value.indexOf(".", 0) < 0) {
    document.getElementById("erroremail").innerHTML =
      "Por favor ingrese un email válido";
    email.focus();
    return false;
  }

  if (message.value == "") {
    document.getElementById("errormsg").innerHTML =
      "Por favor ingrese un mensaje válido";
    message.focus();
    return false;
  } else {
    document.getElementById("errormsg").innerHTML = "";
  }

  return true;
}
