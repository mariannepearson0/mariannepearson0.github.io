let person;
let array;
let shout = "\"He said \"my name is Marianne\" \"";
let no = 50;
let three = "hello";
let five = "rainbow";
let numb = 30;
let paragraph;
let garage = [
    {
        "owner" : "Mark",
        "reg_no" : "X5CL2",
        "make" : "toyota",
        "parts_cost" : 1000,
        "time_in_garage" : 1
    },
    {
        "owner" : "Tina",
        "reg_no" : "DF57J",
        "make" : "ford",
        "parts_cost" : 300,
        "time_in_garage" : 3 
    }
]

window.onload = function () {
    person = {
        name: "Marianne",
        age: 24,
        occupation: "spy"
    };
    array = ["uno", "dos", "tres"];
    document.getElementById("arrayp").innerHTML = array;

}
function square() {
    let v = document.getElementById("textbox").value;
    let b = v * v;
    window.alert(b);
}
function add3() {
    let a = parseInt(document.getElementById("first").value);
    let b = parseInt(document.getElementById("second").value);
    let c = parseInt(document.getElementById("third").value);
    let d = a + b + c;
    window.alert(d);
}

function pers(person) {
    document.getElementById("name").innerHTML = person.name;
    document.getElementById("age").innerHTML = person.age;
    document.getElementById("occ").innerHTML = person.occupation;
}
function editpers(person) {
    let newname = document.getElementById("namebox").value;
    person.name = newname;
    let newage = document.getElementById("agebox").value;
    person.age = newage;
    let newocc = document.getElementById("occbox").value;
    person.occupation = newocc;
}
function increaseageperson(person) {
    let age = person.age;
    newage = age + 1;
    person.age = newage;
}
function newperson() {
    let person2 = {
        name: document.getElementById("namebox").value,
        age: document.getElementById("agebox").value,
        occupation: document.getElementById("occbox").value
    }
    document.getElementById("name2").innerHTML = person2.name;
    document.getElementById("age2").innerHTML = person2.age;
    document.getElementById("occ2").innerHTML = person2.occupation;
}
function display(shout) {
    document.getElementById("shoutp").innerHTML = shout;
}
function upcase(shout) {
    document.getElementById("shoutp").innerHTML = shout.toUpperCase();
}
function concat() {
    let conc = 5 + "Houseboat" + "5";
    document.getElementById("concatp").innerHTML = conc;
}
function add2array(array) {
    array[array.length] = "cuatro";
    document.getElementById("array2p").innerHTML = array;
}
function removefromarray(array) {
    array.splice(1, 1);
    document.getElementById("array2p").innerHTML = array;
}
function agecheck(person) {
    if (person.age >= 20 && person.age <= 40) {
        document.getElementById("agecheck").innerHTML = "The person is between 20 and 40";
    }
    else {
        document.getElementById("agecheck").innerHTML = "The person is not between 20 and 40";
    }
}
function count2ten() {
    for (let i = 1; i < 11; i++) {
        if (i % 2 === 0) {
            let para = document.createElement("p");
            let node = document.createTextNode(i);
            para.appendChild(node);
            let element = document.getElementById("counting");
            element.appendChild(para);
        }
    }
}

function fizzbuzz(no, three, five) {
    for (let i = 1; i <= no; i++) {
        if (i % 3 === 0) {
            document.getElementById("fizz").innerHTML = document.getElementById("fizz").innerHTML + three;
        }
        if (i % 5 === 0) {
            document.getElementById("fizz").innerHTML = document.getElementById("fizz").innerHTML + five;
        }
        if (i % 3 === 0 && i % 5 === 0) {
            document.getElementById("fizz").innerHTML = document.getElementById("fizz").innerHTML + "FizzBuzz ";
        }
        else {
            document.getElementById("fizz").innerHTML = document.getElementById("fizz").innerHTML + i + " ";
        }
    }
}

function divbythree(numb) {
    document.getElementById("numby").innerHTML = "The starting number is: " + numb;
    let counter = 0;
    while (numb != 1) {
        if (numb % 3 === 0) {
            numb = numb / 3;
        }
        else {
            numb = numb - 1;
        }
        counter++;
        let para = document.createElement("p");
        let node = document.createTextNode("iteration " + counter + ": " + numb);
        para.appendChild(node);
        let element = document.getElementById("numbres");
        element.appendChild(para);
    }
    document.getElementById("itnum").innerHTML = "The total number of iterations is: " + counter;
}

function triple() {
    let tripstr = document.getElementById("tripst").value;
    let counter = 0;
    for (let i = 0; i < tripstr.length; i++) {
        if ((tripstr.charAt(i) === tripstr.charAt(i + 1)) && (tripstr.charAt(i + 1) === tripstr.charAt(i + 2))) {
            counter = counter + 1;
        }
    }
    document.getElementById("tripstring").innerHTML = "The number of triples is: " + counter;
}

function createpara() {
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", "pars");
    document.getElementById("divider").appendChild(paragraph);
}
function addtopara() {
    let node = document.getElementById("forpara").value;
    document.getElementById("pars").innerHTML = document.getElementById("pars").innerHTML + node;
}
function deletepara() {
    let node = document.getElementById("pars");
    document.getElementById("divider").removeChild(node);
}

function superherofiles() {
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json"
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let requestData = request.response;
        for (item in requestData) {
            if (Array.isArray(requestData[item])) {
                let myH1 = document.createElement("h2");
                myH1.textContent = item + ": ";
                document.getElementsByTagName("body")[0].appendChild(myH1);
                let item2 = requestData[item]
                for (let i = 0; i < item2.length; i++) {
                    for (it3 in item2[i]) {
                        if (Array.isArray(item2[i][it3])) {
                            let item3 = item2[i][it3];
                            for (let i = 0; i < item3.length; i++) {
                                let myHs = document.createElement("h4");
                                if (i == 0) {
                                    myHs.textContent = it3 + ": " + item3[i];
                                }
                                else {
                                    myHs.textContent = item3[i];
                                }
                                document.getElementsByTagName("body")[0].appendChild(myHs);
                            }
                        }
                        else {
                            let myH4 = document.createElement("h4");
                            myH4.textContent = it3 + ": " + item2[i][it3];
                            document.getElementsByTagName("body")[0].appendChild(myH4);
                        }
                    }
                }
            }
            else {
                let myH3 = document.createElement("h3");
                myH3.textContent = item + ": " + requestData[item];
                document.getElementsByTagName("body")[0].appendChild(myH3);
            }
        }
    }
}
function kingsearch(){
    let requestURL = "https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json"
    let request = new XMLHttpRequest();
    request.open("GET", requestURL);
    request.responseType = "json";
    request.send();
    request.onload = function () {
        let kingData = request.response;
        let kingSearch = document.getElementById("searchTerm").value;
        for(let i = 0; i<kingData.length; i++){
            for(king in kingData[i]){
                let kinginfo = kingData[i][king];
                if(kinginfo.includes(kingSearch)){
                    //let myH1 = document.createElement("h5");
                    for(king in kingData[i]) {
                         let myH1 = document.createElement("h5");                                         
                         myH1.textContent = kingData[i][king];
                        //document.getElementById("kingp").innerHTML += kingData[i][king];
                         document.getElementsByTagName("body")[0].appendChild(myH1);
                    }
                }
            }
        }
}
}
function garagecontents(garage){

    for(let i=0; i<garage.length; i++){
        for(car in garage[i]){
            let myH1 = document.createElement("h5");                                         
            myH1.textContent = car + ": " + garage[i][car];
            document.getElementsByTagName("body")[0].appendChild(myH1);
        }
    }
}
function checkin(garage){
    var newcar = {
        "owner" : document.getElementById("towner").value,
        "reg_no" : document.getElementById("tregno").value,
        "make" : document.getElementById("tmake").value,
        "parts_cost" : document.getElementById("tcost").value,
        "time_in_garage" : document.getElementById("ttime").value 
    }
    garage.push(newcar);
    document.getElementById("towner").value = "";
    document.getElementById("tregno").value = "";
    document.getElementById("tmake").value = "";
    document.getElementById("tcost").value = "";
    document.getElementById("ttime").value = "";
}
function checkout(garage){
    //var name = document.getElementById("tcheckout").value;
    for(let i=0; i<garage.length; i++){
        if(garage[i].reg_no == document.getElementById("tcheckout").value){
            garage.splice(i,i+1);
        }        
    }
}


