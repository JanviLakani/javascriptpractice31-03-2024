let tretment="",seting=0,costing=0,date=0;

function tretclick(){
    let dental=document.getElementById("tret").value;
    console.log("selection sucssesfully");

    if(dental == "0"){
        document.getElementById("block").style.display="none";
    }else{
        if(dental == "Teeth clinings" ){
            tretment = "Teeth clinings";
            seting= 1;
            costing =500;
            console.log(tretment,seting,costing);
        }else if(dental == "Fillings" ){
            tretment = "Fillings";
            seting= 2;
            costing =1500;
            console.log(tretment,seting,costing);
        }else if(dental == "Root canal" ){
            tretment = "Root canal";
            seting= 4;
            costing =2500;
            console.log(tretment,seting,costing);
        }else if(dental == "RCT+Cover" ){
            tretment ="RCT+Cover";
            seting= 6;
            costing =12000;
            console.log(tretment,seting,costing);
        }else if(dental =="Braces/invisalign" ){
            tretment ="Braces/invisalign";
            seting= 12;
            costing =35000;
            console.log(tretment,seting,costing);
        }
        
        
        document.getElementById("tretment").innerHTML=tretment;
        document.getElementById("seting").innerHTML=seting;
        document.getElementById("costing").innerHTML=costing;
        
        document.getElementById("block").style.display="inline-block";
        
        }
    }

/******************** */
/******************** */

function subdate(){
    event.preventDefault();
    let appdate=document.getElementById("enterdate").value;
    let d=new Date(appdate);
    let sedate=new Date();

    console.log(sedate);
    console.log(appdate);
    
    

    

    let formerr=false;
    console.log(formerr);
    

    if(appdate == ""){
        document.getElementById("dateroor").innerHTML="! select date";
        formerr=true;
    }else{
        if(d < sedate+1 ){
            document.getElementById("dateroor").innerHTML="! select valid date"
            formerr=true;
        }else{
            document.getElementById("dateroor").innerHTML=" ";

        }

    }

    //clousre


    if(formerr){
        return false;
    }else{
        let print = `
        <table border="1">
            <tr>
                <th>tretment</th>
                <th>date</th>
                <th>costing</th>
            </tr>
    `


    for(let i=0;i< seting;i++){
        print += `
        <tr>
            <td>${tretment}</td>
            <td>${d.toLocaleDateString()}</td>
            <td>${costing/seting}</td>   
        </tr>
        `

    d.setDate(d.getDate()+7);
    }
//    print+=</table>

   document.getElementById("printtable").innerHTML = print;
   return true;
}

}