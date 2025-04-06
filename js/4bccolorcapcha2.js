function handleonchange() {
    document.getElementById("bodyid").style.backgroundColor="pink"

    const add=document.getElementById("demo").value;

    console.log(add);


    if (add === 'ca') {
         document.getElementById("bodyid").style.backgroundColor="yellow"
    }  else if (add === "usa")   {
         document.getElementById("bodyid").style.backgroundColor="black"
    } else if (add === "uk") {
         document.getElementById("bodyid").style.backgroundColor="green"
    } else {
         document.getElementById("bodyid").style.backgroundColor="white"
    }
}