let handleonkeyup = () => {
  let valuesearch = document.getElementById("search").value;

  console.log(valuesearch);

  if (valuesearch && !"apple".includes(valuesearch)) {
    document.getElementById("p1").style.display = "none";
  } else {
    document.getElementById("p1").style.display = "block";
  }

  if (valuesearch && "banana".includes(valuesearch)) {
    document.getElementById("p2").style.display = "none";
  } else {
    document.getElementById("p2").style.display = "block";
  }

};
