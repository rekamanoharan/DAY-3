function printData() {
    const countries = JSON.parse(this.responseText);
    countries.forEach((coun) => console.log(coun.name));
     countries.forEach((coun) => console.log(coun.region,coun.subregion,coun.population));
  }
  
  var request = new XMLHttpRequest();
  request.addEventListener("load", printData);
  request.open("GET", "https://restcountries.com/v3.1/all");
  request.send(); 