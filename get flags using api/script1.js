function printData() {
    const countries = JSON.parse(this.responseText);
    countries.forEach((coun) => console.log(coun.flags));
  }
  
  var request = new XMLHttpRequest();
  request.addEventListener("load", printData);
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send(); 