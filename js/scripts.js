document.getElementById("btn").addEventListener("click", akanName);
function akanName() {
    var month= parseInt(document.getElementById("month").value);
    var day = parseInt(document.getElementById("day").value);
    var century = parseInt(document.getElementById("century").value);
    var year = parseInt(document.getElementById("year").value);
    
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
    var dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
    var akanDay = dayOfWeek.toFixed();
    console.log(akanDay);
    document.getElementById("btn").addEventListener("click", answer);
    function answer() {
        var output;
        var validMonth = correctMonth();
        var validDay = correctDay();
        var validYear = correctYear();
        var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
        var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama'] 
        var gender = document.getElementById("gender").value;
        if (akanDay === 0 && validDay && validMonth && validYear) {
            output = maleAkan[0];
            return true;
        } else if (akanDay === 0 && validDay && validMonth && validYear) {
            output = femaleAkan[0];
            return true;
        } else if (akanDay === 1 && validDay && validMonth && validYear) {
            output = maleAkan[1];
            return true;
        } else if (akanDay === 1 && validDay && validMonth && validYear) {
            output = femaleAkan[1];
            return true;
        } else if (akanDay === 2 && validDay && validMonth && validYear) {
            output = maleAkan[2];
            return true;
        } else if (akanDay === 2 && validDay && validMonth && validYear) {
            output = femaleAkan[2];
            return true;
        } else if (akanDay === 3 && validDay && validMonth && validYear) {
            output = maleAkan[3];
            return true;
        } else if (akanDay === 3 && validDay && validMonth && validYear) {
            output = femaleAkan[3];
            return true;
        } else if (akanDay === 4 && validDay && validMonth && validYear) {
            output = maleAkan[4];
            return true;
        }else if (akanDay === 4 && validDay && validMonth && validYear) {
            output = femaleAkan[4];
            return true;
        }else if (akanDay === 5 && validDay && validMonth && validYear) {
            output = maleAkan[5];
            return true;
        }else if (akanDay === 5 && validDay && validMonth && validYear) {
            output = femaleAkan[5];
            return true;
        } else if (akanDay === 6 && validDay && validMonth && validYear) {
            output = maleAkan[6];
            return true;
        } else if (akanDay === 6 && validDay && validMonth && validYear) {
            output = femaleAkan[6];
            return true;
        } 
        document.getElementById("result").innerHTML = output
    }
}