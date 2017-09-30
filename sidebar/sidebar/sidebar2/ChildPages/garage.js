let garage = [
  {
    'owner': 'Mark',
    'reg_no': 'X5CL2',
    'make': 'toyota',
    'time_in_garage': 1,
    'fault_no': 5
  },
  {
    'owner': 'Tina',
    'reg_no': 'DF57J',
    'make': 'ford',
    'time_in_garage': 3,
    'fault_no': 2
  }
]

function garagecontents(garage) {
  document.getElementById('pgarage').innerHTML = ''
  for (let i = 0; i < garage.length; i++) {
    for (car in garage[i]) {
      document.getElementById('pgarage').innerHTML += `${car}: ${garage[i][car]} <br />`
    }
    document.getElementById('pgarage').innerHTML += `<br />`
  }
}

function checkin (garage) {
  document.getElementById('pgarage').innerHTML = ''
  var newcar = {
    'owner': document.getElementById('towner').value,
    'reg_no': document.getElementById('tregno').value,
    'make': document.getElementById('tmake').value,
    'time_in_garage': document.getElementById('ttime').value,
    'fault_no': document.getElementById('tfault').value
  }
  garage.push(newcar)
  document.getElementsByClassName('tb').value = ''
}

function fix() {
  document.getElementById('pgarage').innerHTML = ''
  for (let i = 0; i < garage.length; i++) {
    if (garage[i].reg_no === document.getElementById('tcheckout').value) {
      garage[i].fault_no = 0
    }
  }
}

function checkout (garage) {
  document.getElementById('pgarage').innerHTML = ''
  let indexToRemove = garage.findIndex(x => x.reg_no === document.getElementById('tcheckout').value)
  garage.splice(indexToRemove, indexToRemove + 1)
}

function calculatebill (garage) {
  document.getElementById('pgarage').innerHTML = ''
  var bill
  let indexToCalculate = garage.findIndex(x => x.reg_no === document.getElementById('tcheckout').value)
  if (garage[indexToCalculate].fault_no === 0) {
    bill = `Free! Because there are no faults`
  } else {
    bill = garage[i].parts_cost + 20 * garage[i].time_in_garage + garage[i].fault_no * 50
    bill = '£ ' + bill
  }
  for (car in garage[i]) {
    document.getElementById('pgarage').innerHTML += `${car} : ${garage[i][car]} <br />`
  }
  document.getElementById('pgarage').innerHTML += `<br />  The total bill is: ${bill}`
}
