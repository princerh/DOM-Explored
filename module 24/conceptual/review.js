let count = 0;
// by clicking submit button 
document.getElementById('button').addEventListener('click', function(){

    
    const inputValue = document.getElementById("textarea");

if(inputValue.value === ""){
    return alert("type something");
}

    const container = document.getElementById("review");
    
    const p = document.createElement("p")
    count++;
    p.innerText = count + ". " + inputValue.value;
    
    container.appendChild(p);
    // document.querySelector("textarea").value = "";
    inputValue.value = ""
    
})


// by Enter key pressing 
document.getElementById("textarea").addEventListener("keyup", function(event){
    if(event.key === "Enter"){ //function er value onujayi akta event create hobe, oi event er key hobe Enter
        const inputValue = document.getElementById("textarea").value;

if(inputValue === ""){
    return alert("type something");
}

    const container = document.getElementById("review");
    
    const p = document.createElement("p")
    count++;
    p.innerText = count + ". " + inputValue;
    
    container.appendChild(p);
    document.querySelector("textarea").value = ""; 
    }
})