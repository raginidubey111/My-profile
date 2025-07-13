var btn = document.querySelector("#btn");
 var task = document.querySelector('#task');
    var input = document.querySelector('#input');

 

function addtask(){
     
    if((input.value) !== '') {
    var p1 = document.createElement("div");
    var p2 = document.createElement("div");
    var btn2 = document.createElement("button");
    p2.textContent = (input.value);
     p2.classList.add("task-num");	

      p1.classList.add("para");       
       btn2.textContent = "Delete";
       btn2.classList.add("btn2");
     
 task.appendChild(p1);
       p1.appendChild(p2);   
p1.appendChild(btn2);
      
      console.log(task);
    }
    else{
        alert('please enter the task');
    }


function  addElementDelete() {

    p1.remove();
     
  }   
      btn2.addEventListener("click",addElementDelete);
p2.addEventListener("click",function(){
    p2.style.textDecoration = "line-through";
     p2.style.color = "gray";

})
}

btn.addEventListener("click",addtask);
