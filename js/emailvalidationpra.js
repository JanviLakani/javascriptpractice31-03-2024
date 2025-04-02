function handleonsumit(){

    let email1 = document.getElementById("email").value;
    let number1 =document.getElementById("number").value;

    console.log('mobilnum');
    
    let password1 =document.getElementById("password").value;

    event.preventDefault();

    // console.log('jhgtrt');

    document.getElementById("emailerror").innerHTML;
    document.getElementById("numerror").innerHTML;
    document.getElementById("passerror").innerHTML;

    console.log("jhjghj");

    if (email1 === "") {
        document.getElementById("emailerror").innerHTML="please enter your email id";
        // console.log("hjhjh");
        
    } else {
        var re = /\S+@\S+\.\S+/;

        if (re.test(email1)) {
            document.getElementById("emailerror").innerHTML="";

        } else {
            document.getElementById("emailerror").innerHTML="please enter valid email id";

        }

    }

    if (number1 === "") {
        document.getElementById("numerror").innerHTML="please enter your number";
    } else {
        let num =/^([+]\d{2}[ ])?\d{10}$/;

        if (num.test(number1)) {
            document.getElementById("numerror").innerHTML="";

        } else {
            document.getElementById("numerror").innerHTML="please enter valid number";

        }
    }

    if (password1 === "") {
        document.getElementById("passerror").innerHTML=" please enter your password";

    } else {
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (regularExpression.test(password1)) {
            document.getElementById("passerror").innerHTML="";
        } else {
            document.getElementById("passerror").innerHTML="please enter valid email id";
        }
    }
    
    



}