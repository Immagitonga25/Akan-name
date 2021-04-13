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

    var maleAkan = ['Kwasi', 'Kwadwo', 'Kwabena', 'Kwaku', 'Yaw', 'Kofi', 'Kwame']
    var femaleAkan = ['Akosua', 'Adwoa', 'Abenaa', 'Akua', 'Yaa', 'Afua', 'Ama']
      
    var dayOfWeek = (((century/4)-2*century-1)+((5*year/4))+((26*(month+1)/10))+day)%7;
    var akanDay = (dayOfWeek.toFixed());
    console.log(akanDay);
    
    if (akanDay === 0 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[0];
        return true;
    } else if (akanDay === 0 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[0];
        return true;
    } else if (akanDay === 1 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[1];
        return true;
    } else if (akanDay === 1 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[1];
        return true;
    } else if (akanDay === 2 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[2];
        return true;
    } else if (akanDay === 2 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[2];
        return true;
    } else if (akanDay === 3 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[3];
        return true;
    } else if (akanDay === 3 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[3];
        return true;
    } else if (akanDay === 4 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[4];
        return true;
    }else if (akanDay === 4 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[4];
        return true;
    }else if (akanDay === 5 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[5];
        return true;
    }else if (akanDay === 5 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[5];
        return true;
    } else if (akanDay === 6 && gender === "male" && validDay && validMonth && validYear) {
        document.getElementById("result").value = maleAkan[6];
        return true;
    } else if (akanDay === 6 && gender === "female" && validDay && validMonth && validYear) {
        document.getElementById("result").value = femaleAkan[6];
    } 
}