function handlesubmit() {

    event.preventDefault();

let sport =document.getElementsByName("hobby")
console.log(sport);

let sportactivity = [];

for (let i=0; i< sport.length; i++) {
    console.log(sport[i].checked);

    if (sport[i].checked) {
        sportactivity.push(sport[i].value)
        console.log(sportactivity);
        
    }
    
}

if (sportactivity.length < 2) {
    document.getElementById('checkerror').innerHTML="please select minimum 2 hobby";
} else {
    document.getElementById('checkerror').innerHTML="";
}









}