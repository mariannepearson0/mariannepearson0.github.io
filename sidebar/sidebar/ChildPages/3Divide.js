function divbythree() {
  let num = document.getElementById('numberEntry').value
  document.getElementById('startnum').innerHTML = `The starting number is: ${num}`
  let counter = 0
  while (num !== 1) {
    if (num % 3 === 0) {
      num = num / 3
    } else {
      num = num - 1
    }
    counter++
    let para = document.createElement('p')
    let node = document.createTextNode(`iteration counter : ${num}`)
    para.appendChild(node)
    let element = document.getElementById('allnum')
    element.appendChild(para)
  }
  document.getElementById('itnum').innerHTML = `The total number of iterations is: ${counter}`
}
