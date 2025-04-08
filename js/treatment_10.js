let treatment1, seating, costing;

function handletreatment() {
  event.preventDefault();

  let teeth = document.getElementById("tre").value;

  if (teeth === "tc") {
    treatment1 = "teeth cleaning";
    seating = 1;
    costing = 500;
  } else if (teeth === "fl") {
    treatment1 = "fillings";
    seating = 2;
    costing = 1500;
  } else if (teeth === "rct") {
    treatment1 = "root canal treatment";
    seating = 4;
    costing = 2500;
  } else if (teeth === "rc") {
    treatment1 = "RCT + cover";
    seating = 6;
    costing = 12000;
  } else if (teeth === "biii") {
    treatment1 = "braces/invisalign";
    seating = 12;
    costing = 35000;
  }

  // console.log(treatment1, seating, costing);



  if (teeth === "ts") {
    // document.getElementById("money").innerHTML = "";
    document.getElementById("money").style.display = "none";
    document.getElementById("forddate").style.display = "none";
  } else {
    let print = `
    
        <table border>
         <tr>
             <th>treatment</th>
             <th>seating</th>
             <th>costing</th>
         </tr>  
     
     `;

    print += `<tr>`;
    print += `<td>${treatment1}</td>`;
    print += `<td>${seating}</td>`;
    print += `<td>${costing}</td>`;
    print += `</tr>`;

    document.getElementById("money").innerHTML = print;
    document.getElementById("money").style.display = "block";
    document.getElementById("forddate").style.display = "block";
  }



}

// *********************************************************************** 

function handledate() {
  event.preventDefault();

  let appointmentfix = document.getElementById("apd").value;

  if(appointmentfix) {

    // console.log(appointmentfix);

    let anydate = new Date(appointmentfix);
  
    // console.log(anydate);
  
    // console.log(treatment1, seating, costing);
  
    // console.log(costing / seating);
    let print1 = `
      <table border="1">
        <tr>
          <th>treatment name</th>
          <th>Appointment date</th>
          <th>Payable Amount</th>
        </tr>
      `;
    for (let i = 1; i <= seating; i++) {

      // console.log();

      const price = costing / seating;
     if (i > 1) {
  
      anydate.setDate(anydate.getDate() + 7);
  
     }
      print1 += `<tr>`;
      print1 += `<th>${treatment1}</th>`;
      print1 += `<th>${anydate.toDateString()}</th>`;
      print1 += `<th>${price.toFixed(2)}</th>`;
      print1 += `</tr>`;
    }

    document.getElementById("money1").innerHTML = print1;
     document.getElementById("errorform").innerHTML="";

    // console.log("if yes");
    
  } else {
    document.getElementById("errorform").innerHTML="please select date for appointment"
    
  }



  document.getElementById("money1").innerHTML = print1;
}

//  ********************************************************************* 
