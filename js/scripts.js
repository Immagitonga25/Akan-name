document.getElementById("btn").addEventListener("click", akanName);
function akanName() {
    var month= parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    var gender = document.getElementById("gender").value;
    
    function correctMonth() {
        if (month < 1 ||month > 12) {
            alert("Invalid month");
            return false;
        } else {
            return true;
        }
    }
    function correctDay() {
        if (day < 01 || day > 31) {
            alert("Invalid Day");
            return false;
        } else {
            return true;
        }
    }
    function correctYear() {
        if (century < 18 || century > 20) {
            alert("Invalid Century");
            return false;
        } else if (year < 00 || year > 99) {
            alert("Invalid Year");
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
      
    var dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
    var akanDay = (dayOfWeek.toFixed());

    
        if (akanDay === 0 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent = "Your Akan Name is " + maleAkan[0];
            return true;
        } else if (akanDay === 0 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent = "Your Akan Name is " + femaleAkan[0];
            return true;
        } else if (akanDay === 1 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent = "Your Akan Name is " + maleAkan[1];
            return true;
        } else if (akanDay === 1 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent = "Your Akan Name is " + femaleAkan[1];
            return true;
        } else if (akanDay === 2 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent = "Your Akan Name is " + maleAkan[2];
            return true;
        } else if (akanDay === 2 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent = "Your Akan Name is " + femaleAkan[2];
            return true;
        } else if (akanDay === 3 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent ="Your Akan Name is " + maleAkan[3];
            return true;
        } else if (akanDay === 3 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[3];
            return true;
        } else if (akanDay === 4 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + maleAkan[4];
            return true;
        }else if (akanDay === 4 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[4];
            return true;
        }else if (akanDay === 5 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + maleAkan[5];
            return true;
        }else if (akanDay === 5 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[5];
            return true;
        } else if (akanDay === 6 && gender === "Male" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + maleAkan[6];
            return true;
        } else if (akanDay === 6 && gender === "Female" && validDay && validMonth && validYear) {
            document.getElementById("output").textContent="Your Akan Name is " + femaleAkan[6];
        } 
}