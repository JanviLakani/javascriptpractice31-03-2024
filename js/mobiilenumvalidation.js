function handlesubmit() {

    event.preventDefault();
    let number=document.getElementById("number").value;
    // console.log('jkjkdjk');

    // document.getElementById("numbererror").innerHTML;

    // console.log("jkjkkj");
    
    if (number === "") {
    
        document.getElementById("numbererror").innerHTML="please enter your number";
        // console.log('uio');  
    } else {
        // var mobilnum=/^\d{10}$/;
        var mobilnum=/^(\+\d{1,3}[- ]?)?\d{10}$/;
    
       
        if(mobilnum.test(number)) {
             document.getElementById("numbererror").innerHTML=""; 
        } else {
            document.getElementById("numbererror").innerHTML="please enter your valid number";
        }
    } 






}