"use strict"

//Funktionen getdata är funktionen innehållandes de andra funktionerna. 

async function getdata(sortProperty) {


    const data = await fetch("https://dahlgren.miun.se/ramschema_ht23.php").then(resp => {
        return resp.json()
    })

    //Sortering av kursnamn i alfabetisk ordning genom funktionerna sort och .localeCompare.
    //Funktion för sortering skapad. 

    data.sort((a, b) => {
        switch (sortProperty) {
            case "code":
                return a.code.localeCompare(b.code);
            case "coursename":
                return a.coursename.localeCompare(b.coursename);
            case "progression":
                return a.progression.localeCompare(b.progression);
            default:
                return 0;
        }
    })


    const tbody = document.getElementById("tableBody");
    tbody.innerHTML = "";
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

document.getElementById("code").addEventListener("click", () => getdata("code"));
document.getElementById("course").addEventListener("click", () => getdata("coursename"));
document.getElementById("prog").addEventListener("click", () => getdata("progression"));