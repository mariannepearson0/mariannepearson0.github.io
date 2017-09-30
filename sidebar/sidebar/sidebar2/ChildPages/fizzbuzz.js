
function fizzbuzz () {
  let no = document.getElementById("range").value
  let three = document.getElementById("threes").value
  let five = document.getElementById("fives").value
  for (let i = 1; i <= no; i++) {
    if (i % 3 === 0) {
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'pfizz')
      if(three === ''){
        three = 'fizz'
        p1.innerHTML = 'fizz'
      }
      else{
        p1.innerHTML = three
      }
      document.getElementsByTagName('body')[0].appendChild(p1)
    } 
    if (i % 5 === 0) {
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'pbuzz')
      if(five === ''){
        five = 'buzz'
        p1.innerHTML = 'buzz'
      }
      else{
      p1.innerHTML = five
      }
      document.getElementsByTagName('body')[0].appendChild(p1)
    } 
    if (i % 3 === 0 && i % 5 === 0) {
      let p1 = document.createElement('p')
      p1.setAttribute('class', 'pfizzbuzz')
      p1.innerHTML = three + five
      document.getElementsByTagName('body')[0].appendChild(p1)
    } else {
      let p1 = document.createElement('p')
      p1.innerHTML = i
      document.getElementsByTagName('body')[0].appendChild(p1)
    }
  }
}

