

function validateForm() {
    var a = document.forms["preOrderData"]["uname"].value;
    var b = document.forms["preOrderData"]["email"].value;
    var c = document.forms["preOrderData"]["password"].value;
    var d = document.forms["preOrderData"]["address"].value;
    var e = document.forms["preOrderData"]["numberOfCopies"].value;
    var f = document.forms["preOrderData"]["gameType"].value;
    var g = document.forms["preOrderData"]["term"].value;


    
    function isLowerCase(Char) {
        return Char === Char.toLowerCase();
    }

    if (a == "" || a == null) {
        alert("Please input your name!");
        return false;
    }
    else if (a.length < 5) {
        alert("Name must be more than 5 words!");
        return false;
    }
    else if (a.length > 20) {
        alert("Name must be less than 20 words!");
        return false;
    }
    else if (isLowerCase(a) == false) {
        alert("Name must be lowercase!");
        return false;
    }
    
    if (b == "" || b == null) {
        alert("Please input your email!");
        return false;
    }
   
    if (c == "" || c == null) {
        alert("Please input your password!");
        return false;
    }
    else if (c.length < 8) {
        alert("Password must be more than 8 character!");
        return false;
    }
    else if (c.length > 16) {
        alert("Password must be less than 16 character!");
        return false;
    }

    if (d == "" || d == null) {
        alert("Please input your address!");
        return false;
    }

    if (e == "" || e == null || e == "0") {
        alert("Please input your number of copies!");
        return false;
    }

    if (f == "" || f == null) {
        alert("Please select game type!");
        return false;
    }

    if (!form.g.checked) {
        alert("You must agree to the Terms and Condition first!");
        return false;
    }

    document.getElementById("preOrderData").submit();
    console.log("Success")

    
}