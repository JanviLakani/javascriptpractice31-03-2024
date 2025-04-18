let newtodo = ["sdfsf", "sdfsdf","Asdasdasd"];

let update = null; /// starting me update null hoga
// *************************** main wor ***************************

const handletodosub = () => {
  event.preventDefault();

  let todoveri = document.getElementById("todo").value; // 1

  console.log(todoveri);

  if (todoveri === "") {
    // 2
    document.getElementById("nameerror").innerHTML = "please enter value";
  } else {
    document.getElementById("nameerror").innerHTML = ""; // 3
  }

  //   newtodo.push(todoveri);   add to if condition to check  //4

  //   console.log(newtodo);   //5

  if (update === null) {
    // 16
    newtodo.push(todoveri);
  } else {
    newtodo[update] = todoveri;
    update = null;
  }

  display(); //12

  document.getElementById("todo").value = ""; // 17 last kyu ke name me koi nai dikhe nahi mean  ki black ho jaye
};

// **********************display *******************************

const display = () => {
  let print = ``; // 6

  newtodo.map((v, i) => {
    print += `<li>${v}<button onclick="onclickdelete(${i})">X</button>
      <button onclick="onclickedit(${i})">edit</button></li>`; // 7
  });

  document.getElementById("disk").innerHTML = print; // 8
};

// ************************** delete *******************************

const onclickdelete = (i) => {
  // 9

  console.log(i); // 10

  newtodo.splice(i, 1); // 11

  display(); //12
};

// ************************** edit *******************************

const onclickedit = (i) => {
  //button mathi function levu 13

  console.log(i, newtodo[i]); // 14

  document.getElementById("todo").value = newtodo[i]; // 15

  update = i; // bad me update i eqal hojayenga
};
