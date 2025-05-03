function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "datos.txt");
  xhttp.send();
}
