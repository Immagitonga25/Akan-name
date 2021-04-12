document.getElementById("btn").addEventListener("click", akanName);
function akanName() {
    var month= parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    if (month < 1 ||month > 12) {
        alert("Input not valid!");
        return false;
    } else if (day < 01 || day > 31) {
        alert("Input not valid!");
        return false;
    } else if (century < 18 || century > 20) {
        alert("Invalid input!")
        return false;
    } else if (year < 00 || year > 99) {
        alert("Invalid input!")
        return false;
    } else {
        return true;
    }
}
function getData () {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    var cc = parseInt(document.getElementById("century").value);
    var yy = parseInt(document.getElementById("year").value);
    var mm= parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender");
    var d = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var akanDay = (d.toFixed());
    if (akanDay === 0 && gender === male) {
    document.getElementById("output").value = "Your Akan Name is " + maleAkan[0];
    return true;
    } else if (akanDay === 0 && gender === female) {
        document.getElementById("output").value = "Your Akan Name is " + femaleAkan[0];
        return true;
    } else if (akanDay === 1 && gender === male) {
        document.getElementById("output").value = "Your Akan Name is " + maleAkan[1];
        return true;
    } else if (akanDay === 1 && gender === female) {
        document.getElementById("output").value = "Your Akan Name is " + femaleAkan[1];
        return true;
    } else if (akanDay === 2 && gender === male) {
        document.getElementById("output").value = "Your Akan Name is " + maleAkan[2];
        return true;
    } else if (akanDay === 2 && gender === female) {
        document.getElementById("output").value = "Your Akan Name is " + femaleAkan[2];
        return true;
    } else if (akanDay === 3 && gender === male) {
        document.getElementById("output").value ="Your Akan Name is " + maleAkan[3];
        return true;
    } else if (akanDay === 3 && gender === female) {
        document.getElementById("output").value="Your Akan Name is " + femaleAkan[3];
        return true;
    } else if (akanDay === 4 && gender === male) {
        document.getElementById("output").value="Your Akan Name is " + maleAkan[4];
        return true;
    }else if (akanDay === 4 && gender === female) {
        document.getElementById("output").value="Your Akan Name is " + femaleAkan[4];
        return true;
    }else if (akanDay === 5 && gender === male) {
        document.getElementById("output").value="Your Akan Name is " + maleAkan[5];
        return true;
    }else if (akanDay === 5 && gender === female) {
        document.getElementById("output").value="Your Akan Name is " + femaleAkan[5];
        return true;
    } else if (akanDay === 6 && gender === male) {
        document.getElementById("output").value="Your Akan Name is " + maleAkan[6];
        return true;
    } else if (akanDay === 6 && gender === female) {
        document.getElementById("output").value="Your Akan Name is " + femaleAkan[6];
        return true;
    }
}