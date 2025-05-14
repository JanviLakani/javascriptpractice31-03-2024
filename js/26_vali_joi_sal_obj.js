let arrayvali = [];

let update=null;

const editbtn = (id) =>{
    let index=arrayvali.findIndex((v) => v.id === id )

    console.log(index);

    console.log(index ,arrayvali[index] );
    
    document.getElementById("name").value=arrayvali[index].varvalue
    document.getElementById("number").value=arrayvali[index].salvalue

    update=id;
    
}

const deletebtn = (id) => {
    let index = arrayvali.findIndex((v) => v.id === id )

    console.log(index);
    

   arrayvali.splice(index ,1);

   display();
    
}

const display = () => {
  let print = ``;

  print += `
    <table>
       <tr>
           <th>name</th>
           <th>salary</th>
           <th>action</th>
       </tr>
   
   `;

  arrayvali.map((v) => {
    print +=`
        <tr>
        <td>${v.varvalue}</td>
        <td>${v.salvalue}</td>
        <td><button onclick="editbtn(${v.id})">edit</button><button onclick="deletebtn(${v.id})">x</button></td>
        
        
        </tr>
        `;
  });

  print += `</table>`;

  document.getElementById("disk").innerHTML = print;
};

const handlesubmit = () => {
  event.preventDefault();

  let varvalue = document.getElementById("name").value;
  let salvalue = document.getElementById("number").value;
  //  let joinvalue=document.getElementById("joinerror").value

  console.log(varvalue);

  if (varvalue === "") {
    document.getElementById("namearror").innerHTML = "please enter your name";
  } else {
    let namevali = /^[a-zA-Z ]{2,30}$/;
    if (namevali.test(varvalue)) {
      document.getElementById("namearror").innerHTML = "";
    } else {
      document.getElementById("namearror").innerHTML =
        "please enter valid name";
    }
  }

  if (salvalue === "") {
    document.getElementById("salarror").innerHTML = "enter your salary";
  } else {
    document.getElementById("salarror").innerHTML = "";
  }

  // if (joinvalue === "") {

  //     document.getElementById("joinerror").innerHTML="select your joining date"
  // } else {
  //     document.getElementById("joinerror").innerHTML="";
  // }

  const obj = {
    id : Math.floor(Math.random()*100),
    varvalue,
    salvalue,

  };

//   arrayvali.push(obj);

  if (update === null) {
    arrayvali.push(obj);
  } else {
    arrayvali[update]=obj
    update=null
  }

  console.log(arrayvali);

  display();


};

const emprf = document.getElementById("empform");
emprf.addEventListener("submit", handlesubmit);


























// let text;

// const today=new Date();
// const someday= new Date();

// someday.setFullYear(2022,1,14);

// if (someday > today) {
//     text="today is after january 5,2100"
// } else {
//     text="today is befour january 14,2022"
// }

// let text;

// const today=new Date();
// const someday=new Date();

// someday.setFullYear(2025,4,22)

// if (someday > today) {
//     text="please select your joining date "
// }else {
//     text="yes , thank you";
// }

// console.log(text);
