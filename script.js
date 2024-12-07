document.querySelector("#addBtn").onclick = function() {
     if(document.querySelector("#new-item input").value.length == 0){
        alert("Please enter an item.")
     }
     else {
        document.querySelector('#items').innerHTML += 
        `
        <div class = "item"> 
            <span id= "item-name">
            ${document.querySelector("#new-item input").value} 
            </span>
            <button class = "delete">
             <i class="fa fa-trash"></i>
            </button>
        </div>
        `
     }
}