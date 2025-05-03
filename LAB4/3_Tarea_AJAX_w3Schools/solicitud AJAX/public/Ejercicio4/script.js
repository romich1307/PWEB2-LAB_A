function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function () {
      document.getElementById("demo").innerHTML = this.responseText;
    }
    xhttp.open("POST", "/datos4", true);
    xhttp.send();
  }
  