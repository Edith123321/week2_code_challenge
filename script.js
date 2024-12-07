document.querySelector("#addBtn").onclick = function() {
     if(document.querySelector("#new-item input").value.length == 0){
        alert("Please enter an item.")
     }
}