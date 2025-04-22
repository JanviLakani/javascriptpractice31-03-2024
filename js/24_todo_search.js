let todoarray = [];

update=null;

// ********************************************************** select  
    const handlechangr = () => {
        let selvalue=document.getElementById("selectlor").value;
        
        console.log(selvalue);
        

    }


// ******************************************************* editbtn 

const editbtn = (editindex) => {

    // console.log(editindex, todoarray[todoarray]);
    
    document.getElementById("todo").value=todoarray[editindex];

    console.log("hello");
    
    update=editindex;
}

// ******************************************************** deletebtn 

const deletebtn = (deleteindex) => {
    todoarray.splice(deleteindex , 1);

    showdata();
    
}


// ******************************************************* display 
const showdata = () =>{

    let print = ``;

    todoarray.map((v,i)=> {
        print += `<li>${v}<button onclick="deletebtn(${i})">x</button>
                        <button onclick="editbtn(${i})">edit</button>
        </li>`
    })

    document.getElementById("disk").innerHTML=print;

}

// ******************************************************* mainfun 
const todosubmit = ()=>{
    event.preventDefault();
    let todovalue=document.getElementById("todo").value;

    // console.log(todovalue);
    
    document.getElementById("todoarror").innerHTML="";


    if (todovalue === "") {
        document.getElementById("todoarror").innerHTML="please enter todo";
    } else {
        document.getElementById("todoarror").innerHTML="";

        // todoarray.push(todovalue);

        console.log(todoarray);

        if (update === null) {
            todoarray.push(todovalue);
        } else {
            todoarray[update]=todovalue;
            update=null;
        }
        
    }

    showdata();

    document.getElementById("todo").value="";
}



