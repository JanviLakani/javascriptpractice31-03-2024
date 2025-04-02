function handlesubmit(){

    event.preventDefault();
    console.log('hjhfj');
    
    let email=document.getElementById("email").value;

    console.log('hjhjdh');

    // document.getElementById("errorshow").innerHTML='janvi'

    if (email) {
        event.preventDefault();
        const emailpattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (emailpattern.test(email)) {
            document.getElementById("errorshow").innerHTML="";
        } else {
            document.getElementById("errorshow").innerHTML='please enter valid gmail'

        }
  
        // document.getElementById("errorshow").innerHTML="";

    } else {
        document.getElementById("errorshow").innerHTML='please enter you email'


    }



    
}

