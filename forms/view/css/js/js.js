verifyinformation = () => {
    let user = document.getElementById("user").value;
    let password = document.getElementById("password").value;

    if(user!="" || password!=""){
        alert("correct")
    }
    else {
        alert ("incorrect")
    }
}