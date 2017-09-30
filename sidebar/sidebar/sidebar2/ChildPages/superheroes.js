function superherofiles() {
  let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json"
  let request = new XMLHttpRequest();
  request.open("GET", requestURL);
  request.responseType = "json";
  request.send();
  request.onload = function () {
    let superhData = request.response;
    document.getElementById("p1").innerHTML = `General Information <br/>`;
    for (genInfo in superhData) {
        if (Array.isArray(superhData[genInfo])) {
            document.getElementById("p3").innerHTML += `${genInfo}: <br/><br/>`;
        let members = superhData[genInfo]
        for (let i = 0; i < members.length; i++) {
          for (memberInfo in members[i]) {
            if (Array.isArray(members[i][memberInfo])) {
              let powers = members[i][memberInfo];
              for (let i = 0; i < powers.length; i++) {
                  if (i == 0) {
                      document.getElementById("p3").innerHTML += `${memberInfo}: ${powers[i]} <br/>`;
                  } else {
                      document.getElementById("p3").innerHTML += `${powers[i]} <br/>`;
                  }            
              }
              document.getElementById("p3").innerHTML += `<br/>`
            } else {
                document.getElementById("p3").innerHTML += `${memberInfo}: ${members[i][memberInfo]} <br/>`;
               }
             }
           }
        } else {
            document.getElementById("p2").innerHTML += `${genInfo}: ${superhData[genInfo]} <br/>`;
           }
         }
       }
}
