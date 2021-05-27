function passwordChanged() {
    var strength = document.getElementById('strength');
    var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
    var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
    var enoughRegex = new RegExp("(?=.{5,}).*", "g");
    var pwd = document.getElementById("password");
    if (pwd.value.length == 0) {
        strength.innerHTML = 'Type Password';
    } else if (false == enoughRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:red"><b>add more characters</b></span>';
        return false;
    } else if (strongRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:green"><b>Strong!</b></span>';
        return true;
    } else if (mediumRegex.test(pwd.value)) {
        strength.innerHTML = '<span style="color:orange"><b>Medium!</b></span>';
        return false;
    } else {
        strength.innerHTML = '<span style="color:red"><b>Weak!</b></span>';
        return false;
    }
}

function passwordsame() {
    var pwd = document.getElementById("password");
    var pwd1 = document.getElementById("password1");
    var same = document.getElementById('same');
    if (pwd.value != pwd1.value) {
        same.innerHTML = '<span style="color:red"><b>password does not match</b></span>';
        return false;
    }
    else {
        same.innerHTML = '<span style="color:green"><b>Password Match!</b></span>';
        return true;
    }
}

//phone validation
function phonenumber() {
    var num = document.getElementById("num");
    var numcheck = document.getElementById("numcheck");
    var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (num.value.match(phoneno)) {
        numcheck.innerHTML = '<span style="color:green"><b>Valid !</b></span>';
        return true;
    }
    else {
        numcheck.innerHTML = '<span style="color:red"><b>inValid !</b></span>';
        return false;
    }
}

function fillall() {

    let x = phonenumber();
    let z = passwordsame();
    let y = passwordChanged();

    if (x == false) {
        alert("Enter phone number correctly : Should contain 10 numbers only, it can be of the formats(XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX)");
        return false;
    }
    else if (y == false) {
        alert("Enter a strong password");
        return false;
    }
    else if (z == false) {
        alert("Re-Enter the same Password");
        return false;
    }
    else {
        return true;
    }
}
//     if (x == true && y == true && z == true) {
//         alert("success");
//         return true;
//     }
//     else if (x != true && y == true && z == true) {
//         alert("Enter phone number correctly : Should contain 10 numbers only, it can be of the formats(XXX-XXX-XXXX, XXX.XXX.XXXX, XXX XXX XXXX)");
//         return false;
//     }
//     else if (x == true && y == true && z != true) {
//         alert("Enter a strong password");
//         return false;
//     }
//     else if (x == true && y != true && z == true){
//         alert("Renetr the same password")
//         return false;
//     }
//     else if(x != true || y != true || z != true){
//         alert("Fill details correctly")
//         return false;
//     }
// }

function success()
{
    alert("book added to library")
}

function success1()
{
    alert("author added to library")
}



















// function validate() {
//     //password strength

//     var strength = document.getElementById('strength');
//     var strongRegex = new RegExp("^(?=.{8,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*\\W).*$", "g");
//     var mediumRegex = new RegExp("^(?=.{6,})(((?=.*[A-Z])(?=.*[a-z]))|((?=.*[A-Z])(?=.*[0-9]))|((?=.*[a-z])(?=.*[0-9]))).*$", "g");
//     var enoughRegex = new RegExp("(?=.{5,}).*", "g");
//     var pwd = document.getElementById("password");
//     if (pwd.value.length == 0) {
//         strength.innerHTML = 'Type Password';
//     } else if (false == enoughRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:red"><b>add more characters</b></span>';
//     } else if (strongRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:green"><b>Strong!</b></span>';
//     } else if (mediumRegex.test(pwd.value)) {
//         strength.innerHTML = '<span style="color:orange"><b>Medium!</b></span>';
//     } else {
//         strength.innerHTML = '<span style="color:red"><b>Weak!</b></span>';
//     }
//     //password same

//     var pwd = document.getElementById("password");
//     var pwd1 = document.getElementById("password1");
//     var same = document.getElementById('same');
//     if (pwd.value != pwd1.value) {
//         same.innerHTML = '<span style="color:red"><b>password does not match</b></span>';
//         return true;
//     }
//     else {
//         same.innerHTML = '<span style="color:green"><b>password  match</b></span>';
//         return true;
//     }

//     //  phone validation
//     function phonenumber() {
//         var num = document.getElementById("num");
//         var numcheck = document.getElementById("numcheck");
//         var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
//         if (num.value.match(phoneno)) {
//             numcheck.innerHTML = '<span style="color:green"><b>Valid format!</b></span>';
//             return true;
//         }
//         else {
//             numcheck.innerHTML = '<span style="color:red"><b>inValid format!</b></span>';
//             return true;
//         }

//     }
// }
