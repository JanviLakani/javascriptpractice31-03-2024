function handletreatment() {
    event.preventDefault();

    let teeth = document.getElementById("tre").value;

    let treatment1,seating,costing;

    if (teeth === 'tc') {
        treatment1 = 'teeth cleaning';
        seating = 1;
        costing = 500;
    } else if (teeth === 'fl') {
        treatment1 = 'fillings';
        seating = 2;
        costing = 1500;
    } else if (teeth === 'rct') {
        treatment1 = 'root canal treatment';
        seating = 4;
        costing = 2500;
    } else if (teeth === 'rc' ) {
        treatment1 = 'RCT + cover';
        seating = 6;
        costing = 12000;
    } else if (teeth === 'biii') {
        treatment1 = 'braces/invisalign';
        seating = 12;
        costing = 35000;

    }

    console.log(treatment1,seating,costing);


    let print= `
    
       <table border>
        <tr>
            <th>treatment</th>
            <th>seating</th>
            <th>costing</th>
        </tr>
    
    `;

    print += `<tr>`
    print += `<td>${treatment1}</td>`
    print += `<td>${seating}</td>`
    print += `<td>${costing}</td>`
    print += `</tr>`

    

    console.log(print);

    document.getElementById("money").innerHTML=print;


    // ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^ 


    let amount =`
<table border>
<tr>
    <td>Appintmentdate (per week)</td>
    <td>Payable Amount</td>
</tr>
</table>

`;


console.log(amount);


   
 
    

}