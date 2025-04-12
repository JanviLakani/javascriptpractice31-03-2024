
let update=false;

const displydata = () => {
    let localData = localStorage.getItem("todo");
    localData = JSON.parse(localData)

    let print = `<ul>`
    localData.map((v,i) => {
        print +=
         `<li>${v}<button onclick="deletedata(${i})">x</button>
         <button onclick="editdata('${v}', ${i})">edit</button>
        </li>`

    })
    print+= `</ul>`

    document.getElementById("list").innerHTML=print;

}
window.onload=displydata();

function formsubmit(){
    event.preventDefault();
    let todovalue = document.getElementById("value").value;
    // console.log(todovalue);    

    let todoerror=false;

    const localData = JSON.parse(localStorage.getItem("todo"));

    if(todovalue === ""){
        document.getElementById("errorid").innerHTML="! place select item name";
        todoerror=true;
    }else{
        document.getElementById("errorid").innerHTML="";

        if(update === false){
            if (localData == null){
                localStorage.setItem("todo",JSON.stringify([todovalue]));
            }else{
                localData.push(todovalue);
                localStorage.setItem("todo",JSON.stringify(localData));

            }
        
        }else{
            localData[update]=todovalue;
        localStorage.setItem("todo",JSON.stringify(localData));

        update=false;
    }

    document.getElementById("value").value="";



    displydata();

    // document.getElementById("list").innerHTML +=`
    // <li>${todovalue}
    // <button onclick="deletedata(${arr.lenth-1})">x</button> 
    // </li>`
}
}

function deletedata(index){
    console.log(index);

        let localData=JSON.parse(localStorage.getItem("todo"))
        localData.splice(index, 1);
        localStorage.setItem("todo",JSON.stringify(localData));


        displydata();
        // document.getElementById("list").innerHTML = "";
        // arr.map((v) => {
        //     document.getElementById("list").innerHTML += `
        //     <li>${v}
        //     <button onclick="delete(${arr.length-1})">x</button>
        //     </li>
        //     `
        // })
}

function editdata(v,i){
    console.log(v,i);
    document.getElementById("value").value=v;

        // arr[value] = document.getElementById("value").value;
       

        update = i;

        displydata();
    }