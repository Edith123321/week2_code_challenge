document.querySelector("#addBtn").onclick = function() {
     if(document.querySelector("#new-item input").value.length == 0){
        alert("Please enter an item.")
     }
     else {
        document.querySelector('#items').innerHTML += 
        `
        <div class = "item"> 
            <span id= "item-name"> </span>
            ${document.querySelector("#new-item input").value}
        </div>
        `
     }
}