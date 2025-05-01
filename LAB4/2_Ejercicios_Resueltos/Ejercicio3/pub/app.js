function recitar(markupText) {
    const url = 'http://localhost:3000/';  
    const data = {
      text: markupText  
    };
  
    const request = {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json', 
      },
      body: JSON.stringify(data), 
    };
  
    fetch(url, request)
      .then(response => response.json())
      .then(data => {
        document.querySelector("#htmlCode").innerHTML = data.text; 
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const text = document.querySelector('#markupText');
    document.querySelector('#markupForm').onsubmit = () => {
      recitar(text.value); 
      return false;
    };
  });
  