//validating user input
function monthBorn () {
    if (mm < 1 ||mm > 12) {
        alert("Input not valid!");
    }
    }
}
function dayBorn () {
    if (dd < 01 || dd > 31) {
        alert("Input not valid!");
    }
    }
}
function centuryBorn () {
    if (cc < 18 || cc > 20) {
        alert("Invalid input!")
        return false;
    }
    }
}
function yearBorn () {
    if (yy < 00 || yy > 99) {
        alert("Invalid input!")
        return false;
    } 
    }
}
function akanName () {
    var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
    var cc = parseInt(document.getElementById("century").value);
    var yy = parseInt(document.getElementById("year").value);
    var mm= parseInt(document.getElementById("month").value);
    var dd = parseInt(document.getElementById("day").value);
    var gender = document.getElementById("gender");
    var d = (((cc/4)-2*cc-1)+((5*yy/4))+((26*(mm+1)/10))+dd)%7;
    var akanDay = d.toFixed();

}
if (akanDay === 0 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[0];
} else if (akanDay === 0 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[0];
} else if (akanDay === 1 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[1];
} else if (akanDay === 1 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[1];
} else if (akanDay === 2 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[2];
} else if (akanDay === 2 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[2];
} else if (akanDay === 3 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[3];
} else if (akanDay === 3 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[3];
} else if (akanDay === 4 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[4];
}else if (akanDay === 4 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[4];
}else if (akanDay === 5 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[5];
}else if (akanDay === 5 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[5];
} else if (akanDay === 6 && gender === male) {
    document.getElementById("result").innerHTML="Your Akan Name is " + maleAkan[6];
} else if (akanDay === 6 && gender === female) {
    document.getElementById("result").innerHTML="Your Akan Name is " + femaleAkan[6];
}
