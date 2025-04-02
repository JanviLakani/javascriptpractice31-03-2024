function handlesubmit() {
    event.preventDefault();

    let selectcountry =document.getElementById("selector").value;

    if (selectcountry =='country') {
        alert ("please enter select country ");
        return false;
    } else {
        return true;
    }



}