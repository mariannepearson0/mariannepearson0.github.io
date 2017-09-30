function triple() {
  document.getElementsByTagName("tripp").innerHTML = '';
  let tripstr = document.getElementById('tripst').value
  let counter = 0
  for (let i = 0; i < tripstr.length; i++) {
    if ((tripstr.charAt(i) === tripstr.charAt(i + 1)) && (tripstr.charAt(i + 1) === tripstr.charAt(i + 2))) {
      counter ++
    }
  }
  document.getElementById("tripp").innerHTML = `For the string "${tripstr}" The number of triples is: ${counter}`;
  document.getElementById('tripst').value = ''
}
