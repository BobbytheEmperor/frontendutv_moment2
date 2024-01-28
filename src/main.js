"use strict"

//Funktionen getdata är funktionen innehållandes de andra funktionerna. 

async function getdata() {

    //Skapar de första funktionerna för inhämtning av data.
    //Ajax-anrop samt sortering har ännu ej gjorts. 

    const data = await fetch("https://dahlgren.miun.se/ramschema_ht23.php").then(resp => {
        return resp.json()
    })

    const tbody = document.getElementById("tableBody");
    for (const info of data) {
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

}
getdata();

