function submitpc(){
    event.preventDefault();
    let pro=document.getElementsByName("processer");
    let rams=document.getElementsByName("ram");
    let memo=document.getElementsByName("memory");
    let gra=document.getElementsByName("graphicscard");


    
    let proovalue=0;
    let ramsvalue=0;
    let memovalue=0;
    let graphicvalue="";

for(i=0;i<pro.length;i++){
    if(pro[i].checked){
        proovalue=parseInt(pro[i].value);
        console.log(proovalue);
        
    }
}

for(i=0;i<rams.length;i++){
    if(rams[i].checked){
        ramsvalue=parseInt(rams[i].value);
        console.log(ramsvalue);
        
    }
}

for(i=0;i<memo.length;i++){
    if(memo[i].checked){
        memovalue=parseInt(memo[i].value);
        console.log(memovalue);
        
    }
}

for(i=0;i<gra.length;i++){
    if(gra[i].checked){
        graphicvalue=parseInt(gra[i].value);
        console.log(graphicvalue );
        
    }
}
let formerr=false;


if(proovalue == ""){
    document.getElementById("processerErr").innerHTML=" ! select ram";
    formerr=true;
}else{
    document.getElementById("processerErr").innerHTML=" ";
}

if(ramsvalue == ""){
    document.getElementById("ramErr").innerHTML="! select ram";
    formerr=true;
}else{
    document.getElementById("ramErr").innerHTML=" ";
}

if(memovalue == ""){
    document.getElementById("memoryErr").innerHTML="! select ram";
    formerr=true;
}else{
    document.getElementById("memoryErr").innerHTML=" ";
}

if(graphicvalue == ""){
    document.getElementById("graphicscardErr").innerHTML="! select ram";
    formerr=true;
}else{
    document.getElementById("graphicscardErr").innerHTML=" ";
}


console.log(formerr);


if(formerr){
    return false;
}else{
    let pctype="";

if(proovalue <= 3000){
    pctype="student pc";

}else if(proovalue >= 3200 && proovalue<3500){
    if(ramsvalue >=1200 ){
        pctype="profesonal pc";
    }else{
        pctype="student pc";
    }

}else if(proovalue >= 3500){
    if(ramsvalue >=1500 && memovalue >= 2500 && graphicvalue >=4500){
        pctype="gamimg pc";
    }else{
        pctype="profesonal pc";

    }
}

let total=proovalue+ramsvalue+memovalue+graphicvalue;

document.getElementById("price").innerHTML=total;
document.getElementById("type").innerHTML=pctype;  

return true;
}
}




// let pctype="";

// if(proovalue <= 3000){
//     pctype="student pc";

// }else if(proovalue >= 3200 && proovalue<3500){
//     if(ramsvalue >=1200 ){
//         pctype="profesonal pc";
//     }else{
//         pctype="student pc";
//     }

// }else if(proovalue >= 3500){
//     if(ramsvalue >=1500 && memovalue >= 2500 && graphicvalue >=4500){
//         pctype="gamimg pc";
//     }else{
//         pctype="profesonal pc";

//     }
// }
// console.log(pctype);

// let total=proovalue+ramsvalue+memovalue+graphicvalue;
// console.log(total);

// document.getElementById("price").innerHTML=total;
// document.getElementById("type").innerHTML=pctype;