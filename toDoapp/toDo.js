const input = document.getElementById('input');
const AddItem = document.getElementById('Add-item');

let number = 0;
const tBody =document.getElementById('tbody');
AddItem.addEventListener('click',function(e){
    let storeInputValue = input.value;
     if(storeInputValue === '' ||isNaN(storeInputValue)===false){
        alert("Please Input Some String")
    }
    else {
    number++;


    //   =====create Html Element
      const tableRow = document.createElement('tr');
       tableRow.innerHTML =` <th>${number}</th>
             <th class="name">${storeInputValue}</th>
             <th> <button class="btn btn-primary py-2 px-2 me-3 add">Save</button><button class="btn btn-danger py-2 px-2 me-3 remove" >Remove</button><button class="btn btn-success py-2 px-2  edit">Edit</button></th>`
            tBody.appendChild(tableRow);
        // clear value=======
        input.value='';
        // remove value=====
        const remove = document.getElementsByClassName('remove');
           for(const removes of remove){
               removes.addEventListener("click",function(e){
                 e.target.parentNode.parentNode.style.display="none"
               })
           } 
    //    edit value=====
       const edit = document.getElementsByClassName('edit');
       const name = document.getElementsByClassName('name')
        for (const edits of edit){
            edits.addEventListener('click',function(e){
                e.target.parentNode.parentNode.style.display="none";
               
              
               for(const names of name){
                  
                input.value =names.innerText;
               
               }
              
            })
        }
      
       

    }   
})
 