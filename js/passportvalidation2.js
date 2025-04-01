
function handlepassport(){
    event.preventDefault();
    let pass = document.getElementById("pass").value;

    console.log('oh yes');

    document.getElementById("geterror").innerHTML;

    console.log("kjkjkjyo");

    if (pass === "") {
    document.getElementById("geterror").innerHTML="enter your password";

    } else {
        var re = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/; 

        if (re.test(pass)) {
            document.getElementById("geterror").innerHTML="";
        } else {
            document.getElementById("geterror").innerHTML="please enter valid password,8 letter password, with at least a symbol, upper and lower case letters and a number";
        }

    }
    
    
}