let garage
let command
let commandArray
let commands

window.onload = function () {
  garage = [
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
  commands = { 'contents': contents, 'check_in': check_in, 'fix': fix, 'check_out': check_out, 'bill': bill }
}

function checkText (event) {
  if (event.keyCode === 13) {
    command = document.getElementById('commandline').value
    commandArray = command.split(' ')
    let functionToExecute = commands[commandArray[0]]
    if (functionToExecute) {
      functionToExecute()
    } else {
      console.log('Please enter a valid commmand')
    }
  }
}

function contents () {
  for (let i = 0; i < garage.length; i++) {
    for (let car in garage[i]) {
      document.getElementById('ta').innerHTML += car + ': ' + garage[i][car] + '\n'
    }
    document.getElementById('ta').innerHTML += '\n'
  }
}

function check_in () {
  var newcar = {
    'owner': commandArray[1],
    'reg_no': commandArray[2],
    'make': commandArray[3],
    'time_in_garage': commandArray[4],
    'fault_no': commandArray[5]
  }
  garage.push(newcar)
}

function fix () {
  for (let i = 0; i < garage.length; i++) {
    if (garage[i].reg_no === commandArray[1]) {
      garage[i].fault_no = 0
    }
  }
}

function check_out () {
  for (let i = 0; i < garage.length; i++) {
    if (garage[i].reg_no === commandArray[1]) {
      garage.splice(i, i + 1)
    }
  }
}

function bill () {
  var bill
  for (let i = 0; i < garage.length; i++) {
    if (garage[i].reg_no === commandArray[1]) {
      if (garage[i].fault_no === 0) {
        bill = 'Free! Because there are no faults'
      } else {
        bill = garage[i].parts_cost + 20 * garage[i].time_in_garage + garage[i].fault_no * 50
        bill = '£ ' + bill
      }
      for (car in garage[i]) {
        document.getElementById('ta').innerHTML += car + ': ' + garage[i][car]
      }
      document.getElementById('ta').innerHTML += 'The total bill is: ' + bill
    }
  }
}

function clear () {

}
