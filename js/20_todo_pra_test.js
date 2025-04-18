const arraytodo = [];

update =null;

// console.log("abcd");

// *************************************************************** edit 

const editbtn = (editindex)=> {
    
    // console.log(editindex, arraytodo[editindex]);
    
    document.getElementById("todo").value=arraytodo[editindex];

    update=editindex;
}

// **************************************************************** delete 

const deletebtn = (dindex) => {

    arraytodo.splice(dindex,1);

    // console.log("jjgh check");  

     display();

}


// **************************************************************** display 

const display = () => {
  let print = ``;

  arraytodo.map((v, i) => {
    print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
                    <button onclick="editbtn(${i})">edit</button>
    </li>`;
  });

  document.getElementById("disk").innerHTML = print;

  console.log("abcdefg");
};

// ***************************************************************** main function 
const todosubmitfun = () => {
  event.preventDefault();

  let valueget = document.getElementById("todo").value;

//   console.log(valueget);

//   document.getElementById("todoerror").innerHTML = "";

  if (valueget === "") {
    document.getElementById("todoerror").innerHTML = "please enter your todo";
  } else {
    document.getElementById("todoerror").innerHTML = "";

    // valueget.push(arraytodo); /// ... misstake 1

    // arraytodo.push(valueget);

    // console.log(arraytodo);

    // arraytodo.splice(i,1);

  
  }

  if (update === null) {
    arraytodo.push(valueget);

} else {
    arraytodo[update]=valueget;
    update=null
}
  display();

  document.getElementById("todo").value='';
};





