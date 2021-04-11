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
    } else {
        return true;
    }
}
function dayBorn () {
    if (dd < 01 || dd > 31) {
        alert("Input not valid!");
        return false;
    } else {
        return true;
    }
}
function centuryBorn () {
    if (cc < 18 || cc > 20) {
        alert("Invalid input!")
        return false;
    } else {
        return true;
    }
}
function yearBorn () {
    if (yy < 00 || yy > 99) {
        alert("Invalid input!")
        return false;
    } else {
        return true;
    }
}
