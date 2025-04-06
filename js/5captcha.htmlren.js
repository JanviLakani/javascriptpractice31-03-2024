function handleonsubmit() {


    const n1 =Math.floor(Math.random()*10);
    console.log(n1);

    const n2= Math.floor(Math.random()*10)
    console.log(n2);

    document.getElementById("num1").innerHTML=n1;
    document.getElementById("num2").innerHTML=n2;


    const usevalue=parseInt(document.getElementById("ans")=value)

    ans = n1 +n2;

    if (usevalue === ans) {
        alert("correc")
    } else {
        alert("wrong")
    }
    




}