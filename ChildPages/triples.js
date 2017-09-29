function triple() {
  let tripstr = document.getElementById('tripst').value
  let counter = 0
  for (let i = 0; i < tripstr.length; i++) {
    if ((tripstr.charAt(i) === tripstr.charAt(i + 1)) && (tripstr.charAt(i + 1) === tripstr.charAt(i + 2))) {
      counter = counter + 1
    }
  }
  let myp = document.createElement("p");
  myp.textContent = `The number of triples is ${counter}`;
  document.getElementsByTagName("body")[0].appendChild(myp);
  //document.getElementById('tripstring').innerHTML = `The number of triples is ${counter}`
}
