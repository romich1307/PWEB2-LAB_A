function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function() {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "datos3.txt?fname=Henry&lname=Ford");
  xhttp.send();
}
