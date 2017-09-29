
function kingsearch () {
  let requestURL = 'https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json'
  let request = new XMLHttpRequest()
  request.open('GET', requestURL)
  request.responseType = 'json'
  request.send()
  request.onload = function () {
    let kingData = request.response
    let kingSearch = document.getElementById('searchTerm').value
    for (let i = 0; i < kingData.length; i++) {
      for (let king in kingData[i]) {
        let kinginfo = kingData[i][king]
        if (kinginfo.includes(kingSearch)) {
          let p1 = document.createElement('p')
          for (king in kingData[i]) {
            let p1 = document.createElement('p')
            p1.innerHTML = kingData[i][king]
            document.getElementsByTagName('body')[0].appendChild(p1)
          }
        }
      }
    }
  }
}
