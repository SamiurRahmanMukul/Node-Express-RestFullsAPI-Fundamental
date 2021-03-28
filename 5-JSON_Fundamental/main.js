// * 1-JSON / Introduction
var tString = "Hello";
var tString2 = "World";
var tNumber = 3;
var tBoolean = true;
var tNull = null;
var tUndefine = undefined;
var tArray = ["test", 30, [5, 6, 7]];
var tObject1 = { first: "Samiur" };
var tObject2 = { second: "Rahman" };
var tObject3 = { third: "Mukul" };

// * 2-JSON / Objects
var myJSON = {
  firstName: "Samiur Rahman",
  lastName: "Mukul",
  age: 22,
};

var myObj1 = function () {
  return "Hello World! / 1";
};

var myObj2 = {
  test: function () {
    return "Hello World! / 2";
  },
};

// * 3-JSON / Stringify & Parse
var myJSON2 = {
  name: "Samiur Rahman Mukul",
  education: "B.Sc Hons In CSE",
  passion: "Software Developer",
};

var myJSON2Stringify = JSON.stringify(myJSON2);
var myJSON2Parse = JSON.parse(myJSON2Stringify);

// console.log(myJSON2);
// console.log(myJSON2Stringify);
// console.log(myJSON2Parse);

myJSON2Parse.email = "sr.mukul9090@gmail.com";
var sendData = JSON.stringify(myJSON2Parse);
// console.log(sendData);
// console.log(myJSON2);

// * 4-JSON / Store to Local Storage
// * 5-JSON / Storage Exercise
document.getElementById("addButton").addEventListener("click", addToStorage);
document.getElementById("seeButton").addEventListener("click", viewToStorage);

function addToStorage() {
  const tempValue1 = document.getElementById("fullName").value;
  const tempValue2 = document.getElementById("jobName").value;

  if (tempValue1 === "" && tempValue2 === "") {
    alert("Oh! please enter data first.");
  } else {
    // creating a object
    var myObj = JSON.stringify({
      name: tempValue1,
      job: tempValue2,
    });

    localStorage.setItem("tester", myObj); // localStorage set value
    console.log("Success! " + myObj);
  }
}

function viewToStorage() {
  const getValue = localStorage.getItem("tester");
  console.log(getValue);

  // ? get local storage value using json parse data
  // const people = JSON.parse(localStorage.getItem("tester")) || {
  //   name: "none",
  //   job: "none",
  // };
  // console.log(people);
}

// * 6-JSON / Output JSON Data API
// * 7-JSON / JavaScript Fetch JSON
const getJSON = document.getElementById("getJSON");
const output = document.getElementById("output");

getJSON.addEventListener("click", function () {
  const url = "https://jsonplaceholder.typicode.com/users";

  fetch(url)
    .then(function (response) {
      console.log("Server response status code: " + response.status);
      return response.text();
    })
    .then(function (data) {
      console.log(data);
      console.log(JSON.parse(data));
    })
    .catch(function (error) {
      console.log();
    });
});

// * 8-JSON / API handle multiple results
const testButton = document.getElementById("testMAP");

testButton.addEventListener("click", function () {
  let tempArray = [4, 5, 3, 6, 8, 9, 2];

  const tempArray2 = tempArray.map(function (val) {
    return val * 2;
  });
  console.log(tempArray2);

  const html = tempArray.map(function (val, i) {
    return "<li>" + i + "=" + val * 2 + "</li>";
  });
  console.log(html.join(""));
  output.innerHTML += html.join("");
});

// * string capitalize function
String.prototype.capitalize = function () {
  return this.charAt(0).toUpperCase() + this.slice(1);
};

// * 9-JSON / Get more data from JSON
const getJSONMore = document.getElementById("getJSONMore");

getJSONMore.addEventListener("click", function () {
  const url = "https://randomuser.me/api/?results=50";
  output.innerHTML = "";

  fetch(url)
    .then(function (response) {
      return response.text();
    })
    .then(function (data) {
      let people = data.results;
      console.log(people);

      return people.map(function (val, i) {
        let div = document.createElement("div");
        let img = document.createElement("img");
        let span = document.createElement("span");

        let firstName = val.name.first.capitalize();
        let lastName = val.name.last.capitalize();

        img.src = val.picture.thumbnail;
        span.innerHTML = i + 1 + "." + firstName + " " + lastName;
        div.appendChild(span);
        div.appendChild(span);
        output.appendChild(div);
      });
    })
    .catch(function (error) {
      console.log();
    });
});
