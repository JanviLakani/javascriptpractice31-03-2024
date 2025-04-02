function handlegender() {
  event.preventDefault();
  let name = document.getElementsByName("gender");
  console.log(name);

  let genderflag = false;

  let i;

  for (i = 0; i < name.length; i++) {
    console.log(name[i].checked);

    if (name[i].checked) {
      genderflag = true;
      break;
    }

    // document.getElementById('errorgender').innerHTML;
  }
  
  if (genderflag === false) {
    document.getElementById("errorgender").innerHTML = "please select gender";
  } else {
    document.getElementById("errorgender").innerHTML = "";
  }
}
