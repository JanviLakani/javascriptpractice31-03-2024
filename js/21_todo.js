let todoarray = [];

update=null;

// ******************************************************* editbtn function 

const editbtn = (editindex) => {

    // console.log(editindex, todoarray[todoarray]);
    
    document.getElementById("todo").value=todoarray[editindex];

    console.log("hello");
    
    update=editindex;
}

// ******************************************************** deletebtn function

const deletebtn = (deleteindex) => {
    todoarray.splice(deleteindex , 1);

    display();
    
}


// ******************************************************* display function 
const display = () =>{

    let print = ``;

    todoarray.map((v,i)=> {
        print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
                        <button onclick="editbtn(${i})">edit</button>
        </li>`
    })

    document.getElementById("disk").innerHTML=print;

}

// ******************************************************* main function 
const todosubmit = ()=>{
    event.preventDefault();
    let todovalue=document.getElementById("todo").value;

    // console.log(todovalue);
    
    document.getElementById("todoerror").innerHTML="";


    if (todovalue === "") {
        document.getElementById("todoerror").innerHTML="please enter todo";
    } else {
        document.getElementById("todoerror").innerHTML="";

        // todoarray.push(todovalue);

        console.log(todoarray);

        if (update === null) {
            todoarray.push(todovalue);
        } else {
            todoarray[update]=todovalue;
            update=null;
        }
        
    }

    display();

    document.getElementById("todo").value="";
}