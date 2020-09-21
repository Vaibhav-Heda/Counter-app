const btns = document.querySelectorAll('.btns');
const count = document.querySelector('#counter');

btns.forEach(button => {
    button.addEventListener("click",()=>{
    var val = parseInt(count.innerHTML);
    if(button.classList.contains("increment"))
    {
       val++;
    }
    if(button.classList.contains("reset"))
    {
        val = 0;    
    }
    if(button.classList.contains("decrement"))
    {
        val--;
    }

    if (val > 0) {
        count.style.color = "green";
      }
      if (val < 0) {
        count.style.color = "red";
      }
      if (val === 0) {
        count.style.color = "#222";
      }

      count.innerHTML = val;
    }); 
});
