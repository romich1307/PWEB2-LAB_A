function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "datos2.txt?t=" + Math.random());
  xhttp.send();
}
