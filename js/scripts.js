//finding html elements by id
var cc = parseInt(document.getElementById("century").value);
var yy = parseInt(document.getElementById("year").value);
var mm= parseInt(document.getElementById("month").value);
var dd = parseInt(document.getElementById("day").value);
var gender = document.getElementById("gender");
//validating user input
function monthBorn () {
    if (mm < 1 ||mm > 12) {
        alert("Input not valid!");
        return false;
    }
    }
}
function dayBorn () {
    if (dd < 01 || dd > 31) {
        alert("Input not valid!");
        return false;
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
    
}
