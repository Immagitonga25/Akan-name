document.getElementById("btn").addEventListener("click", akanName);
function akanName() {
    var month= parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var genders = document.getElementById("gender").value;

    function getGender () {
        for (let gender of genders){
          if (gender.checked){
            return gender.value;
          }
        }
      }
    let genderValue = getGender();
    console.log(genderValue);
    
    function correctMonth() {
        if (month < 1 ||month > 12) {
            return false;
        } else {
            return true;
        }
    }
    function correctDay() {
        if (day < 01 || day > 31) {
            return false;
        } else {
            return true;
        }
    }
    function correctYear() {
        if (century < 18 || century > 20) {
            return false;
        } else if (year < 00 || year > 99) {
            return false;
        } else {
            return true;
        }
    }
    var validMonth = correctMonth();
    var validDay = correctDay();
    var validYear = correctYear();

    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
      
    var dayOfWeek = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var akanDay = (dayOfWeek.toFixed());

    if (validDay && validMonth && validYear) {
        if (akanDay === 0 && genderValue === "Male") {
            document.getElementById("output").textContent = "Your Akan Name is " + maleAkan[0];
            return true;
        } else if (akanDay === 0 && genderValue === "Female") {
            document.getElementById("output").textContent = "Your Akan Name is " + femaleAkan[0];
            return true;
        } else if (akanDay === 1 && genderValue === "Male") {
            document.getElementById("output").textContent = "Your Akan Name is " + maleAkan[1];
            return true;
        } else if (akanDay === 1 && genderValue === "Female") {
            document.getElementById("output").textContent = "Your Akan Name is " + femaleAkan[1];
            return true;
        } else if (akanDay === 2 && genderValue === "Male") {
            document.getElementById("output").textContent = "Your Akan Name is " + maleAkan[2];
            return true;
        } else if (akanDay === 2 && genderValue === "Female") {
            document.getElementById("output").textContent = "Your Akan Name is " + femaleAkan[2];
            return true;
        } else if (akanDay === 3 && genderValue === "Male") {
            document.getElementById("output").textContent ="Your Akan Name is " + maleAkan[3];
            return true;
        } else if (akanDay === 3 && genderValue === "Female") {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[3];
            return true;
        } else if (akanDay === 4 && genderValue === "Male") {
            document.getElementById("output").textContent="Your Akan Name is " + maleAkan[4];
            return true;
        }else if (akanDay === 4 && genderValue === "Female") {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[4];
            return true;
        }else if (akanDay === 5 && genderValue === "Male") {
            document.getElementById("output").textContent="Your Akan Name is " + maleAkan[5];
            return true;
        }else if (akanDay === 5 && genderValue === "Female") {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[5];
            return true;
        } else if (akanDay === 6 && genderValue === "Male") {
            document.getElementById("output").textContent="Your Akan Name is " + maleAkan[6];
            return true;
        } else if (akanDay === 6 && genderValue === "Female") {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[6];