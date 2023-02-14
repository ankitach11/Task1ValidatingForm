//....................For Hamburger Menu....................

const toggleButton = document.getElementsByClassName("navbar-toggle")[0];
const navbarLinks = document.getElementsByClassName("nav-links");
toggleButton.addEventListener("click", function () {
  for (var i = 0; i < navbarLinks.length; i++)
    navbarLinks[i].classList.toggle("active");
});

//.....................For Forms.....................

const nxtBtn = document.querySelector("#submit_button");
const form1 = document.querySelector("#form-1");
const form2 = document.querySelector("#form-2");
const form3 = document.querySelector("#form-3");
const form4 = document.querySelector("#form-4");
const form5 = document.querySelector("#form-5");
const form6 = document.querySelector("#form-6");

const one = document.querySelector(".one");
const two = document.querySelector(".two");
const three = document.querySelector(".three");
const four = document.querySelector(".four");
const five = document.querySelector(".five");
const six = document.querySelector(".six");

var viewId = 1;
function nextForm() {
  if (viewId == 1) {
    if (validateForm1()) {
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  } else if (viewId == 2) {
    if (validateForm2()) {
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  } else if (viewId == 3) {
    if (validateForm3()) {
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  } else if (viewId == 4) {
    if (validateForm4()) {
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  } else if (viewId == 5) {
    if (validateForm5()) {
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  } else if (viewId == 6) {
    if (validateForm6()) {
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  } else {
    if (viewId >= 7) {
      console.log("Form submitted successfully.");
      viewId = viewId + 1;
      progressBar();
      displayForms();
    }
  }
}

function prevForm() {
  viewId = viewId - 1;
  progressBar1();
  displayForms();
}

function progressBar() {
  // e.preventDefault();

  if (viewId === 2) {
    one.classList.add("active");
  }
  if (viewId === 3) {
    two.classList.add("active");
  }
  if (viewId === 4) {
    three.classList.add("active");
  }
  if (viewId === 5) {
    four.classList.add("active");
  }
  if (viewId === 6) {
    five.classList.add("active");
  }
  if (viewId === 7) {
    six.classList.add("active");
  }
  if (viewId > 7) {
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
  }
}

function progressBar1() {
  // e.preventDefault();

  if (viewId === 1) {
    two.classList.add("active__form");

    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
  }
  if (viewId === 2) {
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
  }
  if (viewId === 3) {
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
  }
  if (viewId === 4) {
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
  }
  if (viewId === 5) {
    five.classList.remove("active");
    six.classList.remove("active");
  }
  if (viewId === 6) {
    six.classList.remove("active");
  }
  if (viewId >= 7) {
    one.classList.remove("active");
    two.classList.remove("active");
    three.classList.remove("active");
    four.classList.remove("active");
    five.classList.remove("active");
    six.classList.remove("active");
  }
}

function displayForms() {
  if (viewId > 7) {
    viewId = 1;
  }

  if (viewId === 1) {
    form1.style.display = "block";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";
  } else if (viewId === 2) {
    form1.style.display = "none";
    form2.style.display = "block";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";
  } else if (viewId === 3) {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "block";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "none";
  } else if (viewId === 4) {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "block";
    form5.style.display = "none";
    form6.style.display = "none";
  } else if (viewId === 5) {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "block";
    form6.style.display = "none";
  } else if (viewId === 6) {
    form1.style.display = "none";
    form2.style.display = "none";
    form3.style.display = "none";
    form4.style.display = "none";
    form5.style.display = "none";
    form6.style.display = "block";
  }
}

//.................Form1 Validation Using Javascript..............

function validateForm1() {
  let flag = 0;
  const form = document.querySelector("form");
  let firstName = document.getElementById("fname");
  let lastName = document.getElementById("lname");
  let contactNumber = document.getElementById("contact-number");
  let email = document.getElementById("email");
  let whatsapp = document.getElementById("whatsapp");
  let country = document.getElementById("country");
  let gender = document.getElementsByName("gender");

  var namePattern = /^[a-zA-Z\s]+$/;
  var contactPattern = /^[0-9]{10}$/;
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const countryRegex = /^[A-Z][A-Za-z\s]+$/;

  if (firstName.value == "") {
    firstName.style.borderColor = "rgb(255, 153, 153)";
    firstName.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage1").innerHTML =
      "First Name must be filled out.";
  } else if (!firstName.value.match(namePattern)) {
    firstName.style.borderColor = "rgb(255, 153, 153)";
    firstName.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage1").innerHTML = "Write Valid Name.";
  } else {
    flag++;
    firstName.style.borderColor = "white";
    firstName.style.boxShadow = "none";
    document.getElementById("errorMessage1").innerHTML = "";
  }

  if (lastName.value == "") {
    lastName.style.borderColor = "rgb(255, 153, 153)";
    lastName.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage2").innerHTML =
      "Last Name must be filled out.";
  } else if (!lastName.value.match(namePattern)) {
    lastName.style.borderColor = "rgb(255, 153, 153)";
    lastName.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage2").innerHTML = "Write Valid Name.";
  } else {
    flag++;
    lastName.style.borderColor = "white";
    lastName.style.boxShadow = "none";
    document.getElementById("errorMessage2").innerHTML = "";
  }

  if (contactNumber.value == "") {
    contactNumber.style.borderColor = "rgb(255, 153, 153)";
    contactNumber.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage3").innerHTML =
      "Contact Number must be filled out.";
  } else if (!contactNumber.value.match(contactPattern)) {
    contactNumber.style.borderColor = "rgb(255, 153, 153)";
    contactNumber.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage3").innerHTML = "Write Valid Number.";
  } else {
    flag++;
    contactNumber.style.borderColor = "white";
    contactNumber.style.boxShadow = "none";
    document.getElementById("errorMessage3").innerHTML = "";
  }
  if (email.value == "") {
    email.style.borderColor = "rgb(255, 153, 153)";
    email.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage4").innerHTML =
      "Email must be filled out.";
  } else if (!email.value.match(re)) {
    email.style.borderColor = "rgb(255, 153, 153)";
    email.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage4").innerHTML = "Write Valid Email.";
  } else {
    flag++;
    email.style.borderColor = "white";
    email.style.boxShadow = "none";
    document.getElementById("errorMessage4").innerHTML = "";
  }

  if (whatsapp.value == "") {
    whatsapp.style.borderColor = "rgb(255, 153, 153)";
    whatsapp.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage5").innerHTML =
      "Whatsapp Number must be filled out.";
  } else if (!whatsapp.value.match(contactPattern)) {
    whatsapp.style.borderColor = "rgb(255, 153, 153)";
    whatsapp.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage5").innerHTML = "Write Valid Number.";
  } else {
    flag++;
    whatsapp.style.borderColor = "white";
    whatsapp.style.boxShadow = "none";
    document.getElementById("errorMessage5").innerHTML = "";
  }

  if (country.value == "") {
    country.style.borderColor = "rgb(255, 153, 153)";
    country.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage6").innerHTML =
      "Country Name must be filled out.";
  } else if (!country.value.match(countryRegex)) {
    country.style.borderColor = "rgb(255, 153, 153)";
    country.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage6").innerHTML =
      "Write Valid Country Name.";
  } else {
    flag++;
    country.style.borderColor = "white";
    country.style.boxShadow = "none";
    document.getElementById("errorMessage6").innerHTML = "";
  }

  var selected = false;
  for (var i = 0; i < gender.length; i++) {
    if (gender[i].checked) {
      selected = true;
      break;
    }
  }
  if (!selected) {
    document.getElementById("errorMessage7").innerHTML = "Select a choice";
  } else {
    flag++;
    document.getElementById("errorMessage7").innerHTML = "";
  }
  console.log(flag);
  if (flag == 7) {
    return true;
  } else {
    return false;
  }
}

//....................validating form2.....................

function validateForm2() {
  let ans = 0;
  let degree = document.getElementById("degree");
  let passedOut = document.getElementById("passed-out");
  var namePattern = /^[a-zA-Z\s]+$/;

  if (degree.value == "") {
    degree.style.borderColor = "rgb(255, 153, 153)";
    degree.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage8").innerHTML =
      "Enter a value for this field";
  } else if (!degree.value.match(namePattern)) {
    degree.style.borderColor = "rgb(255, 153, 153)";
    degree.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage8").innerHTML =
      "Enter a valid value for this field";
  } else {
    ans++;
    degree.style.borderColor = "white";
    degree.style.boxShadow = "none";
    document.getElementById("errorMessage8").innerHTML = "";
  }
  if (passedOut.value == "") {
    passedOut.style.borderColor = "rgb(255, 153, 153)";
    passedOut.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage9").innerHTML =
      "Enter a value for this field";
  } else if (passedOut.value < 2000) {
    passedOut.style.borderColor = "rgb(255, 153, 153)";
    passedOut.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage9").innerHTML =
      "Enter a value greater than or equal to 2000";
  } else if (passedOut.value > 2030) {
    passedOut.style.borderColor = "rgb(255, 153, 153)";
    passedOut.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage9").innerHTML =
      "Enter a value less than or equal to 2030";
  } else {
    ans++;
    passedOut.style.borderColor = "white";
    passedOut.style.boxShadow = "none";
    document.getElementById("errorMessage9").innerHTML = "";
  }
  console.log("ans", ans);
  if (ans == 2) return true;
  else return false;
}


//....................validating form3.....................

function validateForm3() {
  let internship = document.getElementsByName("internship");

  var selected = false;
  for (var i = 0; i < internship.length; i++) {
    if (internship[i].checked) {
      selected = true;
      break;
    }
  }
  if (!selected) {
    document.getElementById("errorMessage10").innerHTML = "Select a choice";
  } else {
    document.getElementById("errorMessage10").innerHTML = "";
  }
  if (selected) return true;
  else return false;
}


//....................validating form4.....................


function validateForm4() {
  let option = document.getElementsByName("option");

  var selected = false;
  for (var i = 0; i < option.length; i++) {
    if (option[i].checked) {
      selected = true;
      break;
    }
  }
  if (!selected) {
    document.getElementById("errorMessage11").innerHTML = "Select a choice";
  } else {
    document.getElementById("errorMessage11").innerHTML = "";
  }

  var flag = 0;
  let startdate = document.getElementById("start-date");
  if (startdate.value == "") {
    startdate.style.borderColor = "rgb(255, 153, 153)";
    startdate.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage13").innerHTML = "Choose a date.";
  } else {
    flag++;
    startdate.style.borderColor = "white";
    startdate.style.boxShadow = "none";
    document.getElementById("errorMessage13").innerHTML = "";
  }

  let question1 = document.getElementsByName("question1");

  var selected2 = false;
  for (var i = 0; i < question1.length; i++) {
    if (question1[i].checked) {
      selected2 = true;
      break;
    }
  }
  if (!selected2) {
    document.getElementById("errorMessage14").innerHTML = "Select a choice";
  } else {
    document.getElementById("errorMessage14").innerHTML = "";
  }

  if (selected && flag == 1 && selected2) return true;
  else return false;
}

//....................validating form5.....................

function validateForm5() {
  var flag = 0;
  let question2 = document.getElementById("question2");
  var referralInput = document.getElementById("person_0");

  if (question2.value == "") {
    question2.style.borderColor = "rgb(255, 153, 153)";
    question2.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage15").innerHTML =
      "This field must be filled.";
  } else {
    flag++;
    question2.style.borderColor = "white";
    question2.style.boxShadow = "none";
    document.getElementById("errorMessage15").innerHTML = "";
  }
  if (referralInput.value == "") {
    referralInput.style.borderColor = "rgb(255, 153, 153)";
    referralInput.style.boxShadow = "5px 5px 10px #888888";
    document.getElementById("errorMessage16").innerHTML =
      "This field must be filled.";
  } else {
    flag++;
    referralInput.style.borderColor = "white";
    referralInput.style.boxShadow = "none";
    document.getElementById("errorMessage16").innerHTML = "";
  }

  if (flag == 2) return true;
  else return false;
}

//....................validating form6.....................

function validateForm6() {
  return true;
}

//.................Form 1 Validations Using JQuery............................

// const firstName = document.getElementById("fname");
// const lastName = document.getElementById("lname");
// const contactNumber = document.getElementById("contact-number");
// const email = document.getElementById("email");
// const whatsappNumber = document.getElementById("whatsapp");

//..............To start next page from form heading...............

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function showTextbox() {
  const other = document.getElementById("other");
  const otherTextbox = document.getElementById("other-textbox");

  const netMvc = document.getElementById(".net-mvc");
  const angular = document.getElementById("angular");
  const bbaMba = document.getElementById("bba/mba");
  const businessDevelopment = document.getElementById("business-development");
  const digitalMarketing = document.getElementById("digital-marketing");
  const finance = document.getElementById("finance");
  const flutterAndroidIos = document.getElementById("flutter/android/ios");
  const hr = document.getElementById("hr");
  const hardware = document.getElementById("hardware");
  const htmlUi = document.getElementById("html-ui");
  const iot = document.getElementById("iot");
  const java = document.getElementById("java");
  const laravel = document.getElementById("laravel");
  const marketing = document.getElementById("marketing");
  const networking = document.getElementById("networking");
  const photoshop = document.getElementById("photoshop");
  const php = document.getElementById("php");
  const projectManager = document.getElementById("project-manager");
  const python = document.getElementById("python");
  const react = document.getElementById("react");
  const sales = document.getElementById("sales");
  const softwareDevelopment = document.getElementById("software-development");
  const testing = document.getElementById("testing");
  const uiDesigner = document.getElementById("ui-designer");
  const webDevelopment = document.getElementById("web-development");

  if (other.checked) {
    otherTextbox.style.display = "block";
    otherTextbox.value = "";
  } else if (netMvc.checked) {
    otherTextbox.style.display = "none";
  } else if (angular.checked) {
    otherTextbox.style.display = "none";
  } else if (bbaMba.checked) {
    otherTextbox.style.display = "none";
  } else if (businessDevelopment.checked) {
    otherTextbox.style.display = "none";
  } else if (digitalMarketing.checked) {
    otherTextbox.style.display = "none";
  } else if (finance.checked) {
    otherTextbox.style.display = "none";
  } else if (flutterAndroidIos.checked) {
    otherTextbox.style.display = "none";
  } else if (hr.checked) {
    otherTextbox.style.display = "none";
  } else if (hardware.checked) {
    otherTextbox.style.display = "none";
  } else if (htmlUi.checked) {
    otherTextbox.style.display = "none";
  } else if (iot.checked) {
    otherTextbox.style.display = "none";
  } else if (java.checked) {
    otherTextbox.style.display = "none";
  } else if (laravel.checked) {
    otherTextbox.style.display = "none";
  } else if (marketing.checked) {
    otherTextbox.style.display = "none";
  } else if (networking.checked) {
    otherTextbox.style.display = "none";
  } else if (photoshop.checked) {
    otherTextbox.style.display = "none";
  } else if (php.checked) {
    otherTextbox.style.display = "none";
  } else if (projectManager.checked) {
    otherTextbox.style.display = "none";
  } else if (python.checked) {
    otherTextbox.style.display = "none";
  } else if (react.checked) {
    otherTextbox.style.display = "none";
  } else if (sales.checked) {
    otherTextbox.style.display = "none";
  } else if (softwareDevelopment.checked) {
    otherTextbox.style.display = "none";
  } else if (testing.checked) {
    otherTextbox.style.display = "none";
  } else if (uiDesigner.checked) {
    otherTextbox.style.display = "none";
  } else if (webDevelopment.checked) {
    otherTextbox.style.display = "none";
  }
}

//......................Start Date.................................

var startDate = new Date();
var year = startDate.getFullYear();
var month = startDate.getMonth() + 1;
var day = startDate.getDate() + 5;

if (month < 10) month = "0" + month;
if (day < 10) day = "0" + day;

var today = year + "-" + month + "-" + day;
document.getElementById("start-date").value = today;

//.................For Adding/Removing Textboxes.................

var counter = 1;
var textBox = "";
var refer = document.getElementById("refer-box");
function addBox() {
  var div = document.createElement("div");
  div.setAttribute("class", "form5-refer");
  div.setAttribute("id", "box_" + counter);

  textBox =
    "<input type='text' name='refer[]' id='person_" +
    counter +
    "'><input type='button' value='+' class='add-btn' onclick='addBox(this)'><input type='button' value='-' class='add-btn' onclick='removeBox(this)'>";

  div.innerHTML = textBox;
  form5 - refer.appendChild(div);
  counter++;
}

function removeBox(ele) {
  ele.parentNode.remove();
}

//......................Internship Option..........................

function enable1() {
  const check1 = document.getElementById("option2");
  const option2Checkbox = document.getElementById("form4-checkbox");
  if (check1.checked) {
    option2Checkbox.style.display = "block";
  } else {
    option2Checkbox.style.display = "none";
  }
}

//......................Terms & Condition..........................

function enable() {
  const check2 = document.getElementById("terms");
  if (check2.checked) {
    nxtBtn.style.display = "block";
  } else {
    nxtBtn.style.display = "none";
  }
}
