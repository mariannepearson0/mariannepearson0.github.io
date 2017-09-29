var no = 50
var three = 'fizz'
var five = 'buzz'

function fizzbuzz (no, three, five) {
  for (let i = 1; i <= no; i++) {
    if (i % 3 === 0) {
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'pfizz')
      p1.innerHTML = three
      document.getElementsByTagName('body')[0].appendChild(p1)
    }
    if (i % 5 === 0) {
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'pbuzz')
      p1.innerHTML = five
      document.getElementsByTagName('body')[0].appendChild(p1)
    }
    if (i % 3 === 0 && i % 5 === 0) {
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'pfizzbuzz')
      p1.innerHTML = 'FizzBuzz'
      document.getElementsByTagName('body')[0].appendChild(p1)
    } else {
      //document.getElementById('fizz').innerHTML += i + ' '
      let p1 = document.createElement('p')
      p1.innerHTML = i
      document.getElementsByTagName('body')[0].appendChild(p1)
    }
  }
}
