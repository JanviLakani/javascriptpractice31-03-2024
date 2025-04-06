function handlesubmil() {
    event.preventDefault();

    let addvalue=document.getElementById("num").value;

    console.log("num");
    
    document.getElementById("error").innerHTML="";


    if (num === "") {
        document.getElementById("error").innerHTML="enter your number";

    } else {
        var mobilnum=/^(\+\d{1,3}[- ]?)?\d{10}$/;

        if (mobilnum.test(num)) {
        document.getElementById("error").innerHTML="";
            
        } else {
        document.getElementById("error").innerHTML="enter valid your number";

        }
    }

  
}