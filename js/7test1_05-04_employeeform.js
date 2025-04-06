function handleonsubmit() {
    event.preventDefault();

  let fname=document.getElementById("name1").value;
  let fage=document.getElementById("age").value;
  let joining=document.getElementById("jdate").value;


//   console.log("fname");

//   document.getElementById("nameerror").innerHTML = "";
//   document.getElementById("agearror").innerHTML="";
// document.getElementById("dateerror").innerHTML=""

//   console.log("ghghg");


  if (fname === "") {
    document.getElementById("nameerror").innerHTML ="enter your name";
    
  } else {
    let fullname=/^[a-zA-Z ]{2,30}$/;
  
    if (fullname.test(fname)) {
      document.getElementById("nameerror").innerHTML ="";
    } else {
      document.getElementById("nameerror").innerHTML ="enter your valid name";
    }

  }

  if (fage === "") {
    document.getElementById("agearror").innerHTML="enter your age";
  } else {
    let fixage =/^(0?[1-9]|[1-9][0-9]|[1][1-9][1-9]|100)$/;

    if (fixage.test(fage)) {
        document.getElementById("agearror").innerHTML="";

    } else {
        document.getElementById("agearror").innerHTML="enter your valid age";

    }
  }

  if (joining === "") {
    document.getElementById("dateerror").innerHTML="enter your joining date"
  } else {
    let joiningdate=/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/;

    if (joiningdate.test(joining)) {
         document.getElementById("dateerror").innerHTML="";

    }
  }





}

function handlechange(){

    event.preventDefault();

    let addselector=document.getElementById("faj").value;

    console.log(addselector);
    

    let name3, age3, joining3;

    print =`

     <table>
        <th>name</th>
        <th>age</th>
        <th>joining date</th>
    
    `;

    print += `<tr>`
    print += `<td>${name3}</td>`
    print += `<td>${age3}</td>`
    print += `<td>${joining3}}</td>`   
    print += `</tr>`
    

}


