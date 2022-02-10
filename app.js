let changesValue = 0;
const value = document.getElementById('Value');
const plus  = document.getElementById('plus');
const minus = document.getElementById('minus');
plus.addEventListener('click', function(){
     changesValue++;
     value.innerText = changesValue;
})
minus.addEventListener('click', function(){
    
    if(value.innerText<=0){
        return;
    }
    else{
        value.innerText = changesValue;
    }
    changesValue--;
})