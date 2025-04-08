let totalprice=0;
function subitems(){
        
        let itemname=document.getElementById("itemname").value;
        let itempizza=parseInt(document.getElementById("itempizza").value)
        let pizzaqun=parseInt(document.getElementById("pizzaqun").value);
        let  itembur=parseInt(document.getElementById("itembur").value);
        let burqun=parseInt(document.getElementById("burqun").value);
        let itemdrink=parseInt(document.getElementById("itemdrink").value);
        let drinkqun=parseInt(document.getElementById("drinkqun").value);
   
        let formerr=false;

    if(itemname == 0){
        document.getElementById("itemnameerror").innerHTML="! place select item name";
        formerr=true;
    }else{
        document.getElementById("itemnameerror").innerHTML="";
    }


    if(itempizza == 0){
        document.getElementById("itemtypeerror").innerHTML="! place select item pizza";
        formerr=true;
    }else{
        document.getElementById("itemtypeerror").innerHTML=""
    }

    if(pizzaqun == 0){
        document.getElementById("pizzaqunerror").innerHTML="! place select pizza quntity";
        formerr=true;
    }else{
        document.getElementById("pizzaqunerror").innerHTML=""
    }


    if(itembur == 0){
        document.getElementById("itemburerror").innerHTML="! place select item burger";
        formerr=true;
    }else{
        document.getElementById("itemburerror").innerHTML=""
    }

    if(burqun == 0){
        document.getElementById("burqunerror").innerHTML="! place select burger quntity";
        formerr=true;
    }else{
        document.getElementById("burqunerror").innerHTML=""
    }

    if(itemdrink == 0){
        document.getElementById("itemdrinkerror").innerHTML="! place select cold-drinks";
        formerr=true;
    }else{
        document.getElementById("itemdrinkerror").innerHTML=""
    }

    if(drinkqun == 0){
        document.getElementById("drinkqunerror").innerHTML="! place select drink quntity";
        formerr=true;
    }else{
        document.getElementById("drinkqunerror").innerHTML=""
    }
    
    console.log(formerr);
    

    if(formerr){
        return false;
    }else{
        totalprice= itempizza*pizzaqun + itembur*burqun + itemdrink*drinkqun;
        
    let foodname="";
                
    let print = `
    <table border="1">
        <tr>
            <th>food</th>
            <th>ITEM name</th>
            <th>quntity</th>
            <th>TOTAL price</th>
        </tr>
`
    

    if(itempizza !=0 && pizzaqun !=0){
        if(itempizza == 300){
            foodname = "MARGHRITA";
        }else if(itempizza == 350){
            foodname = "CORN PIZZA";
        }else if(itempizza == 370){
            foodname = "CHEESE PIZZA";
        }

        // console.log(itempizza*pizzaqun, itempizza, pizzaqun, "csdsdc");
        

        print += `
        <tr>
            <td>${itemname}</td>
            <td>${foodname}</td>
            <td>${pizzaqun}</td>
            <td>${itempizza*pizzaqun}</td>   
        </tr>
        `
        document.getElementById("foodtbl").innerHTML=print;
    }
/*********burger********** */
    if(itembur !=0 && burqun !=0){
        if(itembur == 100){
            foodname = "VEG-BURGER";
        }else if(itembur == 120){
            foodname = "ALLO-TIKI";
        }

        

        print += `
        <tr>
            <td>burger</td>
            <td>${foodname}</td>
            <td>${burqun}</td>
            <td>${itembur*burqun}</td>   
        </tr>
        `
        document.getElementById("foodtbl").innerHTML=print;
    }
/*********cold-drinks***********/
if(itemdrink !=0 && drinkqun !=0){
    if(itemdrink == 30){
        foodname = "MAZZA";
    }else if(itemdrink == 20){
        foodname = "THAMSUP";
    }else if(itemdrink == 30){
        foodname = "SPRITE";
    }    

    print += `
    <tr>
        <td>cold-drinks</td>
        <td>${foodname}</td>
        <td>${drinkqun}</td>
        <td>${itemdrink*drinkqun}</td>   
    </tr>
    `
    document.getElementById("foodtbl").innerHTML=print;
}
        return false;

 }
}



/************************ */
/*********************** */

function dissdata(){
    event.preventDefault();
    let coupen=document.getElementById("code").value;

    if(coupen == ""){
        document.getElementById("codeerror").innerHTML="! enter coupen code";
    }else{
        document.getElementById("codeerror").innerHTML=" ";
    }

    let coupenerr=false;

    console.log(coupenerr);
    

    if(coupenerr){
        return false;
    }else{
        let coupen1="abc111";
        let coupen2="pqr222";
        let coupen3="xyz333";
        let diss=0;
        totalamount=0;

        if(coupen == coupen1 ){
            diss= totalprice*0.10;
        document.getElementById("disscount").innerHTML="discount 10%";
        totalamount=totalprice-diss;
        document.getElementById("your total price ").innerHTML=totalamount;

    }else if(coupen == coupen2 ){
        document.getElementById("disscount").innerHTML="discount 20%";
        diss= totalprice*0.20;
        totalamount=totalprice-diss;
        document.getElementById("your total price ").innerHTML=totalamount;
        
    }else if(coupen == coupen3 ){
        document.getElementById("disscount").innerHTML="discount 25%";
        diss = totalprice*0.25;
        totalamount=totalprice-diss;
        document.getElementById("your total price ").innerHTML=totalamount;
    }else{
        document.getElementById("disscount").innerHTML="Invalid Coupen Code";
        document.getElementById("disscount").innerHTML="discount 0%";
        document.getElementById("your total price ").innerHTML=totalprice;

    }
        return true;
    }
}

    // let coupen1="abc111";
    // let coupen2="pqr222";
    // let coupen3="xyz333";
    // let diss=0;
    // totalamount=0;

    // if(coupen == coupen1 ){
    //     diss= totalprice*0.10;
    //     document.getElementById("disscount").innerHTML="discount 10%";
    //     totalamount=totalprice-diss;
    //     document.getElementById("your total price ").innerHTML=totalamount;

    // }else if(coupen == coupen2 ){
    //     document.getElementById("disscount").innerHTML="discount 20%";
    //     diss= totalprice*0.20;
    //     totalamount=totalprice-diss;
    //     document.getElementById("your total price ").innerHTML=totalamount;
        
    // }else if(coupen == coupen3 ){
    //     document.getElementById("disscount").innerHTML="discount 25%";
    //     diss = totalprice*0.25;
    //     totalamount=totalprice-diss;
    //     document.getElementById("your total price ").innerHTML=totalamount;
    // }else{
    //     document.getElementById("disscount").innerHTML="Invalid Coupen Code";
    //     document.getElementById("disscount").innerHTML="discount 0%";
    //     document.getElementById("your total price ").innerHTML=totalprice;

    // }