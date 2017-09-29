
let paragraph

function createpara () {
  paragraph = document.createElement('p')
  paragraph.setAttribute('id', 'pars')
  paragraph.innerHTML = 'Paragraph: <br />'
  document.getElementById('divider').appendChild(paragraph)
}
function addtopara () {
  let inputText = document.getElementById('forpara').value
  paragraph.innerHTML += inputText
  document.getElementById('forpara').value = ''
}
function deletepara () {
  //let node = document.getElementById('pars')
  document.getElementById('divider').removeChild(paragraph)
}
