function handleonsumit(){
    let email = document.getElementById("email").value;
    let mobilnum =document.getElementById("mobilnum").value;
    let password =document.getElementById("password").value;

    event.preventDefault();

    // console.log('jhgtrt');

    document.getElementById("error").innerHTML;
    document.getElementById("numerror").innerHTML;
    document.getElementById("passerror").innerHTML;

    // console.log("jhjghj");

    if (email === "") {
        document.getElementById("error").innerHTML="please enter your emailid";
        // console.log("hjhjh");
        
    } else {
        var re = /\S+@\S+\.\S+/;

        if (re.test(email)) {
            document.getElementById("error").innerHTML="";

        } else {
            document.getElementById("error").innerHTML="please enter valid emailid";

        }

    }

    if (mobilnum === "") {
        document.getElementById("numerror").innerHTML="please enter your number";
    } else {
        let num =/^([+]\d{2}[ ])?\d{10}$/;

        if (mobilnum.test(num)) {
            document.getElementById("numerror").innerHTML="";

        } else {
            document.getElementById("numerror").innerHTML="please enter valid number";

        }
    }

    if (password === "") {
        document.getElementById("passerror").innerHTML="enter your password";

    } else {
        var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

        if (regularExpression.test(password)) {
            document.getElementById("passerror").innerHTML="";
        } else {
            document.getElementById("passerror").innerHTML="enter your valid email id";
        }
    }
    
    



}