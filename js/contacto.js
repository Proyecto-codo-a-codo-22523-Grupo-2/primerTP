function validateForm() {
  var name = document.forms["myForm"]["name"];
  var email = document.forms["myForm"]["email"];
  var message = document.forms["myForm"]["message"];
  var onlyLetters = /^[a-zA-Z]+$/;

  if (name.value == "") {
    document.getElementById("errorname").innerHTML =
      "Por favor ingrese un nombre válido";
    name.focus();
    return false;
  } else {
    document.getElementById("errorname").innerHTML = "";
  }

  if(name.value.match(onlyLetters)) { 
  }
  else{
    document.getElementById("errorname").innerHTML = "";
      alert("Ingrese solo letras en el nombre por favor");
      return false
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
