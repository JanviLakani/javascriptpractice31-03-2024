function handlesubmit() {

    event.preventDefault();
    
    const food=parseInt(document.getElementById("food").value)
    console.log("food", typeof food ,food);
    
    const food_quantity=parseInt(document.getElementById("food_quantity").value)
    console.log("food_quantity" ,typeof food_quantity ,food_quantity);
    
    
    // const fries=document.getElementById("fries").value
    // console.log("fries", typeof fries ,fries);
    
    // const fries_quantity=parseInt(document.getElementById("fries_quantity").value)
    // console.log("fries_quantity", typeof fries_quantity ,fries_quantity);
    // console.log('document.getElementById("fries_quantity") :>> ', document.getElementById("fries_quantity"));
    
    
    // const colddrink=document.getElementById("colddrink").value
    // console.log("colddrink",colddrink);
    
    // const colddrink_quantity=parseInt(document.getElementById("colddrink_quantity").value)
    // console.log("colddrink_quantity",typeof colddrink_quantity ,colddrink_quantity);
    
    // const drink_type=parseInt(document.getElementById("drink_type").value)
    // console.log("drink_type",typeof drink_type ,drink_type);
    
    
    // console.log(food,food_quantity,fries,fries_quantity);
    
    // ******************************************************** 1 
    // console.log(' document.getElementById("fooderror").innerHTML=""; :>> ',  document.getElementById("fooderror").innerHTML="");
    // if (food == 0|| food > 0) {
    //     document.getElementById("fooderror").innerHTML="";
    
    
    // } else {
    //     document.getElementById("fooderror").innerHTML="please select food";
    // }
    
    
    
    // if (food_quantity == 0 || food_quantity > 0     ) {
    //     document.getElementById("food_quantity_error").innerHTML="";
    // } else {
    //     document.getElementById("food_quantity_error").innerHTML="please select food_quantity";
    
        
    // }
    
    console.log('(food == 0 && food_quantity == 0) || (food > 0 || food_quantity > 0)  :>> ', (food == 0 && food_quantity == 0) || (food > 0 && food_quantity > 0) );
    
    if ((food == 0 && food_quantity == 0) || (food > 0 && food_quantity > 0) ) {
        document.getElementById("fooderror").innerHTML="";
    } else {
        document.getElementById("fooderror").innerHTML="please select food";
    }
    // ****************************************************** 2 
    
    
    
    
    
    
    
    
    
    // console.log('fries_quantity :>> ', fries_quantity);
    // console.log('fries :>> ', fries);
    
    // if ((fries == 0 || fries === "no" && fries_quantity === 0 ) || (fries === "yes" && fries_quantity > 0  )) {
    //     document.getElementById("frieserror").innerHTML="";
    // } else {
    //     document.getElementById("frieserror").innerHTML="select fries";
    // }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    // ************************************************************* 3 
    // console.log('(1 colddrink == 0 && colddrink_quantity === 0 && drink_type === 0) :>> ', (colddrink == 0 && colddrink_quantity === 0 && drink_type === 0));
    // console.log('(2 colddrink == "yes" && colddrink_quantity > 0 && drink_type > 0) :>> ', (colddrink == "yes" && colddrink_quantity > 0 && drink_type > 0));
    // console.log('(3 colddrink == "no" && colddrink_quantity === 0 && drink_type === 0 ) :>> ', (colddrink == "no" && colddrink_quantity === 0 && drink_type === 0 ));
    
    // if ((colddrink == 0 && colddrink_quantity === 0 && drink_type === 0) || 
    // (colddrink == "yes" && colddrink_quantity > 0 && drink_type > 0) || 
    // (colddrink == "no" && colddrink_quantity === 0 && drink_type === 0 )) {
    //     document.getElementById("drinkerror").innerHTML="";
    
    //     // console.log("hghgh");
        
    // } else {
    //     document.getElementById("drinkerror").innerHTML="please select drink";
    
    // }
    
    
    
    
    
    
    
    
    
    }