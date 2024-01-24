"use strict"

fetch("https://dahlgren.miun.se/ramschema_ht23.php").then(resp =>{
    return resp.json()
}).then(data => {
    const tbody = document.getElementById("tableBody");
    for(const info of data){
        const tr = document.createElement("tr");
        const tdCode = document.createElement("td");
        tr.appendChild(tdCode);
        tdCode.innerText = info.code;
        const tdName = document.createElement("td");
        tr.appendChild(tdName);
        tdName.innerText = info.coursename;
        const tdProg = document.createElement("td");
        tr.appendChild(tdProg);
        tdProg.innerText = info.progression;
        tbody.appendChild(tr);
    }
})